import { NavigationLink } from '@/src/app/(public)/_components/navigation/_elements/NavigationLink';

function NavigationLinkBar() {
  return (
    <div className="flex size-full justify-between">
      <p className="text-sm font-semibold text-stone-900">Burger Hunt</p>
      <ul className="flex gap-4">
        <NavigationLink title="Explore" href="/about" />
        <NavigationLink title="About us" href="/about" />
        <NavigationLink title="Sign in" href="/about" />
      </ul>
    </div>
  );
}
export { NavigationLinkBar };
