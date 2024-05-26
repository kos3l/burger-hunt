import { QueryClient } from '@tanstack/react-query';

import { sleep } from '@/src/util/mock/mockUtil';

import { CreateReviewDto } from '../../dto/CreateReviewDto';
import { reviewQueryKeys } from '../keys/ReviewQueryKeys';

async function createReview({
  restaurantId,
  title,
  content,
  tasteRating,
  visualRating,
  textureRating,
  totalRating,
}: CreateReviewDto) {
  sleep(2000);

  const payload = JSON.stringify({
    restaurantId,
    title,
    content,
    tasteRating,
    visualRating,
    textureRating,
    totalRating,
  });

  return new Response(payload, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .json()
    .then(async () => {
      const queryClient = new QueryClient();
      await queryClient.invalidateQueries({
        queryKey: [reviewQueryKeys, restaurantId],
      });
    });
}

export { createReview };
