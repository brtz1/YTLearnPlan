const entities = require('@jetbrains/youtrack-scripting-api/entities');

const ASSIGNEE_BY_COMPONENT = {
  API: 'api.owner',
  Billing: 'billing.owner',
  Portal: 'portal.owner'
};

exports.rule = entities.Issue.onChange({
  title: 'Assign default owner by subsystem',
  guard: (ctx) => {
    const issue = ctx.issue;
    return issue.becomesReported && issue.fields.Subsystem;
  },
  action: (ctx) => {
    const issue = ctx.issue;
    const subsystem = issue.fields.Subsystem.name;
    const login = ASSIGNEE_BY_COMPONENT[subsystem];

    if (!login || issue.fields.Assignee) {
      return;
    }

    issue.fields.Assignee = entities.User.findByLogin(login);
  },
  requirements: {
    Subsystem: {
      type: entities.OwnedField.fieldType
    },
    Assignee: {
      type: entities.User.fieldType
    }
  }
});
