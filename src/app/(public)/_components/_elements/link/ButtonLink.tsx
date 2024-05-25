import Link from 'next/link';

function ButtonLink({ title, href }: { title: string; href: string }) {
  return (
    <Link
      href={href}
      className="flex h-8 w-32 items-center justify-center rounded-sm border-2 border-stone-900 bg-stone-400 text-sm font-medium"
    >
      {title}
    </Link>
  );
}
export { ButtonLink };
