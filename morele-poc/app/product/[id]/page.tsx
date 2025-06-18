import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import RatingStars from '@/components/RatingStars';
import AddToCart from '@/components/AddToCart';
import { getProducts, Product } from '@/lib/getProducts';

export default async function ProductPage({ params }: { params: { id: string } }) {
    const products = await getProducts();
    const product = products.find(p => String(p.id) === params.id) as Product | undefined;
    if (!product) return notFound();

    const specs = Object.entries(product.specs ?? {}).slice(0, 3);
    const sampleReviews = [
        { user: 'Karolina', rating: 5, text: 'Świetny produkt, używam od tygodnia i działa bez zarzutu!' },
        { user: 'Marek',    rating: 4, text: 'Warto w tej cenie. Jedyna wada to trochę głośna praca.'   }
    ];

    return (
        <section className="mx-auto max-w-4xl space-y-6 py-8">
        <h1 className="text-2xl font-semibold text-black">{product.name}</h1>

        <div className="flex justify-center">
            <Image src={product.img} alt={product.name} width={200} height={200} className="h-60 w-auto object-contain py-4" />
        </div>

        <div className="flex items-center gap-4">
            {product.rating && <RatingStars value={product.rating} />}
            {product.reviews && <span className="text-sm text-gray-600">({product.reviews} opinii)</span>}
            {product.customers && <span className="text-sm text-gray-600">{product.customers} osób kupiło</span>}
        </div>

        <div className="space-y-1">
            {specs.map(([k, v]) => (
            <p key={k} className="text-sm text-black"><span className="font-semibold">{k}:</span> {v}</p>
            ))}
            <Link href="#" className="text-sm text-[#ff503c] hover:underline">Zobacz pełną specyfikację</Link>
        </div>

        <AddToCart product={product} />

        <div className="space-y-4 pt-6">
            <h2 className="text-lg font-semibold text-black">Opinie</h2>

            <div className="flex items-center gap-2">
            {product.rating && <RatingStars value={product.rating} />}
            <span className="text-sm text-gray-600">
                {product.rating?.toFixed(1)} / 5 • {product.reviews} opinii
            </span>
            </div>

            {sampleReviews.map(r => (
            <div key={r.user} className="rounded border border-gray-200 p-4">
                <div className="mb-1 flex items-center gap-2">
                <p className="text-sm font-semibold text-black">{r.user}</p>
                <RatingStars value={r.rating} />
                </div>
                <p className="text-sm text-black">{r.text}</p>
            </div>
            ))}
        </div>
        </section>
    );
}
