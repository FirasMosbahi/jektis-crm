import { IUser } from "@/types/user.type";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session<U extends User = User> {
    token: string;
    user: U;
  }

  type User = IUser;
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  type JWT<U extends User = User> = {
    token: string;
    user: U;
  };

  type User = IUser;
}
