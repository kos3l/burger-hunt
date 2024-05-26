import { RestaurantSearchFormButton } from '@/public-pages/(home)/_components/_elements/button/RestaurantSearchFormButton';
import { RestaurantSearchInput } from '@/public-pages/(home)/_components/_elements/input/RestaurantSearchInput';
import { RestaurantSortRadio } from '@/public-pages/(home)/_components/_elements/input/RestaurantSortRadio';

function RestaurantSearchForm({
  searchAddress,
  handleSearchAddressChange,
  handleOnSearchByLocationClick,

  showTastiest,
  showPrettiest,
  showBestTexture,
  showClosest,

  handleShowTastiestChange,
  handleShowPrettiestChange,
  handleShowBestTextureChange,
  handleShowClosestChange,
}: {
  searchAddress: string;
  handleSearchAddressChange: (newAddress: string) => void;
  handleOnSearchByLocationClick: (newLocation?: GeolocationPosition) => void;

  showTastiest: boolean;
  showPrettiest: boolean;
  showBestTexture: boolean;
  showClosest: boolean;

  handleShowTastiestChange: (value: boolean) => void;
  handleShowPrettiestChange: (value: boolean) => void;
  handleShowBestTextureChange: (value: boolean) => void;
  handleShowClosestChange: (value: boolean) => void;
}) {
  return (
    <div className="relative flex h-max w-full min-w-full flex-col gap-6 rounded-sm border-2 border-stone-800 bg-stone-100 p-4 lg:sticky lg:left-0 lg:top-8 lg:w-[25rem] lg:min-w-[25rem]">
      <RestaurantSearchFormButton
        text="Search near me"
        onClick={() =>
          navigator.geolocation.getCurrentPosition(
            (position) => handleOnSearchByLocationClick(position),
            () => handleOnSearchByLocationClick(undefined),
          )
        }
      />
      <RestaurantSearchInput
        value={searchAddress}
        onChange={(value) => handleSearchAddressChange(value)}
        name="restaurantSearch"
        label="Search.."
      />
      <div className="flex w-full flex-col gap-2 border-t-2 border-dashed border-stone-900 pt-2">
        <p>Show me the...</p>
        <div className="flex h-10 w-full border-2 border-stone-900">
          <RestaurantSortRadio
            name="sort-taste"
            id="bland"
            value={!showTastiest}
            onChange={() => handleShowTastiestChange(false)}
            label="Blandest"
          />
          <RestaurantSortRadio
            name="sort-taste"
            id="tasty"
            value={showTastiest === true}
            onChange={() => handleShowTastiestChange(true)}
            label="Tastiest"
          />
        </div>
        <div className="flex h-10 w-full border-2 border-stone-900">
          <RestaurantSortRadio
            name="sort-visual"
            id="ugly"
            value={!showPrettiest}
            onChange={() => handleShowPrettiestChange(false)}
            label="Ugliest"
          />
          <RestaurantSortRadio
            name="sort-visual"
            id="pretty"
            value={showPrettiest === true}
            onChange={() => handleShowPrettiestChange(true)}
            label="Prettiest"
          />
        </div>
        <div className="flex h-10 w-full border-2 border-stone-900">
          <RestaurantSortRadio
            name="sort-texture"
            id="low-quality"
            value={!showBestTexture}
            onChange={() => handleShowBestTextureChange(false)}
            label="Lowest Quality"
          />
          <RestaurantSortRadio
            name="sort-texture"
            id="high-quality"
            value={showBestTexture === true}
            onChange={() => handleShowBestTextureChange(true)}
            label="Highest Quality"
          />
        </div>
        <div className="flex h-10 w-full border-2 border-stone-900">
          <RestaurantSortRadio
            name="sort-distance"
            id="far-away"
            value={!showClosest}
            onChange={() => handleShowClosestChange(false)}
            label="Farthest"
          />
          <RestaurantSortRadio
            name="sort-distance"
            id="close"
            value={showClosest === true}
            onChange={() => handleShowClosestChange(true)}
            label="Closest"
          />
        </div>
      </div>
      <div className="flex w-full flex-col gap-2 border-t-2 border-dashed border-stone-900 pt-2">
        <p>Community:</p>
      </div>
    </div>
  );
}

export { RestaurantSearchForm };
