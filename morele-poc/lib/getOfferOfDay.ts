export type OfferOfDay = {
  id: number;
  name: string;
  img: string;
  price: number;
  oldPrice: number;
  coupon: string;
  previous30d: number;
  sold: number;
  total: number;
  expiresAt: string;
};

export async function getOfferOfDay(): Promise<OfferOfDay> {
  return {
    id: 5304084,
    name: 'Rower stacjonarny Zipro One S magnetyczny',
    img: '/images/oferta-dnia/rower.jpg',
    price: 329,
    oldPrice: 379,
    coupon: 'OKAZJA',
    previous30d: 359,
    sold: 11,
    total: 30,
    expiresAt: '2025-06-17T14:59:59+02:00',
  };
}
