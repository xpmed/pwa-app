import Image from 'next/image';
import Link from 'next/link';
import RatingStars from '@/components/RatingStars';
import { getProducts } from '@/lib/getProducts';

export default async function SearchPage({searchParams,}: 
    { searchParams: { q?: string };}) {
    const query = (searchParams.q ?? '').trim().toLowerCase();
    const all = await getProducts();
    const results = query ? all.filter((p) => p.name.toLowerCase().includes(query)) : [];

    return (
        <section className="mx-auto max-w-6xl space-y-6 py-8">
            <h1 className="text-xl font-semibold text-black">
                Wyniki dla „{query || '…'}” ({results.length})
            </h1>

            {results.length === 0 && (
                <p className="text-sm text-gray-600">Nie znaleziono produktów pasujących do zapytania.</p>
            )}

            <div className="space-y-4">
                {results.map((p) => (
                <Link key={p.id} href={`/product/${p.id}`} className="flex gap-4 rounded border border-gray-200 p-4 hover:bg-gray-50">
                    <Image src={p.img} alt={p.name} width={100} height={100} className="h-24 w-24 shrink-0 object-contain" />
                    <div className="flex flex-1 flex-col gap-1">
                        <p className="font-semibold text-black">{p.name}</p>

                        <div className="flex items-center gap-2">
                            {p.rating && <RatingStars value={p.rating} />}
                            {p.reviews && (<span className="text-xs text-gray-600">({p.reviews})</span>)}
                            {p.customers && (<span className="text-xs text-gray-600">- {p.customers} kupiło</span>)}
                        </div>

                        <p className="text-lg font-bold text-black">{p.price.toFixed(2)} zł</p>
                        <p className="text-sm font-semibold text-green-600 text-right">Darmowa dostawa</p>
                    </div>
                </Link>
                ))}
            </div>
        </section>
    );
}
