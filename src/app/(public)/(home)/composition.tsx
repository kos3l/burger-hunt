'use client';

import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useDebounce } from 'use-debounce';

import { RestaurantSearchForm } from '@/public-pages/(home)/_components/search-form/RestaurantSearchForm';
import {
  restaurantSearchAddressQueryKeys,
  restaurantSearchLocationQueryKeys,
} from '@/src/domain/restaurant/service/keys/RestaurantQueryKeys';
import { fetchRestaurantByAddress } from '@/src/domain/restaurant/service/query-fn/fetchRestaurantByAddress';
import { fetchRestaurantByLocation } from '@/src/domain/restaurant/service/query-fn/fetchRestaurantByLocation';

import { RestaurantGrid } from './_components/grid/RestaurantGrid';

function HomeComposition() {
  const defaultAddress = 'Skolegade 26, 6700 Esbjerg';

  const [searchAddress, setSearchAddress] = useState<string>(defaultAddress);
  const [showTastiest, setShowTastiest] = useState<boolean>(true);
  const [showPrettiest, setShowPrettiest] = useState<boolean>(true);
  const [showBestTexture, setShowBestTexture] = useState<boolean>(true);
  const [showClosest, setShowClosest] = useState<boolean>(true);

  const [location, setLocation] = useState<GeolocationPosition>();
  const [debouncedAddress] = useDebounce(searchAddress, 1000);

  const { data: restaurantsByAddress, isFetching: isFetchingByAddres } =
    useQuery({
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
      enabled: !location,
    });

  const { data: restaurantsByLocation, isFetching: isFetchingByLocation } =
    useQuery({
      queryKey: [
        ...restaurantSearchLocationQueryKeys,
        location?.coords.latitude,
        location?.coords.longitude,
        showTastiest,
        showPrettiest,
        showBestTexture,
        showClosest,
      ],
      queryFn: () =>
        fetchRestaurantByLocation({
          latitude: location ? location.coords.latitude : 0,
          longitude: location ? location.coords.longitude : 0,
          showTastiest,
          showPrettiest,
          showBestTexture,
          showClosest,
        }),
      enabled: location !== undefined,
    });

  function handleSearchAddressChange(newAddress: string) {
    setSearchAddress(newAddress);
    setLocation(undefined);
  }

  function handleLocationChange(newLocation?: GeolocationPosition) {
    setLocation(newLocation);
    setSearchAddress(defaultAddress);
  }

  function handleShowTastiestChange(value: boolean) {
    setShowTastiest(value);
  }
  function handleShowPrettiestChange(value: boolean) {
    setShowPrettiest(value);
  }
  function handleShowBestTextureChange(value: boolean) {
    setShowBestTexture(value);
  }
  function handleShowClosestChange(value: boolean) {
    setShowClosest(value);
  }

  const searchedRestaurants = location
    ? restaurantsByLocation
    : restaurantsByAddress;
  const isFetchingRestaurants = location
    ? isFetchingByLocation
    : isFetchingByAddres;

  return (
    <main className="z-20 flex min-h-full grow justify-center">
      <div className="flex w-full max-w-full flex-col gap-3 p-4 lg:flex-row lg:gap-8 lg:p-6 2xl:max-w-[90rem] 2xl:p-8">
        <RestaurantSearchForm
          searchAddress={searchAddress}
          handleSearchAddressChange={(newAddress: string) =>
            handleSearchAddressChange(newAddress)
          }
          handleLocationChange={(newLocation?: GeolocationPosition) =>
            handleLocationChange(newLocation)
          }
          showTastiest={showTastiest}
          showPrettiest={showPrettiest}
          showBestTexture={showBestTexture}
          showClosest={showClosest}
          handleShowTastiestChange={(value: boolean) =>
            handleShowTastiestChange(value)
          }
          handleShowPrettiestChange={(value: boolean) =>
            handleShowPrettiestChange(value)
          }
          handleShowBestTextureChange={(value: boolean) =>
            handleShowBestTextureChange(value)
          }
          handleShowClosestChange={(value: boolean) =>
            handleShowClosestChange(value)
          }
        />
        <RestaurantGrid
          restaurants={searchedRestaurants}
          isFetching={isFetchingRestaurants}
        />
      </div>
    </main>
  );
}

export { HomeComposition };
