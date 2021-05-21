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
      title: 'Description',
      name: 'description',
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
