enum OCPPStopReason {
  deAuthorized = 'DeAuthorized', // The transaction was stopped because of the authorization status in a StartTransaction.conf
  emergencyStop = 'EmergencyStop', // Emergency stop button was used.
  evDisconnected = 'EVDisconnected', // disconnecting of cable, vehicle moved away from inductive charge unit.
  hardReset = 'HardReset', // A hard reset command was received.
  // eslint-disable-next-line max-len,prettier/prettier
  local = 'Local', // Stopped locally on request of the user at the Charge Point. This is a regular termination of a transaction. Examples: presentingan RFID tag, pressing a button to stop.
  other = 'Other', // Any other reason.
  powerLoss = 'PowerLoss', // Complete loss of power.
  reboot = 'Reboot', // A locally initiated reset/reboot occurred. (for instance watchdog kicked in)
  // eslint-disable-next-line max-len,prettier/prettier
  remote = 'Remote', // Stopped remotely on request of the user. This is a regular termination of a transaction. Examples: termination using a smartphone app, exceeding a (non local) prepaid credit.
  softReset = 'SoftReset', // A soft reset command was received.
  unlockCommand = 'UnlockCommand', // Central System sent an Unlock Connector command.
}

export default OCPPStopReason;
