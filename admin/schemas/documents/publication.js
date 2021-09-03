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
      title: 'Publication',
      name: 'publication',
      type: 'string',
    },
    {
      title: 'Volume',
      name: 'volume',
      type: 'string',
    },
    {
      title: 'Link',
      name: 'link',
      type: 'url',
      description: '(optional) If you want to link to it',
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
