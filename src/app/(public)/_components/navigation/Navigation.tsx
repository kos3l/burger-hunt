import { NavigationHeading } from '@/components/navigation/_elements/NavigationHeading';
import { NavigationLinkBar } from '@/components/navigation/_elements/NavigationLinkBar';

function Navigation() {
  return (
    <nav className="z-20 flex h-max w-full flex-col items-center justify-between gap-5 border-b-2 border-stone-900 bg-stone-100 p-4 lg:h-32">
      <NavigationLinkBar />
      <NavigationHeading />
    </nav>
  );
}
export { Navigation };
