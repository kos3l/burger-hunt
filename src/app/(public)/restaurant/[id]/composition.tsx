'use client';

import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';

import { restaurantByIdQueryKeys } from '@/src/domain/restaurant/service/keys/RestaurantQueryKeys';
import { fetchRestaurantById } from '@/src/domain/restaurant/service/query-fn/fetchRestaurantById';
import { reviewQueryKeys } from '@/src/domain/review/service/keys/ReviewQueryKeys';
import { fetchReviewByRestaurantId } from '@/src/domain/review/service/query-fn/fetchReviewByRestaurantId';

import { RestaurantAddress } from '../_components/RestaurantAddress';
import { RestaurantOpeningHours } from '../_components/RestaurantOpeningHours';
import { RestaurantScores } from '../_components/RestaurantScores';
import { RestaurantWebsite } from '../_components/RestaurantWebsite';

function RestaurantComposition({ id }: { id: string }) {
  const { data: restaurant, isFetching } = useQuery({
    queryKey: [...restaurantByIdQueryKeys, id],
    queryFn: () => fetchRestaurantById({ id }),
  });

  const { data: reviews, isFetching: isFetchingReviews } = useQuery({
    queryKey: [...reviewQueryKeys, id],
    queryFn: () => fetchReviewByRestaurantId({ id }),
  });

  if (!restaurant) {
    return <p>empty!!!!</p>;
  }

  if (isFetching) {
    return <p>Loading!!!!</p>;
  }
  console.log(isFetchingReviews);
  const restaurantImage = restaurant.thumbnail
    ? restaurant.thumbnail.url
    : '/images/placeholder-restaurant.jpg';
  const reviewsCardtitle = `Reviews (${reviews ? reviews.length : 0})`;

  return (
    <main className="z-20 flex min-h-full grow justify-center">
      <div className="flex w-full max-w-full flex-col gap-2 p-4 lg:flex-row lg:gap-4 lg:p-6 2xl:max-w-[90rem] 2xl:p-8">
        <div className="flex h-max w-full flex-col gap-3 rounded-sm border-2 border-stone-800 bg-stone-100 p-4 text-sm sm:flex-row sm:gap-4 lg:w-80 lg:min-w-80 lg:flex-col lg:gap-3">
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
        <div className="flex h-max grow flex-col gap-4 rounded-sm border-2 border-stone-800 bg-stone-100 p-4">
          <p className="font-bold">{reviewsCardtitle}</p>
          {reviews && reviews.length > 0 ? (
            <div className="flex w-full flex-col gap-4">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="flex h-max w-full flex-col gap-4 border-2 border-stone-800 p-3 md:flex-row"
                >
                  <div className="relative aspect-square size-24 min-w-24 overflow-hidden rounded-md">
                    <Image
                      src={
                        review.images && review.images[0]
                          ? review.images[0].url
                          : '/images/placeholder-restaurant.jpg'
                      }
                      alt="review-thumbnail-alt"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="flex grow flex-col justify-start gap-4 md:gap-1">
                    <div className="flex w-full flex-col gap-1 md:flex-row md:gap-3">
                      <p className="truncate text-lg font-semibold">
                        {review.title}
                      </p>
                      <div className="flex w-max items-center justify-start gap-2">
                        <div className="flex size-6 items-center justify-center">
                          <Image
                            src="/icons/solid-star.svg"
                            width={18}
                            height={18}
                            alt="star-icon"
                          />
                        </div>
                        <p className="text-base">{review.totalRating}/5</p>
                      </div>
                    </div>
                    <p className="text-sm">{review.content}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No reviews yet...</p>
          )}
        </div>
      </div>
    </main>
  );
}

export { RestaurantComposition };
