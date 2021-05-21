export default {
  title: 'Performer',
  name: 'performer',
  type: 'document',
  // __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      hidden: true,
    },
    {
      title: 'Body',
      name: 'body',
      type: 'blockContent',
    },
    {
      title: 'Performances',
      name: 'performances',
      type: 'array',
      of: [{ type: 'performance' }],
    },
  ],
  initialValue: {
    title: 'Performer',
  },
};
