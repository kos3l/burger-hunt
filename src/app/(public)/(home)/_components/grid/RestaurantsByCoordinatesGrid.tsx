'use client';

import { useQuery } from '@tanstack/react-query';

import { RestaurantCard } from '@/public-pages/(home)/_components/card/RestaurantCard';
import { restaurantSearchLocationQueryKeys } from '@/src/domain/restaurant/service/keys/RestaurantQueryKeys';
import { fetchRestaurantByLocation } from '@/src/domain/restaurant/service/query-fn/fetchRestaurantByLocation';

import { RestaurantCardPlaceholder } from '../card/placeholder/RestaurantCardPlaceholder';
import { RestaurantGridPlaceholder } from './placeholder/RestaurantGridPlaceholder';

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
      <div className="grid h-max w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
        <RestaurantCardPlaceholder />
        <RestaurantCardPlaceholder />
        <RestaurantCardPlaceholder />
      </div>
    );
  }

  if (!restaurants) {
    return <RestaurantGridPlaceholder />;
  }

  return (
    <div className="grid h-max w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 2xl:w-max">
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
