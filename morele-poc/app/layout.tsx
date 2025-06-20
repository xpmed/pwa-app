import './globals.css';
import Header from '@/components/Header';
import ServiceWorkerRegister from '@/components/ServiceWorkerRegister';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Brzoskwinie',
  description: 'Demo PWA z Next.js',
  manifest: '/manifest.webmanifest',
  themeColor: '#ff503c',
  icons: {
    icon: [
      { url: '/icons/android-chrome-192x192.png', sizes: '192x192' },
      { url: '/icons/android-chrome-512x512.png', sizes: '512x512' },
    ],
    apple: '/icons/apple-touch-icon.png',
    shortcut: '/icons/favicon-32x32.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="default"
        />
      </head>

      <body className="min-h-screen bg-gray-50 text-gray-900">
        <ServiceWorkerRegister />
        <Header />
        <main className="mx-auto max-w-7xl p-4">{children}</main>
      </body>
    </html>
  );
}
