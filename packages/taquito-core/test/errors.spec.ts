import {
  TaquitoError,
  ParameterValidationError,
  RpcError,
  TezosToolkitConfigError,
  UnsupportedAction,
  NetworkError,
  PermissionDeniedError,
  InvalidAddressError,
  InvalidBlockHashError,
  InvalidDerivationPathError,
} from '../src/taquito-core';

describe('parent errors classes', () => {
  it('should throw an ParameterValidationError', () => {
    try {
      throw new ParameterValidationError('tez');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error).toBeInstanceOf(TaquitoError);
      expect(error).toBeInstanceOf(ParameterValidationError);
      expect(error.message).toEqual('tez');
    }
  });

  it('should throw an RpcError', () => {
    try {
      throw new RpcError('tez');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error).toBeInstanceOf(TaquitoError);
      expect(error).toBeInstanceOf(RpcError);
      expect(error.message).toEqual('tez');
    }
  });

  it('should throw an TezosToolkitConfigError', () => {
    try {
      throw new TezosToolkitConfigError('tez');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error).toBeInstanceOf(TaquitoError);
      expect(error).toBeInstanceOf(TezosToolkitConfigError);
      expect(error.message).toEqual('tez');
    }
  });

  it('should throw an UnsupportedAction', () => {
    try {
      throw new UnsupportedAction('tez');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error).toBeInstanceOf(TaquitoError);
      expect(error).toBeInstanceOf(UnsupportedAction);
      expect(error.message).toEqual('tez');
    }
  });

  it('should throw an NetworkError', () => {
    try {
      throw new NetworkError('tez');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error).toBeInstanceOf(TaquitoError);
      expect(error).toBeInstanceOf(NetworkError);
      expect(error.message).toEqual('tez');
    }
  });

  it('should throw an PermissionDeniedError', () => {
    try {
      throw new PermissionDeniedError('tez');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error).toBeInstanceOf(TaquitoError);
      expect(error).toBeInstanceOf(PermissionDeniedError);
      expect(error.message).toEqual('tez');
    }
  });
});

describe('common error classes', () => {
  it('should throw an InvalidAddressError', () => {
    try {
      throw new InvalidAddressError('tz1');
    } catch (error) {
      expect(error).toBeInstanceOf(ParameterValidationError);
      expect(error).toBeInstanceOf(InvalidAddressError);
      expect(error.message).toEqual("Address 'tz1' is invalid.");
    }
    try {
      throw new InvalidAddressError('tz1', 'params source');
    } catch (error) {
      expect(error).toBeInstanceOf(ParameterValidationError);
      expect(error).toBeInstanceOf(InvalidAddressError);
      expect(error.message).toEqual("Address 'tz1' is invalid. params source");
    }
  });

  it('should throw an InvalidBlockHashError', () => {
    try {
      throw new InvalidBlockHashError('Bl');
    } catch (error) {
      expect(error).toBeInstanceOf(ParameterValidationError);
      expect(error).toBeInstanceOf(InvalidBlockHashError);
      expect(error.message).toEqual("Block hash 'Bl' is invalid.");
    }
  });

  it('should throw an InvalidDerivationPathError', () => {
    try {
      throw new InvalidDerivationPathError('1729');
    } catch (error) {
      expect(error).toBeInstanceOf(ParameterValidationError);
      expect(error).toBeInstanceOf(InvalidDerivationPathError);
      expect(error.message).toEqual("Derivation path '1729' is invalid.");
    }
    try {
      throw new InvalidDerivationPathError('1729', 'invalid BIP32 path');
    } catch (error) {
      expect(error).toBeInstanceOf(ParameterValidationError);
      expect(error).toBeInstanceOf(InvalidDerivationPathError);
      expect(error.message).toEqual("Derivation path '1729' is invalid. invalid BIP32 path");
    }
  });
});
