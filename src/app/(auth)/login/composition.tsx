import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';

import { LoginForm } from './_components/LoginForm';

async function LoginComposition() {
  const session = await getServerSession();

  if (session) {
    redirect('/');
  }

  return (
    <main className="z-20 flex min-h-full grow justify-center">
      <div className="flex w-full max-w-full flex-col gap-3 p-4 lg:flex-row lg:gap-8 lg:p-6 2xl:max-w-[90rem] 2xl:p-8">
        <LoginForm />
      </div>
    </main>
  );
}

export { LoginComposition };
