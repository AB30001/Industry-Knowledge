export default {
  name: 'about',
  title: 'About Me',
  type: 'document',
  fields: [
    {
      name: 'bio',
      title: 'Biography',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'background',
      title: 'Background',
      type: 'text',
      description: 'Your educational or professional background'
    }
  ]
} 