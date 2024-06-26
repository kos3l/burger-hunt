import Image from 'next/image';
import { getServerSession } from 'next-auth';

import { ButtonLink } from '@/src/app/(public)/_components/navigation/_elements/ButtonLink';

async function NavigationHeading() {
  const session = await getServerSession();

  return (
    <div className="flex w-full flex-col items-center justify-between gap-4 lg:flex-row">
      <div className="flex w-full items-center justify-start gap-4 lg:w-max lg:justify-center">
        <Image src="/icons/pin-icon.svg" width={40} height={40} alt="" />
        <h1 className="text-xl font-bold text-stone-900 lg:text-2xl">
          Search local burgers!
        </h1>
      </div>
      {!session && (
        <div className="hidden items-center gap-4 lg:flex">
          <p className="text-sm font-light text-stone-900 xl:text-base">
            If you want to write reviews, then join the community!
          </p>
          <ButtonLink title="Sign Up" href="/register" />
        </div>
      )}
    </div>
  );
}
export { NavigationHeading };
