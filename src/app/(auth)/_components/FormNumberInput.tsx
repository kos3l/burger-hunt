function FormNumberInput({
  value,
  onChange,
  onBlur,
  name,
  label,
  placeholder,
}: {
  value: number;
  onChange: (newValue: number) => void;
  onBlur?: () => void;
  name: string;
  label?: string;
  placeholder?: string;
}) {
  return (
    <div className="flex w-full flex-col gap-1 md:w-max">
      <label className="text-sm font-semibold" htmlFor={name}>
        {label}
      </label>
      <input
        type="number"
        id={name}
        name={name}
        value={value}
        className="w-full rounded-sm border-2 border-stone-900 p-2 text-sm valid:border-stone-900 invalid:border-red-400 md:w-12"
        onChange={(e) => onChange(Number(e.target.value))}
        onBlur={() => onBlur?.()}
        min={1}
        max={5}
        placeholder={placeholder}
      />
    </div>
  );
}

export { FormNumberInput };
