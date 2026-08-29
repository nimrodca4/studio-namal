import { createClient } from '@sanity/client';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '6sgzy01k';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  useCdn: false,
});