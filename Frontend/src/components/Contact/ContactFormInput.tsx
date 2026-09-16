import React from 'react';
import { borderFor, inputClass, labelClass } from '../formStyles';

interface ContactFormInputProps {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  error?: string;
  borderColor?: string;
  disabled?: boolean;
  optional?: boolean;
  autoComplete?: string;
}

export function ContactFormInput({
  label,
  name,
  type,
  value,
  onChange,
  placeholder,
  error,
  borderColor,
  disabled,
  optional,
  autoComplete,
}: ContactFormInputProps) {
  const id = `contact-${name}`;
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
        {optional && <span className="text-xs font-normal text-slate-400">(optional)</span>}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        autoComplete={autoComplete}
        className={`${inputClass} ${borderFor(error, borderColor)}`}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
