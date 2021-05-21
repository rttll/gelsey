export default {
  title: 'Composer',
  name: 'composer',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
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
    title: 'Composer',
  },
};
