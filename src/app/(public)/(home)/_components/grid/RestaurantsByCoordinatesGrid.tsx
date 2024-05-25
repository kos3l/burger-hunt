'use client';

import { useQuery } from '@tanstack/react-query';

import { RestaurantCard } from '@/public-pages/(home)/_components/card/RestaurantCard';
import { restaurantSearchLocationQueryKeys } from '@/src/domain/restaurant/service/keys/RestaurantQueryKeys';
import { fetchRestaurantByLocation } from '@/src/domain/restaurant/service/query-fn/fetchRestaurantByLocation';

function RestaurantsByCoordinatesGrid({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) {
  const { data: restaurants, isPending } = useQuery({
    queryKey: [...restaurantSearchLocationQueryKeys, latitude, longitude],

    queryFn: () => fetchRestaurantByLocation({ latitude, longitude }),
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
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
            restaurantName={restaurant.name}
          />
        );
      })}
    </div>
  );
}

export { RestaurantsByCoordinatesGrid };
