const test = require('tape');
const index = require('..');

test('should return random confirmation', t => {
  t.plan(1);
  const all = index.all();
  t.true(all.indexOf(index()) > -1);
});

test('should add confirmation', t => {
  t.plan(1);
  const confirmation = 'Okie dokie';
  index.add(confirmation);
  const all = index.all();
  t.true(all.indexOf(confirmation) > -1);
});

test('should set confirmations', t => {
  t.plan(1);
  const confirmation = 'Ten four';
  index.set([confirmation]);
  const all = index.all();
  t.true(all.length === 1 && all[0] === confirmation);
});
