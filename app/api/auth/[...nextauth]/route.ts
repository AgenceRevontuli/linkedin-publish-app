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
            clientSecret: process.env.LINKEDIN_CLIENT_SECRET || '',
            authorization: { params: { scope: 'r_liteprofile r_emailaddress w_member_social' } },
        })
    ],
    callbacks: {
        async session(session: any, user: any) {
          if (user && user.provider === 'linkedin' && user.profile) {
            // Ajouter les données du profil LinkedIn à l'objet session.user
            session.user = { 
                ...session.user, 
                profil: user.profile,
                linkedinAccessToken: user.accessToken, 
            };
          }
          
          return session;
        }
      }
})

export { handler as GET, handler as POST }