// import { NextAuthOptions, Session } from 'next-auth/core/types';
import NextAuth from 'next-auth/next';

import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';

// import AppleProvider from "next-auth/providers/apple"
// import EmailProvider from "next-auth/providers/email"

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export const authOptions = {
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  pages: {
    signIn: '/signin',
  },
  theme: {
    colorScheme: 'light',
  },

  callbacks: {
    jwt: async (token, account) => {
      // console.log('### JWT CALLBACK ###');
      console.log('token: ', token);
      // console.log('account: ', account);

      return token;
    },

    session: async (session, token, user) => {
      // console.log('### SESSION CALLBACK ###');
      // console.log('session: ', session);
      console.log('user: ', token);
      // console.log('user: ', user);

      return session;
    },
  },
  session: {
    maxAge: 15 * 24 * 60 * 60,
  },
};

export default NextAuth(authOptions);
