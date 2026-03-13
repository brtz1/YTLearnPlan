# Day 1: YouTrack Product Basics

## Goal

Get comfortable enough with YouTrack to model a team's workflow before
writing any code.

## Core product areas

- Projects define ownership, settings, workflows, and field availability.
- Issue types keep different work streams distinct when teams need
  different lifecycles or data.
- Custom fields model business data such as priority, component, team,
  approval state, due date, or customer impact.
- Boards expose work-in-progress visually, but the real source of truth is
  the underlying issue state model and field configuration.
- Dashboards aggregate saved searches, reports, and widgets for different
  audiences.
- Notifications and workflow-driven comments help teams react without
  requiring manual triage.
- Default workflows are often a better starting point than a blank script.

## Process modeling checklist

When a team asks for automation, first clarify:

1. What work item types exist?
2. Which fields are required at creation vs later transitions?
3. Which states exist, and who is allowed to move between them?
4. Which assignments are deterministic and which need human judgment?
5. What must happen on state change: validation, notification, routing, API
   call, or reporting?
6. Which information belongs in configuration, and which belongs in code?

## How I would model a team's process in YouTrack

Start with the minimum stable model:

- one project per team or service area when ownership and permissions differ
- shared custom fields only when multiple projects truly use the same data
- a short state machine with explicit entry and exit rules
- one routing field that explains ownership, such as `Team` or `Component`
- dashboards for each audience instead of one global view for everyone

Example approaches:

- Support team:
  Use issue types like Incident, Service Request, and Problem. Add fields for
  Severity, Customer, SLA Target, and Owning Team. Automate routing and
  escalations from severity and component data.
- HR onboarding:
  Use a request issue type with structured custom fields for Department,
  Start Date, Hiring Manager, and Region. Add a checklist workflow or child
  task policy, and block completion until required approvals are present.

## Cloud vs on-prem basics

- Cloud reduces infrastructure ownership and is the default assumption for
  many internal tooling scenarios.
- On-prem matters when teams need specific security, network, or compliance
  controls.
- Workflow and API thinking stays largely the same, but deployment,
  authentication, and surrounding integrations may differ.

## Interview-ready glossary

- Project: top-level container for issues, fields, permissions, and workflows
- Issue type: category of work with its own expectations and reporting value
- Custom field: structured business data attached to an issue
- State: lifecycle stage that drives process automation
- Workflow: JavaScript-based automation that reacts to issue events
- Rule: unit of workflow behavior with guard conditions and actions
- Saved search: reusable issue query for dashboards or personal workflows
- Dashboard: shared view of operational and reporting widgets
- REST API: external interface for reading and changing YouTrack entities
- Webhook pattern: event-driven integration triggered by issue changes

## Decision heuristics

- Prefer configuration when the rule is simple, visible, and stable.
- Prefer workflows when logic depends on issue changes, validation, or
  reusable automation.
- Prefer apps or external services when you need custom UI, custom HTTP
  endpoints, or integration state outside YouTrack.
