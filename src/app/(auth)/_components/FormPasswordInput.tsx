'use client';

import { useState } from 'react';

function FormPasswordInput({
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
  const [validate, setValidate] = useState<boolean>(false);

  return (
    <div className="flex w-full flex-col gap-1">
      <label className="text-sm font-semibold" htmlFor={name}>
        {label}
      </label>
      <input
        type="password"
        id={name}
        name={name}
        value={value}
        className="rounded-sm border-2 border-stone-900 p-2 text-sm valid:border-stone-900 invalid:border-red-600"
        onChange={(e) => onChange(e.target.value)}
        onBlur={() => onBlur?.()}
        placeholder={placeholder}
        minLength={6}
        required={validate}
        onBlurCapture={() => setValidate(true)}
      />
    </div>
  );
}

export { FormPasswordInput };
