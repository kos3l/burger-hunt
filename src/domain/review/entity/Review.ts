import { ReviewImage } from '../../image/entity/ReviewImage';

type Review = {
  id: number;
  title: string;
  tasteRating: number;
  visualRating: number;
  textureRating: number;
  totalRating: number;
  content: string;
  restaurantId: string;
  images?: ReviewImage[];
};

export { type Review };
