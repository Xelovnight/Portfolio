import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const projetsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/projets" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
  }),
});

const experiencesCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/experiences" }),
  schema: z.object({
    role: z.string(),
    company: z.string(),
    startDate: z.date(),
    endDate: z.date().optional(), // Optionnel si c'est un poste actuel
    skills: z.array(z.string()),
  }),
});

const certificationsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/certifications" }),
  schema: z.object({
    title: z.string(),       // Nom de la certification (ex: "AWS Cloud Practitioner")
    issuer: z.string(),      // Organisme (ex: "Amazon Web Services")
    date: z.date(),          // Date d'obtention
    link: z.string().optional(), // Lien de vérification (optionnel)
  }),
});

export const collections = {
  'projets': projetsCollection,
  'experiences': experiencesCollection,
  'certifications': certificationsCollection, 
};