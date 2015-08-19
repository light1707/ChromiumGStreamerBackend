// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#ifndef COMPONENTS_VIEW_MANAGER_SURFACES_SURFACES_IMPL_H_
#define COMPONENTS_VIEW_MANAGER_SURFACES_SURFACES_IMPL_H_

#include "cc/surfaces/display_client.h"
#include "cc/surfaces/surface_factory.h"
#include "cc/surfaces/surface_factory_client.h"
#include "components/view_manager/public/interfaces/command_buffer.mojom.h"
#include "components/view_manager/public/interfaces/surfaces.mojom.h"
#include "components/view_manager/surfaces/surfaces_state.h"
#include "mojo/application/public/cpp/application_connection.h"
#include "mojo/common/weak_binding_set.h"
#include "third_party/mojo/src/mojo/public/cpp/bindings/strong_binding.h"

namespace cc {
class Display;
}

namespace mojo {
class ApplicationManager;
}

namespace surfaces {

class SurfacesDelegate;
class SurfacesScheduler;

class SurfacesImpl : public mojo::Surface, public cc::SurfaceFactoryClient {
 public:
  SurfacesImpl(SurfacesDelegate* surfaces_delegate,
               const scoped_refptr<SurfacesState>& state,
               mojo::InterfaceRequest<mojo::Surface> request);

  // Closes the connection and destroys |this| object.
  void CloseConnection();

  // Surface implementation.
  void GetIdNamespace(const Surface::GetIdNamespaceCallback& callback) override;
  void SetResourceReturner(mojo::ResourceReturnerPtr returner) override;
  void CreateSurface(uint32_t local_id) override;
  void SubmitFrame(uint32_t local_id,
                   mojo::FramePtr frame,
                   const mojo::Closure& callback) override;
  void DestroySurface(uint32_t local_id) override;

  // SurfaceFactoryClient implementation.
  void ReturnResources(const cc::ReturnedResourceArray& resources) override;

  cc::SurfaceFactory* factory() { return &factory_; }

 private:
  ~SurfacesImpl() override;

  cc::SurfaceId QualifyIdentifier(uint32_t local_id);

  SurfacesDelegate* delegate_;
  // A Surface ID is an unsigned 64-bit int where the high 32-bits are generated
  // by the Surfaces service, and the low 32-bits are generated by the process
  // that requested the Surface.
  scoped_refptr<SurfacesState> state_;
  // A Surface ID is an unsigned 64-bit int where the high 32-bits are generated
  // by the Surfaces service, and the low 32-bits are generated by the process
  // that requested the Surface.
  const uint32_t id_namespace_;
  cc::SurfaceFactory factory_;
  mojo::ScopedMessagePipeHandle command_buffer_handle_;
  mojo::ResourceReturnerPtr returner_;
  mojo::Binding<Surface> binding_;
  bool connection_closed_;

  DISALLOW_COPY_AND_ASSIGN(SurfacesImpl);
};

}  // namespace surfaces

#endif  // COMPONENTS_VIEW_MANAGER_SURFACES_SURFACES_IMPL_H_
