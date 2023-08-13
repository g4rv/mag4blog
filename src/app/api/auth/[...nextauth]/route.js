import connect from '@/utils/db';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/Google';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import User from '@/models/User';

const handler = NextAuth({
    providers: [
        GoogleProvider({
        	clientId: process.env.GOOGLE_CLIENT_ID,
        	clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        CredentialsProvider({
            id: 'credentials',
            name: 'Credentials',
            async authorize(credentials) {
                await connect();

                try {
                    const user = await User.findOne({ email: credentials.email });

                    if (!user) throw new Error('No such user found!');

                    const isPasswordCorrect = await bcrypt.compare(
                        credentials.password,
                        user.password
                    );

                    if (!isPasswordCorrect)
                        throw new Error('Wrong credentials');

                    return user;
                } catch (err) {
                    throw new Error(err);
                }
            },
        }),
    ],
    pages: {
        error: '/dashboard/login',
    },
});
export { handler as GET, handler as POST };