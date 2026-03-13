const entities = require('@jetbrains/youtrack-scripting-api/entities');
const workflow = require('@jetbrains/youtrack-scripting-api/workflow');

exports.rule = entities.Issue.onChange({
  title: 'Require assignee before entering In Progress',
  guard: (ctx) => {
    const issue = ctx.issue;
    return issue.fields.becomes(ctx.State, ctx.State['In Progress']);
  },
  action: (ctx) => {
    const issue = ctx.issue;
    workflow.check(
      issue.fields.Assignee,
      'Assignee is required before moving an issue to In Progress.'
    );
  },
  requirements: {
    State: {
      type: entities.State.fieldType,
      'In Progress': {}
    },
    Assignee: {
      type: entities.User.fieldType
    }
  }
});
