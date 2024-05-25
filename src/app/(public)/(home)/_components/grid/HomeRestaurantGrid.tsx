'use client';

import { useQuery } from '@tanstack/react-query';

import { fetchRestaurantByLocation } from '@/src/domain/restaurant/service/query-fn/fetchRestaurantByLocation';

function HomeRestaurantGrid({ searchAddress }: { searchAddress: string }) {
  const { data: restaurants } = useQuery({
    queryKey: ['restaurant', 'search'],
    queryFn: () => fetchRestaurantByLocation({ address: searchAddress }),
  });

  console.log(restaurants);

  return (
    <div className="grid h-full grow grid-cols-3 gap-8">
      <div className="col-span-1 h-[30rem] rounded-md bg-stone-100" />
      <div className="col-span-1 h-[30rem] rounded-md bg-stone-100" />
      <div className="col-span-1 h-[30rem] rounded-md bg-stone-100" />
      <div className="col-span-1 h-[30rem] rounded-md bg-stone-100" />
      <div className="col-span-1 h-[30rem] rounded-md bg-stone-100" />
      <div className="col-span-1 h-[30rem] rounded-md bg-stone-100" />
      <div className="col-span-1 h-[30rem] rounded-md bg-stone-100" />
      <div className="col-span-1 h-[30rem] rounded-md bg-stone-100" />
      <div className="col-span-1 h-[30rem] rounded-md bg-stone-100" />
      <div className="col-span-1 h-[30rem] rounded-md bg-stone-100" />
    </div>
  );
}

export { HomeRestaurantGrid };
