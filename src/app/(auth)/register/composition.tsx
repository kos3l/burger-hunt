'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { FormButton } from '../_components/FormButton';
import { FormEmaiInput } from '../_components/FormEmaiInput';
import { FormInput } from '../_components/FormInput';
import { FormPasswordInput } from '../_components/FormPasswordInput';

function RegisterComposition() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [username, setUsername] = useState<string>('');

  function handleEmailChange(newEmail: string) {
    setEmail(newEmail);
  }
  function handlePasswordChange(newPassword: string) {
    setPassword(newPassword);
  }
  function handleUsernameChange(newUsername: string) {
    setUsername(newUsername);
  }

  const isFormdataValid = email !== '' && password !== '' && username !== '';

  return (
    <main className="z-20 flex min-h-full grow justify-center">
      <div className="flex w-full max-w-full flex-col gap-3 p-4 lg:flex-row lg:gap-8 lg:p-6 2xl:max-w-[90rem] 2xl:p-8">
        <div className="relative flex size-full min-w-full rounded-sm border-2 border-stone-800 bg-stone-100">
          <div className="flex size-full flex-col items-center justify-center gap-4 p-8 py-16 md:w-1/2 md:py-4 lg:px-24">
            <div className="w-full">
              <p className="text-start text-2xl font-semibold">
                Create an account
              </p>
            </div>
            <FormInput
              value={username}
              onChange={(val) => handleUsernameChange(val)}
              name="username"
              placeholder="Jane94"
              label="Username"
            />
            <FormEmaiInput
              value={email}
              onChange={(val) => handleEmailChange(val)}
              name="email"
              label="Email"
              placeholder="janeDoe@gmail.com"
            />
            <FormPasswordInput
              value={password}
              onChange={(val) => handlePasswordChange(val)}
              name="password"
              placeholder="******"
              label="Password"
            />
            <div className="flex w-full flex-col items-center gap-5 pt-2">
              <FormButton
                text="Sign Up"
                onClick={() => {}}
                disabled={!isFormdataValid}
              />
              <div className="flex w-full items-center gap-2 text-sm lg:text-base">
                <p className="text-stone-700">
                  Already have an account?{' '}
                  <Link href="/login">
                    <span className="font-semibold underline">Sign In</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="relative hidden h-full w-1/2 md:flex">
            <Image
              src="/images/burger-mock-two.jpg"
              alt="restaurant-thumbnail-alt"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export { RegisterComposition };
