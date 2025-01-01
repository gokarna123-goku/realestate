import React from 'react';

// Reusable Input component
const Input = ({ placeholder, type, className, ...rest }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className={`w-full bg-transparent rounded-xl h-12 px-4 border border-neutral-300 text-neutral-700 placeholder:text-neutral-500 font-normal text-base focus:border-primary/70 focus:bg-primary/[.03] outline-none ease-in-out duration-300 ${className}`}
            {...rest}
        />
    );
};

export default Input;
