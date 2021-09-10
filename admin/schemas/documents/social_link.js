export default {
  title: 'Social Link',
  name: 'social_link',
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
      title: "Icon",
      name: "icon",
      type: "array",
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Spotify', value: 'spotify'},
          {title: 'Bandcamp', value: 'bandcamp'},
          {title: 'Apple Music', value: 'apple'},
          {title: 'Twitter', value: 'twitter'},
          {title: 'Facebook', value: 'facebook'},
          {title: 'Instagram', value: 'instagram'},
          {title: 'Email', value: 'email'},
        ]
      },
      validation: Rule => Rule.min(1).max(1)
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
