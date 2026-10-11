# ADR 001 — Listing data contract

## Context
The property card, detail page, local sponsor selection, and voice response need reliable IDs, location, price, room counts, floor area, amenities, and sponsor names. External AI output is untrusted at runtime.

## Entities and relationships
- **Property**: primary key `property_id`; stores address, price, bedrooms, bathrooms, square feet, ZIP, and amenities.
- **Sponsor**: primary key `sponsor_id`; stores business name and category.
- **PropertySponsor**: join entity; compound primary key (`property_id`, `sponsor_id`); both fields are foreign keys. Many-to-many relationship.

## Decision
Use strict JSON Schema draft-07 and AJV for runtime validation; use a matching TypeScript interface for compile-time checking. Unknown object fields are rejected. IDs have patterns; ZIP codes are five digits; amounts and counts cannot be negative; amenities and sponsor category are controlled vocabularies. The JSON API nests sponsor summaries for a convenient UI view. The app only renders validated records and fails safely.

## Alternatives
- Free-text amenities: easier to enter but difficult to search consistently.
- Separate Amenity and PropertyAmenity tables: better normalization for a larger database; deferred for this small demonstration.
- Zod as one source of truth: reasonable alternative but would require different dependencies and schema generation.

## Consequences
Validation catches structural errors before rendering, but JSON Schema cannot by itself guarantee real-world listing accuracy or cross-record uniqueness of property_id. A separate uniqueness check is included. In a production database, PropertySponsor should be a real join table rather than duplicated sponsor information in each property record. Schema and TypeScript interfaces must be kept aligned through tests and review.
