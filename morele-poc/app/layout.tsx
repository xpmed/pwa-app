import './globals.css';
import Header from '@/components/Header';

export const metadata = {};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <Header />
        <main className="mx-auto max-w-7xl p-4">{children}</main>
      </body>
    </html>
  );
}
