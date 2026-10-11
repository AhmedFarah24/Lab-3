const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const Ajv = require('ajv');
const validate = new Ajv({ strict: true, allErrors: true }).compile(require('../schema/property.schema.json'));
const load = p => JSON.parse(fs.readFileSync(p, 'utf8'));
test('five valid synthetic records pass with unique IDs', () => {
  const rows = load('data/generated/listings.json');
  assert.equal(rows.length, 5);
  assert.equal(validate(rows), true, JSON.stringify(validate.errors));
  assert.equal(new Set(rows.map(r=>r.property_id)).size, 5);
});
for (const [name, expected] of [
  ['missing-id', 'required'],
  ['negative-price', 'minimum'],
  ['bad-zip', 'pattern'],
  ['unknown-field', 'additionalProperties']
]) {
  test(name + ' rejected', () => {
    assert.equal(validate(load('data/invalid/' + name + '.json')), false);
    assert.ok(validate.errors.some(e => e.keyword === expected), JSON.stringify(validate.errors));
  });
}
