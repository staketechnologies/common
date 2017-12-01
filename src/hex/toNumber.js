// ISC, Copyright 2017 Jaco Greeff
// @flow

const bufferToNumber = require('../buffer/toNumber');
const hexToBuffer = require('../hex/toBuffer');

/**
  @name hexToNumber
  @signature hexToNumber (value?: Hex): number
  @summary Creates a Number value from a Buffer object.
  @description
    `null` inputs returns an NaN result, `hex` values return the actual value as a `Number`.
  @example
    import { hexToNumber } from '@polkadot/util';

    hexToNumber('0x1234'); // => 0x1234
*/
module.exports = function hexToNumber (value?: string): number {
  if (!value) {
    return NaN;
  }

  return bufferToNumber(
    hexToBuffer(value)
  );
};