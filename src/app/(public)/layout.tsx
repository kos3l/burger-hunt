import { Navigation } from '@/components/navigation/Navigation';

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navigation />
      {children}
      <footer className="z-20">footer!</footer>
    </>
  );
}
