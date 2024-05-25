import Image from 'next/image';

import { ButtonLink } from '@/components/_elements/link/ButtonLink';

function NavigationHeading() {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center gap-4">
        <Image src="/icons/pin-icon.svg" width={40} height={40} alt="" />
        <h1 className="text-2xl font-bold text-stone-900">
          Search local burgers!
        </h1>
      </div>
      <div className="flex items-center gap-4">
        <p className="text-lg font-light text-stone-900">
          If you want to write reviews, then join the community!
        </p>
        <ButtonLink title="Sign Up" href="/register" />
      </div>
    </div>
  );
}
export { NavigationHeading };
