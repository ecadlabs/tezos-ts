import {
  ParameterValidationError,
  TezosToolkitConfigError,
  RpcError,
  NetworkError,
} from '@taquito/core';
import { FilterExpression } from './taquito';

/**
 *  @category Error
 *  @description Error indicates invalid confirmation count has been passed or configured
 */
export class InvalidConfirmationCountError extends ParameterValidationError {
  constructor(invalidConfirmations: number) {
    super();
    this.name = 'InvalidConfirmationCountError';
    this.message = `Invalid confirmation count ${invalidConfirmations} expecting at least 1`;
  }
}

/**
 *  @category Error
 *  @description Error indicates undefined confirmation has not been specified or configured
 */
export class ConfirmationUndefinedError extends TezosToolkitConfigError {
  constructor() {
    super();
    this.name = 'ConfirmationUndefinedError';
    this.message = 'Default confirmation count can not be undefined';
  }
}

/**
 *  @category Error
 *  @description Error that indicates that confirmation polling timed out
 */
export class ConfirmationTimeoutError extends NetworkError {
  constructor(public message: string) {
    super();
    this.name = 'ConfirmationTimeoutError';
  }
}

/**
 *  @category Error
 *  @description Error indicates an invalid filter expression being passed or used
 */
export class InvalidFilterExpressionError extends ParameterValidationError {
  constructor(public invalidExpression: FilterExpression) {
    super();
    this.name = 'InvalidFilterExpressionError';
    this.message = `Invalid filter expression expecting the object to contain either and/or property`;
  }
}

/**
 *  @category Error
 *  @description Error indicates an error being returned from the RPC response
 */
export class RPCResponseError extends RpcError {
  constructor(public message: string, public cause?: any) {
    super();
    this.name = 'RPCResponseError';
  }
}

/**
 *  @category Error
 *  @description Error that indicates a generic failure when trying to fetch an observable
 */
export class ObservableError extends NetworkError {
  constructor(public message: string) {
    super();
    this.name = 'ObservableError';
  }
}