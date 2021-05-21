export default {
  title: 'Bio',
  name: 'bio',
  type: 'document',
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
