'use client';

import { useState } from 'react';

import { RestaurantsByAddressGrid } from '@/public-pages/(home)/_components/grid/RestaurantsByAddressGrid';
import { RestaurantsByCoordinatesGrid } from '@/public-pages/(home)/_components/grid/RestaurantsByCoordinatesGrid';
import { RestaurantSearchForm } from '@/public-pages/(home)/_components/search-form/RestaurantSearchForm';

function HomeComposition() {
  const defaultAddress = 'Skolegade 26, 6700 Esbjerg';

  const [searchAddress, setSearchAddress] = useState<string>(defaultAddress);
  const [showTastiest, setShowTastiest] = useState<boolean>(true);
  const [showPrettiest, setShowPrettiest] = useState<boolean>(true);
  const [showBestTexture, setShowBestTexture] = useState<boolean>(true);
  const [showClosest, setShowClosest] = useState<boolean>(true);

  const [location, setLocation] = useState<GeolocationPosition>();

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

  return (
    <main className="z-20 flex grow gap-12 p-8">
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
      {location ? (
        <RestaurantsByCoordinatesGrid
          longitude={location.coords.longitude}
          latitude={location.coords.latitude}
          showTastiest={showTastiest}
          showPrettiest={showPrettiest}
          showBestTexture={showBestTexture}
          showClosest={showClosest}
        />
      ) : (
        <RestaurantsByAddressGrid
          searchAddress={searchAddress}
          showTastiest={showTastiest}
          showPrettiest={showPrettiest}
          showBestTexture={showBestTexture}
          showClosest={showClosest}
        />
      )}
    </main>
  );
}

export { HomeComposition };
