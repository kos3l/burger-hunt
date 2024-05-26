function RestaurantGridPlaceholder() {
  return (
    <div className="w-full">
      <div className="flex h-32 items-center rounded-sm border-2 border-stone-900 bg-stone-100 px-8 sm:h-24">
        <p className="text-sm font-semibold md:text-xl">
          Sorry! We couldn&apos;t find any burger restaurants close to this
          address.
        </p>
      </div>
    </div>
  );
}

export { RestaurantGridPlaceholder };
