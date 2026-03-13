# Integration Demo: Create Or Update YouTrack Issues

## Goal

Demonstrate a minimal external integration that can create an issue or update
its priority through the YouTrack REST API.

## Flow

1. External system produces a normalized event.
2. Integration script decides whether to create a new issue or update an
   existing one.
3. The script calls the YouTrack REST API with a permanent token.
4. The script logs the result and returns a structured success or failure
   object.

## API considerations

- Use field selection to avoid over-fetching.
- Treat `429` and `5xx` responses as retriable.
- Keep outgoing payloads explicit rather than forwarding raw external JSON.
- Use a stable external correlation key if true sync is needed.

## Mock webhook pattern

For practice, assume another tool posts an event such as:

```json
{
  "eventType": "customer_ticket_created",
  "externalId": "crm-9001",
  "summary": "VIP customer reported billing outage",
  "priority": "Critical",
  "team": "Billing"
}
```

Normalize it first, then decide whether to create a new issue or enrich an
existing one.
