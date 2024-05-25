import { OpeningHoursDateInterval } from '@/domain/opening-hours/entity/OpeningHoursDateInterval';

type OpeningHours = {
  openNow: boolean;
  monday: OpeningHoursDateInterval;
  tuesday: OpeningHoursDateInterval;
  wednesday: OpeningHoursDateInterval;
  thursday: OpeningHoursDateInterval;
  friday: OpeningHoursDateInterval;
  saturday: OpeningHoursDateInterval;
  sunday: OpeningHoursDateInterval;
};

export { type OpeningHours };
