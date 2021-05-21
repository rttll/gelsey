export default {
  name: 'bio',
  title: 'Bio',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      hidden: true,
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],
  initialValue: {
    title: 'Bio',
  },
};
