import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    type: z.enum(['TUTORIAL', 'OPINION', 'NOTE', 'LINK', 'STREAM', 'PROMPTS']),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    excerpt: z.string(),
    banner: z.string().optional(),
    bannerAlt: z.string().optional(),
    readingTime: z.number().optional(),
    href: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

const streams = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/streams' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    duration: z.string(),
    status: z.enum(['Recording', 'Upcoming']),
    description: z.string(),
    youtubeId: z.string().optional(),
  }),
});

export const collections = { posts, streams };
