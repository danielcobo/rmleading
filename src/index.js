/**
 * Remove leading substring
 * @public
 * @param {string} str - input string
 * @param {string} substr - leading string to remove
 * @param {string} [flag] - 'i' for case insensitive
 * @returns {string} - input string without the leading substring
 */
module.exports = function rmLeading(str, substr, flag) {
  if (typeof substr !== 'string') {
    throw new TypeError(
      'Substring argument must be a string, instead received: ' + typeof substr
    );
  }

  let input = str;
  let sub = substr;
  if (flag) {
    input = str.toLocaleLowerCase();
    sub = substr.toLocaleLowerCase();
  }
  while (input.slice(0, sub.length) === sub) {
    input = input.slice(sub.length);
  }

  return input;
};
