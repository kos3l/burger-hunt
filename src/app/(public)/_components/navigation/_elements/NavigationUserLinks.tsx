'use client';

import { signOut } from 'next-auth/react';

import { NavigationLink } from '@/src/app/(public)/_components/navigation/_elements/NavigationLink';

import { NavigationButton } from '../../_elements/button/NavigationButton';

function NavigationUserLinks() {
  return (
    <>
      <NavigationLink title="Profile" href="/profile" />
      <NavigationButton title="Sign Out" onClick={() => signOut()} />
    </>
  );
}
export { NavigationUserLinks };
