/* eslint-disable unused-imports/no-unused-vars */
import { restaurantSchema } from '@/domain/restaurant/schema/RestauranSchema';
import { restaurants } from '@/src/resources/mockRestaurants';
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
  latitude?: number;
  longitude?: number;
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
    data: restaurants,
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
