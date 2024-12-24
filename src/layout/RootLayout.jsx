import React, { useEffect } from 'react'

const RootLayout = ({ className, children }) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={`w-full px-16 ${className}`}>
            {children}
        </div>
    )
}

export default RootLayout