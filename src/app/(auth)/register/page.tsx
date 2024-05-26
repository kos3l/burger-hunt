import { Metadata } from 'next';

import { RegisterComposition } from './composition';

export default function Register() {
  return <RegisterComposition />;
}

export const metadata: Metadata = {
  title: 'Burger Hunt | Register',
};
