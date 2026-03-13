# Adapt Default Workflows Vs Build From Scratch

## Adapt default workflows when

- the business rule is common and already close to what you need
- maintainers are new to the scripting API
- the team needs fast delivery and lower risk
- examples from JetBrains already show the intended pattern

## Build from scratch when

- the policy is domain-specific and default logic would be harder to untangle
- the rule touches several fields or systems in a custom way
- you need a cleaner design than patching multiple inherited assumptions

## Practical rule

Start by reading the default or example workflow first. If adapting it would
leave hidden assumptions or confusing branches, rewrite a simpler version that
matches the actual business rule directly.
