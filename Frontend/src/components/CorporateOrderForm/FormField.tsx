import React from 'react';

interface FormFieldProps {
  label: string;
  error?: string;
  children: React.ReactNode;
}

export function FormField({ label, error, children }: FormFieldProps) {
  return (
    <div className="relative">
      <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
        {label}
      </label>
      {children}
      {error && (
        <p className="absolute -bottom-5 left-0 text-red-500 text-xs">{error}</p>
      )}
    </div>
  );
}