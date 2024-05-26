function FormTextarea({
  value,
  onChange,
  name,
  label,
  placeholder,
}: {
  value: string;
  onChange: (newValue: string) => void;
  name: string;
  label?: string;
  placeholder?: string;
}) {
  return (
    <div className="flex w-full flex-col gap-1">
      <label className="text-sm font-semibold" htmlFor={name}>
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        className="min-h-12 rounded-sm border-2 border-stone-900 p-2 text-sm valid:border-stone-900 invalid:border-red-400"
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}

export { FormTextarea };
