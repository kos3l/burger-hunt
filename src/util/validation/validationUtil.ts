import { z } from 'zod';

function captureError(error: string, consoleMsg: string): void {
  console.error(error);
  console.error(consoleMsg);
}

function validateSchema<T extends z.ZodTypeAny>(
  responseBody: unknown,
  schema: T,
): z.infer<T> {
  const { data, success, error } = schema.safeParse(responseBody);

  if (success) {
    return data;
  }

  captureError(error.name, error.message);
  return undefined;
}

function createArrayResponseSchema<DataType extends z.ZodTypeAny>(
  dataSchema: DataType,
) {
  return z.object({
    data: z.array(dataSchema),
  });
}

export { createArrayResponseSchema, validateSchema };
