export default {
  title: 'Work',
  name: 'work',
  type: 'document',
  fieldsets: [
    { name: 'external', title: 'External options' },
    { name: 'internal', title: 'Internal options' },
  ],
  fields: [
    { title: 'Title', name: 'title', type: 'string' },
    { title: 'Year', name: 'year', type: 'number' },
    {
      title: 'Short Description',
      name: 'short_description',
      description: 'For the overview page',
      type: 'blockContent',
    },
    {
      title: 'Short Description Image',
      name: 'short_description_image',
      type: 'image',
    },
    {
      title: 'Site Link',
      name: 'external_link',
      description: 'Only if the info page is on another site',
      type: 'url',
      fieldset: 'external',
    },
    {
      title: 'Description',
      name: 'description',
      description: 'Only if the info page is on this site',
      type: 'blockContent',
      fieldset: 'internal',
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
