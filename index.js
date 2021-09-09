'use strict';

var rmLeading = function rmLeading(str, substr, flag) {
  var regex;
  var pattern = '^[' + substr + ']+';
  if (typeof flag === 'undefined') {
    regex = RegExp(pattern);
  } else {
    regex = RegExp(pattern, flag);
  }
  return str.replace(regex, '');
};

module.exports = rmLeading;
