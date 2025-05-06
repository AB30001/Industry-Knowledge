import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Industry-knowledge',

  projectId: 'eoxsg65n',
  dataset: 'industry-knowledge',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
