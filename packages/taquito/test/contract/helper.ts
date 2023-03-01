import { TransferParams } from '../../src/operations/types';

const errorBuilder = (result: any) => {
  return {
    withError: () => {
      result[0].contents[0].metadata.operation_result = {
        status: 'failed',
        errors: [
          {
            kind: 'temporary',
            id: 'proto.006-PsCARTHA.michelson_v1.runtime_error',
            contract_handle: 'KT1BjNCteztvGsjvbHTtQ5ynWqhjSVdR285M',
            contract_code: [
              { prim: 'parameter', args: [{ prim: 'unit' }] },
              { prim: 'storage', args: [{ prim: 'unit' }] },
              {
                prim: 'code',
                args: [
                  [
                    { prim: 'PUSH', args: [{ prim: 'string' }, { string: 'test' }] },
                    { prim: 'FAILWITH' },
                  ],
                ],
              },
            ],
          },
          {
            kind: 'temporary',
            id: 'proto.006-PsCARTHA.michelson_v1.script_rejected',
            location: 10,
            with: { string: 'test' },
          },
        ],
      };
      return result;
    },
    withIntError: () => {
      result[0].contents[0].metadata.operation_result = {
        status: 'failed',
        errors: [
          {
            kind: 'temporary',
            id: 'proto.011-PtHangz2.michelson_v1.runtime_error',
            contract_handle: 'KT1BjNCteztvGsjvbHTtQ5ynWqhjSVdR285M',
            contract_code: [
              { prim: 'parameter', args: [{ prim: 'unit' }] },
              { prim: 'storage', args: [{ prim: 'unit' }] },
              {
                prim: 'code',
                args: [
                  [{ prim: 'PUSH', args: [{ prim: 'int' }, { string: 5 }] }, { prim: 'FAILWITH' }],
                ],
              },
            ],
          },
          {
            kind: 'temporary',
            id: 'proto.011-PtHangz2.michelson_v1.script_rejected',
            location: 10,
            with: { int: 5 },
          },
        ],
      };
      return result;
    },
    withPairError: () => {
      result[0].contents[0].metadata.operation_result = {
        status: 'failed',
        errors: [
          {
            kind: 'temporary',
            id: 'proto.011-PtHangz2.michelson_v1.script_rejected',
            location: 10,
            with: { args: [{ int: 6 }, { string: 'taquito' }], prim: 'Pair' },
          },
        ],
      };
      return result;
    },
    withInternalError: () => {
      result[0].contents[0].metadata.operation_result = {
        status: 'backtracked',
        storage: { bytes: '00b2e19a9e74440d86c59f13dab8a18ff873e889ea' },
        consumed_milligas: '15953000',
        storage_size: '232',
      };
      (result[0].contents[0].metadata as any).internal_operation_results = [
        {
          kind: 'transaction',
          source: 'KT1Rod9ZzsJXLhzDNrrFSh3yaWTjEJriYXjo',
          nonce: 0,
          amount: '50000000',
          destination: 'tz1eY5Aqa1kXDFoiebL28emyXFoneAoVg1zh',
          result: {
            status: 'failed',
            errors: [
              {
                kind: 'temporary',
                id: 'proto.005-PsBabyM1.gas_exhausted.operation',
              },
            ],
          },
        },
      ];
      return result;
    },
    withBalanceTooLowError: () => {
      result[0].contents[0].metadata.operation_result = {
        status: 'failed',
        errors: [
          {
            kind: 'temporary',
            id: 'proto.006-PsCARTHA.contract.balance_too_low',
            contract: 'tz1bwsEWCwSEXdRvnJxvegQZKeX5dj6oKEys',
            balance: '31106391540',
            amount: '31106411541000000',
          },
        ],
      };
      return result;
    },
  };
};

export const multipleInternalOrigination = () => {
  return {
    contents: [
      {
        kind: 'reveal',
        source: 'tz2Ch1abG7FNiibmV26Uzgdsnfni9XGrk5wD',
        fee: '1420',
        counter: '294312',
        gas_limit: '10600',
        storage_limit: '0',
        public_key: 'sppk7aqSksZan1AGXuKtCz9UBLZZ77e3ZWGpFxR7ig1Z17GneEhSSbH',
        metadata: {
          balance_updates: [
            { kind: 'contract', contract: 'tz2Ch1abG7FNiibmV26Uzgdsnfni9XGrk5wD', change: '-1420' },
            {
              kind: 'freezer',
              category: 'fees',
              delegate: 'tz1Ke2h7sDdakHJQh8WX4Z372du1KChsksyU',
              cycle: 104,
              change: '1420',
            },
          ],
          operation_result: { status: 'applied', consumed_milligas: '10000000' },
        },
      },
      {
        kind: 'transaction',
        source: 'tz2Ch1abG7FNiibmV26Uzgdsnfni9XGrk5wD',
        fee: '0',
        counter: '294313',
        gas_limit: '800000',
        storage_limit: '2000',
        amount: '0',
        destination: 'KT1CaQ97jZnvA9KgNFSFoNfGXJXJgMrFvqkb',
        parameters: {
          entrypoint: 'do',
          value: [
            { prim: 'DROP' },
            { prim: 'NIL', args: [{ prim: 'operation' }] },
            { prim: 'NIL', args: [{ prim: 'int' }] },
            { prim: 'AMOUNT' },
            { prim: 'NONE', args: [{ prim: 'key_hash' }] },
            {
              prim: 'CREATE_CONTRACT',
              args: [
                [
                  { prim: 'parameter', args: [{ prim: 'list', args: [{ prim: 'int' }] }] },
                  { prim: 'storage', args: [{ prim: 'list', args: [{ prim: 'int' }] }] },
                  {
                    prim: 'code',
                    args: [
                      [
                        { prim: 'CAR' },
                        {
                          prim: 'MAP',
                          args: [
                            [
                              { prim: 'PUSH', args: [{ prim: 'int' }, { int: '1' }] },
                              { prim: 'ADD' },
                            ],
                          ],
                        },
                        { prim: 'NIL', args: [{ prim: 'operation' }] },
                        { prim: 'PAIR' },
                      ],
                    ],
                  },
                ],
              ],
            },
            { prim: 'SWAP' },
            { prim: 'DROP' },
            { prim: 'CONS' },
            { prim: 'NIL', args: [{ prim: 'int' }] },
            { prim: 'AMOUNT' },
            { prim: 'NONE', args: [{ prim: 'key_hash' }] },
            {
              prim: 'CREATE_CONTRACT',
              args: [
                [
                  { prim: 'parameter', args: [{ prim: 'list', args: [{ prim: 'int' }] }] },
                  { prim: 'storage', args: [{ prim: 'list', args: [{ prim: 'int' }] }] },
                  {
                    prim: 'code',
                    args: [
                      [
                        { prim: 'CAR' },
                        {
                          prim: 'MAP',
                          args: [
                            [
                              { prim: 'PUSH', args: [{ prim: 'int' }, { int: '1' }] },
                              { prim: 'ADD' },
                            ],
                          ],
                        },
                        { prim: 'NIL', args: [{ prim: 'operation' }] },
                        { prim: 'PAIR' },
                      ],
                    ],
                  },
                ],
              ],
            },
            { prim: 'SWAP' },
            { prim: 'DROP' },
            { prim: 'CONS' },
          ],
        },
        metadata: {
          balance_updates: [],
          operation_result: {
            status: 'applied',
            storage: { bytes: '012ffebbf1560632ca767bc960ccdb84669d284c2c' },
            consumed_milligas: '17707000',
            storage_size: '232',
          },
          internal_operation_results: [
            {
              kind: 'origination',
              source: 'KT1CaQ97jZnvA9KgNFSFoNfGXJXJgMrFvqkb',
              nonce: 1,
              balance: '0',
              script: {
                code: [
                  { prim: 'parameter', args: [{ prim: 'list', args: [{ prim: 'int' }] }] },
                  { prim: 'storage', args: [{ prim: 'list', args: [{ prim: 'int' }] }] },
                  {
                    prim: 'code',
                    args: [
                      [
                        { prim: 'CAR' },
                        {
                          prim: 'MAP',
                          args: [
                            [
                              { prim: 'PUSH', args: [{ prim: 'int' }, { int: '1' }] },
                              { prim: 'ADD' },
                            ],
                          ],
                        },
                        { prim: 'NIL', args: [{ prim: 'operation' }] },
                        { prim: 'PAIR' },
                      ],
                    ],
                  },
                ],
                storage: [],
              },
              result: {
                status: 'applied',
                big_map_diff: [],
                balance_updates: [
                  {
                    kind: 'contract',
                    contract: 'tz2Ch1abG7FNiibmV26Uzgdsnfni9XGrk5wD',
                    change: '-60000',
                  },
                  {
                    kind: 'contract',
                    contract: 'tz2Ch1abG7FNiibmV26Uzgdsnfni9XGrk5wD',
                    change: '-257000',
                  },
                ],
                originated_contracts: ['KT1D1AoSDxnmGk8UWFW7DcT9JP1VpLqUNh4F'],
                consumed_milligas: '11560000',
                storage_size: '60',
                paid_storage_size_diff: '60',
              },
            },
            {
              kind: 'origination',
              source: 'KT1CaQ97jZnvA9KgNFSFoNfGXJXJgMrFvqkb',
              nonce: 0,
              balance: '0',
              script: {
                code: [
                  { prim: 'parameter', args: [{ prim: 'list', args: [{ prim: 'int' }] }] },
                  { prim: 'storage', args: [{ prim: 'list', args: [{ prim: 'int' }] }] },
                  {
                    prim: 'code',
                    args: [
                      [
                        { prim: 'CAR' },
                        {
                          prim: 'MAP',
                          args: [
                            [
                              { prim: 'PUSH', args: [{ prim: 'int' }, { int: '1' }] },
                              { prim: 'ADD' },
                            ],
                          ],
                        },
                        { prim: 'NIL', args: [{ prim: 'operation' }] },
                        { prim: 'PAIR' },
                      ],
                    ],
                  },
                ],
                storage: [],
              },
              result: {
                status: 'applied',
                big_map_diff: [],
                balance_updates: [
                  {
                    kind: 'contract',
                    contract: 'tz2Ch1abG7FNiibmV26Uzgdsnfni9XGrk5wD',
                    change: '-60000',
                  },
                  {
                    kind: 'contract',
                    contract: 'tz2Ch1abG7FNiibmV26Uzgdsnfni9XGrk5wD',
                    change: '-257000',
                  },
                ],
                originated_contracts: ['KT1A5V7HHF7Z7QPn5n9dg4EjzTRJ4mnE21zE'],
                consumed_milligas: '11561000',
                storage_size: '60',
                paid_storage_size_diff: '60',
              },
            },
          ],
        },
      },
    ],
    signature:
      'edsigtkpiSSschcaCt9pUVrpNPf7TTcgvgDEDD6NCEHMy8NNQJCGnMfLZzYoQj74yLjo9wx6MPVV29CvVzgi7qEcEUok3k7AuMg',
  };
};

export const multipleInternalOriginationNoReveal = () => {
  return {
    contents: [
      {
        kind: 'transaction',
        source: 'tz2Ch1abG7FNiibmV26Uzgdsnfni9XGrk5wD',
        fee: '0',
        counter: '294313',
        gas_limit: '800000',
        storage_limit: '2000',
        amount: '0',
        destination: 'KT1CaQ97jZnvA9KgNFSFoNfGXJXJgMrFvqkb',
        parameters: {
          entrypoint: 'do',
          value: [
            { prim: 'DROP' },
            { prim: 'NIL', args: [{ prim: 'operation' }] },
            { prim: 'NIL', args: [{ prim: 'int' }] },
            { prim: 'AMOUNT' },
            { prim: 'NONE', args: [{ prim: 'key_hash' }] },
            {
              prim: 'CREATE_CONTRACT',
              args: [
                [
                  { prim: 'parameter', args: [{ prim: 'list', args: [{ prim: 'int' }] }] },
                  { prim: 'storage', args: [{ prim: 'list', args: [{ prim: 'int' }] }] },
                  {
                    prim: 'code',
                    args: [
                      [
                        { prim: 'CAR' },
                        {
                          prim: 'MAP',
                          args: [
                            [
                              { prim: 'PUSH', args: [{ prim: 'int' }, { int: '1' }] },
                              { prim: 'ADD' },
                            ],
                          ],
                        },
                        { prim: 'NIL', args: [{ prim: 'operation' }] },
                        { prim: 'PAIR' },
                      ],
                    ],
                  },
                ],
              ],
            },
            { prim: 'SWAP' },
            { prim: 'DROP' },
            { prim: 'CONS' },
            { prim: 'NIL', args: [{ prim: 'int' }] },
            { prim: 'AMOUNT' },
            { prim: 'NONE', args: [{ prim: 'key_hash' }] },
            {
              prim: 'CREATE_CONTRACT',
              args: [
                [
                  { prim: 'parameter', args: [{ prim: 'list', args: [{ prim: 'int' }] }] },
                  { prim: 'storage', args: [{ prim: 'list', args: [{ prim: 'int' }] }] },
                  {
                    prim: 'code',
                    args: [
                      [
                        { prim: 'CAR' },
                        {
                          prim: 'MAP',
                          args: [
                            [
                              { prim: 'PUSH', args: [{ prim: 'int' }, { int: '1' }] },
                              { prim: 'ADD' },
                            ],
                          ],
                        },
                        { prim: 'NIL', args: [{ prim: 'operation' }] },
                        { prim: 'PAIR' },
                      ],
                    ],
                  },
                ],
              ],
            },
            { prim: 'SWAP' },
            { prim: 'DROP' },
            { prim: 'CONS' },
          ],
        },
        metadata: {
          balance_updates: [],
          operation_result: {
            status: 'applied',
            storage: { bytes: '012ffebbf1560632ca767bc960ccdb84669d284c2c' },
            consumed_milligas: '17707000',
            storage_size: '232',
          },
          internal_operation_results: [
            {
              kind: 'origination',
              source: 'KT1CaQ97jZnvA9KgNFSFoNfGXJXJgMrFvqkb',
              nonce: 1,
              balance: '0',
              script: {
                code: [
                  { prim: 'parameter', args: [{ prim: 'list', args: [{ prim: 'int' }] }] },
                  { prim: 'storage', args: [{ prim: 'list', args: [{ prim: 'int' }] }] },
                  {
                    prim: 'code',
                    args: [
                      [
                        { prim: 'CAR' },
                        {
                          prim: 'MAP',
                          args: [
                            [
                              { prim: 'PUSH', args: [{ prim: 'int' }, { int: '1' }] },
                              { prim: 'ADD' },
                            ],
                          ],
                        },
                        { prim: 'NIL', args: [{ prim: 'operation' }] },
                        { prim: 'PAIR' },
                      ],
                    ],
                  },
                ],
                storage: [],
              },
              result: {
                status: 'applied',
                big_map_diff: [],
                balance_updates: [
                  {
                    kind: 'contract',
                    contract: 'tz2Ch1abG7FNiibmV26Uzgdsnfni9XGrk5wD',
                    change: '-60000',
                  },
                  {
                    kind: 'contract',
                    contract: 'tz2Ch1abG7FNiibmV26Uzgdsnfni9XGrk5wD',
                    change: '-257000',
                  },
                ],
                originated_contracts: ['KT1D1AoSDxnmGk8UWFW7DcT9JP1VpLqUNh4F'],
                consumed_milligas: '11560000',
                storage_size: '60',
                paid_storage_size_diff: '60',
              },
            },
            {
              kind: 'origination',
              source: 'KT1CaQ97jZnvA9KgNFSFoNfGXJXJgMrFvqkb',
              nonce: 0,
              balance: '0',
              script: {
                code: [
                  { prim: 'parameter', args: [{ prim: 'list', args: [{ prim: 'int' }] }] },
                  { prim: 'storage', args: [{ prim: 'list', args: [{ prim: 'int' }] }] },
                  {
                    prim: 'code',
                    args: [
                      [
                        { prim: 'CAR' },
                        {
                          prim: 'MAP',
                          args: [
                            [
                              { prim: 'PUSH', args: [{ prim: 'int' }, { int: '1' }] },
                              { prim: 'ADD' },
                            ],
                          ],
                        },
                        { prim: 'NIL', args: [{ prim: 'operation' }] },
                        { prim: 'PAIR' },
                      ],
                    ],
                  },
                ],
                storage: [],
              },
              result: {
                status: 'applied',
                big_map_diff: [],
                balance_updates: [
                  {
                    kind: 'contract',
                    contract: 'tz2Ch1abG7FNiibmV26Uzgdsnfni9XGrk5wD',
                    change: '-60000',
                  },
                  {
                    kind: 'contract',
                    contract: 'tz2Ch1abG7FNiibmV26Uzgdsnfni9XGrk5wD',
                    change: '-257000',
                  },
                ],
                originated_contracts: ['KT1A5V7HHF7Z7QPn5n9dg4EjzTRJ4mnE21zE'],
                consumed_milligas: '11561000',
                storage_size: '60',
                paid_storage_size_diff: '60',
              },
            },
          ],
        },
      },
    ],
    signature:
      'edsigtkpiSSschcaCt9pUVrpNPf7TTcgvgDEDD6NCEHMy8NNQJCGnMfLZzYoQj74yLjo9wx6MPVV29CvVzgi7qEcEUok3k7AuMg',
  };
};

export const multipleInternalTransfer = () => {
  return {
    contents: [
      {
        kind: 'reveal',
        source: 'tz2Ch1abG7FNiibmV26Uzgdsnfni9XGrk5wD',
        fee: '1420',
        counter: '294312',
        gas_limit: '10600',
        storage_limit: '0',
        public_key: 'sppk7aqSksZan1AGXuKtCz9UBLZZ77e3ZWGpFxR7ig1Z17GneEhSSbH',
        metadata: {
          balance_updates: [
            { kind: 'contract', contract: 'tz2Ch1abG7FNiibmV26Uzgdsnfni9XGrk5wD', change: '-1420' },
            {
              kind: 'freezer',
              category: 'fees',
              delegate: 'tz1Ke2h7sDdakHJQh8WX4Z372du1KChsksyU',
              cycle: 104,
              change: '1420',
            },
          ],
          operation_result: { status: 'applied', consumed_milligas: '10000000' },
        },
      },
      {
        kind: 'transaction',
        source: 'tz2Ch1abG7FNiibmV26Uzgdsnfni9XGrk5wD',
        fee: '0',
        counter: '294313',
        gas_limit: '800000',
        storage_limit: '2000',
        amount: '0',
        destination: 'KT1CaQ97jZnvA9KgNFSFoNfGXJXJgMrFvqkb',
        parameters: {
          entrypoint: 'do',
          value: [
            { prim: 'DROP' },
            { prim: 'NIL', args: [{ prim: 'operation' }] },
            {
              prim: 'PUSH',
              args: [{ prim: 'key_hash' }, { string: 'tz3hRZUScFCcEVhdDjXWoyekbgd1Gatga6mp' }],
            },
            { prim: 'IMPLICIT_ACCOUNT' },
            { prim: 'PUSH', args: [{ prim: 'mutez' }, { int: '50' }] },
            { prim: 'UNIT' },
            { prim: 'TRANSFER_TOKENS' },
            { prim: 'CONS' },
            {
              prim: 'PUSH',
              args: [{ prim: 'key_hash' }, { string: 'tz2UBGrEBKzzW6hjXjxxiQFJNg6WR2bm6GEN' }],
            },
            { prim: 'IMPLICIT_ACCOUNT' },
            { prim: 'PUSH', args: [{ prim: 'mutez' }, { int: '50' }] },
            { prim: 'UNIT' },
            { prim: 'TRANSFER_TOKENS' },
            { prim: 'CONS' },
          ],
        },
        metadata: {
          balance_updates: [],
          operation_result: {
            status: 'applied',
            storage: { bytes: '012ffebbf1560632ca767bc960ccdb84669d284c2c' },
            consumed_milligas: '16361000',
            storage_size: '232',
          },
          internal_operation_results: [
            {
              kind: 'transaction',
              source: 'KT1CaQ97jZnvA9KgNFSFoNfGXJXJgMrFvqkb',
              nonce: 1,
              amount: '50',
              destination: 'tz2UBGrEBKzzW6hjXjxxiQFJNg6WR2bm6GEN',
              result: {
                status: 'applied',
                balance_updates: [
                  {
                    kind: 'contract',
                    contract: 'KT1CaQ97jZnvA9KgNFSFoNfGXJXJgMrFvqkb',
                    change: '-50',
                  },
                  {
                    kind: 'contract',
                    contract: 'tz2UBGrEBKzzW6hjXjxxiQFJNg6WR2bm6GEN',
                    change: '50',
                  },
                  {
                    kind: 'contract',
                    contract: 'tz2Ch1abG7FNiibmV26Uzgdsnfni9XGrk5wD',
                    change: '-257000',
                  },
                ],
                consumed_milligas: '10207000',
                allocated_destination_contract: true,
              },
            },
            {
              kind: 'transaction',
              source: 'KT1CaQ97jZnvA9KgNFSFoNfGXJXJgMrFvqkb',
              nonce: 0,
              amount: '50',
              destination: 'tz3hRZUScFCcEVhdDjXWoyekbgd1Gatga6mp',
              result: {
                status: 'applied',
                balance_updates: [
                  {
                    kind: 'contract',
                    contract: 'KT1CaQ97jZnvA9KgNFSFoNfGXJXJgMrFvqkb',
                    change: '-50',
                  },
                  {
                    kind: 'contract',
                    contract: 'tz3hRZUScFCcEVhdDjXWoyekbgd1Gatga6mp',
                    change: '50',
                  },
                  {
                    kind: 'contract',
                    contract: 'tz2Ch1abG7FNiibmV26Uzgdsnfni9XGrk5wD',
                    change: '-257000',
                  },
                ],
                consumed_milligas: '10207000',
                allocated_destination_contract: true,
              },
            },
          ],
        },
      },
    ],
    signature:
      'edsigtkpiSSschcaCt9pUVrpNPf7TTcgvgDEDD6NCEHMy8NNQJCGnMfLZzYoQj74yLjo9wx6MPVV29CvVzgi7qEcEUok3k7AuMg',
  };
};

export const internalTransfer = () => {
  return {
    contents: [
      {
        kind: 'reveal',
        source: 'tz2Ch1abG7FNiibmV26Uzgdsnfni9XGrk5wD',
        fee: '1420',
        counter: '294312',
        gas_limit: '10600',
        storage_limit: '0',
        public_key: 'sppk7aqSksZan1AGXuKtCz9UBLZZ77e3ZWGpFxR7ig1Z17GneEhSSbH',
        metadata: {
          balance_updates: [
            { kind: 'contract', contract: 'tz2Ch1abG7FNiibmV26Uzgdsnfni9XGrk5wD', change: '-1420' },
            {
              kind: 'freezer',
              category: 'fees',
              delegate: 'tz1Ke2h7sDdakHJQh8WX4Z372du1KChsksyU',
              cycle: 104,
              change: '1420',
            },
          ],
          operation_result: { status: 'applied', consumed_milligas: '10000000' },
        },
      },
      {
        kind: 'transaction',
        source: 'tz2Ch1abG7FNiibmV26Uzgdsnfni9XGrk5wD',
        fee: '0',
        counter: '294313',
        gas_limit: '800000',
        storage_limit: '2000',
        amount: '0',
        destination: 'KT1CaQ97jZnvA9KgNFSFoNfGXJXJgMrFvqkb',
        parameters: {
          entrypoint: 'do',
          value: [
            { prim: 'DROP' },
            { prim: 'NIL', args: [{ prim: 'operation' }] },
            {
              prim: 'PUSH',
              args: [{ prim: 'key_hash' }, { string: 'tz1eY5Aqa1kXDFoiebL28emyXFoneAoVg1zh' }],
            },
            { prim: 'IMPLICIT_ACCOUNT' },
            { prim: 'PUSH', args: [{ prim: 'mutez' }, { int: '50' }] },
            { prim: 'UNIT' },
            { prim: 'TRANSFER_TOKENS' },
            { prim: 'CONS' },
          ],
        },
        metadata: {
          balance_updates: [],
          operation_result: {
            status: 'applied',
            storage: { bytes: '012ffebbf1560632ca767bc960ccdb84669d284c2c' },
            consumed_milligas: '15953000',
            storage_size: '232',
          },
          internal_operation_results: [
            {
              kind: 'transaction',
              source: 'KT1CaQ97jZnvA9KgNFSFoNfGXJXJgMrFvqkb',
              nonce: 0,
              amount: '50',
              destination: 'tz1eY5Aqa1kXDFoiebL28emyXFoneAoVg1zh',
              result: {
                status: 'applied',
                balance_updates: [
                  {
                    kind: 'contract',
                    contract: 'KT1CaQ97jZnvA9KgNFSFoNfGXJXJgMrFvqkb',
                    change: '-50',
                  },
                  {
                    kind: 'contract',
                    contract: 'tz1eY5Aqa1kXDFoiebL28emyXFoneAoVg1zh',
                    change: '50',
                  },
                ],
                consumed_milligas: '10207000',
              },
            },
          ],
        },
      },
    ],
    signature:
      'edsigtkpiSSschcaCt9pUVrpNPf7TTcgvgDEDD6NCEHMy8NNQJCGnMfLZzYoQj74yLjo9wx6MPVV29CvVzgi7qEcEUok3k7AuMg',
  };
};

export const delegate = () => {
  return {
    contents: [
      {
        kind: 'reveal',
        source: 'tz2Ch1abG7FNiibmV26Uzgdsnfni9XGrk5wD',
        fee: '1420',
        counter: '294312',
        gas_limit: '10600',
        storage_limit: '0',
        public_key: 'sppk7aqSksZan1AGXuKtCz9UBLZZ77e3ZWGpFxR7ig1Z17GneEhSSbH',
        metadata: {
          balance_updates: [
            { kind: 'contract', contract: 'tz2Ch1abG7FNiibmV26Uzgdsnfni9XGrk5wD', change: '-1420' },
            {
              kind: 'freezer',
              category: 'fees',
              delegate: 'tz1Ke2h7sDdakHJQh8WX4Z372du1KChsksyU',
              cycle: 104,
              change: '1420',
            },
          ],
          operation_result: { status: 'applied', consumed_milligas: '10000000' },
        },
      },
      {
        kind: 'delegation',
        source: 'tz2Ch1abG7FNiibmV26Uzgdsnfni9XGrk5wD',
        fee: '0',
        counter: '294313',
        gas_limit: '800000',
        storage_limit: '2000',
        delegate: 'tz1eY5Aqa1kXDFoiebL28emyXFoneAoVg1zh',
        metadata: {
          balance_updates: [],
          operation_result: { status: 'applied', consumed_milligas: '10000000' },
        },
      },
    ],
    signature:
      'edsigtkpiSSschcaCt9pUVrpNPf7TTcgvgDEDD6NCEHMy8NNQJCGnMfLZzYoQj74yLjo9wx6MPVV29CvVzgi7qEcEUok3k7AuMg',
  };
};

export const origination = () => {
  return {
    contents: [
      {
        kind: 'reveal',
        source: 'tz2Ch1abG7FNiibmV26Uzgdsnfni9XGrk5wD',
        fee: '1420',
        counter: '294312',
        gas_limit: '10600',
        storage_limit: '0',
        public_key: 'sppk7aqSksZan1AGXuKtCz9UBLZZ77e3ZWGpFxR7ig1Z17GneEhSSbH',
        metadata: {
          balance_updates: [
            { kind: 'contract', contract: 'tz2Ch1abG7FNiibmV26Uzgdsnfni9XGrk5wD', change: '-1420' },
            {
              kind: 'freezer',
              category: 'fees',
              delegate: 'tz1Ke2h7sDdakHJQh8WX4Z372du1KChsksyU',
              cycle: 104,
              change: '1420',
            },
          ],
          operation_result: { status: 'applied', consumed_milligas: '10000000' },
        },
      },
      {
        kind: 'origination',
        source: 'tz2Ch1abG7FNiibmV26Uzgdsnfni9XGrk5wD',
        fee: '0',
        counter: '294313',
        gas_limit: '800000',
        storage_limit: '2000',
        balance: '1000000',
        script: {
          code: [
            { prim: 'parameter', args: [{ prim: 'int' }] },
            { prim: 'storage', args: [{ prim: 'int' }] },
            {
              prim: 'code',
              args: [
                [
                  [],
                  [
                    [
                      [[{ prim: 'DUP' }], { prim: 'CAR' }],
                      [
                        [
                          [[{ prim: 'DIP', args: [[{ prim: 'DUP' }]] }, { prim: 'SWAP' }]],
                          { prim: 'CDR' },
                        ],
                        [
                          { prim: 'PUSH', args: [{ prim: 'unit' }, { prim: 'Unit' }] },
                          [
                            [
                              [
                                [
                                  [
                                    {
                                      prim: 'DIP',
                                      args: [
                                        [
                                          [
                                            { prim: 'DIP', args: [[{ prim: 'DUP' }]] },
                                            { prim: 'SWAP' },
                                          ],
                                        ],
                                      ],
                                    },
                                    { prim: 'SWAP' },
                                  ],
                                  [
                                    {
                                      prim: 'DIP',
                                      args: [
                                        [
                                          [
                                            { prim: 'DIP', args: [[{ prim: 'DUP' }]] },
                                            { prim: 'SWAP' },
                                          ],
                                        ],
                                      ],
                                    },
                                    { prim: 'SWAP' },
                                  ],
                                ],
                                { prim: 'ADD' },
                              ],
                              { prim: 'NIL', args: [{ prim: 'operation' }] },
                            ],
                            { prim: 'PAIR' },
                          ],
                        ],
                        [],
                        {
                          prim: 'DIP',
                          args: [
                            [
                              [
                                {
                                  prim: 'DIP',
                                  args: [
                                    [
                                      [
                                        {
                                          prim: 'DIP',
                                          args: [
                                            [
                                              {
                                                prim: 'DIP',
                                                args: [[{ prim: 'DIP', args: [[[]]] }]],
                                              },
                                            ],
                                          ],
                                        },
                                        { prim: 'DROP' },
                                      ],
                                    ],
                                  ],
                                },
                                { prim: 'DROP' },
                              ],
                            ],
                          ],
                        },
                      ],
                      [],
                      {
                        prim: 'DIP',
                        args: [
                          [
                            [
                              { prim: 'DIP', args: [[{ prim: 'DIP', args: [[[]]] }]] },
                              { prim: 'DROP' },
                            ],
                          ],
                        ],
                      },
                    ],
                    { prim: 'DIP', args: [[[{ prim: 'DIP', args: [[[]]] }, { prim: 'DROP' }]]] },
                  ],
                ],
              ],
            },
          ],
          storage: { int: '0' },
        },
        metadata: {
          balance_updates: [],
          operation_result: {
            status: 'applied',
            big_map_diff: [],
            balance_updates: [
              {
                kind: 'contract',
                contract: 'tz2Ch1abG7FNiibmV26Uzgdsnfni9XGrk5wD',
                change: '-314000',
              },
              {
                kind: 'contract',
                contract: 'tz2Ch1abG7FNiibmV26Uzgdsnfni9XGrk5wD',
                change: '-257000',
              },
              {
                kind: 'contract',
                contract: 'tz2Ch1abG7FNiibmV26Uzgdsnfni9XGrk5wD',
                change: '-1000000',
              },
              {
                kind: 'contract',
                contract: 'KT1SHzXbcUAiCSUn5QYca872gYcDACr6AuuC',
                change: '1000000',
              },
            ],
            originated_contracts: ['KT1SHzXbcUAiCSUn5QYca872gYcDACr6AuuC'],
            consumed_milligas: '17832000',
            storage_size: '314',
            paid_storage_size_diff: '314',
          },
        },
      },
    ],
    signature:
      'edsigtkpiSSschcaCt9pUVrpNPf7TTcgvgDEDD6NCEHMy8NNQJCGnMfLZzYoQj74yLjo9wx6MPVV29CvVzgi7qEcEUok3k7AuMg',
  };
};

export const transferWithoutAllocation = () => {
  return {
    contents: [
      {
        kind: 'reveal',
        source: 'tz2Ch1abG7FNiibmV26Uzgdsnfni9XGrk5wD',
        fee: '1420',
        counter: '294312',
        gas_limit: '10600',
        storage_limit: '0',
        public_key: 'sppk7aqSksZan1AGXuKtCz9UBLZZ77e3ZWGpFxR7ig1Z17GneEhSSbH',
        metadata: {
          balance_updates: [
            { kind: 'contract', contract: 'tz2Ch1abG7FNiibmV26Uzgdsnfni9XGrk5wD', change: '-1420' },
            {
              kind: 'freezer',
              category: 'fees',
              delegate: 'tz1Ke2h7sDdakHJQh8WX4Z372du1KChsksyU',
              cycle: 104,
              change: '1420',
            },
          ],
          operation_result: { status: 'applied', consumed_milligas: '10000000' },
        },
      },
      {
        kind: 'transaction',
        source: 'tz2Ch1abG7FNiibmV26Uzgdsnfni9XGrk5wD',
        fee: '0',
        counter: '294313',
        gas_limit: '800000',
        storage_limit: '2000',
        amount: '1900000',
        destination: 'tz1bwsEWCwSEXdRvnJxvegQZKeX5dj6oKEys',
        metadata: {
          balance_updates: [],
          operation_result: {
            status: 'applied',
            balance_updates: [
              {
                kind: 'contract',
                contract: 'tz2Ch1abG7FNiibmV26Uzgdsnfni9XGrk5wD',
                change: '-1900000',
              },
              {
                kind: 'contract',
                contract: 'tz1bwsEWCwSEXdRvnJxvegQZKeX5dj6oKEys',
                change: '1900000',
              },
            ],
            consumed_milligas: '10207000',
          },
        },
      },
    ],
    signature:
      'edsigtkpiSSschcaCt9pUVrpNPf7TTcgvgDEDD6NCEHMy8NNQJCGnMfLZzYoQj74yLjo9wx6MPVV29CvVzgi7qEcEUok3k7AuMg',
  };
};

export const transferWithAllocation = () => {
  return {
    contents: [
      {
        kind: 'reveal',
        source: 'tz2Ch1abG7FNiibmV26Uzgdsnfni9XGrk5wD',
        fee: '1420',
        counter: '294312',
        gas_limit: '10600',
        storage_limit: '0',
        public_key: 'sppk7aqSksZan1AGXuKtCz9UBLZZ77e3ZWGpFxR7ig1Z17GneEhSSbH',
        metadata: {
          balance_updates: [
            { kind: 'contract', contract: 'tz2Ch1abG7FNiibmV26Uzgdsnfni9XGrk5wD', change: '-1420' },
            {
              kind: 'freezer',
              category: 'fees',
              delegate: 'tz1Ke2h7sDdakHJQh8WX4Z372du1KChsksyU',
              cycle: 104,
              change: '1420',
            },
          ],
          operation_result: { status: 'applied', consumed_milligas: '10000000' },
        },
      },
      {
        kind: 'transaction',
        source: 'tz2Ch1abG7FNiibmV26Uzgdsnfni9XGrk5wD',
        fee: '0',
        counter: '294313',
        gas_limit: '800000',
        storage_limit: '2000',
        amount: '1700000',
        destination: 'tz3hRZUScFCcEVhdDjXWoyekbgd1Gatga6mp',
        metadata: {
          balance_updates: [],
          operation_result: {
            status: 'applied',
            balance_updates: [
              {
                kind: 'contract',
                contract: 'tz2Ch1abG7FNiibmV26Uzgdsnfni9XGrk5wD',
                change: '-1700000',
              },
              {
                kind: 'contract',
                contract: 'tz3hRZUScFCcEVhdDjXWoyekbgd1Gatga6mp',
                change: '1700000',
              },
              {
                kind: 'contract',
                contract: 'tz2Ch1abG7FNiibmV26Uzgdsnfni9XGrk5wD',
                change: '-257000',
              },
            ],
            consumed_milligas: '10207000',
            allocated_destination_contract: true,
          },
        },
      },
    ],
    signature:
      'edsigtkpiSSschcaCt9pUVrpNPf7TTcgvgDEDD6NCEHMy8NNQJCGnMfLZzYoQj74yLjo9wx6MPVV29CvVzgi7qEcEUok3k7AuMg',
  };
};

export const preapplyResultFrom = (_params: TransferParams) => {
  const result = [
    {
      contents: [
        {
          kind: 'transaction',
          source: 'tz1bwsEWCwSEXdRvnJxvegQZKeX5dj6oKEys',
          fee: '20000',
          counter: '121528',
          gas_limit: '20000',
          storage_limit: '0',
          amount: '0',
          destination: 'KT1BjNCteztvGsjvbHTtQ5ynWqhjSVdR285M',
          metadata: {
            balance_updates: [
              {
                kind: 'contract',
                contract: 'tz1bwsEWCwSEXdRvnJxvegQZKeX5dj6oKEys',
                change: '-20000',
              },
              {
                kind: 'freezer',
                category: 'fees',
                delegate: 'tz1Ke2h7sDdakHJQh8WX4Z372du1KChsksyU',
                cycle: 48,
                change: '20000',
              },
            ],
            operation_result: {},
          },
        },
      ],
      signature:
        'edsigtood4PgwEsysYdC2UTUCftkov56JYmLBU6eAYP7Knsf2HMJYcs9JjC4ufKGz115EE5Pa6A223ysscdwksEW6scK2b6aNEc',
    },
  ];
  return errorBuilder(result);
};

export const registerGlobalConstantNoReveal = {
  contents: [
    {
      kind: 'register_global_constant',
      source: 'tz2EAB6atB3w7tJPwYF43vymDShZtGLh8TRb',
      fee: '0',
      counter: '8642842',
      gas_limit: '1040000',
      storage_limit: '32768',
      value: {
        prim: 'Pair',
        args: [{ int: '998' }, { int: '999' }],
      },
      metadata: {
        balance_updates: [],
        operation_result: {
          status: 'applied',
          balance_updates: [
            {
              kind: 'contract',
              contract: 'tz2EAB6atB3w7tJPwYF43vymDShZtGLh8TRb',
              change: '-18250',
              origin: 'block',
            },
          ],
          consumed_milligas: '1230000',
          storage_size: '73',
          global_address: 'exprui2KzJsukZATaHBgRCM3vZEZtwYMW3rdJwHm5pCX3KeXVC1Koc',
        },
      },
    },
  ],
  signature:
    'edsigtkpiSSschcaCt9pUVrpNPf7TTcgvgDEDD6NCEHMy8NNQJCGnMfLZzYoQj74yLjo9wx6MPVV29CvVzgi7qEcEUok3k7AuMg',
};

export const registerGlobalConstantWithReveal = {
  contents: [
    {
      kind: 'reveal',
      source: 'tz2EAB6atB3w7tJPwYF43vymDShZtGLh8TRb',
      fee: '1420',
      counter: '294312',
      gas_limit: '10600',
      storage_limit: '0',
      public_key: 'sppk7aqSksZan1AGXuKtCz9UBLZZ77e3ZWGpFxR7ig1Z17GneEhSSbH',
      metadata: {
        balance_updates: [
          { kind: 'contract', contract: 'tz2EAB6atB3w7tJPwYF43vymDShZtGLh8TRb', change: '-1420' },
          {
            kind: 'freezer',
            category: 'fees',
            delegate: 'tz1Ke2h7sDdakHJQh8WX4Z372du1KChsksyU',
            cycle: 104,
            change: '1420',
          },
        ],
        operation_result: { status: 'applied', consumed_milligas: '10000000' },
      },
    },
    registerGlobalConstantNoReveal.contents[0],
  ],
  signature:
    'edsigtkpiSSschcaCt9pUVrpNPf7TTcgvgDEDD6NCEHMy8NNQJCGnMfLZzYoQj74yLjo9wx6MPVV29CvVzgi7qEcEUok3k7AuMg',
};

export const registerGlobalConstantWithError = {
  contents: [
    {
      ...registerGlobalConstantNoReveal.contents[0],
      metadata: {
        balance_updates: [],
        operation_result: {
          status: 'failed',
          errors: [
            {
              kind: 'branch',
              id: 'proto.011-PtHangzH.Expression_already_registered',
            },
            {
              kind: 'permanent',
              id: 'proto.011-PtHangzH.context.storage_error',
              existing_key: [
                'global_constant',
                'f4b54fa94f3255df3ab6a95d0112964d825642706d42de848b3c507ff4602c4a',
                'len',
              ],
            },
          ],
        },
      },
    },
  ],
  signature:
    'edsigtkpiSSschcaCt9pUVrpNPf7TTcgvgDEDD6NCEHMy8NNQJCGnMfLZzYoQj74yLjo9wx6MPVV29CvVzgi7qEcEUok3k7AuMg',
};

export const txRollupOriginateNoReveal = {
  contents: [
    {
      kind: 'tx_rollup_origination',
      source: 'tz2Np59GwL7s4NapRiPmU48Nhz65q1kxVmks',
      fee: '417',
      counter: '236200',
      gas_limit: '1521',
      storage_limit: '4000',
      tx_rollup_origination: {},
      metadata: {
        balance_updates: [
          {
            kind: 'contract',
            contract: 'tz2Np59GwL7s4NapRiPmU48Nhz65q1kxVmks',
            change: '-417',
            origin: 'block',
          },
          {
            kind: 'accumulator',
            category: 'block fees',
            change: '417',
            origin: 'block',
          },
        ],
        operation_result: {
          status: 'applied',
          balance_updates: [
            {
              kind: 'contract',
              contract: 'tz2Np59GwL7s4NapRiPmU48Nhz65q1kxVmks',
              change: '-1000000',
              origin: 'block',
            },
            {
              kind: 'burned',
              category: 'storage fees',
              change: '1000000',
              origin: 'block',
            },
          ],
          consumed_milligas: '1420108',
          originated_rollup: 'txr1WAEQXaXsM1n4R77G5BDfr8pwiFS5SEbBE',
        },
      },
    },
  ],
  signature:
    'sigSX6zMYe1S9SjbJmRvqtvsETEYa9pSH9Y1ShpcUr1PwKr1hBxw2pKFUFZ1yuDDcTMB6GkuxuoPvp4pHrMYuC14Q8xyt4Tz',
};

export const txRollupOriginateWithReveal = {
  contents: [
    {
      kind: 'reveal',
      source: 'tz2SKhBYT6nADXviDrU2HK3nw2jDMfhRNv7P',
      fee: '374',
      counter: '236199',
      gas_limit: '1100',
      storage_limit: '0',
      public_key: 'sppk7cjFJ3JSeJEjimFTdDQq4HgJBjr5PCPj4U94CDGVfQeh3gEY19b',
      metadata: {
        balance_updates: [
          {
            kind: 'contract',
            contract: 'tz2SKhBYT6nADXviDrU2HK3nw2jDMfhRNv7P',
            change: '-374',
            origin: 'block',
          },
          {
            kind: 'accumulator',
            category: 'block fees',
            change: '374',
            origin: 'block',
          },
        ],
        operation_result: {
          status: 'applied',
          consumed_milligas: '1000000',
        },
      },
    },
    {
      kind: 'tx_rollup_origination',
      source: 'tz2SKhBYT6nADXviDrU2HK3nw2jDMfhRNv7P',
      fee: '481',
      counter: '236200',
      gas_limit: '1521',
      storage_limit: '4000',
      tx_rollup_origination: {},
      metadata: {
        balance_updates: [
          {
            kind: 'contract',
            contract: 'tz2SKhBYT6nADXviDrU2HK3nw2jDMfhRNv7P',
            change: '-481',
            origin: 'block',
          },
          {
            kind: 'accumulator',
            category: 'block fees',
            change: '481',
            origin: 'block',
          },
        ],
        operation_result: {
          status: 'applied',
          balance_updates: [
            {
              kind: 'contract',
              contract: 'tz2SKhBYT6nADXviDrU2HK3nw2jDMfhRNv7P',
              change: '-1000000',
              origin: 'block',
            },
            {
              kind: 'burned',
              category: 'storage fees',
              change: '1000000',
              origin: 'block',
            },
          ],
          consumed_milligas: '1420108',
          originated_rollup: 'txr1gJDqppanLyZJ5Yw9VCNqnHswtv9fQ9brL',
        },
      },
    },
  ],
  signature:
    'sigSqrxEBiHXwuXgXUB8S67dtSycbFvduxpi2Fn7LeVdefgr7FicV5KajbW1z44hykdZA6Mznef3fpPXAcbfaYBUYdWPPbXG',
};

export const txRollupSubmitBatchNoReveal = {
  contents: [
    {
      kind: 'tx_rollup_submit_batch',
      source: 'tz1QWLc8oL7Bo7BMa6CKfFioeJ4XdmCFf2xZ',
      fee: '580',
      counter: '249650',
      gas_limit: '2869',
      storage_limit: '0',
      rollup: 'txr1YTdi9BktRmybwhgkhRK7WPrutEWVGJT7w',
      content: '626c6f62',
      metadata: {
        balance_updates: [
          {
            kind: 'contract',
            contract: 'tz2MRqRjuMz7i7GjFcwTGE3HF3cbh9sQavXX',
            change: '-580',
            origin: 'block',
          },
          {
            kind: 'accumulator',
            category: 'block fees',
            change: '580',
            origin: 'block',
          },
        ],
        operation_result: {
          status: 'applied',
          balance_updates: [],
          consumed_milligas: '2768514',
          paid_storage_size_diff: '0',
        },
      },
    },
  ],
  signature:
    'sigey8PfR2sGSVFM7Z6GUyaoNYsehzQDsM9dZysyQ9MMCeB885dXHKuJ7dNUp2pMysq3jwyUqwoDnNRLe5ge2w8ARDVRN5Eb',
};

export const txRollupSubmitBatchWithReveal = {
  contents: [
    {
      kind: 'reveal',
      source: 'tz2SKhBYT6nADXviDrU2HK3nw2jDMfhRNv7P',
      fee: '374',
      counter: '236199',
      gas_limit: '1100',
      storage_limit: '0',
      public_key: 'sppk7cjFJ3JSeJEjimFTdDQq4HgJBjr5PCPj4U94CDGVfQeh3gEY19b',
      metadata: {
        balance_updates: [
          {
            kind: 'contract',
            contract: 'tz2SKhBYT6nADXviDrU2HK3nw2jDMfhRNv7P',
            change: '-374',
            origin: 'block',
          },
          {
            kind: 'accumulator',
            category: 'block fees',
            change: '374',
            origin: 'block',
          },
        ],
        operation_result: {
          status: 'applied',
          consumed_milligas: '1000000',
        },
      },
    },
    {
      kind: 'tx_rollup_submit_batch',
      source: 'tz1QWLc8oL7Bo7BMa6CKfFioeJ4XdmCFf2xZ',
      fee: '580',
      counter: '249650',
      gas_limit: '2869',
      storage_limit: '0',
      rollup: 'txr1YTdi9BktRmybwhgkhRK7WPrutEWVGJT7w',
      content: '626c6f62',
      metadata: {
        balance_updates: [
          {
            kind: 'contract',
            contract: 'tz2MRqRjuMz7i7GjFcwTGE3HF3cbh9sQavXX',
            change: '-580',
            origin: 'block',
          },
          {
            kind: 'accumulator',
            category: 'block fees',
            change: '580',
            origin: 'block',
          },
        ],
        operation_result: {
          status: 'applied',
          balance_updates: [],
          consumed_milligas: '2768514',
          paid_storage_size_diff: '0',
        },
      },
    },
  ],
  signature:
    'sigSqrxEBiHXwuXgXUB8S67dtSycbFvduxpi2Fn7LeVdefgr7FicV5KajbW1z44hykdZA6Mznef3fpPXAcbfaYBUYdWPPbXG',
};

export const TransferTicketNoReveal = {
  contents: [
    {
      kind: 'transfer_ticket',
      source: 'tz1iedjFYksExq8snZK9MNo4AvXHBdXfTsGX',
      fee: '804',
      gas_limit: '5009',
      storage_limit: '130',
      counter: '145',
      ticket_contents: { string: 'foobar' },
      ticket_ty: { prim: 'string' },
      ticket_ticketer: 'KT1AL8we1Bfajn2M7i3gQM5PJEuyD36sXaYb',
      ticket_amount: '2',
      destination: 'KT1SUT2TBFPCknkBxLqM5eJZKoYVY6mB26Fg',
      entrypoint: 'default',
      metadata: {
        balance_updates: [
          {
            kind: 'contract',
            contract: 'tz1iedjFYksExq8snZK9MNo4AvXHBdXfTsGX',
            change: '-804',
            origin: 'block',
          },
          {
            kind: 'accumulator',
            category: 'block fees',
            change: '804',
            origin: 'block',
          },
        ],
        operation_result: {
          status: 'applied',
          balance_updates: [
            {
              kind: 'contract',
              contract: 'tz1iedjFYksExq8snZK9MNo4AvXHBdXfTsGX',
              change: '-16500',
              origin: 'block',
            },
            {
              kind: 'burned',
              category: 'storage fees',
              change: '16500',
              origin: 'block',
            },
          ],
          consumed_milligas: '2122881',
          paid_storage_size_diff: '66',
        },
      },
    },
  ],
  signature:
    'sigSqrxEBiHXwuXgXUB8S67dtSycbFvduxpi2Fn7LeVdefgr7FicV5KajbW1z44hykdZA6Mznef3fpPXAcbfaYBUYdWPPbXG',
};

export const TransferTicketWithReveal = {
  contents: [
    {
      kind: 'reveal',
      source: 'tz2Ch1abG7FNiibmV26Uzgdsnfni9XGrk5wD',
      fee: '1420',
      counter: '294312',
      gas_limit: '10600',
      storage_limit: '0',
      public_key: 'sppk7aqSksZan1AGXuKtCz9UBLZZ77e3ZWGpFxR7ig1Z17GneEhSSbH',
      metadata: {
        operation_result: { status: 'applied', consumed_milligas: '1000000' },
      },
    },
    {
      kind: 'transfer_ticket',
      source: 'tz1iedjFYksExq8snZK9MNo4AvXHBdXfTsGX',
      fee: '804',
      gas_limit: '5009',
      storage_limit: '130',
      counter: '145',
      ticket_contents: { string: 'foobar' },
      ticket_ty: { prim: 'string' },
      ticket_ticketer: 'KT1AL8we1Bfajn2M7i3gQM5PJEuyD36sXaYb',
      ticket_amount: '2',
      destination: 'KT1SUT2TBFPCknkBxLqM5eJZKoYVY6mB26Fg',
      entrypoint: 'default',
      metadata: {
        balance_updates: [
          {
            kind: 'contract',
            contract: 'tz1iedjFYksExq8snZK9MNo4AvXHBdXfTsGX',
            change: '-804',
            origin: 'block',
          },
          {
            kind: 'accumulator',
            category: 'block fees',
            change: '804',
            origin: 'block',
          },
        ],
        operation_result: {
          status: 'applied',
          balance_updates: [
            {
              kind: 'contract',
              contract: 'tz1iedjFYksExq8snZK9MNo4AvXHBdXfTsGX',
              change: '-16500',
              origin: 'block',
            },
            {
              kind: 'burned',
              category: 'storage fees',
              change: '16500',
              origin: 'block',
            },
          ],
          consumed_milligas: '2122881',
          paid_storage_size_diff: '66',
        },
      },
    },
  ],
  signature:
    'sigSqrxEBiHXwuXgXUB8S67dtSycbFvduxpi2Fn7LeVdefgr7FicV5KajbW1z44hykdZA6Mznef3fpPXAcbfaYBUYdWPPbXG',
};

export const updateConsensusKeyNoReveal = {
  contents: [
    {
      kind: 'update_consensus_key',
      source: 'tz1MY8g5UqVmQtpAp7qs1cUwEof1GjZCHgVv',
      fee: '369',
      counter: '19043',
      gas_limit: '1100',
      storage_limit: '0',
      pk: 'edpkti5K5JbdLpp2dCqiTLoLQqs5wqzeVhfHVnNhsSCuoU8zdHYoY7',
      metadata: {
        balance_updates: [
          {
            kind: 'contract',
            contract: 'tz1MY8g5UqVmQtpAp7qs1cUwEof1GjZCHgVv',
            change: '-369',
            origin: 'block',
          },
          {
            kind: 'accumulator',
            category: 'block fees',
            change: '369',
            origin: 'block',
          },
        ],
        operation_result: {
          status: 'applied',
          consumed_gas: '1000',
          consumed_milligas: '1000000',
        },
      },
    },
  ],
  signature:
    'sigrsWF7LpFpUBrTdvLnKm8DMuijk1LcZovZdKZDgsaafTPZhKsvLzPFHDzZYKCy4kobkgxVL7YPGnU5qzJJBcP2cAu5HW1C',
};

export const smartRollupExecuteOutboxMessageNoReveal = {
  contents: [
    {
      kind: 'smart_rollup_execute_outbox_message',
      source: 'tz1adKm6kWEkiejZ9WYpuHvBCgUewtCxpqRF',
      fee: '1618',
      counter: '13',
      gas_limit: '6485',
      storage_limit: '36',
      rollup: 'sr1J4MBaQqTGNwUqfcUusy3xUmH6HbMK7kYy',
      cemented_commitment: 'src13aUmJ5fEVJJM1qH1n9spuppXVAWc8wmHpTaC81pz5rrZN5e628',
      output_proof:
        '030002268259c7843df9a14e2cd5b4d187d3d603a535c64f0cc3ce3c9a3bdd5ecb3d95268259c7843df9a14e2cd5b4d187d3d603a535c64f0cc3ce3c9a3bdd5ecb3d950005820764757261626c65d07eb5216be3fcfd8317136e559c80d1a5eeb8f7b684c2101e92efb2b1b9c5324603746167c00800000004536f6d650003c004a99c0224241978be1e088cf42eaca4bc53a6266842bcbf0ecad4400abeb2e5820576616c7565810370766d8107627566666572738205696e707574820468656164c00100066c656e677468c00100066f75747075740004820132810a6c6173745f6c6576656cc0040000087a0133810f76616c69646974795f706572696f64c00400013b0082013181086f7574626f7865730028001700090006820432313337820468656164c00100066c656e677468c0010004323133380003810468656164c001008208636f6e74656e7473810130c03a000000360000000031010000000b48656c6c6f20776f726c6401bdb6f61e4f12c952f807ae7d3341af5367887dac000000000764656661756c74066c656e677468c00101c0c619e3af574a846a44f61eb98ae7a0007d1e76039f6729e3e113c2f993dad600c0b7b6d5ebea80e0e4b148815c768de7570b7a5ad617a2bf3a3f989df81be9a224c055b19953c4aa26132da57ef8205c8ab61b518fb6e4c87c5853298042d17c98bbc08bac9f033f9d823c04b4de152892edc0767d0634c51c5d311f46a127f730f6950134810d6d6573736167655f6c696d6974c002a401047761736dd04822a3ddd2900dcb30a958d10818ea3d90407a79f88eab967063bac2452e99c7268259c7843df9a14e2cd5b4d187d3d603a535c64f0cc3ce3c9a3bdd5ecb3d950000085a000000000031010000000b48656c6c6f20776f726c6401bdb6f61e4f12c952f807ae7d3341af5367887dac000000000764656661756c74',
      metadata: {
        balance_updates: [
          {
            kind: 'contract',
            contract: 'tz1adKm6kWEkiejZ9WYpuHvBCgUewtCxpqRF',
            change: '-1618',
            origin: 'block',
          },
          {
            kind: 'accumulator',
            category: 'block fees',
            change: '1618',
            origin: 'block',
          },
        ],
        operation_result: {
          status: 'applied',
          balance_updates: [
            {
              kind: 'contract',
              contract: 'tz1adKm6kWEkiejZ9WYpuHvBCgUewtCxpqRF',
              change: '-1250',
              origin: 'block',
            },
            {
              kind: 'burned',
              category: 'storage fees',
              change: '1250',
              origin: 'block',
            },
          ],
          ticket_updates: [],
          consumed_milligas: '4731015',
          paid_storage_size_diff: '5',
        },
        internal_operation_results: [
          {
            kind: 'transaction',
            source: 'sr1J4MBaQqTGNwUqfcUusy3xUmH6HbMK7kYy',
            nonce: 0,
            amount: '0',
            destination: 'KT1RstTQHYxjwHpN8jHaqBPgtxJdMSC4cc3w',
            parameters: { entrypoint: 'default', value: { string: 'Hello world' } },
            result: {
              status: 'applied',
              storage: { string: 'Hello world' },
              balance_updates: [
                {
                  kind: 'contract',
                  contract: 'tz1adKm6kWEkiejZ9WYpuHvBCgUewtCxpqRF',
                  change: '-2750',
                  origin: 'block',
                },
                {
                  kind: 'burned',
                  category: 'storage fees',
                  change: '2750',
                  origin: 'block',
                },
              ],
              consumed_milligas: '1653300',
              storage_size: '52',
              paid_storage_size_diff: '11',
            },
          },
        ],
      },
    },
  ],
  signature:
    'sigs8LVwSkqcMLzTVZWa1yS8aNz26A8bzR6QUHws5uVELh6kcmH7dWz5aKPqW3RXoFfynf5kVCvLJcsP3ucB5P6DEbD2YcQR',
};
