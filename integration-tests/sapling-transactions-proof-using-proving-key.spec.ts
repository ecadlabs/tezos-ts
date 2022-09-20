import { ContractAbstraction, ContractProvider, RpcReadAdapter } from '@taquito/taquito';
import { CONFIGS } from './config';
import { InMemorySpendingKey, SaplingToolkit, InMemoryProvingKey } from '@taquito/sapling';
import BigNumber from 'bignumber.js';
import { singleSaplingStateContractJProtocol } from './data/single_sapling_state_contract_jakarta_michelson';
import * as bip39 from 'bip39';

CONFIGS().forEach(({ lib, rpc, setup }) => {
  const Tezos = lib;
  let saplingContract: ContractAbstraction<ContractProvider>;
  let bobInmemorySpendingKey: InMemorySpendingKey;
  let bobPaymentAddress: string
  let aliceInMemorySpendingKey: InMemorySpendingKey;
  let aliceInMemoryProvingKey: InMemoryProvingKey;
  let alicePaymentAddress: string;
  const tezosAddress = 'tz2TSvNTh2epDMhZHrw73nV9piBX7kLZ9K9m';
  const memoSize = 8;

  describe(`Test producing proofs with a proving key rather than a spending key: ${rpc}`, () => {

    beforeAll(async (done) => {
      await setup();

      // Deploy the sapling contract
      const saplingContractOrigination = await Tezos.contract.originate({
        code: singleSaplingStateContractJProtocol(),
        init: '{}'
      });

      saplingContract = await saplingContractOrigination.contract();

      // Generate a spending key and an InMemorySpendingKey instance for Bob using a mnemonic
      const mnemonic: string = bip39.generateMnemonic();
      bobInmemorySpendingKey = await InMemorySpendingKey.fromMnemonic(mnemonic);

      // Instantiate an InMemorySpendingKey from a spending key for Alice
      aliceInMemorySpendingKey = new InMemorySpendingKey('sask27SLmU9herddHz4qFJBLMjWYMbJF8RtS579w9ej9mfCYK7VUdyCJPHK8AzW9zMsopGZEkYeNjAY7Zz1bkM7CGu8eKLzrjBLTMC5wWJDhxiK91ahA29rhDRsHdJDV2u2jFwb2MNUix8JW7sAkAqYVaJpCehTBPgRQ1KqKwqqUaNmuD8kazd4Q8MCWmgbWs21Yuomdqyi9FLigjRp7oY4m5adaVU19Nj1AHvsMY2tePeU2L')
      aliceInMemoryProvingKey = new InMemoryProvingKey('44259fd700dc80120d3c9ca65d698f6064043b048b079caa4f198aed962717403f80bf8cb9a8da8deb290913e9302be00c56f4565d917a6170be1880f42bb709');
      
      done();
    });

    it('Verify that Alice can shield tokens', async (done) => {

      const amountToAlice = 3;
      const aliceSaplingToolkit = new SaplingToolkit(
        { saplingSigner: aliceInMemorySpendingKey, saplingProver: aliceInMemoryProvingKey }, 
        { contractAddress: saplingContract.address, memoSize }, 
        new RpcReadAdapter(Tezos.rpc)
      );
      const aliceInMemoryViewingKey = await aliceInMemorySpendingKey.getSaplingViewingKeyProvider();
      // Fetch a payment address (zet) for Alice
      alicePaymentAddress = (await aliceInMemoryViewingKey.getAddress()).address;

      const shieldedTx = await aliceSaplingToolkit.prepareShieldedTransaction([{
        to: alicePaymentAddress,
        amount: amountToAlice,
        memo: 'First Tx'
      }])

      // Inject the sapling transaction using the ContractAbstraction by calling the default entrypoint
      // The amount MUST be specified in the send method in order to transfer the 3 tez to the shielded pool
      const op = await saplingContract.methods.default([shieldedTx]).send({ amount: amountToAlice });
      await op.confirmation();

      expect(op.status).toEqual('applied');
      expect(op.hash).toBeDefined();
      expect(op.includedInBlock).toBeLessThan(Number.POSITIVE_INFINITY);

      done();
    });

    it("Verify that Alice's balance in the sapling pool updated after the shielded tx", async (done) => {
      const aliceSaplingToolkit = new SaplingToolkit(
        { saplingSigner: aliceInMemorySpendingKey, saplingProver: aliceInMemoryProvingKey }, 
        { contractAddress: saplingContract.address, memoSize }, 
        new RpcReadAdapter(Tezos.rpc)
      );
      const aliceTxViewer = await aliceSaplingToolkit.getSaplingTransactionViewer();
      const aliceBalance = await aliceTxViewer.getBalance();

      // The returned balance is in MUTEZ
      expect(aliceBalance).toEqual(new BigNumber(3000000));

      const inputsAlice = await aliceTxViewer.getIncomingAndOutgoingTransactions();
      expect(inputsAlice).toEqual({
        incoming: [
          {
            value: new BigNumber(3000000),
            memo: 'First Tx',
            paymentAddress: alicePaymentAddress,
            isSpent: false
          }
        ],
        outgoing: []
      })
      done();
    });

    it('Verify that Alice can do a shielded transaction to Bob', async (done) => {
      const amountToBob = 2;
      // Bob needs to give a payment address (zet) to Alice
      const bobInMemoryViewingKey = await bobInmemorySpendingKey.getSaplingViewingKeyProvider();
      bobPaymentAddress = (await bobInMemoryViewingKey.getAddress()).address;

      const aliceSaplingToolkit = new SaplingToolkit(
        { saplingSigner: aliceInMemorySpendingKey, saplingProver: aliceInMemoryProvingKey }, 
        { contractAddress: saplingContract.address, memoSize }, 
        new RpcReadAdapter(Tezos.rpc)
      );
      const tx = await aliceSaplingToolkit.prepareSaplingTransaction([{
        to: bobPaymentAddress,
        amount: amountToBob,
        memo: 'A gift'
      }])

      // Inject the sapling transaction using the ContractAbstraction by calling the default entrypoint
      const op = await saplingContract.methods.default([tx]).send();
      await op.confirmation();

      expect(op.status).toEqual('applied');
      expect(op.hash).toBeDefined();
      expect(op.includedInBlock).toBeLessThan(Number.POSITIVE_INFINITY);

      done();
    });

    it("Verify that Alice's balance in the sapling pool updated after the sapling tx", async (done) => {
      const aliceSaplingToolkit = new SaplingToolkit(
        { saplingSigner: aliceInMemorySpendingKey, saplingProver: aliceInMemoryProvingKey }, 
        { contractAddress: saplingContract.address, memoSize }, 
        new RpcReadAdapter(Tezos.rpc)
      );
      const aliceTxViewer = await aliceSaplingToolkit.getSaplingTransactionViewer();
      const aliceBalance = await aliceTxViewer.getBalance();

      // The returned balance is in MUTEZ
      expect(aliceBalance).toEqual(new BigNumber(1000000));

      const inputsAlice = await aliceTxViewer.getIncomingAndOutgoingTransactions();
      expect(inputsAlice).toEqual({
        incoming: [
          {
            value: new BigNumber(3000000),
            memo: 'First Tx',
            paymentAddress: alicePaymentAddress,
            isSpent: true
          },
          { // This input is a payback for when Alice sent 2 tz to bob (3tz - 2tz = 1tz). 
            // Alice consumed the 3tz input and received 1tz back.
            value: new BigNumber(1000000),
            memo: '',
            paymentAddress: alicePaymentAddress,
            isSpent: false
          }
        ],
        outgoing: [
          {
            value: new BigNumber(2000000),
            memo: 'A gift',
            paymentAddress: bobPaymentAddress
          },
          { // Here Alice sent 1tz back to her (matching the payback input above).
            value: new BigNumber(1000000),
            memo: '',
            paymentAddress: alicePaymentAddress
          }
        ]
      })

      const bobSaplingToolkit = new SaplingToolkit({ saplingSigner: bobInmemorySpendingKey }, { contractAddress: saplingContract.address, memoSize }, new RpcReadAdapter(Tezos.rpc))
      const bobTxViewer = await bobSaplingToolkit.getSaplingTransactionViewer();
      const bobBalance = await bobTxViewer.getBalance();

      // The returned balance is in MUTEZ
      expect(bobBalance).toEqual(new BigNumber(2000000));

      const inputsBob = await bobTxViewer.getIncomingAndOutgoingTransactions();
      expect(inputsBob).toEqual({
        incoming: [
          {
            value: new BigNumber(2000000),
            memo: 'A gift',
            paymentAddress: bobPaymentAddress,
            isSpent: false
          }
        ],
        outgoing: []
      })
      done();
    });

    it('Verify that Alice can unshield tokens', async (done) => {

      const amount = 1;
      const aliceSaplingToolkit = new SaplingToolkit(
        { saplingSigner: aliceInMemorySpendingKey, saplingProver: aliceInMemoryProvingKey }, 
        { contractAddress: saplingContract.address, memoSize }, 
        new RpcReadAdapter(Tezos.rpc)
      );
      const tezosInitialBalance = await Tezos.tz.getBalance(tezosAddress);

      const unshieldedTx = await aliceSaplingToolkit.prepareUnshieldedTransaction({
        to: tezosAddress,
        amount
      })

      // Inject the sapling transaction using the ContractAbstraction by calling the default entrypoint
      const op = await saplingContract.methods.default([unshieldedTx]).send();
      await op.confirmation(2);

      expect(op.status).toEqual('applied');
      expect(op.hash).toBeDefined();
      expect(op.includedInBlock).toBeLessThan(Number.POSITIVE_INFINITY);

      const tezosUpdatedBalance = await Tezos.tz.getBalance(tezosAddress);
      expect(tezosUpdatedBalance).toEqual(tezosInitialBalance.plus(new BigNumber(1000000)));

      done();
    });

    it("Verify that Alice's balance in the sapling pool updated after the unshielded tx", async (done) => {
      const aliceSaplingToolkit = new SaplingToolkit(
        { saplingSigner: aliceInMemorySpendingKey, saplingProver: aliceInMemoryProvingKey }, 
        { contractAddress: saplingContract.address, memoSize }, 
        new RpcReadAdapter(Tezos.rpc)
      );
      const aliceTxViewer = await aliceSaplingToolkit.getSaplingTransactionViewer();
      const aliceBalance = await aliceTxViewer.getBalance();

      expect(aliceBalance).toEqual(new BigNumber(0));

      const inputsAlice = await aliceTxViewer.getIncomingAndOutgoingTransactions();
      expect(inputsAlice).toEqual({
        incoming: [
          {
            value: new BigNumber(3000000),
            memo: 'First Tx',
            paymentAddress: alicePaymentAddress,
            isSpent: true
          },
          {
            value: new BigNumber(1000000),
            memo: '',
            paymentAddress: alicePaymentAddress,
            isSpent: true
          },
          {
            value: new BigNumber(0),
            memo: '',
            paymentAddress: alicePaymentAddress,
            isSpent: false
          }
        ],
        outgoing: [
          {
            value: new BigNumber(2000000),
            memo: 'A gift',
            paymentAddress: bobPaymentAddress
          },
          {
            value: new BigNumber(1000000),
            memo: '',
            paymentAddress: alicePaymentAddress
          },
          {
            value: new BigNumber(0),
            memo: '',
            paymentAddress: alicePaymentAddress
          }
        ]
      })

      done();
    });

  });
});

