import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../../components/header';



const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Code Wars',
  description: 'We build websites that build your business. Custom web solutions for modern businesses.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <Header />
        {children}

      </body>
    </html>
  );
} 