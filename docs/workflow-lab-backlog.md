# Workflow Lab Backlog

## Sandbox Project

- Project name: `Workflow Lab`
- Project key suggestion: `WL`

## Purpose

This sandbox project is for learning YouTrack workflows safely in a contained
environment. The backlog is ordered to move from project modeling and field
setup into validation workflows, routing workflows, and REST API practice.

## Recommended Working Order

1. `WL-1` Set up project fields and states
2. `WL-2` Require assignee before `In Progress`
3. `WL-3` Add comment when issue becomes `Fixed`
4. `WL-4` Auto-assign by subsystem
5. `WL-5` Block closing issues without resolution
6. `WL-6` Add priority-based due date reminder rule
7. `WL-7` Create issue via REST API script
8. `WL-8` Update issue priority through REST API
9. `WL-9` Model support-team workflow
10. `WL-10` Model HR onboarding workflow
11. `WL-11` Compare config vs workflow vs integration
12. `WL-12` Write troubleshooting notes for workflow failures

## Issue List

### WL-1 Set up project fields and states

**Description**

Create the base sandbox model with the fields and states needed for workflow
practice.

**Suggested fields**

- `State`
- `Priority`
- `Subsystem`
- `Assignee`
- `Resolution`
- `Due Date`

**Suggested states**

- `Open`
- `In Progress`
- `Fixed`
- `Done`
- `Blocked`

**Acceptance criteria**

- Sandbox project exists with key `WL`
- All core fields are available on issues
- State values match the workflow examples in this repo

### WL-2 Require assignee before `In Progress`

**Description**

Implement a workflow that blocks transition to `In Progress` unless
`Assignee` is set.

**Acceptance criteria**

- Moving an issue to `In Progress` without an assignee is blocked
- The user sees a clear validation message
- Moving an issue with an assignee succeeds

### WL-3 Add comment when issue becomes `Fixed`

**Description**

Create a workflow that adds a comment whenever an issue enters `Fixed`.

**Acceptance criteria**

- A comment is added automatically on transition to `Fixed`
- The comment is not added for unrelated state changes
- The message is easy to understand in issue history

### WL-4 Auto-assign by subsystem

**Description**

Route new issues to a default owner using the `Subsystem` field.

**Acceptance criteria**

- New issues with a known subsystem are assigned automatically
- Existing assignees are not overwritten
- Unmapped subsystem values fail safely without breaking issue creation

### WL-5 Block closing issues without resolution

**Description**

Require `Resolution` before moving an issue to `Done`.

**Acceptance criteria**

- Closing without `Resolution` is blocked
- Closing with `Resolution` succeeds
- The workflow behavior matches the intended terminal state

### WL-6 Add priority-based due date reminder rule

**Description**

Design a simple reminder or escalation rule for urgent issues nearing the due
date.

**Acceptance criteria**

- The rule logic is documented even if the full reminder mechanism is mocked
- The workflow uses a clear priority condition
- Edge cases are noted, especially noisy reminders and repeated alerts

### WL-7 Create issue via REST API script

**Description**

Use an external script to create a sandbox issue with a summary, description,
and at least one custom field.

**Acceptance criteria**

- The script authenticates with a permanent token
- A new `WL-*` issue is created successfully
- The response includes only selected fields

### WL-8 Update issue priority through REST API

**Description**

Practice updating an existing issue through the REST API.

**Acceptance criteria**

- A target issue can be updated by ID
- The script handles non-OK responses cleanly
- The update payload uses the correct custom field shape

### WL-9 Model support-team workflow

**Description**

Write a short process model for a support team using issue types, fields,
routing, and escalation ideas.

**Acceptance criteria**

- The model explains states, key fields, and routing
- At least one automation opportunity is identified
- The model can be explained in plain English

### WL-10 Model HR onboarding workflow

**Description**

Write a second process model for onboarding requests to compare with support.

**Acceptance criteria**

- The model includes approvals or readiness conditions
- Differences from the support workflow are explicit
- The process suggests which parts belong in config vs workflow

### WL-11 Compare config vs workflow vs integration

**Description**

Write a decision note showing when a request should be solved through YouTrack
configuration, workflow code, or an external integration.

**Acceptance criteria**

- The note includes at least three realistic examples
- Trade-offs are written in plain language
- Maintenance cost is mentioned for each approach

### WL-12 Write troubleshooting notes for workflow failures

**Description**

Create a small troubleshooting guide for common workflow problems in the
sandbox.

**Acceptance criteria**

- The guide includes field mismatch and state mismatch examples
- The guide includes at least one integration failure case
- The guide suggests what to check first when a rule does not behave as
  expected

## Good Test Issues To Create

Create a few sample issues in `Workflow Lab` so the rules have realistic data:

- `WL-A` API outage in billing service
- `WL-B` New onboarding request for engineering hire
- `WL-C` Customer reported login problem
- `WL-D` Internal request for laptop provisioning
- `WL-E` Bug in admin portal notifications

## Notes For Learning

- Keep the sandbox intentionally small and readable.
- Change one workflow behavior at a time and retest.
- Prefer understanding why a rule fires over adding more logic too quickly.
- Document every mismatch between field names in code and field names in the
  project.
