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
        className={`${RobotoMono.variable} ${Rubik.variable} relative flex h-dvh flex-col bg-stone-300 font-sans`}
      >
        <div
          id="gradient"
          className="pointer-events-none fixed left-0 top-0 z-20 size-full opacity-15 mix-blend-difference"
        />

        {children}
      </body>
    </html>
  );
}
export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_APP_URL}`),
};
