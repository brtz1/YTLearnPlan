# Block Close Without Resolution

## Problem

Teams close issues without recording why the work ended, which weakens
reporting and post-incident review quality.

## Trigger

The rule runs when `State` becomes `Done`.

## Conditions

- the issue is moving to a terminal state
- the `Resolution` field is empty

## Actions

- block the transition
- require the user to record a resolution value first

## Failure Modes

- The project may use a different terminal state name.
- Some teams may not need a resolution on all issue types.

## Maintenance Notes

This is a good candidate for per-project adaptation. Start simple and only add
issue-type exceptions when they represent a real policy difference.
