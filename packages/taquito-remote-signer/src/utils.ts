import sodium from 'libsodium-wrappers';
import {
    b58cdecode,
    buf2hex,
    hex2buf,
    isValidPrefix,
    Prefix,
    prefix,
    validatePublicKey,
    ValidationResult
} from '@taquito/utils';
import elliptic from 'elliptic';
import toBuffer from 'typedarray-to-buffer';
import { InvalidPublicKeyError, InvalidSignatureError } from './errors';

type PkPrefix = Prefix.EDPK | Prefix.SPPK | Prefix.P2PK;
type SigPrefix = Prefix.EDSIG | Prefix.SPSIG | Prefix.P2SIG | Prefix.SIG;

/**
 * @description Verify signature of a payload
 *
 * @param messageBytes The forged message including the magic byte (1 for block, 2 for endorsement, 3 for generic, 5 for the PACK format of michelson)
 * @param publicKey The public key to verify the signature against
 * @param signature The signature to verify
 * @returns A boolean indicating if the signature matches
 *
 * @example 
 * ```
 * const message = '03d0c10e3ed11d7c6e3357f6ef335bab9e8f2bd54d0ce20c482e241191a6e4b8ce6c01be917311d9ac46959750e405d57e268e2ed9e174a80794fbd504e12a4a000141eb3781afed2f69679ff2bbe1c5375950b0e40d00ff000000005e05050505050507070100000024747a32526773486e74516b72794670707352466261313652546656503539684b72654a4d07070100000024747a315a6672455263414c42776d4171776f6e525859565142445439426a4e6a42484a750001';
 * const pk = 'sppk7c7hkPj47yjYFEHX85q46sFJGw6RBrqoVSHwAJAT4e14KJwzoey';
 * const sig = 'spsig1cdLkp1RLgUHAp13aRFkZ6MQDPp7xCnjAExGL3MBSdMDmT6JgQSX8cufyDgJRM3sinFtiCzLbsyP6d365EHoNevxhT47nx'
 * 
 * const response = await verifySignature(message, pk, sig);
 * ```
 *
 */
export async function verifySignature(messageBytes: string, publicKey: string, signature: string): Promise<boolean> {
    await sodium.ready;

    const pkPrefix = validatePkAndExtractPrefix(publicKey);
    const sigPrefix = validateAndExtractSigPrefix(signature);

    const decodedPublicKey = b58cdecode(publicKey, prefix[pkPrefix]);
    const decodedSig = b58cdecode(signature, prefix[sigPrefix]);
    const bytesHash = sodium.crypto_generichash(32, hex2buf(messageBytes));

    switch (pkPrefix) {
        case 'edpk':
            return validateEdSignature(decodedSig, bytesHash, decodedPublicKey);
        case 'sppk':
            return validateSpSignature(decodedSig, bytesHash, decodedPublicKey);
        case 'p2pk':
            return validateP2Signature(decodedSig, bytesHash, decodedPublicKey);
        default:
            throw new Error(`Unsupported curve: ${pkPrefix.substring(0, 2)}`);;
    }
}

function validatePkAndExtractPrefix(publicKey: string): PkPrefix {
    const pkPrefix = publicKey.substring(0, 4);
    if (validatePublicKey(publicKey) !== ValidationResult.VALID) {
        throw new InvalidPublicKeyError(`The public key provided is invalid: ${publicKey}`);
    }
    return pkPrefix as PkPrefix;
}

function validateAndExtractSigPrefix(signature: string): SigPrefix {
    let signaturePrefix = signature.startsWith('sig') ? signature.substr(0, 3) : signature.substr(0, 5);
    if (!isValidPrefix(signaturePrefix)) {
        throw new InvalidSignatureError(`Unsupported signature provided: ${signature}, no prefix match`);
    }
    return signaturePrefix as SigPrefix;
}

function validateEdSignature(decodedSig: Uint8Array, bytesHash: Uint8Array, decodedPublicKey: Uint8Array) {
    try {
        return sodium.crypto_sign_verify_detached(decodedSig, bytesHash, decodedPublicKey);
    } catch (e) {
        return false;
    }
}

function validateSpSignature(decodedSig: Uint8Array, bytesHash: Uint8Array, decodedPublicKey: Uint8Array) {
    const key = new elliptic.ec('secp256k1').keyFromPublic(decodedPublicKey);
    return validateSpOrP2Sig(decodedSig, bytesHash, key)
}

function validateP2Signature(decodedSig: Uint8Array, bytesHash: Uint8Array, decodedPublicKey: Uint8Array) {
    const key = new elliptic.ec('p256').keyFromPublic(decodedPublicKey);
    return validateSpOrP2Sig(decodedSig, bytesHash, key)
}

function validateSpOrP2Sig(decodedSig: Uint8Array, bytesHash: Uint8Array, key: elliptic.ec.KeyPair) {
    const hexSig = buf2hex(toBuffer(decodedSig));
    const match = hexSig.match(/([a-f\d]{64})/gi);
    if (match) {
        try {
            const [r, s] = match;
            return key.verify(bytesHash, { r, s });
        } catch (e) {
            return false;
        }
    }
    return false;
}
