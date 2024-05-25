'use client';

import { useState } from 'react';

import { HomeRestaurantGrid } from '@/public-pages/(home)/_components/grid/HomeRestaurantGrid';

import { HomeRestaurantSearchForm } from './_components/search-form/HomeRestaurantSearchForm';

function HomeComposition() {
  const [searchAddress, setSearchAddress] = useState(
    'Skolegade 26, 6700 Esbjerg',
  );

  return (
    <main className="z-20 flex grow gap-12 p-8">
      <HomeRestaurantSearchForm
        searchAddress={searchAddress}
        handleSearchAddressChange={(newAddress: string) =>
          setSearchAddress(newAddress)
        }
      />
      <HomeRestaurantGrid searchAddress={searchAddress} />
    </main>
  );
}

export { HomeComposition };
