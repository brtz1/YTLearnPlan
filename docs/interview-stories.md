# Interview Stories

## 1. Modeling a team process in YouTrack

I start with the team's actual outcomes, owners, and approval points. Then I
reduce that into issue types, fields, a small state model, and dashboards for
specific audiences. My goal is to keep configuration visible and only add code
when validation, routing, or side effects justify it.

## 2. Enforcing quality with a small workflow

I built a rule that blocks a transition to `In Progress` unless an assignee is
present. The value is not technical complexity, it is operational clarity:
work cannot start without ownership. This is the type of automation that
reduces process drift with low maintenance cost.

## 3. Routing by component

I created a simple auto-assignment workflow based on subsystem. The main
trade-off is simplicity versus flexibility. A hard-coded map is fast to reason
about and easy to review, but it needs explicit ownership maintenance.

## 4. Integration design through the REST API

I created sample payloads and a Node.js script that can create or update issues
through the YouTrack REST API. The key points are authentication, field
selection, explicit payload shaping, and planning for failures such as rate
limits or temporary server errors.

## 5. Explaining trade-offs to stakeholders

For onboarding automation, I can present a YouTrack-only option and a
YouTrack-plus-integration option. That lets non-technical teams choose between
speed, operational simplicity, and deeper cross-system automation.
