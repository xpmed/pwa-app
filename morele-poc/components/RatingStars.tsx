import { Star } from 'lucide-react';

type Props = { value: number };

export default function RatingStars({ value }: Props) {
  const rounded = Math.round(value * 2) / 2;

  return (
    <div className="flex">
      {[0, 1, 2, 3, 4].map((i) => {
        const diff = rounded - i;
        if (diff >= 1) {
          return (
            <Star
              key={i}
              className="h-4 w-4 fill-[#ff503c] stroke-[#ff503c]"
            />
          );
        }
        if (diff === 0.5) {
          return (
            <span key={i} className="relative h-4 w-4">
              <Star className="absolute h-4 w-4 fill-none stroke-[#ff503c]" />
              <Star
                className="absolute h-4 w-4 fill-[#ff503c] stroke-[#ff503c]"
                style={{ clipPath: 'inset(0 50% 0 0)' }}
              />
            </span>
          );
        }
        return (
          <Star key={i} className="h-4 w-4 fill-none stroke-[#ff503c]" />
        );
      })}
    </div>
  );
}
