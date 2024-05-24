import Image from 'next/image';

function Navigation() {
  return (
    <nav className="z-20 flex h-32 w-full flex-col items-center bg-stone-800 p-4">
      <div className="flex size-full justify-between">
        <p className="text-sm font-semibold text-stone-100">Burger Hunt</p>
        <ul className="flex gap-4 font-sans text-sm font-semibold text-stone-100">
          <li>About us</li>
          <li>Explore</li>
          <li>Sign in</li>
        </ul>
      </div>
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-4">
          <Image src="/icons/pin-icon.svg" width={40} height={40} alt="" />
          <p className="text-2xl font-bold text-stone-100">
            Search local burgers!
          </p>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-lg font-light text-stone-100">
            If you want to write reviews, then join the community!
          </p>
          <button
            type="button"
            className="h-8 w-32 rounded-sm bg-stone-400 text-sm font-medium"
          >
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
}
export { Navigation };
