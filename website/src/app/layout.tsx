import type { Metadata } from 'next';
import '../styles/tailwind.css';
import Navbar from '@/components/layout/@navbar/navbar';
import Footer from '@/components/layout/@footer/footer';
import CountdownTimer from '@/components/layout/@timer/timerCountDown';

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
        <CountdownTimer />
        <Navbar />
        <main className='min-h-screen'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
