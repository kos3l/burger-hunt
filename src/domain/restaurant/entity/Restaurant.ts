import { OpeningHours } from '../../opening-hours/entity/OpeningHours';

type Restaurant = {
  id: string;
  name: string;
  types: string[];
  primaryType: string;
  internationalPhoneNumber: string;
  formattedAddress: string;
  shortFormattedAddress: string;
  websiteUri: string;
  totalRating: number;
  tastyTotalRating: number;
  textureTotalRating: number;
  visualTotalRating: number;
  openingHours: OpeningHours;
  upvotes: number;
  downvotes: number;
};

export { type Restaurant };
