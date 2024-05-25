function HomeSearchInput({
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
        className="rounded-md border-2 border-stone-800"
        onChange={(e) => onChange(e.target.value)}
        onBlur={() => onBlur?.()}
      />
    </div>
  );
}

export { HomeSearchInput };
