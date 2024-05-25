'use client';

import { useState } from 'react';

import { RestaurantsByAddressGrid } from '@/src/app/(public)/(home)/_components/grid/RestaurantsByAddressGrid';

import { RestaurantsByCoordinatesGrid } from './_components/grid/RestaurantsByCoordinatesGrid';
import { HomeRestaurantSearchForm } from './_components/search-form/HomeRestaurantSearchForm';

function HomeComposition() {
  const defaultAddress = 'Skolegade 26, 6700 Esbjerg';
  const [searchAddress, setSearchAddress] = useState<string>(defaultAddress);

  const [location, setLocation] = useState<GeolocationPosition>();

  function handleSearchAddressChange(newAddress: string) {
    setSearchAddress(newAddress);
    setLocation(undefined);
  }

  function handleLocationChange(newLocation?: GeolocationPosition) {
    setLocation(newLocation);
    setSearchAddress(defaultAddress);
  }

  return (
    <main className="z-20 flex grow gap-12 p-8">
      <HomeRestaurantSearchForm
        searchAddress={searchAddress}
        handleSearchAddressChange={(newAddress: string) =>
          handleSearchAddressChange(newAddress)
        }
        handleLocationChange={(newLocation?: GeolocationPosition) =>
          handleLocationChange(newLocation)
        }
      />
      {location ? (
        <RestaurantsByCoordinatesGrid
          longitude={location.coords.longitude}
          latitude={location.coords.latitude}
        />
      ) : (
        <RestaurantsByAddressGrid searchAddress={searchAddress} />
      )}
    </main>
  );
}

export { HomeComposition };
