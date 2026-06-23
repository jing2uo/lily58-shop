import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Products — one flat markdown file per keyboard. Body is the long-form
// description; structured fields drive the cards, detail header, gallery, and
// Product JSON-LD.
const products = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/products" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    description: z.string(),
    price: z.number(),
    currency: z.string().default("USD"),
    buy: z.string().url(),
    image: z.string(),
    gallery: z
      .array(z.object({ src: z.string(), alt: z.string() }))
      .default([]),
    order: z.number().default(0),
  }),
});

// Content pages — docs, guides, FAQ, policies, about. The file path under
// src/content/pages/ becomes the route slug (e.g. docs/policy/privacy.md ->
// /docs/policy/privacy/).
const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = { products, pages };
