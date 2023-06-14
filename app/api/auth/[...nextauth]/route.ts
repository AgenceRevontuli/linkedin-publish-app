import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from '@/app/utils/prisma';
import LinkedInProvider from "next-auth/providers/linkedin";
import { Adapter } from 'next-auth/adapters';

const handler = NextAuth({
    adapter: PrismaAdapter(prisma) as unknown as Adapter,
    providers: [
        LinkedInProvider({
            clientId: process.env.LINKEDIN_CLIENT_ID || '',
            clientSecret: process.env.LINKEDIN_CLIENT_SECRET || ''
        })
    ],
})

export { handler as GET, handler as POST }