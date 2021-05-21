export default {
  title: 'Contact',
  name: 'contact',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      hidden: true,
    },
    {
      title: 'Body',
      name: 'body',
      type: 'blockContent',
    },
  ],
  initialValue: {
    title: 'Contact',
  },
};
