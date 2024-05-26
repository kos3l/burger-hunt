function RestaurantSortRadio({
  id,
  value,
  onChange,
  name,
  label,
}: {
  id: string;
  value: boolean;
  onChange: () => void;
  name: string;
  label: string;
}) {
  return (
    <div className="relative flex h-full w-1/2 items-center justify-center bg-stone-300 text-stone-900 has-[:checked]:bg-stone-900 has-[:checked]:text-stone-100">
      <input
        type="radio"
        id={id}
        name={name}
        value={id}
        className="size-full cursor-pointer appearance-none"
        checked={value}
        onChange={() => onChange()}
      />
      <label htmlFor={id} className="absolute cursor-pointer">
        {label}
      </label>
    </div>
  );
}

export { RestaurantSortRadio };
