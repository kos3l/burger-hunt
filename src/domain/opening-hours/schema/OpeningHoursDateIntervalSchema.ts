import { z } from 'zod';

const openingHoursDateIntervalSchema = z.object({
  from: z.coerce.date(),
  to: z.coerce.date(),
});

export { openingHoursDateIntervalSchema };
