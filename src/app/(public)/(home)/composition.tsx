'use client';

import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';

import { RestaurantSearchForm } from '@/public-pages/(home)/_components/search-form/RestaurantSearchForm';
import { restaurantSearchLocationQueryKeys } from '@/src/domain/restaurant/service/keys/RestaurantQueryKeys';
import { fetchAllRestaurants } from '@/src/domain/restaurant/service/query-fn/fetchAllRestaurants';

import { RestaurantGrid } from './_components/grid/RestaurantGrid';

function HomeComposition() {
  const defaultAddress = 'Skolegade 26, 6700 Esbjerg';

  const [searchAddress, setSearchAddress] = useState<string>(defaultAddress);
  const [showTastiest, setShowTastiest] = useState<boolean>(true);
  const [showPrettiest, setShowPrettiest] = useState<boolean>(true);
  const [showBestTexture, setShowBestTexture] = useState<boolean>(true);
  const [showClosest, setShowClosest] = useState<boolean>(true);

  const [showByLocation, setShowByLocation] = useState<boolean>(false);
  const [location, setLocation] = useState<GeolocationPosition>();
  const [debouncedAddress] = useDebounce(searchAddress, 1000);
  const addressToSearch = !showByLocation ? debouncedAddress : undefined;

  const { data: restaurants, isFetching } = useQuery({
    queryKey: [
      ...restaurantSearchLocationQueryKeys,
      location?.coords.latitude,
      location?.coords.longitude,
      addressToSearch,
      showTastiest,
      showPrettiest,
      showBestTexture,
      showClosest,
    ],
    queryFn: () =>
      fetchAllRestaurants({
        latitude: location ? location.coords.latitude : 0,
        longitude: location ? location.coords.longitude : 0,
        address: addressToSearch,
        showTastiest,
        showPrettiest,
        showBestTexture,
        showClosest,
      }),
  });

  useEffect(() => {
    if (!location) {
      navigator.geolocation.getCurrentPosition(
        (position) => setLocation(position),
        () => setLocation(undefined),
      );
    }
  }, []);

  function handleSearchAddressChange(newAddress: string) {
    setSearchAddress(newAddress);
    setShowByLocation(false);
  }

  function handleOnSearchByLocationClick(newLocation?: GeolocationPosition) {
    setLocation(newLocation);
    setSearchAddress(defaultAddress);
    setShowByLocation(true);
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

  return (
    <main className="z-20 flex min-h-full grow justify-center">
      <div className="flex w-full max-w-full flex-col gap-3 p-4 lg:flex-row lg:gap-8 lg:p-6 2xl:max-w-[90rem] 2xl:p-8">
        <RestaurantSearchForm
          searchAddress={searchAddress}
          handleSearchAddressChange={(newAddress: string) =>
            handleSearchAddressChange(newAddress)
          }
          handleOnSearchByLocationClick={(newLocation?: GeolocationPosition) =>
            handleOnSearchByLocationClick(newLocation)
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
        <RestaurantGrid restaurants={restaurants} isFetching={isFetching} />
      </div>
    </main>
  );
}

export { HomeComposition };
