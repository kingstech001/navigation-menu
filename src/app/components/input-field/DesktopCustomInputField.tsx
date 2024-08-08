'use client';

import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

interface DesktopCustomInputFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const DesktopCustomInputField: React.FC<DesktopCustomInputFieldProps> = ({
  id,
  label,
  value,
  onChange,
  placeholder = '',
}) => {
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleBlur = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setError('Enter correct email format');
    } else {
      setError('');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-sm font-medium text-gray-700 lg:whitespace-nowrap">
        {label}
      </label>
      <div className="flex flex-col relative w-fit">
        <input
          type={showPassword ? 'text' : 'password'}
          id={id}
          value={value}
          onChange={onChange}
          onBlur={handleBlur}
          placeholder={placeholder}
          className={`mt-1 lg:mt-0 p-2 border rounded-[6px] focus:outline-none focus:ring-[1px] focus:ring-[#F97316] lg:flex-1 max-w-[384px] max-h-[64px] px-[20px] py-[16px] ${error ? 'border-red-500' : 'border-[#E9E9E9]'}`}
        />
        <div className="absolute right-5 top-5">
          <button type="button" onClick={togglePasswordVisibility} className="focus:outline-none">
            {showPassword ? <FaEye /> : <FaEyeSlash /> }
          </button>
        </div>
        {!error && <p className="text-[14px] text-gray-500">This is a hint</p>}
        {error && <span className="text-red-500 text-sm mt-1 lg:mt-0">{error}</span>}
      </div>
    </div>
  );
};

export default DesktopCustomInputField;
