import { SaplingDiffResponse } from '@taquito/rpc';
import BigNumber from 'bignumber.js';

export const witnessString =
  '2020b2eed031d4d6a4f02a097f80b54cc1541d4163c6b6f5971f88b6e41d35c538142012935f14b676509b81eb49ef25f39269ed72309238b4c145803544b646dca62d20e1f34b034d4a3cd28557e2907ebf990c918f64ecb50a94f01d6fda5ca5c7ef722028e7b841dcbc47cceb69d7cb8d94245fb7cb2ba3a7a6bc18f13f945f7dbd6e2a20a5122c08ff9c161d9ca6fc462073396c7d7d38e8ee48cdb3bea7e2230134ed6a20d2e1642c9a462229289e5b0e3b7f9008e0301cbb93385ee0e21da2545073cb582016d6252968971a83da8521d65382e61f0176646d771c91528e3276ee45383e4a20fee0e52802cb0c46b1eb4d376c62697f4759f6c8917fa352571202fd778fd712204c6937d78f42685f84b43ad3b7b00f81285662f85c6a68ef11d62ad1a3ee0850200769557bc682b1bf308646fd0b22e648e8b9e98f57e29f5af40f6edb833e2c492008eeab0c13abd6069e6310197bf80f9c1ea6de78fd19cbae24d4a520e6cf3023208d5fa43e5a10d11605ac7430ba1f5d81fb1b68d29a640405767749e841527673206aca8448d8263e547d5ff2950e2ed3839e998d31cbc6ac9fd57bc6002b15921620cd1c8dbf6e3acc7a80439bc4962cf25b9dce7c896f3a5bd70803fc5a0e33cf00206edb16d01907b759977d7650dad7e3ec049af1a3d875380b697c862c9ec5d51c201ea6675f9551eeb9dfaaa9247bc9858270d3d3a4c5afa7177a984d5ed1be245120d6acdedf95f608e09fa53fb43dcd0990475726c5131210c9e5caeab97f0e642f20bd74b25aacb92378a871bf27d225cfc26baca344a1ea35fdd94510f3d157082c201b77dac4d24fb7258c3c528704c59430b630718bec486421837021cf75dab65120ec677114c27206f5debc1c1ed66f95e2b1885da5b7be3d736b1de98579473048204777c8776a3b1e69b73a62fa701fa4f7a6282d9aee2c7a6b82e7937d7081c23c20ba49b659fbd0b7334211ea6a9d9df185c757e70aa81da562fb912b84f49bce722043ff5457f13b926b61df552d4e402ee6dc1463f99a535f9a713439264d5b616b207b99abdc3730991cc9274727d7d82d28cb794edbc7034b4f0053ff7c4b68044420d6c639ac24b46bd19341c91b13fdcab31581ddaf7f1411336a271f3d0aa52813208ac9cf9c391e3fd42891d27238a81a8a5c1d3a72b1bcbea8cf44a58ce738961320912d82b2c2bca231f71efcf61737fbf0a08befa0416215aeef53e8bb6d23390a20e110de65c907b9dea4ae0bd83a4b0a51bea175646a64c12b4c9f931b2cb31b49202454de574593475b4f6f7d490ecd7fdd181422957e9e9f249bb829a156f96a3820c0d03da6ca9c13c38125ae025e58648775f1c287bed9615a69dc5d05acca8c04202e39482e0a24190bfd7d6c63d135da7c93e4cf1a80ae35f373f78d26c8e69f332031bc6f09e3589a28bab611459f99443dceee8240decd6a073fd88b7b489d39080000000000000000';

export const stateTree =
  '{"height":32,"size":10,"root":"f9d5e2ea38428254197749abb5322d1d3a305565ca1fc9bf2b486eafb0e4f209","tree":["f9d5e2ea38428254197749abb5322d1d3a305565ca1fc9bf2b486eafb0e4f209",["55550e0a02a82f563084268595b17a0c863ead6e8db597b61479f794333a810a",["f4dfbc7515d12e8f179fe6f6219951282c6fc040f139dda159458e314c8c4f52",["33c85ca83ad4070b509a74512628803420eb17af125b7e9c7b1843c20f145c14",["696c0c30ed91f9975526b63978266d063c1c78e41b74a2cab4043712353bf019",["1d65dda50005b6d13e6b657d91ccc049558905051776f63ff90987f1c8b5706d",["2f0eedba3030e4d1e234146a067913af6b4132fae1b7cfba28824d0af8bd7522",["71ed4e314e36ed7a1d886f6dbb1cf1feb57488931926116de25c599b706f3416",["c81bd3c86a7021dd61a7b80769d9de34f8a7c4ab93e461ff7ab06784fcd76729",["f3e2a5604989b70c5be2b5b1d8c2fdc7c668e4e3408a12a0cc0bc748bc6c8425",["14641ba9c749e2ffb9cb13230b46aa590746b811bfa3b4ad539b517b21abc468",["3e4f9e6c53e355b3e821803abd2545beddbeba506ea66ee06d79f53845a84132",["890152dbab1c1ab0154e58c3c4914bfa15a852e8434daeea372185f3c023cf5d",["67ea2511d968a596423f9624b84fd87948d0288a3466459cc6edaa0b18fad60e",["77eaf2e040862589ed85c2dc6b1d02e45503f7acde1fbf59c594d2b4c5e5e729",["b5fb9ffdd4d830c4238e2a38c1d39fdd8bc8eb4f1ffa460afc91b5a1ef1fbe35",["385e57b96d7b14cf358d5605d1b2817a3faec859926a71f9b92f758124d54e6f",["40b38a6739fb5e8368bd3019eaf9ea2575c1074c52c78914a06dbb840d904a6b",["66e41f5d9d4f8fc4239fbd458869cebf16e7464e66cf13711b2593bf102c2f3b",["67c1792989ee7ad67929fdea82ff983a902aa1caad3a93d973c473257cddaf63",["01f1cc7e8fa88ee427d2954f109961fbcfe3cd169d8e4b101698df54dbe71f16",["098eafc44826cfa4e584558afd6eb592f4b915f2d53b3a7273d41d07785a632d",["fe9f9b75e7ee96e52a7af42e5e0e026b855ccf14696787b3dd58f3e79e4de831",["197d82f7d7ddc38c2f52bd30653bcc7abe8673511dc892a8d8a1a8852f52b947",["145463b32450107953de5c8b182b950184dc0a6c14b86ae0f39507728e64f643",["f9d729732d0caa55e96b063a4b1e104a1fa66fc733821365325ce375b7ca7967",["14bb4b818fdc44d3582b535975b879e823d78836bcaff3d584dccfff82c0ee0b",["1d1837100761c5b304b33c3de2e746298a8d57027dcde38d3b04b35bb760e850",["f03ba1e59880fd1568660a5d5d2b069dec6f2e6148ac32895db9fd7530fcd218",["ff270eec65981ba3c1c567bfacbc03ae493ec27627ccfd4818043abffde05c63",["5726cb4663c9a60a2478b760c086dfac4c0f1620a5a879eb922acc1d56a5153e",["fb573cec6a403a312a2b6927051c2be5c5d8a4778899ca91c4ce13f05527c145","17a0d16d9b0dfff332f7829c9c97f7ae74c4998847538aedcc3ffe4edadd1e41","31bc6f09e3589a28bab611459f99443dceee8240decd6a073fd88b7b489d3908"],["2e39482e0a24190bfd7d6c63d135da7c93e4cf1a80ae35f373f78d26c8e69f33","162048ef6cf270453c81a9163b3919b81109f48e22dc348c79c06cef1dfcc45e","e3225f1c75bebb566cce6a2a94fe101f280cb9562230d55bab29d71bd92a4d12"]],["c0d03da6ca9c13c38125ae025e58648775f1c287bed9615a69dc5d05acca8c04",["6a5013c9f85595dee42d0ceb31b3c3631987fff3f255bbc9339c7231b73e6d39","b9f56deba23c77d442d1e5dd9a2c87eadd3a062b2243015f84943bf74e88f819","7e5be2cded4e99767f51ba06dc0b8610545fbe436dfb2f99ca5fe8e1904a4813"],["c1f70099ba241f6c4ffc85cd461034f8cf4713b1ce647bd337471b8706636d2e","0ce5c01a33ed1d870b92878a5bfdc244db15683bda932c85cff34a43a7826f2f","32f571c2aa86d47449577b0bbc3ea942aa62e71ff425b81b4ff9dee2547e6520"]]],["2454de574593475b4f6f7d490ecd7fdd181422957e9e9f249bb829a156f96a38",["65a105e88d801f7878b38a02356c995c09670d6a9208caa3406f7af8c7eef068",["75ef029553ce02495fb3658315b9f11c5d7535a34b29b3d8175940bd426b7857","3b3b1a335a643cbbb708bb7de13a837fe4d402cf76968a03f5884e1b8ddb954a","5192baac04b691bf2d2e0ef3197e8b51e4ea3cd477eda71015735a9c495e4e61"],null],null]],null],null],null],null],null],null],null],null],null],null],null],null],null],null],null],null],null],null],null],null],null],null],null],null],null],null],null],null]}';

export const sapling_state_diff: SaplingDiffResponse = {
  root: 'f9d5e2ea38428254197749abb5322d1d3a305565ca1fc9bf2b486eafb0e4f209',
  commitments_and_ciphertexts: [
    [
      '17a0d16d9b0dfff332f7829c9c97f7ae74c4998847538aedcc3ffe4edadd1e41',
      {
        cv: '29903c784606d64aca3bcaa6774dda35c1e727dfff92f3d9b365f01214f8f761',
        epk: '9a1ebe13be50701d802c60db1f1d73d82f7b0b5aae53deed1252f326141aab3a',
        payload_enc:
          '86413ef92762cea59b418d73284298254ee3a16ce85c5bde80391c56d64ecb8730f66dc28492305e33f5f187b795e0914873b65c030c8198365ea87c5fb2b5c3e8efb9b86c3badc4f054caf53cda83',
        nonce_enc: '00c4991af491d2677166fbdc0828519f7e44d8ea66ce56ac',
        payload_out:
          'e4f7436d591f59694a90fb2d0ed5d001b00f78939a2b5a4f0349469a44718fa4160632cc3fd0ffa25698f6e7e6a57f3d11c4bd8645a9357dca54aa849687097005daee7875b4fb770801261b7678a0e9',
        nonce_out: '612d936ab32db491301bd2c145690c4846024ccc342e7261',
      },
    ],
    [
      '31bc6f09e3589a28bab611459f99443dceee8240decd6a073fd88b7b489d3908',
      {
        cv: '91c2a46be66e8ee755853818834b2dbd9f7aec2f8a182a21a5b09ed2126e8a8e',
        epk: '209dc4d99d1b13d97f53052ccc38b1be7eb2270c62156a0aa6e9a46d296dd261',
        payload_enc:
          'dbe6bf58d86b36f92e9b1b816757dae6be0c257a7e3415fbec127f73d1fda12251474ebe180f8f1dfe22e47d5c4ec6f83a70b8adfd3ff8052d626d51fbe8f04f3e52bd22f5cb3ff4b9fe96307695a4',
        nonce_enc: '4e1a1daa79226ba37286584abb15a01ca0abc2324dd60b1c',
        payload_out:
          'dfe091b061bd13fe1d5f93e5675580eb1f52a8de3347cd23f7a0588ebbf488522504d5def67bb3907e62763ec2a21cdad6a241ce1332741e6619176f8dfa8ba3608037c4ec5c862091b726bf11b5cbf3',
        nonce_out: '6f9d3b998f3a192ff69418d944bf7d3834849cf641e295e6',
      },
    ],
    [
      '162048ef6cf270453c81a9163b3919b81109f48e22dc348c79c06cef1dfcc45e',
      {
        cv: '852d373c5b7de982bbaa1df8bcedd30f8eecb586fbda7103bb474d5d2af4e21f',
        epk: '3e0d0b2689d0416b097ff810bc3e13a081533ab61fc3df083365d151a5fae987',
        payload_enc:
          'b4f8fe4ddece708b675de9501060d521e22ddfba085b93b8db50d3d7acd4ff61b541c7655c1df16d283b2d3628e9b638f38a855bfdb80008dda3fdc880fca89bf017c4e4a6264cd74e3f61cc9ab0fa',
        nonce_enc: 'fb68709da26ee3cc646c6c7c265fba5942b332805ea9afcb',
        payload_out:
          'e4705fb0bc7b3dbd65532cc4a39535f1f2cc0dcac97c4dda1052ba1980dacd2020d1dfd859c59f0560ad6cccf868cd340f4b35fb1d1ae08570649cef7f178e39cea1cc5af56bf1124ba8157cf00e1e60',
        nonce_out: 'ed771ecf0d034228b21ce52cfda9656b24fe337da8c9d26d',
      },
    ],
    [
      'e3225f1c75bebb566cce6a2a94fe101f280cb9562230d55bab29d71bd92a4d12',
      {
        cv: '14a33012e3d44e08c36929f224b880bd3da85e10ab7d52517c6b048c28d9aa6b',
        epk: 'e7ec10481c88e7f07983a8bbf206235283a7f6ff5b4f17f89fc560ca9cfd99d2',
        payload_enc:
          'f0a77994b66156d17001460e53e46b25ab1fe23c4ad91ab7a9bedcea8bfa3f1ee6af1d179b53d7487c3a6e84f438f62f8e146a4c59f003983590c5d0ba7753288109177aac265598e0db736cc4ca08',
        nonce_enc: 'b606f5151b3fe65cbc77bc119f5b80f2afca69c60a59c0a6',
        payload_out:
          '4850946d61d9d23222273cc814925bd056ed7d27143d5de08e026c066ab298cdd5a0654090b52bdc9c0dcab0ad17aed4d23b9baca364fdb17863f703290724e127aecf6f0d3ec7011bd7150de9488054',
        nonce_out: '1c28946b68cd9ac92c0b2ee63cf5edabf322d623ccf6d4ca',
      },
    ],
    [
      'b9f56deba23c77d442d1e5dd9a2c87eadd3a062b2243015f84943bf74e88f819',
      {
        cv: 'a941b9d1438e343071cdcb3bb995122148d0a0ed025e028f8b3cdacf499e68a0',
        epk: '364bc6e996d3d0a05a040e118c51d71bf9e46b06cd40290d96722872d80c71a0',
        payload_enc:
          '30b015e9d5a3ae90761282133298d74b24e31d4d180ba9b7230bb6b8f97f6aa02616c39f493cc37701a689c9d73a54905ba29c13b4b35b91fd1a98173158f820421c950ce20b6ce361a7c53f2fe8a6',
        nonce_enc: '6e185edf71b86a1aac2a10a886fabdb1f44c69edf7f2cf11',
        payload_out:
          '95d9090ad52b28151954ee65821b8262ebe541abbde05ed13a979d9c684622d5f8dc5e0bf9fc3361b30883986d6b48ea497bd18814ab7db1b0d4274b574a8770da7bc7590769110de863342f159803c4',
        nonce_out: '655bcc29cc35c4c84b245f0981b7314d9e92e415f21dd42a',
      },
    ],
    [
      '7e5be2cded4e99767f51ba06dc0b8610545fbe436dfb2f99ca5fe8e1904a4813',
      {
        cv: 'cd240d58ec6ce9c43e2f73e9f7fe4e1828fdac29b5d7c3fe56cae980c388b02c',
        epk: '369cc9456781ad61eec786e909d58e536cd4092b6e3895309a7ef2f417fa7e59',
        payload_enc:
          '2971ff46b62f0b37c4c0f597dfd45b080417d8ced6cd754dcfcf22b1a37e7c958b7be1e5851650a290fe05319dd1f19b6b1259d9c95842981a1e055c57818cb985c005263172b5a093cefd954ffb6c',
        nonce_enc: '3b7186aa27269d54a0649c63d92aeafe6d82e66cba932f90',
        payload_out:
          'ce2e5eac06bab8a574d59d090ed5ba22baa46e2f416426b3c7c6586d090348f1503f08107a187122f2aeaaf6c3d26d1f4ceb32e085e5ce1cb9971544f66971c8305f0fcd33f26c06e962577295752e62',
        nonce_out: '2d5ae2563fe6036bd2e013a1aa4c079c799d9ca3ee9b18f5',
      },
    ],
    [
      '0ce5c01a33ed1d870b92878a5bfdc244db15683bda932c85cff34a43a7826f2f',
      {
        cv: '5048e97192f6139f11a9850dfd539dde1ccbe4dc9810a30a73fef1f7bbcffcc5',
        epk: 'eccfd5b3af018af90631fd5e98630139f030b8be761b5feb469590876026da44',
        payload_enc:
          'eb330fd5550b69be6ade7c7b75c18c84983890c2c175c532ab1d674459ef697efa1f6b491c0f6126ccdaa016b880a64658c2b65812f7f0b41239a320ad41880fc6e86689c1e51ea1084abc670d7508',
        nonce_enc: '819f14c3b4e4542d1412a6844447156376ece2f8708bc03b',
        payload_out:
          '2f6f60af96bf6348158a4b074c19e03e9c8ae1898485706677929681cea4809e1fe97ae31bec4ba5cc7f591406b728f2933fe83409610730487044a2203be23c985510e5fb8b2f512ced680b17f737e5',
        nonce_out: '790c2e02773a9140e592c61dc8146c312405da3bb14dcad4',
      },
    ],
    [
      '32f571c2aa86d47449577b0bbc3ea942aa62e71ff425b81b4ff9dee2547e6520',
      {
        cv: 'e6058c972155a95bf6f9e936e5fc4cc31b9fc312ddc5a150d3fcaa180a4b9ca1',
        epk: 'a0ee06dd62859072b5aba2f992955e3b1adcb4302ba07f73166567416810d4c9',
        payload_enc:
          '42e809b2d983d4ad1ea410c857bcf86953f221dddf864d898f42e9abf40827c9535787857efb94e5a4a303472153e3b19b190377069c46049d06c17ce79d4f12b03da0d3fd2bfa706e8ca57577676e',
        nonce_enc: '54763be5aa94b476cecb85a6037f12a5e2fc5660f9983fdb',
        payload_out:
          '53b861e96007dc2e755d39881d37fb6f04096149b5c6e3b98c21ae44e2b92408aabc4254f41d872e975e63b9e5c2dae16726f1c3d0abef740ae798b3b01e792a15a7d44f274d746a153cab16ad90adef',
        nonce_out: 'ed205fc4af280fd6de8cbc0872e19e1b0386ade633ed214c',
      },
    ],
    [
      '3b3b1a335a643cbbb708bb7de13a837fe4d402cf76968a03f5884e1b8ddb954a',
      {
        cv: '22f58bdd65f552109b2589206f9ae5a04ff75ff15268ec04bfbebcb178c985c0',
        epk: 'c1d656dc06959e7cae1040b043333833fe15921bb155f489e88d95c75cbaecde',
        payload_enc:
          'eda5208cd246a7d8c9df46dd21b3e376cb4a9fd8dbc504c3b0eda7bdd1a9fa41b3b448159f900bdc16fb5099b8126df472c17d6e365dfaef23b9455c237dea0742096d97746874a37a8f99cf2c2241',
        nonce_enc: 'fd02b5a5711edf00f049b1746726746b447f0b9a9f1696ba',
        payload_out:
          'dbb978329fa6c13c21199a4d3580f1102e68d71828afe2f88802e545e2679f9f5108be310130a2479b9b55702552103b20122cc31d83a93b619eea21d213881c03c2440bb081f0249b927933ec7805bb',
        nonce_out: '960a7c13f39bbdaa43d56431929ce67fa44ba8b54e41b994',
      },
    ],
    [
      '5192baac04b691bf2d2e0ef3197e8b51e4ea3cd477eda71015735a9c495e4e61',
      {
        cv: '41bea901cff892d0ef5733630054f97677c0871a09f01b08e2f75cd3ba32c919',
        epk: 'e679ed8b8214d479d3eabf3645b2c9cefe4f94bd376c16abdef5b398d7e3cee6',
        payload_enc:
          '5826822893c6a3b6df011c31e417463dddbbcf29c53d1f2f3cd11275cc1d2f4fcbc85a39697dcac10db856d919d10eb17f3594685e9b3c5234926ede78df08337e33f2d4ce1ad0bcece80b8668259d',
        nonce_enc: '98a0c3153cd3dc8ee27e5c516ed372dfd82a9b3bb586337c',
        payload_out:
          '6c7ca66c01fd03239c12083e24acba91f5630b40b639d8f818f3363dbd0da66ca4baaa6dd89c752a87da5ea8cbf1e6a7a1430f68a9e335116e52b3a8771e0193f47d5a3dc008cf85e770dd5478aa6d60',
        nonce_out: 'db00e3c52b4cb858312f584a6852e49ec4f8c65de7eb98a5',
      },
    ],
  ],
  nullifiers: [
    '42f38b69d2cbf0fed3fcc90dd10dd7e3081800a3c1c5c4f134833ffbb01c234a',
    '62954762f2c6e09973caeabd050c1c17961776ddb959aa822a6fdc2bd5bf23af',
    'eee0356291fdc6afa23402047662a4270b6defdc3836091a1a47cd3cd2c3c836',
    'b87015941340848c4ed1b2852c9371476b7706ef00b9d88ed64cb503bbf6f937',
  ],
};

export const ct = {
  commitmentValue: Buffer.from(
    '5990ecf3bba4ea96f6ea3623c9825c2fec949c6454325eea02edb96f8f67c4d1',
    'hex'
  ),
  ephemeralPublicKey: Buffer.from(
    '3d6713c38c922231eb9913506b6f3e3fe97dcfd49473b635116897ad958dd7b7',
    'hex'
  ),
  payloadEnc: Buffer.from(
    '2929fb7899d521475898b5ae3e08b64a1f48b304cae6d420c45f68e9d9731d1fa0ce24187200561cc0720b40bc7dfa4b6b721312af56d7a4ecfebe7dc6d29a3acb61968a1b1588158adc89c8c861c3',
    'hex'
  ),
  nonceEnc: Buffer.from('0dfee76a654f660d5fc8b60da0c63b600ab52fa13dc957d2', 'hex'),
  payloadOut: Buffer.from(
    '7c761c915a79a50c7ba20316ec9e4248c3692e65833141d2f0eb3a8ceeb6f78a2beba6b3b8ac12719a29c75628c089ead1d317868a39f35cda9789549c0524c5279acf92f591b886444dc435bf202b3c',
    'hex'
  ),
  nonceOut: Buffer.from('5f484cf9c9c2c671107447632f648d1acee6039dc37a2d33', 'hex'),
};

export const outputDescription = [
  {
    commitment: Buffer.from(
      '2ce279d669436c31dcf28b8341bfe9163ae60dcc05c483c3ab6647186e706906',
      'hex'
    ),
    proof: Buffer.from(
      '8991859c7b6ec23e9d1b7634a93b549bc190bf0bde3dfaf82e33fc215ef70eac93cc197deb25f0e79a78eb99c417ef7b985a7461529ae5df99cc21285e60f21746a1572ffe2e4ed9db617912fcc38d050ea876eddb18786f240437eb256c156419fe1e3546d7c21caf771d726af7350ab00d95c07b0c7bfd068bb6bb4d10ec4480fbaa710f5e6d5a78e0499cc41ec093a6c177aaa1e9156934feaeb08b8f71dbe2bb6b52023d5b9a250e5c90ef73982a8c049d068f8e4753491299dac24d5424',
      'hex'
    ),
    ciphertext: ct,
  },
];

export const spendDescription = [
  {
    commitmentValue: Buffer.from(
      '25919e0a5b8cdd62985613838f8d26e6f53ee491946bf055aea003e69773816e',
      'hex'
    ),
    nullifier: Buffer.from(
      '208c4e296a95c34bf3886f62b3eaabc3c28feaf8067bf493030ae1f689fc4d85',
      'hex'
    ),
    randomizedPublicKey: Buffer.from(
      '2658565805aeb044d7a5c7cc1b65fe967e4b5fcd8f3ae42758bf014150c24c5e',
      'hex'
    ),
    proof: Buffer.from(
      'b2a06c5d13b05df8546c51a725e2c7ac7f671fa89ccf912a1ca81f8ef1cc652d563574f57dc094c1bf49eb7cd66acd3096191a5226239969e198259ec00b1218c949be6a982ea356a30fb5c0a2205767fe97e6654ea15ddeec0520f76cf96a0315b26ed670e529439c6bd80d74167167356adada9c1fd02bab9f165578d703bea3cb06e4aa19e9bb736d196eebd20e809709f28f88d3b82015171e7c18c94b013d3161e0847f53eaeecba0b1577d78a4dda9426f152953e4ece672f2f730b0e7',
      'hex'
    ),
    signature: Buffer.from(
      '3f7ede556eb3be9d801b642980b23b7caf4e1ed00f5fa7ad76ef7993419d43c121560696866e1aa40822ea2785b828befe9f16fb979e8b6365b769ef9e71cf08',
      'hex'
    ),
  },
];

export const transaction = {
  inputs: spendDescription,
  outputs: outputDescription,
  signature: Buffer.from(
    'fcda27280bbfcd3b2e4aa744c017095ef0ef0e7d6b41a3a50ce2ddf181c4cb9f5460888a4f6f5e7fa5bcc8474e9a100920ef68eb2ef7ee0fde46c8849c1f250e',
    'hex'
  ),
  balance: new BigNumber('0'),
  root: '394014364027c953a527172390d9ac9d9bbe01089389ef664acd732cd62e4028',
  boundData: Buffer.from('', 'hex'),
};

export const txPlainText = {
  diversifier: Buffer.from('6f3d5e524fa92140aeeeba', 'hex'),
  amount: '2000000',
  randomCommitmentTrapdoor: Buffer.from(
    '7ac1402d90bc7c0211690babf7bb0a9975fd7f5c0e0fd2307d095e851ab83505',
    'hex'
  ),
  memoSize: 16,
  memo: 'A gift',
};
