import NextAuth from "next-auth";
import googleAuth from "next-auth/providers/google"

export const authOption = {
    providers: [
        googleAuth({
            clientId: process.env.GOOGLE_AUTH_CLIENT_ID,
            clientSecret: process.env.GOOGLE_AUTH_CLIENT_SECRET,
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async redirect({ url, baseUrl }) {
            if (url === "api/auth/signin"){
                return "/Register";
            }
            if (url === "api/auth/signout"){
                return "/";
            }
            return baseUrl;
        },
    }
}

const handler = NextAuth(authOption)

export { handler as GET, handler as POST }