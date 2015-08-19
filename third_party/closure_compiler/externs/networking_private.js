// Copyright 2015 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This file was generated by:
//   ./tools/json_schema_compiler/compiler.py.
// NOTE: The format of types has changed. 'FooType' is now
//   'chrome.networkingPrivate.FooType'.
// Please run the closure compiler before committing changes.
// See https://code.google.com/p/chromium/wiki/ClosureCompilation.

/** @fileoverview Externs generated from namespace: networkingPrivate */

/**
 * @const
 */
chrome.networkingPrivate = {};

/**
 * @enum {string}
 * @see https://developer.chrome.com/extensions/networkingPrivate#type-ActivationStateType
 */
chrome.networkingPrivate.ActivationStateType = {
  ACTIVATED: 'Activated',
  ACTIVATING: 'Activating',
  NOT_ACTIVATED: 'NotActivated',
  PARTIALLY_ACTIVATED: 'PartiallyActivated',
};

/**
 * @enum {string}
 * @see https://developer.chrome.com/extensions/networkingPrivate#type-CaptivePortalStatus
 */
chrome.networkingPrivate.CaptivePortalStatus = {
  UNKNOWN: 'Unknown',
  OFFLINE: 'Offline',
  ONLINE: 'Online',
  PORTAL: 'Portal',
  PROXY_AUTH_REQUIRED: 'ProxyAuthRequired',
};

/**
 * @enum {string}
 * @see https://developer.chrome.com/extensions/networkingPrivate#type-ConnectionStateType
 */
chrome.networkingPrivate.ConnectionStateType = {
  CONNECTED: 'Connected',
  CONNECTING: 'Connecting',
  NOT_CONNECTED: 'NotConnected',
};

/**
 * @enum {string}
 * @see https://developer.chrome.com/extensions/networkingPrivate#type-DeviceStateType
 */
chrome.networkingPrivate.DeviceStateType = {
  UNINITIALIZED: 'Uninitialized',
  DISABLED: 'Disabled',
  ENABLING: 'Enabling',
  ENABLED: 'Enabled',
};

/**
 * @enum {string}
 * @see https://developer.chrome.com/extensions/networkingPrivate#type-IPConfigType
 */
chrome.networkingPrivate.IPConfigType = {
  DHCP: 'DHCP',
  STATIC: 'Static',
};

/**
 * @enum {string}
 * @see https://developer.chrome.com/extensions/networkingPrivate#type-NetworkType
 */
chrome.networkingPrivate.NetworkType = {
  ALL: 'All',
  CELLULAR: 'Cellular',
  ETHERNET: 'Ethernet',
  VPN: 'VPN',
  WIRELESS: 'Wireless',
  WI_FI: 'WiFi',
  WI_MAX: 'WiMAX',
};

/**
 * @enum {string}
 * @see https://developer.chrome.com/extensions/networkingPrivate#type-ProxySettingsType
 */
chrome.networkingPrivate.ProxySettingsType = {
  DIRECT: 'Direct',
  MANUAL: 'Manual',
  PAC: 'PAC',
  WPAD: 'WPAD',
};

/**
 * @typedef {{
 *   AccessPointName: string,
 *   Language: (string|undefined),
 *   LocalizedName: (string|undefined),
 *   Name: (string|undefined),
 *   Password: (string|undefined),
 *   Username: (string|undefined)
 * }}
 * @see https://developer.chrome.com/extensions/networkingPrivate#type-APNProperties
 */
chrome.networkingPrivate.APNProperties;

/**
 * @typedef {{
 *   AutoConnect: (boolean|undefined),
 *   APN: (!chrome.networkingPrivate.APNProperties|undefined),
 *   Carrier: (string|undefined)
 * }}
 * @see https://developer.chrome.com/extensions/networkingPrivate#type-CellularConfigProperties
 */
chrome.networkingPrivate.CellularConfigProperties;

/**
 * @typedef {{
 *   requirePin: boolean,
 *   currentPin: string,
 *   newPin: (string|undefined)
 * }}
 * @see https://developer.chrome.com/extensions/networkingPrivate#type-CellularSimState
 */
chrome.networkingPrivate.CellularSimState;

/**
 * @typedef {{
 *   ActivationState: (!chrome.networkingPrivate.ActivationStateType|undefined),
 *   NetworkTechnology: (string|undefined),
 *   RoamingState: (string|undefined),
 *   SIMPresent: (boolean|undefined),
 *   SignalStrength: (number|undefined)
 * }}
 * @see https://developer.chrome.com/extensions/networkingPrivate#type-CellularStateProperties
 */
chrome.networkingPrivate.CellularStateProperties;

/**
 * @typedef {{
 *   Scanning: (boolean|undefined),
 *   State: !chrome.networkingPrivate.DeviceStateType,
 *   Type: !chrome.networkingPrivate.NetworkType
 * }}
 * @see https://developer.chrome.com/extensions/networkingPrivate#type-DeviceStateProperties
 */
chrome.networkingPrivate.DeviceStateProperties;

/**
 * @typedef {{
 *   Authentication: string
 * }}
 * @see https://developer.chrome.com/extensions/networkingPrivate#type-EthernetStateProperties
 */
chrome.networkingPrivate.EthernetStateProperties;

/**
 * @typedef {{
 *   Gateway: (string|undefined),
 *   IPAddress: (string|undefined),
 *   NameServers: (!Array<string>|undefined),
 *   RoutingPrefix: (number|undefined),
 *   Type: (string|undefined),
 *   WebProxyAutoDiscoveryUrl: (string|undefined)
 * }}
 * @see https://developer.chrome.com/extensions/networkingPrivate#type-IPConfigProperties
 */
chrome.networkingPrivate.IPConfigProperties;

/**
 * @typedef {{
 *   AuthenticationType: string
 * }}
 * @see https://developer.chrome.com/extensions/networkingPrivate#type-IPSecProperties
 */
chrome.networkingPrivate.IPSecProperties;

/**
 * @typedef {{
 *   Host: string,
 *   Port: number
 * }}
 * @see https://developer.chrome.com/extensions/networkingPrivate#type-ProxyLocation
 */
chrome.networkingPrivate.ProxyLocation;

/**
 * @typedef {{
 *   HTTPProxy: (!chrome.networkingPrivate.ProxyLocation|undefined),
 *   SecureHTTPProxy: (!chrome.networkingPrivate.ProxyLocation|undefined),
 *   FTPProxy: (!chrome.networkingPrivate.ProxyLocation|undefined),
 *   SOCKS: (!chrome.networkingPrivate.ProxyLocation|undefined)
 * }}
 * @see https://developer.chrome.com/extensions/networkingPrivate#type-ManualProxySettings
 */
chrome.networkingPrivate.ManualProxySettings;

/**
 * @typedef {{
 *   Type: !chrome.networkingPrivate.ProxySettingsType,
 *   Manual: (!chrome.networkingPrivate.ManualProxySettings|undefined),
 *   ExcludeDomains: (!Array<string>|undefined),
 *   PAC: (string|undefined)
 * }}
 * @see https://developer.chrome.com/extensions/networkingPrivate#type-ProxySettings
 */
chrome.networkingPrivate.ProxySettings;

/**
 * @typedef {{
 *   OTP: (string|undefined),
 *   Password: (string|undefined),
 *   UserAuthenticationType: (string|undefined),
 *   Username: (string|undefined)
 * }}
 * @see https://developer.chrome.com/extensions/networkingPrivate#type-OpenVPNProperties
 */
chrome.networkingPrivate.OpenVPNProperties;

/**
 * @typedef {{
 *   ExtensionID: string
 * }}
 * @see https://developer.chrome.com/extensions/networkingPrivate#type-ThirdPartyVPNProperties
 */
chrome.networkingPrivate.ThirdPartyVPNProperties;

/**
 * @typedef {{
 *   AutoConnect: (boolean|undefined),
 *   Host: (string|undefined),
 *   OpenVPN: (!chrome.networkingPrivate.OpenVPNProperties|undefined),
 *   ThirdPartyVPN: (!chrome.networkingPrivate.ThirdPartyVPNProperties|undefined),
 *   Type: (string|undefined)
 * }}
 * @see https://developer.chrome.com/extensions/networkingPrivate#type-VPNConfigProperties
 */
chrome.networkingPrivate.VPNConfigProperties;

/**
 * @typedef {{
 *   Type: string,
 *   IPsec: (!chrome.networkingPrivate.IPSecProperties|undefined),
 *   ThirdPartyVPN: (!chrome.networkingPrivate.ThirdPartyVPNProperties|undefined)
 * }}
 * @see https://developer.chrome.com/extensions/networkingPrivate#type-VPNStateProperties
 */
chrome.networkingPrivate.VPNStateProperties;

/**
 * @typedef {{
 *   AutoConnect: (boolean|undefined),
 *   HexSSID: (string|undefined),
 *   HiddenSSID: (boolean|undefined),
 *   Passphrase: (string|undefined),
 *   SSID: (string|undefined),
 *   Security: (string|undefined)
 * }}
 * @see https://developer.chrome.com/extensions/networkingPrivate#type-WiFiConfigProperties
 */
chrome.networkingPrivate.WiFiConfigProperties;

/**
 * @typedef {{
 *   Security: string,
 *   SignalStrength: (number|undefined)
 * }}
 * @see https://developer.chrome.com/extensions/networkingPrivate#type-WiFiStateProperties
 */
chrome.networkingPrivate.WiFiStateProperties;

/**
 * @typedef {{
 *   AutoConnect: (boolean|undefined)
 * }}
 * @see https://developer.chrome.com/extensions/networkingPrivate#type-WiMaxConfigProperties
 */
chrome.networkingPrivate.WiMaxConfigProperties;

/**
 * @typedef {{
 *   SignalStrength: (number|undefined)
 * }}
 * @see https://developer.chrome.com/extensions/networkingPrivate#type-WiMAXStateProperties
 */
chrome.networkingPrivate.WiMAXStateProperties;

/**
 * @typedef {{
 *   Cellular: (!chrome.networkingPrivate.CellularConfigProperties|undefined),
 *   GUID: (string|undefined),
 *   IPAddressConfigType: (!chrome.networkingPrivate.IPConfigType|undefined),
 *   Name: (string|undefined),
 *   NameServersConfigType: (!chrome.networkingPrivate.IPConfigType|undefined),
 *   Priority: (number|undefined),
 *   ProxySettings: (!chrome.networkingPrivate.ProxySettings|undefined),
 *   StaticIPConfig: (!chrome.networkingPrivate.IPConfigProperties|undefined),
 *   Type: (!chrome.networkingPrivate.NetworkType|undefined),
 *   VPN: (!chrome.networkingPrivate.VPNConfigProperties|undefined),
 *   WiFi: (!chrome.networkingPrivate.WiFiConfigProperties|undefined),
 *   WiMAX: (!chrome.networkingPrivate.WiMaxConfigProperties|undefined)
 * }}
 * @see https://developer.chrome.com/extensions/networkingPrivate#type-NetworkConfigProperties
 */
chrome.networkingPrivate.NetworkConfigProperties;

/**
 * @typedef {{
 *   Cellular: (!chrome.networkingPrivate.CellularStateProperties|undefined),
 *   Connectable: (boolean|undefined),
 *   ConnectionState: (!chrome.networkingPrivate.ConnectionStateType|undefined),
 *   Ethernet: (!chrome.networkingPrivate.EthernetStateProperties|undefined),
 *   ErrorState: (string|undefined),
 *   GUID: string,
 *   Name: (string|undefined),
 *   Priority: (number|undefined),
 *   Source: (string|undefined),
 *   Type: !chrome.networkingPrivate.NetworkType,
 *   VPN: (!chrome.networkingPrivate.VPNStateProperties|undefined),
 *   WiFi: (!chrome.networkingPrivate.WiFiStateProperties|undefined),
 *   WiMAX: (!chrome.networkingPrivate.WiMAXStateProperties|undefined)
 * }}
 * @see https://developer.chrome.com/extensions/networkingPrivate#type-NetworkStateProperties
 */
chrome.networkingPrivate.NetworkStateProperties;

/**
 * @typedef {{
 *   certificate: string,
 *   intermediateCertificates: (!Array<string>|undefined),
 *   publicKey: string,
 *   nonce: string,
 *   signedData: string,
 *   deviceSerial: string,
 *   deviceSsid: string,
 *   deviceBssid: string
 * }}
 * @see https://developer.chrome.com/extensions/networkingPrivate#type-VerificationProperties
 */
chrome.networkingPrivate.VerificationProperties;

/**
 * @typedef {{
 *   networkType: !chrome.networkingPrivate.NetworkType,
 *   visible: (boolean|undefined),
 *   configured: (boolean|undefined),
 *   limit: (number|undefined)
 * }}
 * @see https://developer.chrome.com/extensions/networkingPrivate#type-NetworkFilter
 */
chrome.networkingPrivate.NetworkFilter;

/**
 * Gets all the properties of the network with id networkGuid. Includes all
 * properties of the network (read-only and read/write values).
 * @param {string} networkGuid The GUID of the network to get properties for.
 * @param {function(Object):void} callback Called with the network properties
 *     when received.
 * @see https://developer.chrome.com/extensions/networkingPrivate#method-getProperties
 */
chrome.networkingPrivate.getProperties = function(networkGuid, callback) {};

/**
 * Gets the merged properties of the network with id networkGuid from the
 * sources: User settings, shared settings, user policy, device policy and the
 * currently active settings.
 * @param {string} networkGuid The GUID of the network to get properties for.
 * @param {function(Object):void} callback Called with the managed network
 *     properties when received.
 * @see https://developer.chrome.com/extensions/networkingPrivate#method-getManagedProperties
 */
chrome.networkingPrivate.getManagedProperties = function(networkGuid, callback) {};

/**
 * Gets the cached read-only properties of the network with id networkGuid. This
 * is meant to be a higher performance function than $(ref:getProperties), which
 * requires a round trip to query the networking subsystem. The following
 * properties are returned for all networks: GUID, Type, Name, WiFi.Security.
 * Additional properties are provided for visible networks: ConnectionState,
 * ErrorState, WiFi.SignalStrength, Cellular.NetworkTechnology,
 * Cellular.ActivationState, Cellular.RoamingState.
 * @param {string} networkGuid The GUID of the network to get properties for.
 * @param {function(!chrome.networkingPrivate.NetworkStateProperties):void} callback Called immediately with the network state
 *     properties.
 * @see https://developer.chrome.com/extensions/networkingPrivate#method-getState
 */
chrome.networkingPrivate.getState = function(networkGuid, callback) {};

/**
 * Sets the properties of the network with id networkGuid.
 * @param {string} networkGuid The GUID of the network to set properties for.
 * @param {!chrome.networkingPrivate.NetworkConfigProperties} properties The
 *     properties to set.
 * @param {function():void=} callback Called when the operation has completed.
 * @see https://developer.chrome.com/extensions/networkingPrivate#method-setProperties
 */
chrome.networkingPrivate.setProperties = function(networkGuid, properties, callback) {};

/**
 * Creates a new network configuration from properties. If a matching configured
 * network already exists, this will fail. Otherwise returns the guid of the new
 * network.
 * @param {boolean} shared If true, share this network configuration with other
 *     users.
 * @param {!chrome.networkingPrivate.NetworkConfigProperties} properties The
 *     properties to configure the new network with.
 * @param {function(string):void=} callback Called with the GUID for the new
 *     network configuration once     the network has been created.
 * @see https://developer.chrome.com/extensions/networkingPrivate#method-createNetwork
 */
chrome.networkingPrivate.createNetwork = function(shared, properties, callback) {};

/**
 * Forgets a network configuration by clearing any configured properties for the
 * network with GUID 'networkGuid'. This may also include any other networks
 * with matching identifiers (e.g. WiFi SSID and Security). If no such
 * configuration exists, an error will be set and the operation will fail.
 * @param {string} networkGuid The GUID of the network to forget.
 * @param {function():void=} callback Called when the operation has completed.
 * @see https://developer.chrome.com/extensions/networkingPrivate#method-forgetNetwork
 */
chrome.networkingPrivate.forgetNetwork = function(networkGuid, callback) {};

/**
 * Returns a list of network objects with the same properties provided by
 * $(ref:networkingPrivate.getState). A filter is provided to specify the type
 * of networks returned and to limit the number of networks. Networks are
 * ordered by the system based on their priority, with connected or connecting
 * networks listed first.
 * @param {!chrome.networkingPrivate.NetworkFilter} filter Describes which
 *     networks to return.
 * @param {function(!Array<!chrome.networkingPrivate.NetworkStateProperties>):void} callback Called with a dictionary of networks and their state     properties
 *     when received.
 * @see https://developer.chrome.com/extensions/networkingPrivate#method-getNetworks
 */
chrome.networkingPrivate.getNetworks = function(filter, callback) {};

/**
 * Deprecated. Please use $(ref:networkingPrivate.getNetworks) with
 * filter.visible = true instead.
 * @param {!chrome.networkingPrivate.NetworkType} networkType
 * @param {function(!Array<!chrome.networkingPrivate.NetworkStateProperties>):void} callback
 * @deprecated Use getNetworks.
 * @see https://developer.chrome.com/extensions/networkingPrivate#method-getVisibleNetworks
 */
chrome.networkingPrivate.getVisibleNetworks = function(networkType, callback) {};

/**
 * Deprecated. Please use $(ref:networkingPrivate.getDeviceStates) instead.
 * @param {function(!Array<!chrome.networkingPrivate.NetworkType>):void} callback
 * @deprecated Use getDeviceStates.
 * @see https://developer.chrome.com/extensions/networkingPrivate#method-getEnabledNetworkTypes
 */
chrome.networkingPrivate.getEnabledNetworkTypes = function(callback) {};

/**
 * Returns a list of $(ref:networkingPrivate.DeviceStateProperties) objects.
 * @param {function(!Array<!chrome.networkingPrivate.DeviceStateProperties>):void} callback Called with a list of devices and
 *     their state.
 * @see https://developer.chrome.com/extensions/networkingPrivate#method-getDeviceStates
 */
chrome.networkingPrivate.getDeviceStates = function(callback) {};

/**
 * Enables any devices matching the specified network type. Note, the type might
 * represent multiple network types (e.g. 'Wireless').
 * @param {!chrome.networkingPrivate.NetworkType} networkType The type of
 *     network to enable.
 * @see https://developer.chrome.com/extensions/networkingPrivate#method-enableNetworkType
 */
chrome.networkingPrivate.enableNetworkType = function(networkType) {};

/**
 * Disables any devices matching the specified network type. See note for
 * $(ref:networkingPrivate.enableNetworkType).
 * @param {!chrome.networkingPrivate.NetworkType} networkType The type of
 *     network to disable.
 * @see https://developer.chrome.com/extensions/networkingPrivate#method-disableNetworkType
 */
chrome.networkingPrivate.disableNetworkType = function(networkType) {};

/**
 * Requests that the networking subsystem scan for new networks and update the
 * list returned by $(ref:getVisibleNetworks). This is only a request: the
 * network subsystem can choose to ignore it.  If the list is updated, then the
 * $(ref:onNetworkListChanged) event will be fired.
 * @see https://developer.chrome.com/extensions/networkingPrivate#method-requestNetworkScan
 */
chrome.networkingPrivate.requestNetworkScan = function() {};

/**
 * Starts a connection to the network with networkGuid.
 * @param {string} networkGuid The GUID of the network to connect to.
 * @param {function():void=} callback Called when the connect request has been
 *     sent. Note: the     connection may not have completed. Observe
 *     $(ref:onNetworksChanged)     to be notified when a network state changes.
 * @see https://developer.chrome.com/extensions/networkingPrivate#method-startConnect
 */
chrome.networkingPrivate.startConnect = function(networkGuid, callback) {};

/**
 * Starts a disconnect from the network with networkGuid.
 * @param {string} networkGuid The GUID of the network to disconnect from.
 * @param {function():void=} callback Called when the disconnect request has
 *     been sent. See note     for $(ref:startConnect).
 * @see https://developer.chrome.com/extensions/networkingPrivate#method-startDisconnect
 */
chrome.networkingPrivate.startDisconnect = function(networkGuid, callback) {};

/**
 * Starts activation of the Cellular network with networkGuid. If called for a
 * network that is already activated, or for a network with a carrier that can
 * not be directly activated, this will show the account details page for the
 * carrier if possible.
 * @param {string} networkGuid The GUID of the Cellular network to activate.
 * @param {string=} carrier Optional name of carrier to activate.
 * @param {function():void=} callback Called when the activation request has
 *     been sent. See note     for $(ref:startConnect).
 * @see https://developer.chrome.com/extensions/networkingPrivate#method-startActivate
 */
chrome.networkingPrivate.startActivate = function(networkGuid, carrier, callback) {};

/**
 * Verifies that the device is a trusted device.
 * @param {!chrome.networkingPrivate.VerificationProperties} properties
 *     Properties of the destination to use in verifying that it     is a
 *     trusted device.
 * @param {function(boolean):void} callback A callback function that indicates
 *     whether or not the device     is a trusted device.
 * @see https://developer.chrome.com/extensions/networkingPrivate#method-verifyDestination
 */
chrome.networkingPrivate.verifyDestination = function(properties, callback) {};

/**
 * Verifies that the device is a trusted device and retrieves encrypted network
 * credentials.
 * @param {!chrome.networkingPrivate.VerificationProperties} properties
 *     Properties of the destination to use in verifying that it     is a
 *     trusted device.
 * @param {string} networkGuid The GUID of the Cellular network to activate.
 * @param {function(string):void} callback A callback function that receives
 *     base64-encoded encrypted     credential data to send to a trusted device.
 * @see https://developer.chrome.com/extensions/networkingPrivate#method-verifyAndEncryptCredentials
 */
chrome.networkingPrivate.verifyAndEncryptCredentials = function(properties, networkGuid, callback) {};

/**
 * Verifies that the device is a trusted device and encrypts supplied data with
 * device public key.
 * @param {!chrome.networkingPrivate.VerificationProperties} properties
 *     Properties of the destination to use in verifying that it     is a
 *     trusted device.
 * @param {string} data A string containing the base64-encoded data to encrypt.
 * @param {function(string):void} callback A callback function that receives
 *     base64-encoded encrypted     data to send to a trusted device.
 * @see https://developer.chrome.com/extensions/networkingPrivate#method-verifyAndEncryptData
 */
chrome.networkingPrivate.verifyAndEncryptData = function(properties, data, callback) {};

/**
 * Enables TDLS for WiFi traffic with a specified peer if available.
 * @param {string} ip_or_mac_address The IP or MAC address of the peer with
 *     which to     enable a TDLS connection. |enabled| If true, enable TDLS,
 *     otherwise disable TDLS.
 * @param {boolean} enabled
 * @param {function(string):void=} callback A callback function that receives a
 *     string with an error or     the current TDLS status. 'Failed' indicates
 *     that the request failed     (e.g. MAC address lookup failed). 'Timeout'
 *     indicates that the lookup     timed out. Otherwise a valid status is
 *     returned (see     $(ref:getWifiTDLSStatus)).
 * @see https://developer.chrome.com/extensions/networkingPrivate#method-setWifiTDLSEnabledState
 */
chrome.networkingPrivate.setWifiTDLSEnabledState = function(ip_or_mac_address, enabled, callback) {};

/**
 * Returns the current TDLS status for the specified peer.
 * @param {string} ip_or_mac_address The IP or MAC address of the peer.
 * @param {function(string):void} callback A callback function that receives a
 *     string with the current     TDLS status which can be 'Connected',
 *     'Disabled', 'Disconnected',     'Nonexistent', or 'Unknown'.
 * @see https://developer.chrome.com/extensions/networkingPrivate#method-getWifiTDLSStatus
 */
chrome.networkingPrivate.getWifiTDLSStatus = function(ip_or_mac_address, callback) {};

/**
 * Returns captive portal status for the network matching 'networkGuid'.
 * @param {string} networkGuid The GUID of the network to get captive portal
 *     status for.
 * @param {function(!chrome.networkingPrivate.CaptivePortalStatus):void} callback A callback function that returns the results of the query for     network captive portal status
 *     .
 * @see https://developer.chrome.com/extensions/networkingPrivate#method-getCaptivePortalStatus
 */
chrome.networkingPrivate.getCaptivePortalStatus = function(networkGuid, callback) {};

/**
 * Unlocks a Cellular SIM card. * If the SIM is PIN locked, |pin| will be used
 * to unlock the SIM and   the |puk| argument will be ignored if provided. * If
 * the SIM is PUK locked, |puk| and |pin| must be provided. If the   operation
 * succeds (|puk| is valid), the PIN will be set to |pin|.   (If |pin| is empty
 * or invalid the operation will fail).
 * @param {string} networkGuid The GUID of the cellular network to unlock.
 * @param {string} pin The current SIM PIN, or the new PIN if PUK is provided.
 * @param {string=} puk The operator provided PUK for unblocking a blocked SIM.
 * @param {function():void=} callback Called when the operation has completed.
 * @see https://developer.chrome.com/extensions/networkingPrivate#method-unlockCellularSim
 */
chrome.networkingPrivate.unlockCellularSim = function(networkGuid, pin, puk, callback) {};

/**
 * Sets whether or not SIM locking is enabled (i.e a PIN will be required when
 * the device is powered) and changes the PIN if a new PIN is specified. If the
 * new PIN is provided but not valid (e.g. too short) the operation will fail.
 * This will not lock the SIM; that is handled automatically by the device.
 * NOTE: If the SIM is locked, it must first be unlocked with
 * unlockCellularSim() before this can be called (otherwise it will fail and
 * chrome.runtime.lastError will be set to Error.SimLocked).
 * @param {string} networkGuid The GUID of the cellular network to set the SIM
 *     state of.
 * @param {!chrome.networkingPrivate.CellularSimState} simState The SIM state to
 *     set.
 * @param {function():void=} callback Called when the operation has completed.
 * @see https://developer.chrome.com/extensions/networkingPrivate#method-setCellularSimState
 */
chrome.networkingPrivate.setCellularSimState = function(networkGuid, simState, callback) {};

/**
 * Fired when the properties change on any of the networks.  Sends a list of
 * GUIDs for networks whose properties have changed.
 * @type {!ChromeEvent}
 * @see https://developer.chrome.com/extensions/networkingPrivate#event-onNetworksChanged
 */
chrome.networkingPrivate.onNetworksChanged;

/**
 * Fired when the list of networks has changed.  Sends a complete list of GUIDs
 * for all the current networks.
 * @type {!ChromeEvent}
 * @see https://developer.chrome.com/extensions/networkingPrivate#event-onNetworkListChanged
 */
chrome.networkingPrivate.onNetworkListChanged;

/**
 * Fired when the list of devices has changed or any device state properties
 * have changed.
 * @type {!ChromeEvent}
 * @see https://developer.chrome.com/extensions/networkingPrivate#event-onDeviceStateListChanged
 */
chrome.networkingPrivate.onDeviceStateListChanged;

/**
 * Fired when a portal detection for a network completes. Sends the guid of the
 * network and the corresponding captive portal status.
 * @type {!ChromeEvent}
 * @see https://developer.chrome.com/extensions/networkingPrivate#event-onPortalDetectionCompleted
 */
chrome.networkingPrivate.onPortalDetectionCompleted;
