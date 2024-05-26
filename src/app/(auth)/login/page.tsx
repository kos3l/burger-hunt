import { Metadata } from 'next';

import { LoginComposition } from './composition';

export default function Login() {
  return <LoginComposition />;
}

export const metadata: Metadata = {
  title: 'Burger Hunt | Login',
};
