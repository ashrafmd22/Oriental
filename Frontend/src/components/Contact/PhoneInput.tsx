import React from 'react';
import {
  borderFor,
  labelClass,
  phoneInputClass,
  phonePrefixClass,
  phoneWrapperClass,
} from '../formStyles';

interface PhoneInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  borderColor?: string;
  disabled?: boolean;
  id?: string;
}

export function PhoneInput({ value, onChange, error, borderColor, disabled, id = 'contact-phone' }: PhoneInputProps) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        Phone Number
      </label>
      <div className={`${phoneWrapperClass} ${borderFor(error, borderColor)}`}>
        <span className={phonePrefixClass}>+91</span>
        <input
          id={id}
          type="tel"
          name="phone"
          inputMode="numeric"
          autoComplete="tel-national"
          maxLength={10}
          value={value}
          onChange={onChange}
          disabled={disabled}
          placeholder="10-digit mobile number"
          className={phoneInputClass}
        />
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
