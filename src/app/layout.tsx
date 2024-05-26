import './globals.css';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { Metadata } from 'next';

import ReactQueryProvider from '@/context/react-query-provider/ReactQueryProvider';
import { RobotoMono, Rubik } from '@/resources/fonts';

import SessionWrapper from './_context/next-auth/SessionProvided';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-stone-400">
      <body
        className={`${RobotoMono.variable} ${Rubik.variable} relative flex min-h-dvh w-full flex-col overflow-auto overscroll-none scroll-smooth font-mono text-stone-800 antialiased`}
      >
        <div
          id="map"
          className="pointer-events-none fixed z-20 size-full opacity-85"
        />
        <div
          id="noise"
          className="pointer-events-none fixed z-30 size-full opacity-70"
        />
        <SessionWrapper>
          <ReactQueryProvider>
            <ReactQueryDevtools initialIsOpen={false} />
            {children}
          </ReactQueryProvider>
        </SessionWrapper>
      </body>
    </html>
  );
}
export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_APP_URL}`),
};
