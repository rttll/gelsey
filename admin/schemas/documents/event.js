export default {
  title: 'Events',
  name: 'event',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Title link',
      name: 'link',
      type: 'url',
    },
    {
      title: 'Date Display',
      name: 'date_display',
      type: 'string',
      description: 'Date displayed on the website',
      // options: {
      //   dateFormat: 'ddd. MMMM DD, YYYY',
      //   timeFormat: 'h:mm a',
      //   timeStep: '15',
      // },
    },
    {
      title: 'Date',
      name: 'date',
      type: 'datetime',
      description: 'Invisible field used to order the events.',
      options: {
        // dateFormat: 'ddd. MMMM DD, YYYY',
        // timeFormat: 'h:mm a',
        // timeStep: '15',
      },
    },
    {
      title: 'Description',
      name: 'description',
      type: 'blockContent',
    },
    {
      title: 'Address',
      name: 'address',
      type: 'array',
      of: [{ type: 'address' }],
      validation: (Rule) => Rule.max(1),
    },
  ],
  orderings: [
    {
      title: 'Date, ASC',
      name: 'date',
      by: [{ field: 'date', direction: 'asc' }],
    },
  ],
};
