'use client';

import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';

import { restaurantByIdQueryKeys } from '@/src/domain/restaurant/service/keys/RestaurantQueryKeys';
import { fetchRestaurantById } from '@/src/domain/restaurant/service/query-fn/fetchRestaurantById';

function RestaurantComposition({ id }: { id: string }) {
  const { data: restaurant, isFetching } = useQuery({
    queryKey: [...restaurantByIdQueryKeys, id],
    queryFn: () => fetchRestaurantById({ id }),
  });

  if (!restaurant) {
    return <p>empty!!!!</p>;
  }

  if (isFetching) {
    return <p>Loading!!!!</p>;
  }

  return (
    <main className="z-20 flex min-h-full grow justify-center">
      <div className="flex w-full max-w-full flex-col gap-2 p-4 lg:flex-row lg:gap-4 lg:p-6 2xl:max-w-[90rem] 2xl:p-8">
        <div className="flex h-max w-[30rem] flex-col gap-6 rounded-sm border-2 border-stone-800 bg-stone-100 p-4">
          <div className="relative aspect-square w-full overflow-hidden rounded-md">
            <Image
              src={
                restaurant.thumbnail
                  ? restaurant.thumbnail.url
                  : '/images/placeholder-restaurant.jpg'
              }
              alt="restaurant-thumbnail-alt"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          {restaurant.name}
        </div>
        <div className="flex h-max grow flex-col gap-6 rounded-sm border-2 border-stone-800 bg-stone-100 p-4">
          {restaurant.name}
        </div>
      </div>
    </main>
  );
}

export { RestaurantComposition };
