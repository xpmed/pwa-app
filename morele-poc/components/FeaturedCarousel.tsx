'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeftCircle, ArrowRightCircle } from 'lucide-react';
import RatingStars from '@/components/RatingStars';
import { Product } from '@/lib/getProducts';


type Props = { products: Product[] };

export default function FeaturedCarousel({ products }: Props) {
  return (
    <div className="relative w-full">
        {/* strzalki do slidera */}
        <button
            className="prev-btn absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-1 shadow hover:bg-white"
            aria-label="Poprzedni">
            <ArrowLeftCircle className="h-8 w-8 stroke-[#ff503c]" />
        </button>

        <button
            className="next-btn absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-1 shadow hover:bg-white"
            aria-label="Następny">
            <ArrowRightCircle className="h-8 w-8 stroke-[#ff503c]" />
        </button>

    {/* slider polecane */}
    <Swiper
        loop
        autoplay={{ delay: 3500 }}
        modules={[Autoplay, Navigation]}
        navigation={{
        prevEl: '.prev-btn',
        nextEl: '.next-btn',
        }}
        spaceBetween={16}
        breakpoints={{
        0: { slidesPerView: 1.2 },
        640: { slidesPerView: 2.2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
        }}
        className="w-full"
        >
        {products.map((p) => (
            <SwiperSlide key={p.id} className="pb-4">
                <Link href={`/product/${p.id}`} className="block h-[340px]">
                    <div className="flex h-full flex-col overflow-hidden rounded-lg border bg-white shadow hover:shadow-md">
                    <Image
                        src={p.img}
                        alt={p.name}
                        width={400}
                        height={400}
                        className="h-48 w-full object-contain"
                        priority
                    />

                    {/* cena */}
                    <p className="px-4 pt-3 text-2xl font-bold text-black">
                        {p.price.toFixed(2)} zł
                    </p>

                    {/* nazwa */}
                    <p className="px-4 pt-1 text-sm text-black">{p.name}</p>

                    {/* ocena */}
                    <div className="flex items-center gap-1 px-4 py-2">
                        <RatingStars value={p.rating ?? 0} />
                        {p.reviews && (
                            <span className="text-xs text-gray-500">({p.reviews})</span>
                        )}
                    </div>

                    {/* ile osób kupiło */}
                    <p className="px-4 pb-3 text-xs font-semibold text-black">
                        Kupiło {p.customers} osób
                    </p>
                    </div>
                </Link>
            </SwiperSlide>
        ))}
        </Swiper>
    </div>
  );
}
