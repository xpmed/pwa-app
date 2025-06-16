'use client';

import Link from 'next/link';
import { ShoppingCart, Search } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [query, setQuery] = useState('');

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 p-4">
        {/* header */}
        <Link href="/" className="text-xl font-bold text-[#ff503c]">
          Brzoskwinie
        </Link>

        {/* search */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!query.trim()) return;
            console.log('search:', query);
          }}
          className="relative flex flex-1 max-w-md"
        >
          <input
            type="search"
            placeholder="Szukaj produktów…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-lg border px-4 py-2 pr-10 text-sm focus:border-indigo-500 focus:outline-none"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
        </form>

        {/* koszyk */}
        <Link
          href="/cart"
          className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
        >
          <ShoppingCart className="h-6 w-6" />
          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#ff503c] text-xs font-semibold text-white">
            0
          </span>
        </Link>
      </div>
    </header>
  );
}
