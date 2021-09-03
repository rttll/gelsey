export default {
  title: 'Video',
  name: 'video',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Video url',
      name: 'url',
      type: 'url',
    },
    {
      title: 'Description',
      name: 'description',
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
      title: 'Order ASC',
      name: 'orderDesc',
      by: [
        {field: 'order', direction: 'asc'}
      ]
    },
    {
      title: 'Order DESC',
      name: 'orderDesc',
      by: [
        {field: 'order', direction: 'desc'}
      ]
    },
  ]
};
