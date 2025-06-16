'use client';

import Link from 'next/link';
import CartItem from '@/components/CartItem';
import { useCart } from '@/lib/store/cart';

export default function CartPage() {
  const items = useCart((s) => s.items);
  const totalPrice = useCart((s) => s.totalPrice());

  if (items.length === 0)
    return (
    <div className="py-20 text-center">
        <p className="mb-4 text-xl">Twój koszyk jest pusty.</p>
        <Link href="/" className="text-[#ff503c] hover:underline">Wróć na stronę główną</Link>
    </div>
    );

  return (
    <section className="mx-auto max-w-4xl py-8">
        <h1 className="mb-6 text-center text-2xl font-semibold text-black">Koszyk</h1>

        <div className="mb-6">
            <p className="text-lg font-semibold text-black">Sprzedaje i wysyła Brzoskwinie</p>
            <p className="text-sm text-black">U Ciebie już <span className="font-semibold text-green-600">pojutrze</span>!</p>
        </div>

        <div className="divide-y">
            {items.map((it) => (
            <CartItem key={it.id} id={it.id} />
            ))}
        </div>

        {/* podsumowanie koszyka */}
        <div className="mt-8 flex items-center justify-between border-t pt-4">
            <span className="text-sm text-black">Do zapłaty:</span>
            <span className="text-2xl font-bold text-black">{totalPrice.toFixed(2)} zł</span>
        </div>
        <p className="mt-2 text-right text-xs text-green-600">+ darmowa dostawa</p>

        <button className="mt-6 w-full rounded bg-[#ff503c] py-3 text-center text-sm font-semibold text-white hover:bg-[#e84933]" onClick={() => alert('Wybierz dostawę (demo)')}>Wybierz dostawę i płatność</button>
    </section>
  );
}
