'use client';

import { HomeSearchInput } from '@/public-pages/(home)/_components/_elements/input/HomeSearchInput';

function HomeRestaurantSearchForm({
  searchAddress,
  handleSearchAddressChange,
}: {
  searchAddress: string;
  handleSearchAddressChange: (newAddress: string) => void;
}) {
  return (
    <div className="sticky top-8 flex h-[60rem] w-[30rem] flex-col rounded-md bg-stone-100 p-4">
      <HomeSearchInput
        value={searchAddress}
        onChange={(value) => handleSearchAddressChange(value)}
        name="restaurantSearch"
        label="Search.."
      />
    </div>
  );
}

export { HomeRestaurantSearchForm };
