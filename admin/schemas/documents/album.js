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
    {
      title: 'Description',
      name: 'description',
      type: 'text',
    },
    {
      title: 'Link',
      name: 'link',
      type: 'string',
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
};
