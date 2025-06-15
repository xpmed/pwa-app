import Image from 'next/image';
import { Product } from '@/lib/getProducts';
import { ShoppingCart } from 'lucide-react';

type Props = { product: Product };

export default function ProductCard({ product }: Props) {
  return (
    <div className="group flex flex-col rounded-lg border bg-white p-4 shadow-sm transition hover:shadow-md">
      <Image
        src={product.img}
        alt={product.name}
        width={300}
        height={300}
        className="h-40 w-full object-contain"
      />
      <h3 className="mt-2 flex-1 text-sm font-medium group-hover:text-indigo-600">
        {product.name}
      </h3>
      <div className="mt-2 flex items-center justify-between">
        <span className="text-lg font-semibold text-orange-600">
          {product.price.toFixed(2)} zł
        </span>
        <button className="rounded-full bg-indigo-600 p-2 text-white hover:bg-indigo-700">
          <ShoppingCart className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
