import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/@navbar/navbar';
import Footer from '@/components/@footer/footer';

export const metadata: Metadata = {
  title: 'Vanilla Games',
  description: 'Servidor de fantasia com temática mágica e atmosfera refinada.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR'>
      <body className='bg-white text-gray-900 antialiased'>
        <Navbar />
        <main className='min-h-screen'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
