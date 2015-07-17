// Copyright 2015 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#ifndef COMPONENTS_GCM_DRIVER_CRYPTO_GCM_KEY_STORE_H_
#define COMPONENTS_GCM_DRIVER_CRYPTO_GCM_KEY_STORE_H_

#include <map>

#include "base/callback_forward.h"
#include "base/macros.h"
#include "base/memory/ref_counted.h"
#include "base/memory/scoped_ptr.h"
#include "components/gcm_driver/crypto/proto/gcm_encryption_data.pb.h"
#include "components/gcm_driver/gcm_delayed_task_controller.h"
#include "components/leveldb_proto/proto_database.h"

namespace base {
class SequencedTaskRunner;
}

namespace gcm {

// Key storage for use with encrypted messages received from Google Cloud
// Messaging. It provides the ability to create and store a key-pair for a given
// app id, as well as retrieving and deleting key-pairs.
//
// This class is backed by a proto database and might end up doing file I/O on
// a background task runner. For this reason, all public APIs take a callback
// rather than returning the result. Do not rely on the timing of the callbacks.
//
// Started operations will be completed even after the reference to the store
// has been freed (asynchronous operations increase reference count to |this|).
class GCMKeyStore : public base::RefCounted<GCMKeyStore> {
 public:
  using KeysCallback = base::Callback<void(const KeyPair& pair)>;
  using DeleteCallback = base::Callback<void(bool success)>;

  GCMKeyStore(const base::FilePath& key_store_path,
              scoped_refptr<base::SequencedTaskRunner> background_task_runner);

  // Retrieves the public/private key-pair associated with |app_id|, and
  // invokes |callback| when they are available, or when an error occurred.
  void GetKeys(const std::string& app_id, const KeysCallback& callback);

  // Creates a new public/private key-pair for |app_id|, and invokes
  // |callback| when they are available, or when an error occurred.
  void CreateKeys(const std::string& app_id, const KeysCallback& callback);

  // Deletes the keys associated with |app_id|, and invokes |callback| when
  // the deletion has finished, or when an error occurred.
  void DeleteKeys(const std::string& app_id, const DeleteCallback& callback);

 private:
  friend class base::RefCounted<GCMKeyStore>;

  virtual ~GCMKeyStore();

  // Initializes the database if necessary, and runs |done_closure| when done.
  void LazyInitialize(const base::Closure& done_closure);

  void DidInitialize(bool success);
  void DidLoadKeys(bool success,
                   scoped_ptr<std::vector<EncryptionData>> entries);

  void DidStoreKeys(const std::string& app_id,
                    const KeyPair& pair,
                    const KeysCallback& callback,
                    bool success);

  void DidDeleteKeys(const std::string& app_id,
                     const DeleteCallback& callback,
                     bool success);

  // Private implementations of the API that will be executed when the database
  // has either been successfully loaded, or failed to load.

  void GetKeysAfterInitialize(const std::string& app_id,
                              const KeysCallback& callback);
  void CreateKeysAfterInitialize(const std::string& app_id,
                                 const KeysCallback& callback);
  void DeleteKeysAfterInitialize(const std::string& app_id,
                                 const DeleteCallback& callback);

  // Path in which the key store database will be saved.
  base::FilePath key_store_path_;

  // Instance of the ProtoDatabase backing the key store.
  scoped_ptr<leveldb_proto::ProtoDatabase<EncryptionData>> database_;

  enum class State;

  // The current state of the database. It has to be initialized before use.
  State state_;

  // Controller for tasks that should be executed once the key store has
  // finished initializing.
  GCMDelayedTaskController delayed_task_controller_;

  // Mapping of an app id to the loaded EncryptedData structure.
  std::map<std::string, KeyPair> key_pairs_;

  DISALLOW_COPY_AND_ASSIGN(GCMKeyStore);
};

}  // namespace gcm

#endif  // COMPONENTS_GCM_DRIVER_CRYPTO_GCM_KEY_STORE_H_
