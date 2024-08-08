'use client';

import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

interface MobileCustomInputFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const MobileCustomInputField: React.FC<MobileCustomInputFieldProps> = ({
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
      <label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="relative w-fit">
        <input
          type={showPassword ? 'text' : 'password'}
          id={id}
          value={value}
          onChange={onChange}
          onBlur={handleBlur}
          placeholder={placeholder}
          className={`mt-1 p-2 border rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#F97316] ${error ? 'border-red-500' : 'border-gray-300'}`}
        />
        <div className="absolute right-5 top-4">
          <button type="button" onClick={togglePasswordVisibility} className="focus:outline-none">
            {showPassword ? <FaEye /> : <FaEyeSlash /> }
          </button>
        </div>
      </div>
      {!error && <p className="text-[14px] text-gray-500">This is a hint</p>}
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
};

export default MobileCustomInputField;
