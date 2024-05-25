/* eslint-disable unused-imports/no-unused-vars */
import { restaurantSchema } from '@/domain/restaurant/schema/RestauranSchema';
import { sleep } from '@/src/util/mock/timeoutUtil';
import {
  createArrayResponseSchema,
  validateSchema,
} from '@/src/util/validation/validationUtil';

import { Restaurant } from '../../entity/Restaurant';

async function fetchRestaurantByLocation({
  address,
}: {
  address: string;
}): Promise<Restaurant[]> {
  console.log(address);
  // NOTE: IF the API existed
  // const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  // const data = await fetch(`${apiUrl}/restaurant/search?address=${address}`);
  // return data.json()

  sleep(2000);

  // NOTE: Mock data
  const responseBody = {
    data: [
      {
        id: '677ec37a-bbde-4a15-ae21-55788381cfca',
        name: 'Gadens Gastronomer',
        types: ['hamburger_restaurant', 'restaurant', 'fast_food_restaurant'],
        primaryType: 'restaurant',
        internationalPhoneNumber: '+4500000000',
        formattedAddress: 'Skolegade 26, 6700 Esbjerg',
        websiteUri: 'https://gadensgastronomer.dk/',
        totalRating: 4,
        tastyTotalRating: 3,
        textureTotalRating: 2,
        visualTotalRating: 1,
        openingHours: {
          openNow: true,
          monday: {
            from: '2024-05-25T09:00:00Z',
            to: '2024-05-25T09:00:00Z',
          },
          tuesday: {
            from: '2024-05-25T09:00:00Z',
            to: '2024-05-25T09:00:00Z',
          },
        },
        upvotes: 50,
        downvotes: 10,
      },
      {
        id: '677ec37a-bbde-4a15-ae21-55788381cfca',
        name: 'Gadens Gastronomer',
        types: ['hamburger_restaurant', 'restaurant', 'fast_food_restaurant'],
        primaryType: 'restaurant',
        internationalPhoneNumber: '+4500000000',
        formattedAddress: 'Skolegade 26, 6700 Esbjerg',
        websiteUri: 'https://gadensgastronomer.dk/',
        totalRating: 4,
        tastyTotalRating: 3,
        textureTotalRating: 2,
        visualTotalRating: 1,
        openingHours: {
          openNow: true,
          monday: {
            from: '2024-05-25T09:00:00Z',
            to: '2024-05-25T09:00:00Z',
          },
          tuesday: {
            from: '2024-05-25T09:00:00Z',
            to: '2024-05-25T09:00:00Z',
          },
        },
        upvotes: 50,
        downvotes: 10,
      },
    ],
  };

  return new Response(JSON.stringify(responseBody), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .json()
    .then((data) => {
      const arrayResponseSchema = createArrayResponseSchema(restaurantSchema);
      const validatedData = validateSchema(data, arrayResponseSchema);

      return validatedData.data;
    });
}

export { fetchRestaurantByLocation };
