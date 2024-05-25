import { HomeRestaurantGrid } from '@/public-pages/(home)/_components/grid/HomeRestaurantGrid';

function HomeComposition() {
  const address = 'willemoesgade';

  return (
    <main className="z-20 flex grow gap-12 p-8">
      <div className="sticky top-8 flex h-[60rem] w-[45rem] rounded-md bg-stone-100 p-4">
        <p className="font-mono text-[3rem] font-bold text-stone-800">
          Search for burgers!
        </p>
      </div>
      <HomeRestaurantGrid searchAddress={address} />
    </main>
  );
}

export { HomeComposition };
