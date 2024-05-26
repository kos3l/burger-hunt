'use client';

import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';

import { restaurantByIdQueryKeys } from '@/src/domain/restaurant/service/keys/RestaurantQueryKeys';
import { fetchRestaurantById } from '@/src/domain/restaurant/service/query-fn/fetchRestaurantById';
import { formatDate } from '@/src/util/date/dateUtil';

import { DistanceWidget } from '../../(home)/_components/card/widget/DistanceWidget';
import { RatingWidget } from '../../(home)/_components/card/widget/RatingWidget';

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

  const formattedDistance = new Intl.NumberFormat('en-UK', {
    style: 'unit',
    unitDisplay: 'short',
    unit: 'kilometer',
  }).format(restaurant.distance);

  return (
    <main className="z-20 flex min-h-full grow justify-center">
      <div className="flex w-full max-w-full flex-col gap-2 p-4 lg:flex-row lg:gap-4 lg:p-6 2xl:max-w-[90rem] 2xl:p-8">
        <div className="flex h-max w-full flex-col gap-3 rounded-sm border-2 border-stone-800 bg-stone-100 p-4 text-sm sm:flex-row sm:gap-4 lg:w-80 lg:flex-col lg:gap-3">
          <div className="relative aspect-square h-auto w-full overflow-hidden rounded-md sm:size-48 lg:h-auto lg:w-full">
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
          <div className="flex grow flex-col gap-3">
            <p className="text-xl font-bold">{restaurant.name}</p>
            <div className="flex gap-6 pb-2">
              <div>
                <RatingWidget rating={restaurant.totalRating} />
              </div>
              <div>
                <DistanceWidget distance={formattedDistance} position="start" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p>
                <span className="font-semibold">Visual presentation:</span> 4/5
              </p>
              <p>
                <span className="font-semibold">Texture:</span> 4/5
              </p>
              <p>
                <span className="font-semibold">Taste:</span> 4/5
              </p>
            </div>
            <div className="w-full border-t-2 border-dashed border-stone-900 pt-2">
              <p>
                <span className="font-semibold">Adress:</span>
                {restaurant.formattedAddress}
              </p>
            </div>
            <div className="w-full border-t-2 border-dashed border-stone-900 pt-2">
              <p className="pb-1 font-semibold">Opening Hours:</p>
              {restaurant.openingHours.monday && (
                <p>
                  Monday: {formatDate(restaurant.openingHours.monday.from)} -{' '}
                  {formatDate(restaurant.openingHours.monday.to)}
                </p>
              )}
              {restaurant.openingHours.tuesday && (
                <p>
                  Tuesday: {formatDate(restaurant.openingHours.tuesday.from)} -{' '}
                  {formatDate(restaurant.openingHours.tuesday.to)}
                </p>
              )}
              {restaurant.openingHours.wednesday && (
                <p>
                  Wednesday:{' '}
                  {formatDate(restaurant.openingHours.wednesday.from)} -{' '}
                  {formatDate(restaurant.openingHours.wednesday.to)}
                </p>
              )}
              {restaurant.openingHours.thursday && (
                <p>
                  Thursday: {formatDate(restaurant.openingHours.thursday.from)}{' '}
                  - {formatDate(restaurant.openingHours.thursday.to)}
                </p>
              )}
              {restaurant.openingHours.friday && (
                <p>
                  Friday: {formatDate(restaurant.openingHours.friday.from)} -{' '}
                  {formatDate(restaurant.openingHours.friday.to)}
                </p>
              )}
              {restaurant.openingHours.saturday && (
                <p>
                  Saturday: {formatDate(restaurant.openingHours.saturday.from)}{' '}
                  - {formatDate(restaurant.openingHours.saturday.to)}
                </p>
              )}
              {restaurant.openingHours.sunday && (
                <p>
                  Sunday: {formatDate(restaurant.openingHours.sunday.from)} -{' '}
                  {formatDate(restaurant.openingHours.sunday.to)}
                </p>
              )}
            </div>
            {restaurant.websiteUri && (
              <div className="w-full border-t-2 border-dashed border-stone-900 pt-2">
                <Link href={restaurant.websiteUri}>
                  <p className="underline">Visit their website</p>
                </Link>
              </div>
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
