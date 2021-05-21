export default {
  title: 'Event Archives',
  name: 'event_archive',
  type: 'document',
  fields: [
    {
      title: 'Year',
      name: 'year',
      type: 'number',
    },
    {
      title: 'Shows',
      name: 'shows',
      type: 'blockContent',
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
      title: 'Year, DESC',
      name: 'year',
      by: [{ field: 'year', direction: 'desc' }],
    },
  ],
};
