import NextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export const authOptions = {
    providers: [
        FacebookProvider({
            clientId: "",
            clientSecret: ""
        }),
        GoogleProvider({
            clientId: "",
            clientSecret: ""
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID ?? "",
            clientSecret: process.env.GITHUB_SECRET ?? ""
        }),
    ],
}

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST};