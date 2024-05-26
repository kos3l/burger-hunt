'use client';

import { useQuery } from '@tanstack/react-query';
import { useDebounce } from 'use-debounce';

import { RestaurantCard } from '@/public-pages/(home)/_components/card/RestaurantCard';
import { restaurantSearchAddressQueryKeys } from '@/src/domain/restaurant/service/keys/RestaurantQueryKeys';
import { fetchRestaurantByAddress } from '@/src/domain/restaurant/service/query-fn/fetchRestaurantByAddress';

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

  const { data: restaurants, isPending } = useQuery({
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

export { RestaurantsByAddressGrid };
