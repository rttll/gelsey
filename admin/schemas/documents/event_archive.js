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
      title: 'Text',
      name: 'text',
      type: 'string',
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
