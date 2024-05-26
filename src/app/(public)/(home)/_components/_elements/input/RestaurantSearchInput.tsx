function RestaurantSearchInput({
  value,
  onChange,
  onBlur,
  name,
  label,
}: {
  value: string;
  onChange: (newValue: string) => void;
  onBlur?: () => void;
  name: string;
  label?: string;
}) {
  return (
    <div className="flex w-full flex-col gap-2 border-t-2 border-dashed border-stone-900 pt-2">
      <p>You can also search by address!</p>
      <div className="flex w-full flex-col">
        <label hidden htmlFor={name}>
          {label}
        </label>
        <input
          type="text"
          id={name}
          name={name}
          value={value}
          className="rounded-sm border-2 border-stone-900 p-2 text-sm"
          onChange={(e) => onChange(e.target.value)}
          onBlur={() => onBlur?.()}
        />
      </div>
    </div>
  );
}

export { RestaurantSearchInput };
