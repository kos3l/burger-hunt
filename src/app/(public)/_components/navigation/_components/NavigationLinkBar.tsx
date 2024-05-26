import Link from 'next/link';
import { getServerSession } from 'next-auth';

import { NavigationLink } from '@/src/app/(public)/_components/navigation/_elements/NavigationLink';

import { NavigationUserLinks } from './NavigationUserLinks';

async function NavigationLinkBar() {
  const session = await getServerSession();

  return (
    <div className="flex size-full h-max justify-between">
      <Link href="/">
        <p className="text-sm font-semibold text-stone-900">Burger Hunt</p>
      </Link>
      <ul className="flex items-center gap-4">
        <NavigationLink title="Explore" href="/login" />
        <NavigationLink title="About us" href="/" />
        {session ? (
          <NavigationUserLinks />
        ) : (
          <NavigationLink title="Sign in" href="/login" />
        )}
      </ul>
    </div>
  );
}
export { NavigationLinkBar };
