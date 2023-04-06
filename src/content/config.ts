import { defineCollection, z } from 'astro:content';

const essays = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		created: z.date().or(z.string().transform((val) => new Date(val))),
		updated: z
			.date()
			.or(z.string().transform((val) => new Date(val)))
			.optional(),
		heroImage: z.string().optional(),
		tags: z.array(z.string()),
	}),
});

export const collections = { essays };

/* 		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		updatedDate: z
			.string()
			.optional()
			.transform((str) => (str ? new Date(str) : undefined)),
*/