'use client';

import { useQuery } from '@tanstack/react-query';
import { useDebounce } from 'use-debounce';

import { RestaurantCard } from '@/public-pages/(home)/_components/card/RestaurantCard';
import { restaurantSearchAddressQueryKeys } from '@/src/domain/restaurant/service/keys/RestaurantQueryKeys';
import { fetchRestaurantByAddress } from '@/src/domain/restaurant/service/query-fn/fetchRestaurantByAddress';

import { RestaurantCardPlaceholder } from '../card/placeholder/RestaurantCardPlaceholder';

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
        <div className="col-span-3 flex h-24 items-center rounded-sm border-2 border-stone-900 bg-stone-100 px-8">
          <p className="col-span-3 text-xl font-semibold">
            Sorry! We couldn&apos;t find any burger restaurants close to this
            address.
          </p>
        </div>
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

export { RestaurantsByAddressGrid };
