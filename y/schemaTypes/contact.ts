export default {
  name: 'contact',
  title: 'Contact Information',
  type: 'document',
  fields: [
    {
      name: 'email',
      title: 'Email Address',
      type: 'string',
    },
    {
      name: 'github',
      title: 'GitHub Profile',
      type: 'url',
    },
    {
      name: 'linkedin',
      title: 'LinkedIn Profile',
      type: 'url',
    },
    {
      name: 'additionalInfo',
      title: 'Additional Contact Information',
      type: 'text',
    }
  ]
} 