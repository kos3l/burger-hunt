import { z } from 'zod';

const RegisterSchema = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
});

export { RegisterSchema };
