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
      <body className={`${RobotoMono.variable} ${Rubik.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_APP_URL}`),
};
