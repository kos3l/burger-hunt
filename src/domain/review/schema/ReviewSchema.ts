import { z } from 'zod';

import { reviewImageSchema } from '../../image/schema/ReviewImageSchema';

const reviewSchema = z.object({
  id: z.number(),
  title: z.string(),
  tasteRating: z.number().gte(0).lte(5),
  visualRating: z.number().gte(0).lte(5),
  textureRating: z.number().gte(0).lte(5),
  totalRating: z.number().gte(0).lte(5),
  restaurantId: z.string().uuid(),
  content: z.string(),
  thumbnail: z.optional(z.array(reviewImageSchema)),
});

export { reviewSchema };
