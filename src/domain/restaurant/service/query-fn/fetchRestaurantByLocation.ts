/* eslint-disable unused-imports/no-unused-vars */
import { restaurantSchema } from '@/domain/restaurant/schema/RestauranSchema';
import { randomizeMockData, sleep } from '@/src/util/mock/mockUtil';
import {
  createArrayResponseSchema,
  validateSchema,
} from '@/src/util/validation/validationUtil';

import { Restaurant } from '../../entity/Restaurant';

async function fetchRestaurantByLocation({
  latitude,
  longitude,
  showTastiest,
  showPrettiest,
  showBestTexture,
  showClosest,
}: {
  latitude: number;
  longitude: number;
  showTastiest: boolean;
  showPrettiest: boolean;
  showBestTexture: boolean;
  showClosest: boolean;
}): Promise<Restaurant[]> {
  console.log(latitude, longitude, 'location');
  console.log(showTastiest, showPrettiest, showBestTexture, showClosest);
  // NOTE: IF the API existed
  // const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  // const data = await fetch(`${apiUrl}/restaurant/search?latitude=${location.latitude}&longitude=${location.longitude}`);
  // return data.json()

  sleep(500);

  // NOTE: Mock data
  const responseBody = {
    data: [
      {
        id: 'c0104e68-a5f2-4c43-ac33-ec2eaf2600b7',
        name: 'Gadens Gastronomer6',
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
        distance: 1900,
      },
      {
        id: 'fa45e124-7f31-4dd5-88a6-31548c37bf0a',
        name: 'Gadens Gastronomer7',
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
        id: '45eb706e-97c7-4b2c-9f8d-313f1fd33428',
        name: 'Gadens Gastronomer8',
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
        id: 'd76cf7e4-6d2a-42f7-a462-c4e9f60cf255',
        name: 'Gadens Gastronomer9',
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
        id: '58760994-4442-40c3-b941-a8fe2ef1637c',
        name: 'Gadens Gastronomer10',
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
        distance: 500,
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

export { fetchRestaurantByLocation };
