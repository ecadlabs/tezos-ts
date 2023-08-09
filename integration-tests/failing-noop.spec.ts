import { InMemorySigner } from "@taquito/signer";
import { CONFIGS, defaultSecretKey } from "./config";
import { OpKind, TezosToolkit } from "@taquito/taquito";
import { verifySignature } from "@taquito/utils";

CONFIGS().forEach(({ rpc, setup}) => {
  const Tezos = new TezosToolkit(rpc);
  Tezos.setSignerProvider(new InMemorySigner(defaultSecretKey.secret_key));
  describe(`Test failing_noop through wallet api using: ${rpc}`, () => {

    beforeEach(async (done) => {
      await setup();
      done();
    });

    it('Verify that the wallet.signFailingNoop signs a text on the genesis block', async (done) => {
      const signed = await Tezos.wallet.signFailingNoop({
        arbitrary: "48656C6C6F20576F726C64", // Hello World
        basedOnBlock: 0,
      });
      expect(signed).toEqual({
        bytes: 'df2788eed43ab680c8a2b79969ce4de93b9768cd2786a85ebdfba90ca7612638110000000b48656c6c6f20576f726c64',
        signature: 'spsig1QVVCiQ6aN2zmut2wKTg4zWLoP9ia4qUY2hBo21odA7P25gqfieFWJMyntaJWmyrd6v3mgjKF5n4d2wcaB3LxkLmd1MoJQ',
        signedContent: {
          branch: await Tezos.rpc.getBlockHash({block: 'genesis'}),
          contents: [{
            kind: OpKind.FAILING_NOOP,
            arbitrary: '48656C6C6F20576F726C64'
          }]
        }
      });
      const pk = await Tezos.wallet.getPublicKey();
      expect(verifySignature(signed.bytes, pk!, signed.signature, new Uint8Array([3]))).toBe(true);
      done();
    });

    it('Verify that the wallet.signFailingNoop signs a text', async (done) => {
      const signed = await Tezos.wallet.signFailingNoop({
        arbitrary: "48656C6C6F20576F726C64", // Hello World
        basedOnBlock: 'head',
      });
      const pk = await Tezos.wallet.getPublicKey();
      expect(verifySignature(signed.bytes, pk!, signed.signature, new Uint8Array([3]))).toBe(true);
      done();
    });

    it('Verify that the contract.failingNoop signs a text on the genesis block', async (done) => {
      const signed = await Tezos.contract.failingNoop({
        arbitrary: "48656C6C6F20576F726C64", // Hello World
        basedOnBlock: 0,
      });
      expect(signed).toEqual({
        bytes: 'df2788eed43ab680c8a2b79969ce4de93b9768cd2786a85ebdfba90ca7612638110000000b48656c6c6f20576f726c64',
        signature: 'spsig1QVVCiQ6aN2zmut2wKTg4zWLoP9ia4qUY2hBo21odA7P25gqfieFWJMyntaJWmyrd6v3mgjKF5n4d2wcaB3LxkLmd1MoJQ',
        signedContent: {
          branch: await Tezos.rpc.getBlockHash({block: 'genesis'}),
          contents: [{
            kind: OpKind.FAILING_NOOP,
            arbitrary: '48656C6C6F20576F726C64'
          }]
        }
      });
      const pk = await Tezos.wallet.getPublicKey();
      expect(verifySignature(signed.bytes, pk!, signed.signature, new Uint8Array([3]))).toBe(true);
      done();
    });

    it('Verify that the contract.failingNoop signs a text', async (done) => {
      const signed = await Tezos.contract.failingNoop({
        arbitrary: "48656C6C6F20576F726C64", // Hello World
        basedOnBlock: 'head',
      });
      const pk = await Tezos.wallet.getPublicKey();
      expect(verifySignature(signed.bytes, pk!, signed.signature, new Uint8Array([3]))).toBe(true);
      done();
    });

  });
})
