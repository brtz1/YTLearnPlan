/**
 * Minimal Node.js example for creating or updating a YouTrack issue.
 * Required env vars:
 * - YOUTRACK_BASE_URL
 * - YOUTRACK_TOKEN
 * - YOUTRACK_PROJECT_ID
 */

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  Authorization: `Bearer ${process.env.YOUTRACK_TOKEN}`
};

async function createIssue(payload) {
  const url =
    `${process.env.YOUTRACK_BASE_URL}/api/issues` +
    '?fields=idReadable,summary,customFields(name,value(name,login))';

  const response = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    return {
      ok: false,
      status: response.status,
      message: await response.text()
    };
  }

  return {
    ok: true,
    issue: await response.json()
  };
}

async function updateIssue(issueId, payload) {
  const url =
    `${process.env.YOUTRACK_BASE_URL}/api/issues/${issueId}` +
    '?fields=idReadable,summary,customFields(name,value(name,login))';

  const response = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    return {
      ok: false,
      status: response.status,
      message: await response.text()
    };
  }

  return {
    ok: true,
    issue: await response.json()
  };
}

function buildCreatePayload(event) {
  return {
    project: { id: process.env.YOUTRACK_PROJECT_ID },
    summary: event.summary,
    description: `Imported from ${event.source} with external id ${event.externalId}.`,
    customFields: [
      {
        name: 'Priority',
        $type: 'SingleEnumIssueCustomField',
        value: { name: event.priority }
      }
    ]
  };
}

async function main() {
  const exampleEvent = {
    source: 'mock-webhook',
    externalId: 'crm-9001',
    summary: 'VIP customer reported billing outage',
    priority: 'Critical'
  };

  const result = await createIssue(buildCreatePayload(exampleEvent));
  console.log(JSON.stringify(result, null, 2));
}

main().catch((error) => {
  console.error(
    JSON.stringify(
      { ok: false, message: error.message || 'Unexpected integration failure' },
      null,
      2
    )
  );
  process.exitCode = 1;
});
