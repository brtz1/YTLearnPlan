const entities = require('@jetbrains/youtrack-scripting-api/entities');

exports.rule = entities.Issue.onChange({
  title: 'Comment when state becomes Fixed',
  guard: (ctx) => {
    const issue = ctx.issue;
    return issue.fields.becomes(ctx.State, ctx.State.Fixed);
  },
  action: (ctx) => {
    const issue = ctx.issue;
    const user = ctx.currentUser;
    issue.addComment(
      'Status changed to Fixed by ' + user.fullName + '. Verify and notify the requester if needed.'
    );
  },
  requirements: {
    State: {
      type: entities.State.fieldType,
      Fixed: {}
    }
  }
});
