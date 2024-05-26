import NextAuth from 'next-auth';

const handler = NextAuth({
  providers: [
    // CredentialsProvider({
    //   name: 'Credentials',
    //   session: {
    //     strategy: 'jwt',
    //   },
    //   pages: {
    //     signIn: '/login',
    //   },
    //   credentials: {
    //     email: {},
    //     password: {},
    //   },
    //   // eslint-disable-next-line consistent-return
    //   async authorize(_credentials, _req) {
    //     const user = { id: '1', name: 'J Smith', email: 'jsmith@example.com' };
    //     if (user) {
    //       return undefined;
    //     }
    //     return undefined;
    //   },
    // }),
  ],
});

export { handler as GET, handler as POST };
