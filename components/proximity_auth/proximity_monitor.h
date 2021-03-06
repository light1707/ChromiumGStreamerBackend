// Copyright 2015 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#ifndef COMPONENTS_PROXIMITY_AUTH_PROXIMITY_MONITOR_H
#define COMPONENTS_PROXIMITY_AUTH_PROXIMITY_MONITOR_H

#include "components/proximity_auth/proximity_monitor_observer.h"

namespace proximity_auth {

// An interface that is responsible for tracking whether the remote device is
// sufficiently close to the local device to permit unlocking.
class ProximityMonitor {
 public:
  enum class Strategy { NONE, CHECK_RSSI, CHECK_TRANSMIT_POWER };

  virtual ~ProximityMonitor() {}

  // Activates the proximity monitor. No-op if the proximity monitor is already
  // active.
  virtual void Start() = 0;

  // Deactivates the proximity monitor. No-op if the proximity monitor is
  // already inactive.
  virtual void Stop() = 0;

  // Returns the strategy used to determine whether the remote device is in
  // proximity.
  virtual Strategy GetStrategy() const = 0;

  // Returns |true| iff the remote device is close enough to the local device,
  // given the user's current settings.
  virtual bool IsUnlockAllowed() const = 0;

  // Returns |true| iff the remote device is close enough to the local device,
  // according to its RSSI measurement.
  virtual bool IsInRssiRange() const = 0;

  // Records the current proximity measurements to UMA. This should be called
  // when the user successfully authenticates using proximity auth.
  virtual void RecordProximityMetricsOnAuthSuccess() = 0;

  // Adds an observer.
  virtual void AddObserver(ProximityMonitorObserver* observer) = 0;

  // Removes an observer.
  virtual void RemoveObserver(ProximityMonitorObserver* observer) = 0;
};

}  // namespace proximity_auth

#endif  // COMPONENTS_PROXIMITY_AUTH_PROXIMITY_MONITOR_H
