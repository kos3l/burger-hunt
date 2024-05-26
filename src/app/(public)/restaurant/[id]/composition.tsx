'use client';

import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';

import { restaurantByIdQueryKeys } from '@/src/domain/restaurant/service/keys/RestaurantQueryKeys';
import { fetchRestaurantById } from '@/src/domain/restaurant/service/query-fn/fetchRestaurantById';

import { RestaurantAddress } from '../_components/RestaurantAddress';
import { RestaurantOpeningHours } from '../_components/RestaurantOpeningHours';
import { RestaurantScores } from '../_components/RestaurantScores';
import { RestaurantWebsite } from '../_components/RestaurantWebsite';

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

  const restaurantImage = restaurant.thumbnail
    ? restaurant.thumbnail.url
    : '/images/placeholder-restaurant.jpg';

  return (
    <main className="z-20 flex min-h-full grow justify-center">
      <div className="flex w-full max-w-full flex-col gap-2 p-4 lg:flex-row lg:gap-4 lg:p-6 2xl:max-w-[90rem] 2xl:p-8">
        <div className="flex h-max w-full flex-col gap-3 rounded-sm border-2 border-stone-800 bg-stone-100 p-4 text-sm sm:flex-row sm:gap-4 lg:w-80 lg:flex-col lg:gap-3">
          <div className="relative aspect-square h-auto w-full overflow-hidden rounded-md sm:size-48 lg:h-auto lg:w-full">
            <Image
              src={restaurantImage}
              alt="restaurant-thumbnail-alt"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="flex grow flex-col gap-3">
            <p className="text-xl font-bold">{restaurant.name}</p>
            <RestaurantScores
              totalRating={restaurant.totalRating}
              distance={restaurant.distance}
              visualRating={restaurant.visualTotalRating}
              textureRating={restaurant.textureTotalRating}
              tasteRating={restaurant.tastyTotalRating}
            />
            <RestaurantAddress address={restaurant.formattedAddress} />
            <RestaurantOpeningHours
              monday={restaurant.openingHours.monday}
              tuesday={restaurant.openingHours.tuesday}
              wednesday={restaurant.openingHours.wednesday}
              thursday={restaurant.openingHours.thursday}
              friday={restaurant.openingHours.friday}
              saturday={restaurant.openingHours.saturday}
              sunday={restaurant.openingHours.sunday}
            />
            {restaurant.websiteUri && (
              <RestaurantWebsite url={restaurant.websiteUri} />
            )}
          </div>
        </div>
        <div className="flex h-max grow flex-col gap-6 rounded-sm border-2 border-stone-800 bg-stone-100 p-4">
          {restaurant.name}
        </div>
      </div>
    </main>
  );
}

export { RestaurantComposition };
