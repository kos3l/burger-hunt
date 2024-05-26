function FormInput({
  value,
  onChange,
  onBlur,
  name,
  label,
  placeholder,
}: {
  value: string;
  onChange: (newValue: string) => void;
  onBlur?: () => void;
  name: string;
  label?: string;
  placeholder?: string;
}) {
  return (
    <div className="flex w-full flex-col gap-1">
      <label className="text-sm font-semibold" htmlFor={name}>
        {label}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        className="rounded-sm border-2 border-stone-900 p-2 text-sm valid:border-stone-900 invalid:border-red-400"
        onChange={(e) => onChange(e.target.value)}
        onBlur={() => onBlur?.()}
        placeholder={placeholder}
      />
    </div>
  );
}

export { FormInput };
