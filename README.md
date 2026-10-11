# Lab 3 — JSON Schema, Data Modeling, and Structured AI Output

Individual capstone lab for the Neighborhood Listing Platform. All listing data is **fictional**.

## Run

```bash
npm install
npm run lab3:validate
npm run lab3:test
npm run lint
npm run build
npm run dev
```

The JSON Schema is in `schema/property.schema.json`. The five seed records are in `data/generated/listings.json`. Four rejected fixtures are in `data/invalid/`. The app renders only records that pass runtime schema validation.

## Evidence and student steps

Take real screenshots of successful validation, tests, lint, build, and the live page. Carry out Google AI Studio structured-output generation and Gemini critique yourself and save the **actual** redacted prompt/export screenshot and raw model output. The included sample records were created as local synthetic fixtures; **do not label them as AI Studio output**. Log results in `docs/ai-log.md`. Ask your assigned peer reviewer to review your PR. Do not use private client data.

## Data model

Property (PK property_id); Sponsor (PK sponsor_id); PropertySponsor (composite PK property_id + sponsor_id, foreign keys to both). The JSON contract nests sponsor references for display. A relational database should store the join separately.
