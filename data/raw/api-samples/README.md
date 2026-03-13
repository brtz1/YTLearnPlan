# YouTrack REST API Samples

These sample payloads are based on JetBrains YouTrack Developer Portal
examples for creating issues and updating custom fields.

Key reminders:

- Use `Authorization: Bearer <token>` for permanent token auth.
- Request only the response fields you need with the `fields=` query
  parameter.
- When updating custom fields, include the field `name` or `id`, the field
  `$type`, and the target `value`.
- Plan for pagination and partial response selection early, not after the
  first integration grows.
