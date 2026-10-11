const fs = require('node:fs');
const Ajv = require('ajv');
const schema = require('../schema/property.schema.json');
const validate = new Ajv({ allErrors: true, strict: true }).compile(schema);
const paths = process.argv.slice(2);
if (!paths.length) paths.push('data/generated/listings.json');
let failed = false;
for (const path of paths) {
  const records = JSON.parse(fs.readFileSync(path, 'utf8'));
  const valid = validate(records);
  const uniqueIds = Array.isArray(records) && new Set(records.map(r => r.property_id)).size === records.length;
  console.log((valid && uniqueIds ? 'PASS' : 'FAIL') + ' ' + path);
  if (!valid) console.log(JSON.stringify(validate.errors, null, 2));
  if (!uniqueIds) console.log('Duplicate property_id found');
  if (!valid || !uniqueIds) failed = true;
}
if (failed) process.exitCode = 1;
