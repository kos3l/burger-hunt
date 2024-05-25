import Link from 'next/link';

function NavigationLink({ title, href }: { title: string; href: string }) {
  return (
    <Link href={href}>
      <li className="font-mono text-sm font-semibold text-stone-900">
        {title}
      </li>
    </Link>
  );
}
export { NavigationLink };
