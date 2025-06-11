import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      {...props}
      className={`w-full px-3 py-2 border border-gray-300 rounded bg-gray-50 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 ${className || ''}`}
    />
  );
};

export default Input;
