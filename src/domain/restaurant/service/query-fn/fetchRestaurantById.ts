/* eslint-disable unused-imports/no-unused-vars */
import { restaurantSchema } from '@/domain/restaurant/schema/RestauranSchema';
import { restaurants } from '@/src/resources/mockRestaurants';
import { randomizeMockData, sleep } from '@/src/util/mock/mockUtil';
import { validateSchema } from '@/src/util/validation/validationUtil';

import { Restaurant } from '../../entity/Restaurant';

async function fetchRestaurantById({
  id,
}: {
  id: string;
}): Promise<Restaurant> {
  console.log(id);
  sleep(500);

  const body = JSON.stringify(randomizeMockData(restaurants).data[0]);

  return new Response(body, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .json()
    .then((data) => {
      const validatedData = validateSchema(data, restaurantSchema);
      return validatedData;
    });
}

export { fetchRestaurantById };
