import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {},
        password: {},
      },
      async authorize() {
        return {
          id: 'bdf989d6-6517-4e58-8767-b4a0d8cacbe0',
          email: 'text@gmail.com',
          password: '#werf23#se11111',
        };
      },
    }),
  ],
});

export { handler as GET, handler as POST };
