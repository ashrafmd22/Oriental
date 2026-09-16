import React from 'react';
import { labelClass } from '../formStyles';

interface FormFieldProps {
  label: string;
  htmlFor?: string;
  error?: string;
  children: React.ReactNode;
}

export function FormField({ label, htmlFor, error, children }: FormFieldProps) {
  return (
    <div>
      <label htmlFor={htmlFor} className={labelClass}>
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1 text-red-500 text-xs">{error}</p>
      )}
    </div>
  );
}
