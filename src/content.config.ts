import { defineCollection} from "astro:content";
import { glob } from "astro/loaders";
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    topic: z.string(),
    description: z.string(),
    // Pages CMS saves dates as strings, which Astro can auto-transform
    pubDate: z.coerce.date(),
    heroImage: z.string().optional(),
  }),
});

export const collections = { blog };
