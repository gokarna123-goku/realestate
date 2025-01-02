import React from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const SellerInfo = () => {
    return (
        <div className="w-full bg-neutral-50 rounded-xl shadow border border-neutral-300 py-6 px-8 space-y-5">
            <h3 className="text-xl text-neutral-800 font-medium">Seller Info</h3>

            {/* Seller info */}
            <div className="w-full space-y-7">

                {/* Seller info */}
                <div className="w-full flex items-center gap-3">
                    <img src="https://cdn.pixabay.com/photo/2022/07/09/05/23/house-7310177_640.jpg" alt="seller img" className="w-16 h-16 object-cover object-center rounded-full" />

                    <div className="space-y-0">
                        <h3 className="text-xl text-neutral-800 font-semibold">John Doe</h3>
                        <div className="flex items-center gap-1.5">
                            <p className="text-xs text-neutral-800 font-medium">
                                Owner
                            </p>
                            <div className="w-1 h-1 rounded-full bg-neutral-500 mt-0.5" />
                            <p className="text-xs text-primary font-medium bg-primary/10 px-2 py-0.5 rounded-full">
                                Member since 2022
                            </p>

                        </div>
                    </div>
                </div>

                {/* Contact Data */}
                <div className="w-full space-y-3">
                    <div className="w-full flex items-center gap-3">
                        <FaMapMarkerAlt className='w-4 h-4 text-neutral-700' />
                        <p className="text-sm text-neutral-700 font-normal">
                            123 Main Street, New York, USA
                        </p>
                    </div>
                    <div className="w-full flex items-center gap-3">
                        <FaPhoneAlt className='w-4 h-4 text-neutral-700' />
                        <p className="text-sm text-neutral-700 font-normal">
                            +1 123-456-7890
                        </p>
                    </div>
                    <div className="w-full flex items-center gap-3">
                        <FaEnvelope className='w-4 h-4 text-neutral-700' />
                        <p className="text-sm text-neutral-700 font-normal">
                            3YyHt@example.com
                        </p>
                    </div>
                </div>

                {/* Social links */}
                <div className="w-full flex items-center gap-3 pb-3">
                    <Link to="/" className="w-8 h-8 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-neutral-50 flex items-center justify-center ease-in-out duration-300">
                        <FaInstagram className='w-4 h-4' />
                    </Link>
                    <Link to="/" className="w-8 h-8 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-neutral-50 flex items-center justify-center ease-in-out duration-300">
                        <FaFacebookF className='w-4 h-4' />
                    </Link>
                    <Link to="/" className="w-8 h-8 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-neutral-50 flex items-center justify-center ease-in-out duration-300">
                        <FaXTwitter className='w-4 h-4' />
                    </Link>
                    <Link to="/" className="w-8 h-8 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-neutral-50 flex items-center justify-center ease-in-out duration-300">
                        <FaYoutube className='w-4 h-4' />
                    </Link>
                </div>

                {/* button */}
                {/* <div className="w-full flex items-center justify-end pb-3">
                    <button className="w-full bg-primary/90 text-neutral-50 px-8 py-3 rounded-xl font-medium text-base hover:bg-primary ease-in-out duration-300">
                        View Profile
                    </button>
                </div> */}

            </div>

        </div>
    )
}

export default SellerInfo