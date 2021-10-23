/**
 * Remove leading substring
 * @public
 * @param {string} str - input string
 * @param {string} substr - leading string to remove
 * @param {string} [flag] - 'i' for case insensitive
 * @returns {string} - input string without the leading substring
 */
module.exports = function rmLeading(str, substr, flag) {
  let regex;
  if (typeof substr !== 'string') {
    throw new TypeError(
      'substr argument must be a string, received: ' + typeof substr
    );
  }
  const pattern = '^' + '\\' + substr.split('').join('\\') + '+';
  if (typeof flag === 'undefined') {
    regex = RegExp(pattern);
  } else {
    regex = RegExp(pattern, flag);
  }
  return str.replace(regex, '');
};
