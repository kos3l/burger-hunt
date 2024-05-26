import { createElement, Fragment } from 'react';

import { OpeningHoursDateInterval } from '@/src/domain/opening-hours/entity/OpeningHoursDateInterval';
import { formatDate } from '@/src/util/date/dateUtil';

function RestaurantOpeningHours({
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday,
}: {
  monday?: OpeningHoursDateInterval;
  tuesday?: OpeningHoursDateInterval;
  wednesday?: OpeningHoursDateInterval;
  thursday?: OpeningHoursDateInterval;
  friday?: OpeningHoursDateInterval;
  saturday?: OpeningHoursDateInterval;
  sunday?: OpeningHoursDateInterval;
}) {
  const isAnydateValid =
    monday || tuesday || wednesday || thursday || friday || saturday || sunday;

  if (!isAnydateValid) {
    return createElement(Fragment);
  }

  return (
    <div className="w-full border-t-2 border-dashed border-stone-900 pt-2">
      <p className="pb-1 font-semibold">Opening Hours:</p>
      {monday && (
        <p>
          Monday: {formatDate(monday.from)} - {formatDate(monday.to)}
        </p>
      )}
      {tuesday && (
        <p>
          Tuesday: {formatDate(tuesday.from)} - {formatDate(tuesday.to)}
        </p>
      )}
      {wednesday && (
        <p>
          Wednesday: {formatDate(wednesday.from)} - {formatDate(wednesday.to)}
        </p>
      )}
      {thursday && (
        <p>
          Thursday: {formatDate(thursday.from)} - {formatDate(thursday.to)}
        </p>
      )}
      {friday && (
        <p>
          Friday: {formatDate(friday.from)} - {formatDate(friday.to)}
        </p>
      )}
      {saturday && (
        <p>
          Saturday: {formatDate(saturday.from)} - {formatDate(saturday.to)}
        </p>
      )}
      {sunday && (
        <p>
          Sunday: {formatDate(sunday.from)} - {formatDate(sunday.to)}
        </p>
      )}
    </div>
  );
}

export { RestaurantOpeningHours };
