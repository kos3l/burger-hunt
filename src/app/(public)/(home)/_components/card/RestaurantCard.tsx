import Image from 'next/image';
import Link from 'next/link';

import { DistanceWidget } from '@/public-pages/(home)/_components/card/widget/DistanceWidget';
import { OpenHoursWidget } from '@/public-pages/(home)/_components/card/widget/OpenHoursWidget';
import { RatingWidget } from '@/public-pages/(home)/_components/card/widget/RatingWidget';
import { Restaurant } from '@/src/domain/restaurant/entity/Restaurant';

function RestaurantCard({
  restaurantName,
  restaurant,
}: {
  restaurantName: string;
  restaurant: Restaurant;
}) {
  const formattedDistance = new Intl.NumberFormat('en-UK', {
    style: 'unit',
    unitDisplay: 'short',
    unit: 'kilometer',
  }).format(restaurant.distance);

  const openHoursTagVariant = restaurant.openingHours.openNow
    ? 'open'
    : 'closed';

  return (
    <Link href="/">
      <div className="relative col-span-1 w-full rounded-sm border-2 border-stone-800 bg-stone-100 p-4">
        <OpenHoursWidget variant={openHoursTagVariant} />
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
        <div className="flex h-28 w-full flex-col justify-between gap-2 pt-4">
          <p className="truncate text-base font-semibold lg:text-xl">
            {restaurantName}
          </p>
          <div className="flex w-full items-center justify-between gap-4">
            <RatingWidget rating={restaurant.totalRating} />
            <DistanceWidget distance={formattedDistance} />
          </div>
        </div>
      </div>
    </Link>
  );
}

export { RestaurantCard };
