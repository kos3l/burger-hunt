'use client';

import { useState } from 'react';

import { RestaurantSearchFormButton } from '@/public-pages/(home)/_components/_elements/button/RestaurantSearchFormButton';
import { RestaurantSearchInput } from '@/public-pages/(home)/_components/_elements/input/RestaurantSearchInput';
import { RestaurantSortRadio } from '@/public-pages/(home)/_components/_elements/input/RestaurantSortRadio';

function RestaurantSearchForm({
  searchAddress,
  handleSearchAddressChange,
  handleLocationChange,
}: {
  searchAddress: string;
  handleSearchAddressChange: (newAddress: string) => void;
  handleLocationChange: (newLocation?: GeolocationPosition) => void;
}) {
  const [showTastiest, setShowTastiest] = useState<boolean>(true);
  const [showPrettiest, setShowPrettiest] = useState<boolean>(true);
  const [showBestTexture, setShowBestTexture] = useState<boolean>(true);
  const [showClosest, setShowClosest] = useState<boolean>(true);

  return (
    <div className="sticky top-8 flex h-[60rem] w-[30rem] flex-col gap-6 rounded-md border-2 border-stone-800 bg-stone-100 p-4">
      <RestaurantSearchFormButton
        text="Search near me"
        onClick={() =>
          navigator.geolocation.getCurrentPosition(
            (position) => handleLocationChange(position),
            () => handleLocationChange(undefined),
          )
        }
      />
      <RestaurantSearchInput
        value={searchAddress}
        onChange={(value) => handleSearchAddressChange(value)}
        name="restaurantSearch"
        label="Search.."
      />
      <div className="flex w-full flex-col gap-2 border-t-2 border-dashed border-stone-900 pt-2">
        <p>Show me the...</p>
        <div className="flex h-10 w-full border-2 border-stone-900">
          <RestaurantSortRadio
            name="sort-taste"
            id="bland"
            value={!showTastiest}
            onChange={() => setShowTastiest(false)}
            label="Blandest"
          />
          <RestaurantSortRadio
            name="sort-taste"
            id="tasty"
            value={showTastiest === true}
            onChange={() => setShowTastiest(true)}
            label="Tastiest"
          />
        </div>
        <div className="flex h-10 w-full border-2 border-stone-900">
          <RestaurantSortRadio
            name="sort-visual"
            id="ugly"
            value={!showPrettiest}
            onChange={() => setShowPrettiest(false)}
            label="Ugliest"
          />
          <RestaurantSortRadio
            name="sort-visual"
            id="pretty"
            value={showPrettiest === true}
            onChange={() => setShowPrettiest(true)}
            label="Prettiest"
          />
        </div>
        <div className="flex h-10 w-full border-2 border-stone-900">
          <RestaurantSortRadio
            name="sort-texture"
            id="low-quality"
            value={!showBestTexture}
            onChange={() => setShowBestTexture(false)}
            label="Lowest Quality"
          />
          <RestaurantSortRadio
            name="sort-texture"
            id="high-quality"
            value={showBestTexture === true}
            onChange={() => setShowBestTexture(true)}
            label="Highest Quality"
          />
        </div>
        <div className="flex h-10 w-full border-2 border-stone-900">
          <RestaurantSortRadio
            name="sort-distance"
            id="far-away"
            value={!showClosest}
            onChange={() => setShowClosest(false)}
            label="Farthest"
          />
          <RestaurantSortRadio
            name="sort-distance"
            id="close"
            value={showClosest === true}
            onChange={() => setShowClosest(true)}
            label="Closest"
          />
        </div>
      </div>
      <div className="flex w-full flex-col gap-2 border-t-2 border-dashed border-stone-900 pt-2">
        <p>Community:</p>
      </div>
    </div>
  );
}

export { RestaurantSearchForm };
