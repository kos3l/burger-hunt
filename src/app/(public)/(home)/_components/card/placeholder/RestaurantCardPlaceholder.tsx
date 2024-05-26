import Image from 'next/image';

function RestaurantCardPlaceholder() {
  return (
    <div className="relative col-span-1 w-full rounded-sm border-2 border-stone-800 bg-stone-100 p-4">
      <div
        id="grid"
        className="pointer-events-none absolute left-0 top-0 z-30 size-full"
      />
      <div className="relative aspect-square w-full overflow-hidden rounded-md">
        <Image
          src="/images/placeholder-restaurant.jpg"
          alt="restaurant-thumbnail-alt"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="h-32 w-full" />
    </div>
  );
}

export { RestaurantCardPlaceholder };
