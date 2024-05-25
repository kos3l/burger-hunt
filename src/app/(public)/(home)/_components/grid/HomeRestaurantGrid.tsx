'use client';

import { useQuery } from '@tanstack/react-query';

import { restaurantSearchQueryKeys } from '@/src/domain/restaurant/service/keys/RestaurantQueryKeys';
import { fetchRestaurantByLocation } from '@/src/domain/restaurant/service/query-fn/fetchRestaurantByLocation';

function HomeRestaurantGrid({ searchAddress }: { searchAddress: string }) {
  const { data: restaurants, isPending } = useQuery({
    queryKey: restaurantSearchQueryKeys,
    queryFn: () => fetchRestaurantByLocation({ address: searchAddress }),
  });

  if (isPending) {
    return <div>loading..</div>;
  }

  if (!restaurants) {
    return <div>No results found..</div>;
  }

  return (
    <div className="grid h-full grow grid-cols-3 gap-8">
      {restaurants.map((restaurant) => {
        return (
          <div
            key={restaurant.id}
            className="col-span-1 aspect-square w-full rounded-md bg-stone-100"
          >
            {restaurant.name}
          </div>
        );
      })}
    </div>
  );
}

export { HomeRestaurantGrid };
