import './globals.css';
import { Inter } from 'next/font/google';
import AuthContext from './utils/authContext';
import Header from './component/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'LinkedIn Publish App',
  description: 'Application de statistiques et de publication sur LinkedIn',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <AuthContext>
          <Header />
          {children}
        </AuthContext>
      </body>
    </html>
  )
}
