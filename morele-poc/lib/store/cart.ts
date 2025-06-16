import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '@/lib/getProducts';

type CartItem = Product & { qty: number };

type CartState = {
  items: CartItem[];
  add: (product: Product, qty?: number) => void;
  remove: (id: number) => void;
  clear: () => void;
  totalQty: () => number;
  totalPrice: () => number;
};

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      add: (product, qty = 1) => {
        set((state) => {
          const idx = state.items.findIndex((i) => i.id === product.id);
          if (idx > -1) {
            state.items[idx].qty += qty;
            return { items: [...state.items] };
          }
          return { items: [...state.items, { ...product, qty }] };
        });
      },

      remove: (id) =>
        set((state) => ({
          items: state.items.filter((i) => i.id !== id),
        })),

      clear: () => set({ items: [] }),

      totalQty: () => get().items.reduce((sum, i) => sum + i.qty, 0),

      totalPrice: () =>
        get().items.reduce((sum, i) => sum + i.qty * i.price, 0),
    }),
    { name: 'cart-storage' },
  ),
);
