import Image from 'next/image';

function RatingWidget({ rating }: { rating: number }) {
  return (
    <div className="flex w-full items-center justify-start gap-2">
      <div className="flex size-8 items-center justify-center rounded-full bg-stone-300">
        <Image
          src="/icons/solid-star.svg"
          width={20}
          height={20}
          alt="star-icon"
        />
      </div>
      <p className="text-base">{rating}/5</p>
    </div>
  );
}

export { RatingWidget };
