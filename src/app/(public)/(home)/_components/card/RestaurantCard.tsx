'use client';

import Image from 'next/image';

import { Restaurant } from '@/src/domain/restaurant/entity/Restaurant';

function RestaurantCard({
  restaurantName,
  restaurant,
}: {
  restaurantName: string;
  restaurant: Restaurant;
}) {
  return (
    <div className="col-span-1 w-full rounded-sm border-2 border-stone-800 bg-stone-100 p-4">
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
      <div className="h-32 w-full">
        <p className="font-semibold">{restaurantName}</p>
      </div>
    </div>
  );
}

export { RestaurantCard };
