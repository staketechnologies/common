// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

const u8aConcat = require('@polkadot/util/u8a/concat');

const { PKCS8_DIVIDER, PKCS8_HEADER } = require('./defaults');

const KEY_LENGTH = 32;
const SEED_OFFSET = PKCS8_HEADER.length;
const PUBLIC_OFFSET = SEED_OFFSET + KEY_LENGTH + PKCS8_DIVIDER.length;

module.exports = function decode (encoded: Uint8Array, passphrase?: Uint8Array | string) {
  // TODO: decrypt using passphrase
  const publicKey = encoded.subarray(PUBLIC_OFFSET, PUBLIC_OFFSET + KEY_LENGTH);
  const seed = encoded.subarray(SEED_OFFSET, SEED_OFFSET + KEY_LENGTH);

  return {
    publicKey,
    secretKey: u8aConcat(seed, publicKey)
  };
};