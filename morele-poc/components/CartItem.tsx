'use client';

import Image from 'next/image';
import { Trash2 } from 'lucide-react';
import { useCart } from '@/lib/store/cart';
import { ChangeEvent } from 'react';

type Props = {
  id: number;
};

export default function CartItem({ id }: Props) {
  const add = useCart((s) => s.add);
  const remove = useCart((s) => s.remove);
  const item = useCart((s) => s.items.find((i) => i.id === id));

  if (!item) return null;

  const handleQty = (e: ChangeEvent<HTMLSelectElement>) => {
    const newQty = Number(e.target.value);
    add(item, newQty - item.qty);
  };

  return (
    <div className="py-6">
      <div className="flex items-start gap-4">
        <input type="checkbox" className="h-5 w-5 accent-[#ff503c]" defaultChecked />

        <Image
            src={item.img}
            alt={item.name}
            width={80}
            height={80}
            className="h-20 w-20 object-contain"
        />

        <div className="flex flex-1 flex-col gap-2">
            <p className="text-sm font-semibold text-black">{item.name}</p>
            <p className="text-xs text-black">U Ciebie już <span className="font-semibold text-green-600">pojutrze</span>!</p>

            <select value={item.qty} onChange={handleQty} className="h-9 w-20 rounded border border-gray-300 px-3 text-sm text-black">
                {Array.from({ length: 9 }, (_, i) => i + 1).map((n) => (
                <option key={n} value={n}>{n}</option>
                ))}
                <option value={10}>+10</option>
            </select>
            </div>

            <div className="flex flex-col items-end gap-2">
            <button className="rounded border p-1 text-red-600 hover:bg-red-50" onClick={() => remove(item.id)}><Trash2 className="h-4 w-4" /></button>
            <div className="text-right">
                <p className="text-lg font-semibold text-black">{(item.qty * item.price).toFixed(0)} zł</p>
                <p className="text-xs text-gray-600">za sztukę: {item.price.toFixed(0)} zł</p>
            </div>
            </div>
        </div>
        
        <button className="mt-6 w-full rounded border border-[#ff503c] py-2 text-xs font-semibold text-[#ff503c] hover:bg-[#ff503c]/10" onClick={() => alert('Gwarancje i usługi')}>
                Gwarancje i usługi
        </button>
        <p className="mt-2 border-t border-gray-200 pt-4 text-right text-sm font-semibold text-green-500">Darmowa dostawa</p>
    </div>
    );
}
