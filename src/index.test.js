const rmLeading = require('./index.js');
const slash = '/';

test('Removes leading substring', function () {
  expect(rmLeading('/hello/world', slash)).toStrictEqual('hello/world');
});

test('Removes multiple leading substrings', function () {
  expect(rmLeading('//hello/world', slash)).toStrictEqual('hello/world');
});

test('Removes all leading substrings', function () {
  expect(rmLeading('hellohelloworld', 'hello')).toStrictEqual('world');
});

test('Is OK with nothing to remove', function () {
  expect(rmLeading('hello/world', slash)).toStrictEqual('hello/world');
});

test('Is OK with empty string', function () {
  expect(rmLeading('', slash)).toStrictEqual('');
});

test('Use flag i to ignore case', function () {
  expect(rmLeading('hello/world', 'Hello/', 'i')).toStrictEqual('world');
});

test('Mixed letters will not work', function () {
  expect(rmLeading('hello/world', 'elHlo/', 'i')).toStrictEqual('hello/world');
});

test('Escape char will work', function () {
  expect(rmLeading('hell\\o/world', 'hell\\o/')).toStrictEqual('world');
});

test('Throws for non-string str argument', function () {
  expect(() => rmLeading(true, slash)).toThrow();
});

test('Throws for non-string substr argument', function () {
  expect(() => rmLeading('hello/world', true)).toThrow();
});
