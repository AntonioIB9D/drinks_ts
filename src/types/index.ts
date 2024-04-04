import { z } from 'zod';
import { CategoriesAPIResponseSchema } from '../schema/recipe-schema';

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>;
