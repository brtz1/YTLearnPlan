# Process Modeling Note

## Question

How would I model a team's process inside YouTrack?

## Answer

Model the process from business outcomes backward, not from fields forward.

1. Identify the team's work categories and map them to issue types only if
   the data or lifecycle really differs.
2. Keep the state model small and meaningful. Every extra state creates more
   maintenance, reporting noise, and workflow branching.
3. Use custom fields to answer operational questions:
   who owns this, how urgent is it, what system is affected, what approval is
   missing, and what deadline matters?
4. Separate required-on-create fields from required-on-transition fields.
   This reduces friction at intake while still enforcing downstream quality.
5. Route work using explicit ownership fields instead of embedding ownership
   in summaries or tags.
6. Add automation only after the field and state model is stable.

## Configuration vs automation

- Configuration handles issue types, fields, boards, permissions, and
  dashboards.
- Workflows handle validation, notifications, computed updates, and routing.
- External integrations handle cross-system sync, enrichment, and side
  effects outside YouTrack.

## Success criteria

A good YouTrack model lets a team answer:

- What work is in progress?
- Who owns it?
- What is blocked and why?
- What is overdue or at risk?
- Which transitions are allowed and which data is required?
