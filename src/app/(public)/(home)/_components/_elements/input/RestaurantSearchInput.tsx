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
    <div className="flex w-full flex-col">
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        className="rounded-sm border-2 border-stone-900 p-2"
        onChange={(e) => onChange(e.target.value)}
        onBlur={() => onBlur?.()}
      />
    </div>
  );
}

export { RestaurantSearchInput };
