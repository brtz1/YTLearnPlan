# Interview Story: Routing Automation

## Problem

A support team receives incoming issues for multiple subsystems. Triage is slow
because ownership knowledge lives in a few people's heads.

## Proposed solution

- Add a `Subsystem` field that is required at intake.
- Use a workflow to auto-assign based on subsystem.
- Keep the mapping explicit and easy to review with the team.

## Trade-offs

- Fast and simple, but routing quality depends on the intake field being
  accurate.
- Hard-coded user mapping is easy to understand, but needs maintenance.
- A more advanced rules engine is possible later if volume or complexity grows.

## Expected benefit

- less manual triage
- faster first response
- clearer ownership history

## Maintenance burden

Low to moderate. The main maintenance cost is updating the routing map when
team ownership changes.
