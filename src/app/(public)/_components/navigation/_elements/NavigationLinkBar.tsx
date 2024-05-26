import Link from 'next/link';

import { NavigationLink } from '@/src/app/(public)/_components/navigation/_elements/NavigationLink';

function NavigationLinkBar() {
  return (
    <div className="flex size-full h-max justify-between">
      <Link href="/">
        <p className="text-sm font-semibold text-stone-900">Burger Hunt</p>
      </Link>
      <ul className="flex gap-4">
        <NavigationLink title="Explore" href="/login" />
        <NavigationLink title="About us" href="/" />
        <NavigationLink title="Sign in" href="/login" />
      </ul>
    </div>
  );
}
export { NavigationLinkBar };
