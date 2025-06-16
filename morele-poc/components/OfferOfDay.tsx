'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import type { OfferOfDay } from '@/lib/getOfferOfDay';

type Props = { offer: OfferOfDay };

export default function OfferOfDay({ offer }: Props) {
    const [secondsLeft, setSecondsLeft] = useState(
        Math.max(
            0,
            Math.floor(
                (new Date(offer.expiresAt).getTime() - Date.now()) / 1000,
            ),
        ),
    );

    useEffect(() => {
        const id = setInterval(() => {
            setSecondsLeft((s) => Math.max(0, s - 1));
            }, 1000);
            return () => clearInterval(id);
        }, []);

        const hrs = String(Math.floor(secondsLeft / 3600)).padStart(2, '0');
        const mins = String(Math.floor((secondsLeft % 3600) / 60)).padStart(2, '0');
        const secs = String(secondsLeft % 60).padStart(2, '0');

        const percent = Math.min(100, (offer.sold / offer.total) * 100);

        return (
            <div className="bg-white">
                <h3 className="bg-[#ff503c] py-2 text-center text-lg font-semibold text-white">Okazja dnia</h3>

                <div className="flex gap-4 p-4">
                {/* zdjecie oferty */}
                <Link href={`/product/${offer.id}`} className="mx-auto w-44 shrink-0">
                    <Image
                    src={offer.img}
                    alt={offer.name}
                    width={256}
                    height={256}
                    className="object-contain"
                    />
                </Link>

                {/* info o ofercie */}
                <div className="flex flex-col justify-start gap-2">
                    <div className="text-xs font-semibold text-[#ff503c]">Cena z kodem: {offer.coupon}</div>

                    <div className="text-2xl font-bold text-black">{offer.price} zł</div>

                    <div className="text-xs text-gray-600">
                        <span className="text-xs">Cena bez kodu {offer.oldPrice} zł</span>
                    </div>

                    <Link href={`/product/${offer.id}`} className="mt-2 text-sm font-medium text-black">
                        {offer.name}
                    </Link>
                </div>
            </div>

            <div className="px-4 text-xs text-gray-600">
                Najniższa cena z 30 dni przed obniżką:{' '}
                <span className="whitespace-nowrap">{offer.previous30d} zł</span>
            </div>

            {/* progressbar */}
            <div className="mt-4 space-y-1 px-4">
                <div className="h-5 w-full overflow-hidden rounded bg-gray-200">
                <div className="h-full bg-[#ff503c]" style={{ width: `${percent}%` }}/></div>
                <div className="flex justify-between text-xs text-gray-600">
                    <span className='text-[#ff503c] py-2'>Sprzedano {offer.sold} szt.</span>
                    <span className='py-2'>Pozostało {offer.total - offer.sold} szt.</span>
                </div>
            </div>

            {/* licznik czasu */}
            <div className="mt-4 flex flex-col gap-2 px-4 sm:flex-row sm:items-center">
                <button
                    className="rounded border border-[#ff503c] px-4 py-2 text-sm font-semibold text-[#ff503c] hover:bg-[#ff503c]/10"
                    onClick={() => alert('Dodano do koszyka')}>
                    Do koszyka
                </button>

                 <div className="flex items-center justify-center gap-2 w-full">
                    <div className="text-center">
                        <div className="text-xl text-black">{hrs}</div>
                        <div className="text-xs text-gray-600">GODZIN</div>
                    </div>
                    <div className="text-center">
                        <div className="text-xl text-black">:</div>
                        <div className="text-xs text-white">.</div>
                    </div>
                    <div className="text-center">
                        <div className="text-xl text-black">{mins}</div>
                        <div className="text-xs text-gray-600">MINUT</div>
                    </div>
                    <div className="text-center">
                        <div className="text-xl text-black">:</div>
                        <div className="text-xs text-white">.</div>
                    </div>
                    <div className="text-center">
                        <div className="text-xl text-black">{secs}</div>
                        <div className="text-xs text-gray-600">SEKUND</div>
                    </div>
                </div>
            </div>

            <Link 
                href={`/product/${offer.id}`}
                className="mt-4 block bg-[#ff503c] py-3 text-center font-semibold text-white hover:bg-[#e84933]">
                Sprawdź
            </Link>
        </div>
    );
}
