export default {
  name: 'skill',
  title: 'Skills',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Skill Title',
      type: 'string',
    },
    {
      name: 'icon',
      title: 'Skill Icon',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ]
} 