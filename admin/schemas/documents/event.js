export default {
  title: 'Events',
  name: 'event',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
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
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Date',
      name: 'date',
      type: 'datetime',
      description: 'Used to order / archive (not visible on site)',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'End Date. (If multiple dates) (optional)',
      name: 'end_date',
      type: 'datetime',
      description: 'Used to order / archive, (not visible on site)',
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
