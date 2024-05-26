import { Metadata } from 'next';

import { HomeComposition } from './composition';

export default function Home() {
  return <HomeComposition />;
}

export const metadata: Metadata = {
  title: 'Burger Hunt | Home',
  description: 'home',
  keywords: ['burger'],
  openGraph: {
    title: 'Home',
    description: 'Home',
    locale: 'en',
    images: [],
  },
  alternates: {
    canonical: '/',
  },
};
