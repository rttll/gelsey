export default {
  name: 'bio',
  title: 'Bio',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
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
