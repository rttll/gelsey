export default {
  title: 'Press (Quotes)',
  name: 'quotes',
  type: 'document',
  fields: [
    {
      title: 'Quote',
      name: 'quote',
      type: 'blockContent',
    },
    {
      title: 'Cite',
      name: 'cite',
      type: 'string',
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
