import { defineCollection, z } from 'astro:content';

const comuni = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    province: z.string(),
    population: z.number(),
    coordinates: z.tuple([z.number(), z.number()]),
    nearby: z.array(z.string()),
  }),
});

export const collections = { comuni };
