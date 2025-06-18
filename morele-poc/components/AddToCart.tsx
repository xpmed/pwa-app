'use client';

import { useState } from 'react';
import { useCart } from '@/lib/store/cart';
import type { Product } from '@/lib/getProducts';

export default function AddToCart({ product }: { product: Product }) {
  const add = useCart((s) => s.add);
  const [qty, setQty] = useState(1);

  return (
    <div className="flex flex-wrap items-center gap-3">
      <select
        value={qty}
        onChange={(e) => setQty(Number(e.target.value))}
        className="h-10 w-20 rounded border border-gray-300 px-3 text-sm text-black"
      >
        {Array.from({ length: 9 }, (_, i) => i + 1).map((n) => (
          <option key={n} value={n}>{n}</option>
        ))}
        <option value={10}>+10</option>
      </select>

      <button className="flex-1 rounded bg-[#ff503c] py-2 text-sm font-semibold text-white hover:bg-[#e84933]" onClick={() => add(product, qty)}>Do koszyka</button>
    </div>
  );
}
