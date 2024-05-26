import { signIn } from 'next-auth/react';

import { sleep } from '@/src/util/mock/mockUtil';

import { LoginDto } from '../../dto/LoginDto';

async function loginUser({ email, password }: LoginDto) {
  sleep(2000);

  const response = await signIn('credentials', {
    email,
    password,
    redirect: false,
  });

  if (response?.ok) {
    return true;
  }

  return false;
}

export { loginUser };
