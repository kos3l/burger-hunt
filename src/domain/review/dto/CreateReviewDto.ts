type CreateReviewDto = {
  restaurantId: string;
  title: string;
  content: string;
  tasteRating: number;
  visualRating: number;
  textureRating: number;
  totalRating: number;
};

export { type CreateReviewDto };
