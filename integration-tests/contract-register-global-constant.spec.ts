import { Protocols } from '@taquito/taquito';
import { CONFIGS } from './config';
const crypto = require('crypto');

CONFIGS().forEach(({ lib, rpc, setup }) => {
  const Tezos = lib;
<<<<<<< HEAD
  const hangzhounetOrHigher = (protocol === Protocols.PtHangz2 || protocol === Protocols.PtIdiaza) ? test : test.skip;

  describe(`Test contract register global constants through contract api using: ${rpc}`, () => {
=======
  
  describe(`Register global constants using: ${rpc}`, () => {
>>>>>>> master
    const randomAnnots = () => crypto.randomBytes(3).toString('hex');
    let annots = randomAnnots();

    beforeEach(async (done) => {
      await setup(true);
      done();
    });

<<<<<<< HEAD
    hangzhounetOrHigher('Verify contract.registerGlobalConstant to register a Micheline expression to the global table of constants', async (done) => {
=======
    test('Register a Micheline expression to the global table of constants', async (done) => {
>>>>>>> master
      // We use a randomized annots in the Micheline expression because an expression can only be registered once.
      const op = await Tezos.contract.registerGlobalConstant({
        value: {
          prim: 'list',
          args: [{ prim: 'nat' }],
          annots: [`%${annots}`]
        },
        fee: 500,
        storageLimit: 90,
        gasLimit: 1400
      });
      await op.confirmation();
      expect(op.hash).toBeDefined();
      expect(op.fee).toEqual(500);
      expect(op.storageLimit).toEqual(90);
      expect(op.gasLimit).toEqual(1400);
      expect(op.includedInBlock).toBeLessThan(Number.POSITIVE_INFINITY);
      expect(op.status).toEqual('applied');

      done();
    });

<<<<<<< HEAD
    hangzhounetOrHigher(
      'Verify contract.registerGlobalConstant to register a global constant and deploy a contract with the constant',
=======
    test(
      'Register a Micheline expression to the global table of constants with auto-estimation of the fee, storage limit and gas limit',
>>>>>>> master
      async (done) => {
        const op = await Tezos.contract.registerGlobalConstant({
          value: {
            prim: 'list',
            args: [{ prim: 'nat' }],
            annots: [`%${randomAnnots()}`]
          }
        });
        await op.confirmation();
        expect(op.hash).toBeDefined();
        expect(op.includedInBlock).toBeLessThan(Number.POSITIVE_INFINITY);
        expect(op.status).toEqual('applied');

        done();
      }
    );

  });
});
