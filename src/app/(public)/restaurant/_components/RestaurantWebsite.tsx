import Link from 'next/link';

function RestaurantWebsite({ url }: { url: string }) {
  return (
    <div className="w-full border-t-2 border-dashed border-stone-900 pt-2">
      <Link href={url}>
        <p className="underline">Visit their website</p>
      </Link>
    </div>
  );
}

export { RestaurantWebsite };
