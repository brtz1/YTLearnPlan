# Auto-Assign By Component

## Problem

New issues often sit unowned because triage is manual and response ownership is
obvious only to experienced team members.

## Trigger

The rule runs when a new issue is reported.

## Conditions

- the issue has a `Subsystem` value
- the issue does not already have an `Assignee`
- the subsystem appears in the routing map

## Actions

- assign the issue to the default owner for that subsystem

## Failure Modes

- Hard-coded logins can drift when ownership changes.
- The rule does nothing for components that are not mapped.
- Teams may need routing to groups rather than single users.

## Maintenance Notes

This is intentionally simple so the routing policy stays readable. In a real
implementation, store the mapping near the top of the file and review it with
the team regularly.
