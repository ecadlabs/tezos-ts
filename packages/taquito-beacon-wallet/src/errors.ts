import { PermissionScope } from '@airgap/beacon-dapp';
import { PermissionDeniedError } from '@taquito/core';

/**
 *  @category Error
 *  @description Error indicates the Beacon wallet not being initialized
 */
export class BeaconWalletNotInitialized extends PermissionDeniedError {
  constructor() {
    super();
    this.name = 'BeaconWalletNotInitialized';
    this.message =
      'BeaconWallet needs to be initialized by calling `await BeaconWallet.requestPermissions({network: {type: "chosen_network"}})` first.';
  }
}

/**
 *  @category Error
 *  @description Error indicates missing required persmission scopes
 */
export class MissingRequiredScopes extends PermissionDeniedError {
  constructor(public requiredScopes: PermissionScope[]) {
    super();
    this.name = 'MissingRequiredScopes';
    this.message = `Required permissions scopes: ${requiredScopes.join(',')} were not granted.`;
  }
}
