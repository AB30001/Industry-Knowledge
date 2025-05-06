export default {
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Project Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'tech',
      title: 'Technologies Used',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'githubLink',
      title: 'GitHub Repository URL',
      type: 'url',
    },
    {
      name: 'liveLink',
      title: 'Live Site URL',
      type: 'url',
    }
  ]
} 