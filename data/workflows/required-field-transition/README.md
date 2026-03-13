# Required Field On Transition

## Problem

Teams start work without a clear owner, so issues move into execution with no
accountability.

## Trigger

The rule runs when an issue changes and the `State` field becomes
`In Progress`.

## Conditions

- the issue is transitioning to `In Progress`
- the `Assignee` field is empty

## Actions

- stop the transition
- show a clear validation message to the user

## Failure Modes

- The rule fails if the project does not have a `State` field with an
  `In Progress` value.
- The rule must be updated if the team uses a different ownership field.

## Maintenance Notes

This should be adapted per project if the field names or state values differ.
It is a good example of a rule that is easier to maintain than training users
to remember a manual step.
