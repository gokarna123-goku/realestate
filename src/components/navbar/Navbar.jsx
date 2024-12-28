import React from 'react'
import { Link } from 'react-router-dom'
import { navbarItems } from '../../constants/navbarItem'

const Navbar = () => {
    return (
        <div className='w-full bg-primary h-[8ch] px-16 flex items-center justify-between'>
            {/* Logo section */}
            <Link to="/" className='text-3xl text-neutral-50'>
                Real<span className="text-neutral-300">Estate</span>
            </Link>

            {/* Nav Items and button section */}
            <nav className="flex items-center gap-12">
                {/* Nav items */}
                <ul className="flex items-center gap-x-7 text-neutral-300 font-normal text-base">
                    {navbarItems.map((item, index) => (
                        <li key={index}>
                            <Link to={item.link} className='hover:text-neutral-50 ease-in-out duration-300'>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Button */}
                <button className="bg-neutral-50 text-neutral-800 text-base font-normal px-4 py-1.5 rounded-full">
                    List Your Property
                </button>
            </nav>

        </div>
    )
}

export default Navbar