import './globals.css';

import type { Metadata } from 'next';

import { RobotoMono, Rubik } from '../resources/fonts';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${RobotoMono.variable} ${Rubik.variable} relative flex h-dvh flex-col bg-sky-950 font-sans`}
      >
        <div
          id="overlay"
          className="pointer-events-none fixed left-0 top-0 z-10 size-full"
        />
        <div
          id="gradient"
          className="pointer-events-none fixed left-0 top-0 z-10 size-full opacity-40 mix-blend-screen"
        />
        {children}
      </body>
    </html>
  );
}
export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_APP_URL}`),
};
