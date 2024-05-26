import { Footer } from '@/components/footer/Footer';
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
      <Footer />
    </>
  );
}
