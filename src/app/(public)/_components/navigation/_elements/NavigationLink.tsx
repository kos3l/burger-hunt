import Link from 'next/link';

function NavigationLink({ title, href }: { title: string; href: string }) {
  return (
    <Link href={href}>
      <li className="font-mono text-xs font-semibold text-stone-900 lg:text-sm">
        {title}
      </li>
    </Link>
  );
}
export { NavigationLink };
