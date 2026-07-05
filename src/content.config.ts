import { defineCollection, z } from "astro:content";

const projectStatus = z.enum(["selected", "in-progress", "paused", "archived"]);

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    status: projectStatus,
    tags: z.array(z.string()).default([]),
  }),
});

const studio = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    kind: z.string(),
    tags: z.array(z.string()).default([]),
  }),
});

const writing = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    kind: z.string(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = {
  projects,
  studio,
  writing,
};
