/* eslint-disable @typescript-eslint/no-non-null-assertion */
export const rpcContractResponse = {"manager":"tz1g3oS1UPgWFFpxrc2pEn4sgV3ky1Z6Qaz2","balance":"1300000000","spendable":false,"delegate":{"setable":false},"script":{"code":[{"prim":"parameter","args":[{"prim":"or","args":[{"prim":"or","args":[{"prim":"pair","args":[{"prim":"address","annots":[":from"]},{"prim":"pair","args":[{"prim":"address","annots":[":to"]},{"prim":"nat","annots":[":val"]}]}],"annots":["%safeTransfer"]},{"prim":"or","args":[{"prim":"pair","args":[{"prim":"address","annots":[":to"]},{"prim":"nat"}],"annots":["%mint"]},{"prim":"pair","args":[{"prim":"address","annots":[":from"]},{"prim":"nat"}],"annots":["%burn"]}]}]},{"prim":"or","args":[{"prim":"option","args":[{"prim":"address"}],"annots":["%setApprover"]},{"prim":"or","args":[{"prim":"pair","args":[{"prim":"unit"},{"prim":"contract","args":[{"prim":"pair","args":[{"prim":"unit"},{"prim":"option","args":[{"prim":"nat"}]}]}]}],"annots":["%getTotalSupply"]},{"prim":"pair","args":[{"prim":"address"},{"prim":"contract","args":[{"prim":"pair","args":[{"prim":"address"},{"prim":"option","args":[{"prim":"option","args":[{"prim":"nat"}]}]}]}]}],"annots":["%getBalance"]}]}]}]}]},{"prim":"storage","args":[{"prim":"pair","args":[{"prim":"big_map","args":[{"prim":"address"},{"prim":"nat"}]},{"prim":"pair","args":[{"prim":"nat","annots":["%totalSupply"]},{"prim":"pair","args":[{"prim":"option","args":[{"prim":"address"}],"annots":["%approver"]},{"prim":"address","annots":["%centralBank"]}]}]}]}]},{"prim":"code","args":[[[{"prim":"DUP"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"CDR"}]]}],[{"prim":"IF_LEFT","args":[[{"prim":"IF_LEFT","args":[[[{"prim":"DIP","args":[[[{"prim":"DUP"},[{"prim":"CDR"},{"prim":"CDR"},{"prim":"CDR"}],{"prim":"SOURCE"},[{"prim":"COMPARE"},{"prim":"EQ"}]],{"prim":"DIP","args":[[[{"prim":"DUP"},[{"prim":"CDR"},{"prim":"CDR"},{"prim":"CAR"}],[{"prim":"IF_NONE","args":[[{"prim":"PUSH","args":[{"prim":"bool"},{"prim":"False"}]}],[{"prim":"SENDER"},[{"prim":"COMPARE"},{"prim":"EQ"}]]]}]]]]},{"prim":"OR"},[{"prim":"IF","args":[[],[{"prim":"UNIT"},{"prim":"FAILWITH"}]]}]]]},{"prim":"SWAP"},[{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"}],[{"prim":"DUP"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"CDR"},{"prim":"DUP"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"CDR"}]]}]]}],{"prim":"DIP","args":[[{"prim":"DROP"}]]},{"prim":"PAIR"},[[{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"}],{"prim":"CAR"},[{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"}],{"prim":"CAR"},{"prim":"GET"},[{"prim":"IF_NONE","args":[[{"prim":"UNIT"},{"prim":"FAILWITH"}],[]]}]],[[{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"}],{"prim":"CDR"},{"prim":"SWAP"},{"prim":"SUB"},{"prim":"DUP"},[[{"prim":"GE"},{"prim":"IF","args":[[],[[{"prim":"UNIT"},{"prim":"FAILWITH"}]]]}]],{"prim":"DUP"},{"prim":"EQ"},{"prim":"IF","args":[[{"prim":"DROP"},{"prim":"NONE","args":[{"prim":"nat"}]}],[{"prim":"ISNAT"}]]}],[[{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"}],{"prim":"CAR"},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"SWAP"},[{"prim":"DUP"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"CDR"}]]}]]]}]]}],{"prim":"UPDATE"},{"prim":"PAIR"},{"prim":"SWAP"}],{"prim":"DROP"},[{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"}],[{"prim":"DUP"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"CDR"},{"prim":"DUP"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"CDR"}]]}]]}],{"prim":"DROP"},{"prim":"PAIR"},[[{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"}],{"prim":"CAR"},[{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"}],{"prim":"CAR"},{"prim":"GET"}],[[{"prim":"IF_NONE","args":[[{"prim":"DUP"},{"prim":"CDR"}],[[{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"}],{"prim":"CDR"},{"prim":"ADD"}]]}]],[{"prim":"SOME"},[{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"}],{"prim":"CAR"},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"SWAP"},[{"prim":"DUP"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"CDR"}]]}]]]}]]}],{"prim":"UPDATE"},{"prim":"PAIR"},{"prim":"SWAP"}],{"prim":"DROP"},{"prim":"DIP","args":[[{"prim":"DROP"}]]},{"prim":"NIL","args":[{"prim":"operation"}]},{"prim":"PAIR"}]],[{"prim":"IF_LEFT","args":[[[{"prim":"DIP","args":[[[{"prim":"DUP"},[{"prim":"CDR"},{"prim":"CDR"},{"prim":"CDR"}],{"prim":"SOURCE"},[{"prim":"COMPARE"},{"prim":"EQ"}]],[{"prim":"IF","args":[[],[{"prim":"UNIT"},{"prim":"FAILWITH"}]]}]]]},[[{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"}],{"prim":"CAR"},[{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"}],{"prim":"CAR"},{"prim":"GET"}],[[{"prim":"IF_NONE","args":[[{"prim":"DUP"},{"prim":"CDR"}],[[{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"}],{"prim":"CDR"},{"prim":"ADD"}]]}]],[{"prim":"SOME"},[{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"}],{"prim":"CAR"},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"SWAP"},[{"prim":"DUP"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"CDR"}]]}]]]}]]}],{"prim":"UPDATE"},{"prim":"PAIR"},{"prim":"SWAP"}],{"prim":"DROP"},{"prim":"NIL","args":[{"prim":"operation"}]},{"prim":"PAIR"}]],[[{"prim":"DIP","args":[[[{"prim":"DUP"},[{"prim":"CDR"},{"prim":"CDR"},{"prim":"CDR"}],{"prim":"SOURCE"},[{"prim":"COMPARE"},{"prim":"EQ"}]],[{"prim":"IF","args":[[],[{"prim":"UNIT"},{"prim":"FAILWITH"}]]}]]]},[[{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"}],{"prim":"CAR"},[{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"}],{"prim":"CAR"},{"prim":"GET"},[{"prim":"IF_NONE","args":[[{"prim":"UNIT"},{"prim":"FAILWITH"}],[]]}]],[[{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"}],{"prim":"CDR"},{"prim":"SWAP"},{"prim":"SUB"},{"prim":"DUP"},[[{"prim":"GE"},{"prim":"IF","args":[[],[[{"prim":"UNIT"},{"prim":"FAILWITH"}]]]}]],{"prim":"DUP"},{"prim":"EQ"},{"prim":"IF","args":[[{"prim":"DROP"},{"prim":"NONE","args":[{"prim":"nat"}]}],[{"prim":"ISNAT"}]]}],[{"prim":"IF_NONE","args":[[{"prim":"UNIT"},{"prim":"FAILWITH"}],[]]}],[{"prim":"SOME"},[{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"}],{"prim":"CAR"},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"SWAP"},[{"prim":"DUP"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"CDR"}]]}]]]}]]}],{"prim":"UPDATE"},{"prim":"PAIR"},{"prim":"SWAP"}],{"prim":"DROP"},{"prim":"NIL","args":[{"prim":"operation"}]},{"prim":"PAIR"}]]]}]]}],[{"prim":"IF_LEFT","args":[[[{"prim":"DIP","args":[[[{"prim":"DUP"},[{"prim":"CDR"},{"prim":"CDR"},{"prim":"CDR"}],{"prim":"SOURCE"},[{"prim":"COMPARE"},{"prim":"EQ"}]],[{"prim":"IF","args":[[],[{"prim":"UNIT"},{"prim":"FAILWITH"}]]}]]]},{"prim":"DIP","args":[[[{"prim":"DUP"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"CDR"},{"prim":"DUP"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"CDR"},{"prim":"DUP"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"CDR"}]]}]]}]]}]]]},{"prim":"SWAP"},{"prim":"DIP","args":[[{"prim":"SWAP"},{"prim":"DIP","args":[[{"prim":"SWAP"},{"prim":"DROP"}]]}]]},[{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"PAIR"}]]},{"prim":"PAIR"}]]},{"prim":"PAIR"}],{"prim":"NIL","args":[{"prim":"operation"}]},{"prim":"PAIR"}]],[{"prim":"IF_LEFT","args":[[[[{"prim":"DUP"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"CDR"}]]},{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"}]]},{"prim":"DUP"},{"prim":"DIP","args":[[{"prim":"PAIR"},[{"prim":"CDR"},{"prim":"CDR"},{"prim":"CAR"}],{"prim":"SOME"}]]},{"prim":"PAIR"},{"prim":"DIP","args":[[{"prim":"AMOUNT"}]]},{"prim":"TRANSFER_TOKENS"},{"prim":"NIL","args":[{"prim":"operation"}]},{"prim":"SWAP"},{"prim":"CONS"},{"prim":"PAIR"}]]],[[[{"prim":"DUP"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"CDR"}]]},{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"}]]},{"prim":"DUP"},{"prim":"DIP","args":[[{"prim":"PAIR"},[{"prim":"DUP"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"CDR"}]]}],{"prim":"DIP","args":[[{"prim":"CAR"}]]},{"prim":"GET"},{"prim":"SOME"}]]},{"prim":"PAIR"},{"prim":"DIP","args":[[{"prim":"AMOUNT"}]]},{"prim":"TRANSFER_TOKENS"},{"prim":"NIL","args":[{"prim":"operation"}]},{"prim":"SWAP"},{"prim":"CONS"},{"prim":"PAIR"}]]]]}]]}]]}]]]}],"storage":{"prim":"Pair","args":[[],{"prim":"Pair","args":[{"int":"1000"},{"prim":"Pair","args":[{"prim":"Some","args":[{"string":"tz1g3oS1UPgWFFpxrc2pEn4sgV3ky1Z6Qaz2"}]},{"string":"tz1g3oS1UPgWFFpxrc2pEn4sgV3ky1Z6Qaz2"}]}]}]}},"counter":"0"}
export const storage = rpcContractResponse.script.code.find(
    x => x.prim === 'storage'
  )!.args[0] as any;
  