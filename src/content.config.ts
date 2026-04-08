import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const comuni = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/comuni' }),
  schema: z.object({
    name: z.string(),
    province: z.string(),
    population: z.number(),
    coordinates: z.tuple([z.number(), z.number()]),
    nearby: z.array(z.string()),
  }),
});

export const collections = { comuni };
