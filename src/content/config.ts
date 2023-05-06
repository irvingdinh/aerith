import { defineCollection, z } from 'astro:content'

export const collections = {
  blog: defineCollection({
    schema: z
      .object({
        title: z.string(),
        excerpt: z.string().default(''),
        publishedDate: z.date(),
        tags: z.array(z.string()).default(['others']),
      })
      .strict()
  })
}
