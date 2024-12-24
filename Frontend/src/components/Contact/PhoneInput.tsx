import React from 'react';

interface PhoneInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  borderColor?: string;
}

export function PhoneInput({ value, onChange, error, borderColor }: PhoneInputProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone</label>
      <div className="flex items-center border rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
        <div className="hidden sm:flex items-center bg-gray-50 px-3 py-2 border-r border-gray-300 rounded-l-lg">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
            alt="India Flag"
            className="w-5 h-3 mr-1"
          />
          <span className="text-gray-600 text-sm">+91</span>
        </div>
        <div className="flex sm:hidden items-center bg-gray-50 px-2 py-2 border-r border-gray-300 rounded-l-lg">
          <span className="text-gray-600 text-xs">+91</span>
        </div>
        <input
          type="tel"
          name="phone"
          value={value}
          onChange={onChange}
          placeholder="Enter your phone number"
          className={`flex-1 rounded-r-lg border-0 p-3 text-sm focus:ring-0 ${borderColor}`}
        />
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}