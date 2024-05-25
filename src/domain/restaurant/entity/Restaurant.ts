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

// {
//   id: 'wefwefwefwef';
//   name: 'Mcdonalds';
//   types: ['burger'];
//   primaryType: 'Restaurant';
//   internationalPhoneNumber: '+45500000000';
//   formattedAddress: 'Willemoesgade 20 Esbjerg 67000';
//   shortFormattedAddress: 'Willemoesgade 20';
//   websiteUri: 'https://tanstack.com/query/v3/docs/framework/react/overview';
//   openingHours: 'Monday: 10';
// totalRating: 4;
// tastyTotalRating: 3;
// textureTotalRating: 2;
// visualTotalRating: 1;
// openingHours: {
//   openNow: true;
//   monday: { from: '2024-05-25T12:00:00Z'; to: '2024-05-25T12:00:00Z' };
//   tuesday: { from: '2024-05-25T12:00:00Z'; to: '2024-05-25T12:00:00Z' };
// };
// }
