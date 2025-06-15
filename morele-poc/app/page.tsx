import BannerCarousel from '@/components/BannerCarousel';
import FeaturedCarousel from '@/components/FeaturedCarousel';
import { getProducts } from '@/lib/getProducts';

export default async function Home() {
  const products = await getProducts();
  const workAndPlay = products.filter((p) => p.category === 'laptop');
  const featured = products.filter((p) => p.featured);

  return (
    <section className="space-y-10">
      <BannerCarousel />

      {/* sekcje strony glownej */}
      <div>
        <h2 className="mb-4 text-xl font-semibold">Polecane</h2>
        <FeaturedCarousel products={featured} />
      </div>

      <div>
        <h2 className="mb-4 text-xl font-semibold">Do pracy i gier</h2>
        <FeaturedCarousel products={workAndPlay} />
      </div>
    </section>
  );
}
