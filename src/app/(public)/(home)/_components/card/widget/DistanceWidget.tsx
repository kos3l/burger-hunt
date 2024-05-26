import Image from 'next/image';

function DistanceWidget({ distance }: { distance: string }) {
  return (
    <div className="flex w-full items-center justify-end gap-2 text-lg">
      <Image
        src="/icons/person-walking-solid.svg"
        width={15}
        height={15}
        alt="distance-icon"
      />
      <p className="text-sm lg:text-base">{distance}</p>
    </div>
  );
}

export { DistanceWidget };
