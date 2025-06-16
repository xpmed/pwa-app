'use client';

import { useCart } from '@/lib/store/cart';
import { useEffect, useState } from 'react';

export default function CartBadge() {
  const total = useCart((s) => s.totalQty());
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return (
    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#ff503c] text-xs font-semibold text-white">
      0
    </span>
  );

  return (
    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#ff503c] text-xs font-semibold text-white">
      {total}
    </span>
  );
}
