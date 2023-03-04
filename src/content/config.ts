import { z, defineCollection } from 'astro:content';

const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  tags: z.array(z.string()),
  heroImg: z.string().optional(),
  pubDate: z.coerce.date(),
  updatedDate: z.string().optional(),
});

export type BlogSchema = z.infer<typeof blogSchema>;
const blogCollection = defineCollection({ schema: blogSchema });

export const collections = {
  blog: blogCollection,
};
