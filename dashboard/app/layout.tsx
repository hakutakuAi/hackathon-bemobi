// app/layout.tsx
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@xyflow/react/dist/style.css';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import { I18nProvider } from '../lib/i18n';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Toaster position="top-right" />
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
