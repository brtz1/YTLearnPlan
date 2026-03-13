# Day 2: JavaScript/TypeScript Basics For YouTrack Work

## Goal

Refresh only the JavaScript and TypeScript topics that directly support
workflow and integration work.

## Topics to cover

### JavaScript

- functions and pure helper functions
- objects and array iteration
- destructuring and default values
- modules with `require` or `import` depending on runtime
- exceptions and defensive error messages
- async flow for API work
- JSON parsing and serialization

### TypeScript

- type aliases and interfaces
- union narrowing
- optional properties
- function return shapes
- simple typed API payloads

## Small practice set

### Exercise 1: validate input

Write a function that accepts an issue-like object and returns a list of
missing required fields for a transition.

### Exercise 2: transform JSON

Normalize a webhook payload into this shape:

```json
{
  "id": "SP-123",
  "summary": "Short text",
  "team": "Support",
  "priority": "Critical"
}
```

### Exercise 3: route by lookup table

Map `component -> default assignee` with an object lookup instead of nested
`if` blocks.

### Exercise 4: handle API failures

Return structured results:

```ts
type Result =
  | { ok: true; issueId: string }
  | { ok: false; status?: number; message: string };
```

## Refactoring habits

- Remove duplicated field names into constants.
- Keep business rules separate from transport code.
- Write messages that a project admin can act on.
- Leave comments only when the business rule is not obvious.

## End-of-day output

By the end of Day 2, be able to:

- read a small workflow and explain the trigger and guard conditions
- write a small JSON transformation function without external libraries
- describe how you would type an integration payload in TypeScript
