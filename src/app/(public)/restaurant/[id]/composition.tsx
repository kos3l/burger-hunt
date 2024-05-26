'use client';

import { useQuery } from '@tanstack/react-query';

import { restaurantByIdQueryKeys } from '@/src/domain/restaurant/service/keys/RestaurantQueryKeys';
import { fetchRestaurantById } from '@/src/domain/restaurant/service/query-fn/fetchRestaurantById';

function RestaurantComposition({ id }: { id: string }) {
  const { data: restaurant, isFetching } = useQuery({
    queryKey: [...restaurantByIdQueryKeys, id],
    queryFn: () => fetchRestaurantById({ id }),
  });

  if (!restaurant) {
    return <p>empty!!!!</p>;
  }

  if (isFetching) {
    return <p>Loading!!!!</p>;
  }

  return (
    <main className="z-20 flex min-h-full grow justify-center">
      {restaurant.name}
    </main>
  );
}

export { RestaurantComposition };
