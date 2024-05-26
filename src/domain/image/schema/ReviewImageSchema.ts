import { z } from 'zod';

const reviewImageSchema = z.object({
  id: z.number(),
  url: z.string(),
  createdAt: z.coerce.date(),
  reviewId: z.number(),
});

export { reviewImageSchema };
