# Status Change Comment

## Problem

Important state changes can be hard to notice if teams rely only on visual
board movement.

## Trigger

The rule runs when `State` becomes `Fixed`.

## Conditions

- the state changed during the current update
- the target state is `Fixed`

## Actions

- add a comment that captures the state change
- include the acting user to make the history easier to read

## Failure Modes

- Comment noise can become a problem if used on too many transitions.
- Teams may prefer notifications or mentions instead of comments.

## Maintenance Notes

Use this pattern when the audit trail matters. Avoid it for noisy transitions
such as repeated triage or backlog grooming changes.
