import type { Metadata } from 'next';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Toaster } from '../components/ui/sonner';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'PT Bumi Mineral Nusantara - Mining Company',
  description: 'Empowering Resources, Sustaining the Future. Leading mining company committed to excellence and sustainability.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="bg-slate-900 text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
