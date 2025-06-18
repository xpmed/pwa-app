import products from '@/data/products.json';

export type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  img: string;
  promo?: boolean;
  featured?: boolean;
  rating?: number;
  reviews?: number;
  customers?: number;
  specs?: Record<string, string>;
};

export async function getProducts(): Promise<Product[]> {
  return products as unknown as Product[];
}
