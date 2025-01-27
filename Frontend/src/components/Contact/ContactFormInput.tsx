import React from 'react';

interface ContactFormInputProps {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  error?: string;
  borderColor?: string;
  disabled?: boolean; // Added disabled prop
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
}: ContactFormInputProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1.5">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 p-3 text-sm transition duration-200 ${borderColor} disabled:bg-gray-50 disabled:cursor-not-allowed`}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}