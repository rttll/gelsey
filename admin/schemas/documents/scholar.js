export default {
  title: 'Scholar',
  name: 'scholar',
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
    {
      title: 'Publications',
      name: 'publications',
      type: 'array',
      of: [{ type: 'publication' }],
    },
  ],
  initialValue: {
    title: 'Scholar',
  },
};
