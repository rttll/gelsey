export default {
  title: 'Publications',
  name: 'publication',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Link',
      name: 'link',
      type: 'url',
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      hidden: true,
    },
  ],
  orderings: [
    {
      title: 'Order, ASC',
      name: 'order',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
};
