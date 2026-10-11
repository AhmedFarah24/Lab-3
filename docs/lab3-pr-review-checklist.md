# Lab 3 Pull Request Review Checklist

This checklist is for the assigned peer reviewer and the student completing the lab.

## Data contract
- [ ] Review required fields, ID patterns, numeric limits, ZIP code pattern, and `additionalProperties: false`
- [ ] Confirm the Property, Sponsor, and PropertySponsor relationship is documented in `docs/adr/001-data-contract.md`
- [ ] Check that synthetic seed listings contain no private client data

## Validation
- [ ] Run `npm install`
- [ ] Run `npm run lab3:validate` and capture actual output
- [ ] Run `npm run lab3:test` and check all four negative tests fail for the expected validation reason
- [ ] Run `npm run lint` and `npm run build` and record genuine results

## Interface
- [ ] Start `npm run dev` and check that property cards display validated records
- [ ] Confirm invalid input does not render unvalidated property details

## AI collaboration and submission
- [ ] Capture actual Google AI Studio prompt/output screenshot and exported JSON
- [ ] Ask Gemini for a normalization critique, then record what was accepted or rejected in `docs/ai-log.md`
- [ ] Record individual contributions and reviewer feedback
- [ ] Submit repository URL, this PR URL, real screenshots, and a demo URL if applicable

**Note:** This file is a review checklist, not a claim that the checks have already passed.
