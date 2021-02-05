import fs from "fs";
import path from "path";
import { inspect } from "util";
import { Contract, ContractOptions } from "../src/michelson-contract";
import { Protocol } from "../src/michelson-types";
import { MichelsonError } from "../src/utils";

const contracts: {
    [group: string]: string[];
} = {
    "mini_scenarios": [
        "xcat.tz",
        "vote_for_delegate.tz",
        "parameterized_multisig.tz",
        "hardlimit.tz",
        "authentication.tz",
        "lockup.tz",
        "replay.tz",
        "create_contract.tz",
        "reveal_signed_preimage.tz",
        "xcat_dapp.tz",
        "default_account.tz",
        "multiple_en2.tz",
        "weather_insurance.tz",
        "big_map_entrypoints.tz",
        "multiple_entrypoints_counter.tz",
        "big_map_magic.tz",
        "create_contract_simple.tz",
    ],
    /*
    "ill_typed": [
        "multiple_code_field.tz",
        "set_update_non_comparable.tz",
        "pack_operation.tz",
        "multiple_storage_field.tz",
        "missing_only_storage_field.tz",
        "contract_annotation_default.tz",
        "multiple_storage_and_code_fields.tz",
        "invalid_self_entrypoint.tz",
        "chain_id_arity.tz",
        "missing_only_parameter_field.tz",
        "big_dip.tz",
        "missing_only_code_field.tz",
        "big_map_arity.tz",
        "big_drop.tz",
        "pack_big_map.tz",
        "missing_parameter_and_storage_fields.tz",
        "multiple_parameter_field.tz",
    ],
    */
    "macros": [
        "assert_neq.tz",
        "assert_cmpge.tz",
        "compare.tz",
        "take_my_money.tz",
        "assert_ge.tz",
        "guestbook.tz",
        "map_caddaadr.tz",
        "big_map_get_add.tz",
        "assert_lt.tz",
        "assert_cmplt.tz",
        "pair_macro.tz",
        "macro_annotations.tz",
        "fail.tz",
        "min.tz",
        "assert_gt.tz",
        "assert_cmpeq.tz",
        "unpair_macro.tz",
        "set_caddaadr.tz",
        "assert.tz",
        "max_in_list.tz",
        "compare_bytes.tz",
        "assert_cmpneq.tz",
        "assert_cmpgt.tz",
        "assert_eq.tz",
        "assert_cmple.tz",
        "build_list.tz",
        "big_map_mem.tz",
        "assert_le.tz",
    ],
    "entrypoints": [
        "no_default_target.tz",
        "no_entrypoint_target.tz",
        "manager.tz",
        "big_map_entrypoints.tz",
        "rooted_target.tz",
        "delegatable_target.tz",
        "simple_entrypoints.tz",
    ],
    "opcodes": [
        "diff_timestamps.tz",
        "if.tz",
        "and.tz",
        "loop_left.tz",
        "transfer_amount.tz",
        "concat_hello.tz",
        "dip.tz",
        "self_with_default_entrypoint.tz",
        "create_contract_rootname_alt.tz",
        "check_signature.tz",
        "set_car.tz",
        "pexec_2.tz",
        "cons.tz",
        "int.tz",
        "compare.tz",
        "map_id.tz",
        "contains_all.tz",
        "failwith_big_map.tz",
        "source.tz",
        "map_iter.tz",
        "dropn.tz",
        "self_with_entrypoint.tz",
        "mul_overflow.tz",
        "create_contract_rootname.tz",
        "balance.tz",
        "reverse_loop.tz",
        "contract.tz",
        "tez_add_sub.tz",
        "slices.tz",
        "set_iter.tz",
        "list_map_block.tz",
        "list_size.tz",
        "set_id.tz",
        "merge_comparable_pairs.tz",
        "list_concat_bytes.tz",
        "ediv_mutez.tz",
        "map_mem_string.tz",
        "set_cdr.tz",
        "concat_hello_bytes.tz",
        "ediv.tz",
        "set_size.tz",
        "list_iter.tz",
        "cdr.tz",
        "list_id.tz",
        "xor.tz",
        "noop.tz",
        "transfer_tokens.tz",
        "or_binary.tz",
        "big_map_mem_string.tz",
        "hash_string.tz",
        "if_some.tz",
        "first.tz",
        "packunpack.tz",
        "dugn.tz",
        "and_logical_1.tz",
        "map_size.tz",
        "subset.tz",
        "not_binary.tz",
        "ret_int.tz",
        "slice_bytes.tz",
        "chain_id_store.tz",
        "add_delta_timestamp.tz",
        "add_timestamp_delta.tz",
        "list_concat.tz",
        "not.tz",
        "mul.tz",
        "car.tz",
        "create_contract.tz",
        "and_binary.tz",
        "self.tz",
        "get_big_map_value.tz",
        "big_map_mem_nat.tz",
        "exec_concat.tz",
        "pexec.tz",
        "map_mem_nat.tz",
        "map_car.tz",
        "abs.tz",
        "packunpack_rev_cty.tz",
        "big_map_to_self.tz",
        "store_input.tz",
        "map_map.tz",
        "packunpack_rev.tz",
        "chain_id.tz",
        "concat_list.tz",
        "or.tz",
        "split_bytes.tz",
        "empty_map.tz",
        "proxy.tz",
        "map_map_sideeffect.tz",
        "split_string.tz",
        "reverse.tz",
        "set_member.tz",
        "shifts.tz",
        "slice.tz",
        "comparisons.tz",
        "add.tz",
        "sub_timestamp_delta.tz",
        "dign.tz",
        "store_now.tz",
        "dipn.tz",
        "neg.tz",
        "dig_eq.tz",
        "set_delegate.tz",
        "none.tz",
        "get_map_value.tz",
        "hash_consistency_checker.tz",
        "left_right.tz",
        "str_id.tz",
        "sender.tz",
        "address.tz",
        "update_big_map.tz",
        "pair_id.tz",
        "list_id_map.tz",
        "hash_key.tz",
    ],
};

describe("PsDELPH1", () => {
    for (const [group, list] of Object.entries(contracts)) {
        describe(group, () => {
            for (const contract of list) {
                it(contract, () => {
                    const options: ContractOptions = {
                        protocol: Protocol.PsDELPH1,
                    }

                    const filename = path.resolve(__dirname, "contracts_007", group, contract);
                    const src = fs.readFileSync(filename).toString();
                    if (group === "ill_typed") {
                        expect(() => Contract.parse(src, options)).toThrow();
                        return;
                    }

                    try {
                        Contract.parse(src, options);
                    } catch (err) {
                        if (err instanceof MichelsonError) {
                            console.log(inspect(err, false, null));
                        }
                        throw err;
                    }
                });
            }
        });
    }
});