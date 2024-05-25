import { ReviewImage } from '@/domain/image/entity/ReviewImage';
import { OpeningHours } from '@/domain/opening-hours/entity/OpeningHours';

type Restaurant = {
  id: string;
  name: string;
  types: string[];
  primaryType: string;
  internationalPhoneNumber: string;
  formattedAddress: string;
  websiteUri?: string;
  totalRating: number;
  tastyTotalRating: number;
  textureTotalRating: number;
  visualTotalRating: number;
  openingHours: OpeningHours;
  upvotes: number;
  downvotes: number;
  thumbnail?: ReviewImage;
};

export { type Restaurant };
