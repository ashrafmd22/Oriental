import React from 'react';

interface FormFieldProps {
  label: string;
  error?: string;
  children: React.ReactNode;
}

export function FormField({ label, error, children }: FormFieldProps) {
  return (
    <div>
      <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1 text-red-500 text-xs">{error}</p>
      )}
    </div>
  );
}