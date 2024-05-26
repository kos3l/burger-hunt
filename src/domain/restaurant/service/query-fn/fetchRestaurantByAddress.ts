/* eslint-disable unused-imports/no-unused-vars */
import { restaurantSchema } from '@/domain/restaurant/schema/RestauranSchema';
import { randomizeMockData, sleep } from '@/src/util/mock/mockUtil';
import {
  createArrayResponseSchema,
  validateSchema,
} from '@/src/util/validation/validationUtil';

import { Restaurant } from '../../entity/Restaurant';

async function fetchRestaurantByAddress({
  address,
  showTastiest,
  showPrettiest,
  showBestTexture,
  showClosest,
}: {
  address: string;
  showTastiest: boolean;
  showPrettiest: boolean;
  showBestTexture: boolean;
  showClosest: boolean;
}): Promise<Restaurant[]> {
  console.log(address, 'address');
  console.log(showTastiest, showPrettiest, showBestTexture, showClosest);
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
        name: 'Gadens Gastronomer5',
        types: ['hamburger_restaurant', 'restaurant', 'fast_food_restaurant'],
        primaryType: 'restaurant',
        internationalPhoneNumber: '+4500000000',
        formattedAddress: 'Skolegade 26, 6700 Esbjerg',
        websiteUri: 'https://gadensgastronomer.dk/',
        totalRating: 4,
        tastyTotalRating: 3,
        textureTotalRating: 2,
        visualTotalRating: 1,
        thumbnail: undefined,
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
        distance: 1000,
      },
      {
        id: '65c3483b-e1ed-4849-bca0-1013c412d416',
        name: 'Gadens Gastronomer4',
        types: ['hamburger_restaurant', 'restaurant', 'fast_food_restaurant'],
        primaryType: 'restaurant',
        internationalPhoneNumber: '+4500000000',
        formattedAddress: 'Skolegade 26, 6700 Esbjerg',
        websiteUri: 'https://gadensgastronomer.dk/',
        totalRating: 4,
        tastyTotalRating: 3,
        textureTotalRating: 2,
        visualTotalRating: 1,
        thumbnail: {
          id: 320033,
          url: '/images/burger-mock-two.jpg',
          createdAt: '2024-05-22T09:00:00Z',
          reviewId: 12004,
        },
        openingHours: {
          openNow: false,
          monday: {
            from: '2024-05-25T09:00:00Z',
            to: '2024-05-25T09:00:00Z',
          },
          tuesday: {
            from: '2024-05-25T09:00:00Z',
            to: '2024-05-25T09:00:00Z',
          },
        },
        distance: 2000,
      },
      {
        id: '07bcd9c4-c083-496e-ab31-26e7ba0765dc',
        name: 'Gadens Gastronomer3',
        types: ['hamburger_restaurant', 'restaurant', 'fast_food_restaurant'],
        primaryType: 'restaurant',
        internationalPhoneNumber: '+4500000000',
        formattedAddress: 'Skolegade 26, 6700 Esbjerg',
        websiteUri: 'https://gadensgastronomer.dk/',
        totalRating: 4,
        tastyTotalRating: 3,
        thumbnail: {
          id: 320003,
          url: '/images/burger-mock-two.jpg',
          createdAt: '2024-05-22T09:00:00Z',
          reviewId: 12000,
        },
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
        distance: 1500,
      },
      {
        id: '4056b1a8-c354-4d85-a037-b32bd0df25fd',
        name: 'Gadens Gastronomer2',
        types: ['hamburger_restaurant', 'restaurant', 'fast_food_restaurant'],
        primaryType: 'restaurant',
        internationalPhoneNumber: '+4500000000',
        formattedAddress: 'Skolegade 26, 6700 Esbjerg',
        websiteUri: 'https://gadensgastronomer.dk/',
        totalRating: 4,
        thumbnail: {
          id: 3244003,
          url: '/images/burger-mock-two.jpg',
          createdAt: '2024-05-22T09:00:00Z',
          reviewId: 12010,
        },
        tastyTotalRating: 3,
        textureTotalRating: 2,
        visualTotalRating: 1,
        openingHours: {
          openNow: false,
          monday: {
            from: '2024-05-25T09:00:00Z',
            to: '2024-05-25T09:00:00Z',
          },
          tuesday: {
            from: '2024-05-25T09:00:00Z',
            to: '2024-05-25T09:00:00Z',
          },
        },
        distance: 500,
      },
      {
        id: '727f85bd-53ca-4cd6-a637-c5fc728b796e',
        name: 'Gadens Gastronomer1',
        types: ['hamburger_restaurant', 'restaurant', 'fast_food_restaurant'],
        primaryType: 'restaurant',
        internationalPhoneNumber: '+4500000000',
        formattedAddress: 'Skolegade 26, 6700 Esbjerg',
        websiteUri: 'https://gadensgastronomer.dk/',
        totalRating: 4,
        tastyTotalRating: 3,
        textureTotalRating: 2,
        thumbnail: {
          id: 3203203,
          url: '/images/burger-mock-two.jpg',
          createdAt: '2024-05-22T09:00:00Z',
          reviewId: 12200,
        },
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
        distance: 6000,
      },
    ],
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
      const arrayResponseSchema = createArrayResponseSchema(restaurantSchema);
      const validatedData = validateSchema(data, arrayResponseSchema);

      return validatedData.data;
    });
}

export { fetchRestaurantByAddress };
