import { NavigationHeading } from '@/components/navigation/_elements/NavigationHeading';
import { NavigationLinkBar } from '@/components/navigation/_elements/NavigationLinkBar';

function Navigation() {
  return (
    <nav className="z-20 flex h-32 w-full flex-col items-center bg-stone-50 p-4">
      <NavigationLinkBar />
      <NavigationHeading />
    </nav>
  );
}
export { Navigation };
