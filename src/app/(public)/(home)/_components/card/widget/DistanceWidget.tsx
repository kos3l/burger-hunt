import Image from 'next/image';

function DistanceWidget({
  distance,
  position = 'end',
}: {
  distance: string;
  position?: 'start' | 'end';
}) {
  const jusitfiedPositon =
    position === 'start' ? 'justify-start' : 'justify-end';
  return (
    <div
      className={`flex w-full items-center ${jusitfiedPositon} gap-2 text-lg`}
    >
      <div className="flex size-8 items-center justify-center rounded-full bg-stone-300">
        <Image
          src="/icons/person-walking-solid.svg"
          width={12}
          height={12}
          alt="distance-icon"
        />
      </div>
      <p className="text-sm lg:text-base">{distance}</p>
    </div>
  );
}

export { DistanceWidget };
