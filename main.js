"use strict"
/**
 * Constructs an enumeration with keys equal to each index of the array.
 *
 * For example:
 *
 *   var COLORS = mirrorKeys(['blue', 'white', 'green', 'black']);
 *   var myColor = COLORS.blue;
 *
 *   Input:  ['key1', 'key2']
 *   Output: {key1: key1, key2: key2}
 *
 * @param {array} arr
 * @return {object}
 */

var mirrorKeys = function(arr) {git
  try {
    if ((arr === undefined) || !(arr instanceof Array)) {
      throw new Error('mirrorKeys(...): Arguments must be an array.');
    }
    let obj = {};
    let a = [...arr];
    for (let i = 0; i < a.length; i++) {
      let item = a[i].toString()
      obj[item] = item;
    }
    return obj;
  } catch (e) {
    console.error(e);
  }
};

module.exports = mirrorKeys;
