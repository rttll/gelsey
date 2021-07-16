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
      description: 'Used to order events / archive (not visible on site)',
      options: {
        // dateFormat: 'ddd. MMMM DD, YYYY',
        // timeFormat: 'h:mm a',
        // timeStep: '15',
      },
    },
    {
      title: 'End Date',
      name: 'end_date',
      type: 'datetime',
      description: 'Used to order / archive, if mul (not visible on site)',
      options: {
        // dateFormat: 'ddd. MMMM DD, YYYY',
        // timeFormat: 'h:mm a',
        // timeStep: '15',
      },
    },
    {
      title: 'Ongoing',
      name: 'ongoing',
      type: 'boolean',
      description: 'If true, event will not be moved to the archives.',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'blockContent',
    },
    {
      title: 'Address',
      name: 'address',
      type: 'reference',
      to: [{ type: 'address' }],
      // validation: (Rule) => Rule.max(1),
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
