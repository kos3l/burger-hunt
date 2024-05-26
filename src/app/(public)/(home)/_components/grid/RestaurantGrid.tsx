'use client';

import { RestaurantCard } from '@/public-pages/(home)/_components/card/RestaurantCard';
import { Restaurant } from '@/src/domain/restaurant/entity/Restaurant';

import { RestaurantCardPlaceholder } from '../card/placeholder/RestaurantCardPlaceholder';
import { RestaurantGridPlaceholder } from './placeholder/RestaurantGridPlaceholder';

function RestaurantGrid({
  restaurants,
  isFetching,
}: {
  restaurants?: Restaurant[];
  isFetching: boolean;
}) {
  if (isFetching) {
    return (
      <div className="grid h-max w-full grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 lg:gap-6 xl:grid-cols-3">
        <RestaurantCardPlaceholder />
        <RestaurantCardPlaceholder />
        <RestaurantCardPlaceholder />
      </div>
    );
  }

  if (!restaurants) {
    return <RestaurantGridPlaceholder />;
  }

  return (
    <div className="grid h-max w-full grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 lg:gap-6 xl:grid-cols-3 2xl:w-max 2xl:min-w-[60rem]">
      {restaurants.map((restaurant) => {
        return (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
            restaurantName={restaurant.name}
          />
        );
      })}
    </div>
  );
}

export { RestaurantGrid };
