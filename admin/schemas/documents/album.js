export default {
  title: 'Album',
  name: 'album',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Year',
      name: 'year',
      type: 'string',
    },
    // {
    //   title: 'Description',
    //   name: 'description',
    //   type: 'text',
    // },
    {
      title: 'Link',
      name: 'link',
      type: 'string',
    },
    {
      title: 'Link Text',
      name: 'link_text',
      type: 'string',
    },
    {
      title: "Someone Else's Album?",
      name: 'other',
      type: 'boolean',
      description: "Is this someone else's album you're on?"
    },
    {
      title: 'Cover',
      name: 'cover',
      type: 'image',
      validation: (Rule) => Rule.required(),
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
