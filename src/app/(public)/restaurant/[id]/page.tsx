import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { Metadata } from 'next';

import { restaurantByIdQueryKeys } from '@/src/domain/restaurant/service/keys/RestaurantQueryKeys';
import { fetchRestaurantById } from '@/src/domain/restaurant/service/query-fn/fetchRestaurantById';

import { RestaurantComposition } from './composition';

type Props = {
  params: { id: string };
};

export default async function RestaurantPage({ params }: Props) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [...restaurantByIdQueryKeys, params.id],
    queryFn: () => fetchRestaurantById({ id: params.id }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <RestaurantComposition id={params.id} />;
    </HydrationBoundary>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const restaurant = await fetchRestaurantById({ id: params.id });
  const title = restaurant
    ? `Burger Hunt | ${restaurant.name}`
    : `Burger Hunt | ${params.id}`;

  return {
    title,
    description: 'home',
    keywords: ['burger'],
    openGraph: {
      title: 'Home',
      description: 'Home',
      locale: 'en',
      images: [],
    },
    alternates: {
      canonical: '/',
    },
  };
}
