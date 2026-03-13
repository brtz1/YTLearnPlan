const entities = require('@jetbrains/youtrack-scripting-api/entities');
const workflow = require('@jetbrains/youtrack-scripting-api/workflow');

exports.rule = entities.Issue.onChange({
  title: 'Require resolution before closing issue',
  guard: (ctx) => {
    const issue = ctx.issue;
    return issue.fields.becomes(ctx.State, ctx.State.Done);
  },
  action: (ctx) => {
    const issue = ctx.issue;
    workflow.check(
      issue.fields.Resolution,
      'Resolution is required before moving an issue to Done.'
    );
  },
  requirements: {
    State: {
      type: entities.State.fieldType,
      Done: {}
    },
    Resolution: {
      type: entities.EnumField.fieldType
    }
  }
});
