import { sleep } from '@/src/util/mock/mockUtil';

import { RegisterDto } from '../dto/RegisterDto';

async function registerUser({ username, email, password }: RegisterDto) {
  sleep(2000);

  const response = await fetch('/api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, email, password }),
  });

  if (response?.ok) {
    return true;
  }

  return false;
}

export { registerUser };
