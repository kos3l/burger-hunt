/* eslint-disable unused-imports/no-unused-vars */
import { restaurantSchema } from '@/domain/restaurant/schema/RestauranSchema';
import { randomizeMockData, sleep } from '@/src/util/mock/mockUtil';
import {
  createArrayResponseSchema,
  validateSchema,
} from '@/src/util/validation/validationUtil';

import { Restaurant } from '../../entity/Restaurant';

async function fetchAllRestaurants({
  latitude,
  longitude,
  address,
  showTastiest,
  showPrettiest,
  showBestTexture,
  showClosest,
}: {
  latitude: number;
  longitude: number;
  address?: string;
  showTastiest: boolean;
  showPrettiest: boolean;
  showBestTexture: boolean;
  showClosest: boolean;
}): Promise<Restaurant[]> {
  console.log(latitude, longitude, address);
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

export { fetchAllRestaurants };
