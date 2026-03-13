# JS/TS Patterns I Will Use In Workflows

## Working assumptions

YouTrack workflows are written in JavaScript. TypeScript is still useful for
mental models, external scripts, and refactoring discipline.

## Patterns

- Guard early:
  validate the transition or field change before doing any side effects.
- Keep rule bodies short:
  move repeated logic into helper functions or constants where possible.
- Prefer explicit names over clever abstractions:
  workflow maintenance is usually done by small teams under time pressure.
- Encode decisions in data:
  use lookup maps for team assignment and severity routing instead of long
  conditional chains.
- Fail loudly on invalid state:
  use workflow checks for business rules and clear user-facing messages.
- Treat external calls as unreliable:
  document retries, idempotency strategy, and timeout expectations.

## TypeScript habits worth carrying into JavaScript

- name shapes clearly, even if only in comments or docs
- reduce nullable cases early
- separate input normalization from action logic
- prefer narrow interfaces for integration payloads

## Practical examples

- Validate `Assignee` before allowing `In Progress`
- Convert incoming JSON to a minimal internal shape
- Route based on `Component -> Team` mapping
- Build API payloads explicitly instead of passing raw user input through
