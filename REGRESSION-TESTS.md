# Regression tests for account-scoped PRD state

Run `node regression-test.js` in the package folder (Node.js required only for maintainers).

Expected:
- account A writes state only to `mm_prd_v2_A`
- account B loads defaults or B's own state, never A's state
- returning to A restores A's room history
- guest legacy `mm_prd_v2` migrates only to `mm_prd_v2_guest`

Browser acceptance tests still required after deployment: two separate local accounts, switching accounts without refresh, switching rooms, reload persistence, encrypted export/import, and AI API availability.
