export default {
  title: 'Address',
  name: 'address',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Link',
      name: 'link',
      type: 'url',
    },
    {
      title: 'Short Address',
      name: 'short_address',
      description: 'Used for the archive listing',
      type: 'string'
    },
    {
      title: 'Address',
      name: 'address',
      type: 'blockContent',
    },
  ],
};
