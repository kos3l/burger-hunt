'use client';

import { useQuery } from '@tanstack/react-query';

import { RestaurantCard } from '@/public-pages/(home)/_components/card/RestaurantCard';
import { restaurantSearchLocationQueryKeys } from '@/src/domain/restaurant/service/keys/RestaurantQueryKeys';
import { fetchRestaurantByLocation } from '@/src/domain/restaurant/service/query-fn/fetchRestaurantByLocation';

import { RestaurantCardPlaceholder } from '../card/placeholder/RestaurantCardPlaceholder';

function RestaurantsByCoordinatesGrid({
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
}) {
  const { data: restaurants, isFetching } = useQuery({
    queryKey: [
      ...restaurantSearchLocationQueryKeys,
      latitude,
      longitude,
      showTastiest,
      showPrettiest,
      showBestTexture,
      showClosest,
    ],
    queryFn: () =>
      fetchRestaurantByLocation({
        latitude,
        longitude,
        showTastiest,
        showPrettiest,
        showBestTexture,
        showClosest,
      }),
  });

  if (isFetching) {
    return (
      <div className="grid h-full grow grid-cols-3 gap-8">
        <RestaurantCardPlaceholder />
        <RestaurantCardPlaceholder />
        <RestaurantCardPlaceholder />
      </div>
    );
  }

  if (!restaurants) {
    return (
      <div className="grid h-full grow grid-cols-3 gap-8">
        <p className="col-span-3">No Results</p>
      </div>
    );
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
