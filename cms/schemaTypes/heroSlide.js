import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'heroSlide',
  title: 'Hero Slides',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'e.g., Master your money mindset for a secure future',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'e.g., FINANCIAL FREEDOM',
      initialValue: 'FINANCIAL FREEDOM',
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      description: 'e.g., SAVINGS YOGI TEAM',
      initialValue: 'SAVINGS YOGI TEAM',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'The short paragraph below the title',
      rows: 3,
    }),
    defineField({
      name: 'image',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true, 
      },
      fields: [
        {
            name: 'alt',
            type: 'string',
            title: 'Alternative Text',
        }
      ]
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'image',
    },
  },
})