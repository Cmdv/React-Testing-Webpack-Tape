var test = require('tape');

test('basic arithmetic', function(t) {
  t.plan(2);

  t.equal(2 + 3, 5);
  t.equal(7 * 8 + 9, 65);
  t.equal(1 + 2 , 3);
});