"use client";

import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'danger';
    className?: string;
};

const baseStyles =
    'px-4 py-2 rounded focus:outline-none transition-colors duration-200';

const variantStyles: Record<string, string> = {
    primary: 'bg-blue-600 rounded-xl text-white hover:bg-blue-700 hover:scale-95',
    secondary: 'bg-white text-blue-700 border border-blue-600 rounded-xl hover:scale-95 hover:bg-blue-50 hover:text-blue-900',
    danger: 'bg-red-600 text-white hover:bg-red-700',
};

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    className = '',
    ...props
}) => {
    return (
        <button
            className={`${baseStyles} ${variantStyles[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;