# Architecture Write-Up: HR Onboarding Automation

## Problem

HR wants a repeatable onboarding request flow that creates visibility,
enforces required data, and routes work to the right teams.

## Proposed YouTrack setup

- One service project for internal onboarding requests
- Issue type `Onboarding Request`
- Custom fields:
  `Department`, `Region`, `Start Date`, `Hiring Manager`, `Equipment Needed`,
  `Access Level`, `Approvals Complete`
- States:
  `Submitted`, `HR Review`, `IT Setup`, `Ready`, `Done`, `Blocked`

## Workflow and integration components

- Validation workflow:
  require `Start Date`, `Hiring Manager`, and `Department` before moving to
  `HR Review`
- Routing workflow:
  assign by department or request type
- Completion workflow:
  block `Done` until `Approvals Complete` is true
- Optional external integration:
  call an endpoint that creates tasks in another internal system

## Two options

### Option A: YouTrack-only first

Use configuration plus workflows only.

Pros:
- simpler to deliver
- lower operational risk
- easier for admins to maintain

Cons:
- no cross-system sync
- manual updates still required in external tools

### Option B: YouTrack plus external integration

Add API or webhook-driven sync with HR or IT systems.

Pros:
- less duplicate data entry
- stronger end-to-end automation

Cons:
- more failure points
- auth, retries, and ownership become critical

## Risks

- incomplete request data at intake
- ownership ambiguity between HR and IT
- integration failures leaving systems out of sync

## Expected maintenance burden

Moderate. Field and routing policy changes are likely. External integration
ownership must be explicit if Option B is chosen.
