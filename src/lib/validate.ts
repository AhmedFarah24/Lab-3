import Ajv from 'ajv';
import schema from '../../schema/property.schema.json';
import type { PropertyListing } from './types';
const checker = new Ajv({ strict: true, allErrors: true }).compile(schema);
export function parseListings(input: unknown): PropertyListing[] {
  if (!checker(input)) throw new Error('Invalid property listings');
  const rows = input as PropertyListing[];
  if (new Set(rows.map(r => r.property_id)).size !== rows.length) throw new Error('Duplicate property ID');
  return rows;
}
