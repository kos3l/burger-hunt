import { z } from 'zod';

import { openingHoursDateIntervalSchema } from './OpeningHoursDateIntervalSchema';

const openingHoursSchema = z.object({
  openNow: z.boolean(),
  monday: z.optional(openingHoursDateIntervalSchema),
  tuesday: z.optional(openingHoursDateIntervalSchema),
  wednesday: z.optional(openingHoursDateIntervalSchema),
  thursday: z.optional(openingHoursDateIntervalSchema),
  friday: z.optional(openingHoursDateIntervalSchema),
  saturday: z.optional(openingHoursDateIntervalSchema),
  sunday: z.optional(openingHoursDateIntervalSchema),
});
export { openingHoursSchema };
