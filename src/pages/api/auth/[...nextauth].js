import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from '@/utils/db';  // Adjust the path to your database connection utility
import User from '@/models/users';   // Adjust the path to your User model
import bcrypt from 'bcrypt'; // To compare passwords

export const authOptions = {
    providers: [
        // Google Provider
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),

        // Facebook Provider
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        }),

        // GitHub Provider
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }),

        // Custom email/password login
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "email@example.com" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                await dbConnect(); // Ensure the database is connected

                try {
                    const { email, password } = credentials;

                    // Find the user by email
                    const user = await User.findOne({ email });
                    if (!user) {
                        throw new Error('Email does not exist'); // Custom error message for non-existing email
                    }

                    // Validate password
                    const isPasswordValid = await bcrypt.compare(password, user.password);
                    if (!isPasswordValid) {
                        throw new Error('Incorrect password'); // Custom error message for incorrect password
                    }

                    // Return user object if authentication is successful
                    return {
                        id: user._id,
                        name: user.name,
                        email: user.email,
                        role: user.role || 'user', // Pass role if available
                    };
                } catch (error) {
                    console.error("Login error: ", error.message);
                    throw new Error(error.message); // Return the error message to the frontend
                }
            },
        }),
    ],
    pages: {
        signIn: '/login', // Custom login page
    },
    session: {
        strategy: 'jwt', // Use JWT to manage the session
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.email = user.email;
                token.name = user.name;
                // token.role = user.role; // Pass role if required
            }
            return token;
        },
        async session({ session, token }) {
            session.id = token.id;
            session.email = token.email;
            session.name = token.name;
            //   session.role = token.role; // Include role if needed
            return session;
        },
    },
}

export default NextAuth(authOptions);
