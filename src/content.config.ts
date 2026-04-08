import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const comuni = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/comuni' }),
  schema: z.object({
    name: z.string(),
    slug: z.string().optional(),
    province: z.string(),
    population: z.number(),
    area: z.number().optional(),
    coordinates: z.tuple([z.number(), z.number()]),
    centroid: z.tuple([z.number(), z.number()]).optional(),
    elevation: z.number().optional(),
    zone: z.string().optional(),
    // Feature flags
    hasHistoric: z.boolean().optional(),
    hasNature: z.boolean().optional(),
    hasSport: z.boolean().optional(),
    hasFood: z.boolean().optional(),
    hasAccommodation: z.boolean().optional(),
    hasStation: z.boolean().optional(),
    // POI data
    poiCount: z.number().optional(),
    // Relationships
    nearby: z.array(z.string()),
    bordering: z.array(z.string()).optional(),
    // Enrichment fields
    intro: z.string().optional(),
    context: z.string().optional(),
    fact: z.string().optional(),
  }),
});

export const collections = { comuni };
