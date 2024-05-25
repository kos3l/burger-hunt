'use client';

import { RestaurantSearchFormButton } from '@/public-pages/(home)/_components/_elements/button/RestaurantSearchFormButton';
import { RestaurantSearchInput } from '@/public-pages/(home)/_components/_elements/input/RestaurantSearchInput';

function RestaurantSearchForm({
  searchAddress,
  handleSearchAddressChange,
  handleLocationChange,
}: {
  searchAddress: string;
  handleSearchAddressChange: (newAddress: string) => void;
  handleLocationChange: (newLocation?: GeolocationPosition) => void;
}) {
  return (
    <div className="sticky top-8 flex h-[60rem] w-[30rem] flex-col gap-4 rounded-md border-2 border-stone-800 bg-stone-100 p-4">
      <RestaurantSearchInput
        value={searchAddress}
        onChange={(value) => handleSearchAddressChange(value)}
        name="restaurantSearch"
        label="Search.."
      />
      <RestaurantSearchFormButton
        text="Search near me"
        onClick={() =>
          navigator.geolocation.getCurrentPosition(
            (position) => handleLocationChange(position),
            () => handleLocationChange(undefined),
          )
        }
      />
    </div>
  );
}

export { RestaurantSearchForm };
