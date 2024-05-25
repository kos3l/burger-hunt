'use client';

import { HomeSearchInput } from '@/public-pages/(home)/_components/_elements/input/HomeSearchInput';

function HomeRestaurantSearchForm({
  searchAddress,
  handleSearchAddressChange,
  handleLocationChange,
}: {
  searchAddress: string;
  handleSearchAddressChange: (newAddress: string) => void;
  handleLocationChange: (newLocation?: GeolocationPosition) => void;
}) {
  return (
    <div className="sticky top-8 flex h-[60rem] w-[30rem] flex-col rounded-md border-2 border-stone-800 bg-stone-100 p-4">
      <HomeSearchInput
        value={searchAddress}
        onChange={(value) => handleSearchAddressChange(value)}
        name="restaurantSearch"
        label="Search.."
      />
      <button
        type="button"
        onClick={() =>
          navigator.geolocation.getCurrentPosition(
            (position) => handleLocationChange(position),
            () => handleLocationChange(undefined),
          )
        }
      >
        Im here
      </button>
    </div>
  );
}

export { HomeRestaurantSearchForm };
