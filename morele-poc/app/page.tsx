import BannerCarousel from '@/components/BannerCarousel';
import FeaturedCarousel from '@/components/FeaturedCarousel';
import { getProducts } from '@/lib/getProducts';
import OfferOfDay from '@/components/OfferOfDay';
import { getOfferOfDay } from '@/lib/getOfferOfDay';

export default async function Home() {
  const products = await getProducts();
  const workAndPlay = products.filter((p) => p.category === 'laptop');
  const featured = products.filter((p) => p.featured);
  const offer = await getOfferOfDay();

  return (
    <section className="space-y-10">
      {/* baner (karuzela) */}
      <BannerCarousel />

      {/* oferta dnia */}
      <OfferOfDay offer={offer} />

      {/* sekcje strony glownej */}
      <div>
        <h2 className="mb-4 text-xl font-semibold text-black">Polecane</h2>
        <FeaturedCarousel products={featured} />
      </div>

      <div>
        <h2 className="mb-4 text-xl font-semibold text-black">Do pracy i gier</h2>
        <FeaturedCarousel products={workAndPlay} />
      </div>
    </section>
  );
}
