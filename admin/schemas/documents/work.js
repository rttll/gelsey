export default {
  title: 'Work',
  name: 'work',
  type: 'document',
  fields: [
    { title: 'Title', name: 'title', type: 'string' },
    { title: 'Year', name: 'year', type: 'number' },
    { title: 'Link', name: 'link', type: 'url' },
    { title: 'Description', name: 'description', type: 'blockContent' },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      hidden: true,
    },
  ],
};
