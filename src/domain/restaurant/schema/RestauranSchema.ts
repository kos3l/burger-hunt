import { z } from 'zod';

import { openingHoursSchema } from '../../opening-hours/schema/OpeningHoursSchema';

const restaurantSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  types: z.array(z.string()),
  primaryType: z.string(),
  internationalPhoneNumber: z.string(),
  formattedAddress: z.string(),
  websiteUri: z.optional(z.string().url()),
  totalRating: z.number().gte(0).lte(5),
  tastyTotalRating: z.number().gte(0).lte(5),
  textureTotalRating: z.number().gte(0).lte(5),
  visualTotalRating: z.number().gte(0).lte(5),
  openingHours: openingHoursSchema,
  upvotes: z.number().gte(0),
  downvotes: z.number().gte(0),
});

export { restaurantSchema };
