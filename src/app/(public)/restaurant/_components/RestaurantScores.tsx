'use client';

import { DistanceWidget } from '../../(home)/_components/card/widget/DistanceWidget';
import { RatingWidget } from '../../(home)/_components/card/widget/RatingWidget';

function RestaurantScores({
  totalRating,
  distance,
  visualRating,
  textureRating,
  tasteRating,
}: {
  totalRating: number;
  distance: number;
  visualRating: number;
  textureRating: number;
  tasteRating: number;
}) {
  const formattedDistance = new Intl.NumberFormat('en-UK', {
    style: 'unit',
    unitDisplay: 'short',
    unit: 'meter',
  }).format(distance);

  return (
    <>
      <div className="flex gap-6 pb-2">
        <div>
          <RatingWidget rating={totalRating} />
        </div>
        <div>
          <DistanceWidget distance={formattedDistance} position="start" />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <p>
          <span className="font-semibold">Visual presentation:</span>{' '}
          {visualRating}/5
        </p>
        <p>
          <span className="font-semibold">Texture:</span> {textureRating}/5
        </p>
        <p>
          <span className="font-semibold">Taste:</span> {tasteRating}/5
        </p>
      </div>
    </>
  );
}

export { RestaurantScores };
