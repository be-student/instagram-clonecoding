import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, className, disabled, ...props }) => {
  return (
    <button
      {...props}
      disabled={disabled}
      className={`w-full py-1.5 px-4 font-semibold rounded text-white text-sm
                  ${disabled ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}
                  ${className || ''}`}
    >
      {children}
    </button>
  );
};

export default Button;
