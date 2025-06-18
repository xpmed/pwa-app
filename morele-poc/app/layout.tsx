import './globals.css';
import Header from '@/components/Header';
import ServiceWorkerRegister from '@/components/ServiceWorkerRegister';

export const metadata = {
  title: 'Brzoskwinie',
  icons: {
    icon: '/icons/android-chrome-192x192.png',
    apple: '/icons/android-chrome-192x192.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <head>
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#ff503c" />
      </head>

      <body className="min-h-screen bg-gray-50 text-gray-900">
        <Header />
        <ServiceWorkerRegister />
        <main className="mx-auto max-w-7xl p-4">{children}</main>
      </body>
    </html>
  );
}
