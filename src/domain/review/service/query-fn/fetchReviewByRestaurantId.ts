/* eslint-disable unused-imports/no-unused-vars */
import { reviews } from '@/src/resources/mockReview';
import { randomizeMockData, sleep } from '@/src/util/mock/mockUtil';
import {
  createArrayResponseSchema,
  validateSchema,
} from '@/src/util/validation/validationUtil';

import { Review } from '../../entity/Review';
import { reviewSchema } from '../../schema/ReviewSchema';

async function fetchReviewByRestaurantId({
  id,
}: {
  id: string;
}): Promise<Review[]> {
  console.log(id);
  sleep(500);

  const responseBody = {
    data: reviews,
  };

  const body = JSON.stringify(randomizeMockData(responseBody.data));

  return new Response(body, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .json()
    .then((data) => {
      const arrayResponseSchema = createArrayResponseSchema(reviewSchema);
      const validatedData = validateSchema(data, arrayResponseSchema);
      return validatedData.data;
    });
}

export { fetchReviewByRestaurantId };
