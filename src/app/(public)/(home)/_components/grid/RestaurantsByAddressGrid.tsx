'use client';

import { useQuery } from '@tanstack/react-query';
import { useDebounce } from 'use-debounce';

import { RestaurantCard } from '@/public-pages/(home)/_components/card/RestaurantCard';
import { restaurantSearchAddressQueryKeys } from '@/src/domain/restaurant/service/keys/RestaurantQueryKeys';
import { fetchRestaurantByAddress } from '@/src/domain/restaurant/service/query-fn/fetchRestaurantByAddress';

import { RestaurantCardPlaceholder } from '../card/placeholder/RestaurantCardPlaceholder';
import { RestaurantGridPlaceholder } from './placeholder/RestaurantGridPlaceholder';

function RestaurantsByAddressGrid({
  searchAddress,
  showTastiest,
  showPrettiest,
  showBestTexture,
  showClosest,
}: {
  searchAddress: string;
  showTastiest: boolean;
  showPrettiest: boolean;
  showBestTexture: boolean;
  showClosest: boolean;
}) {
  const [debouncedAddress] = useDebounce(searchAddress, 1000);

  const { data: restaurants, isFetching } = useQuery({
    queryKey: [
      ...restaurantSearchAddressQueryKeys,
      debouncedAddress,
      showTastiest,
      showPrettiest,
      showBestTexture,
      showClosest,
    ],
    queryFn: () =>
      fetchRestaurantByAddress({
        address: debouncedAddress,
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

export { RestaurantsByAddressGrid };
