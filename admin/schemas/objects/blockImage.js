export default {
  name: 'blockImage',
  type: 'image',
  title: 'Image',
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
    },
    {
      name: 'align',
      title: 'Align',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Right', value: 'right' },
        ],
      },
      validation: (Rule) => Rule.max(1),
    },
  ],
};
