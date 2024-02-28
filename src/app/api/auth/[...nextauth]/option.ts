import type { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { loginAgent } from "@jektis-crm/actions/auth/login";
export const options: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXT_AUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "email@email.com",
        },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials): Promise<User | null> {
        try {
          return await loginAgent(credentials);
        } catch (error) {
          throw new Error();
        }
      },
    }),
  ],
  callbacks: {
    session: async ({ session, token }) => {
      Object.assign(session, token);
      return session;
    },
    jwt: async ({ token, user, session, trigger }) => {
      if (trigger !== "update") {
        Object.assign(token, user);
      } else if (session) {
        if (session.token) token.token = session.token;
      }
      return token;
    },
  },
};
