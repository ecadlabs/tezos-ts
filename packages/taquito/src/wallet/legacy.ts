import { Context } from '../context';
import { attachKind, OpKind } from '../operations/types';
import {
  WalletDelegateParams,
  WalletIncreasePaidStorageParams,
  WalletOriginateParams,
  WalletProvider,
  WalletTransferParams,
} from './interface';
import { WalletParamsWithKind } from './wallet';

export class LegacyWalletProvider implements WalletProvider {
  constructor(private context: Context) {}

  async getPKH(): Promise<string> {
    return this.context.signer.publicKeyHash();
  }

  async mapTransferParamsToWalletParams(params: () => Promise<WalletTransferParams>) {
    return attachKind(await params(), OpKind.TRANSACTION);
  }

  async mapOriginateParamsToWalletParams(params: () => Promise<WalletOriginateParams>) {
    return attachKind(await params(), OpKind.ORIGINATION);
  }

  async mapDelegateParamsToWalletParams(params: () => Promise<WalletDelegateParams>) {
    return attachKind(await params(), OpKind.DELEGATION);
  }

  async mapIncreasePaidStorageWalletParams(params: () => Promise<WalletIncreasePaidStorageParams>) {
    return attachKind(await params(), OpKind.INCREASE_PAID_STORAGE);
  }

  async sendOperations(params: WalletParamsWithKind[]) {
    const op = await this.context.batch.batch(params as any).send();
    return op.hash;
  }

  async sign(signingRequest: { payload: string; signingType: 'operation' | 'micheline' | 'raw' }) {
    let magicByte: Uint8Array | undefined;
    switch (signingRequest.signingType) {
      case 'micheline':
        magicByte = new Uint8Array([5]);
        break;
      case 'operation':
        magicByte = new Uint8Array([3]);
        break;
      case 'raw':
        magicByte = undefined;
        break;
      default:
        throw new Error(`Invalid signing type ${signingRequest.signingType}`);
    }
    const { prefixSig } = await this.context.signer.sign(signingRequest.payload, magicByte);
    return prefixSig;
  }

  getPublicKey() {
    return this.context.signer.publicKey();
  }
}
