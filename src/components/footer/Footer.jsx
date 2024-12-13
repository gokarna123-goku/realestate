import React from 'react'
import RootLayout from '../../layout/RootLayout'
import { Link } from 'react-router-dom'
import { FaHeadset } from 'react-icons/fa6'

const Footer = () => {
    return (
        <footer className='w-full py-16 bg-neutral-800'>
            <RootLayout className={""}>
                <div className="w-full bg-neutral-200/5 backdrop-blur rounded-2xl shadow-md px-14 py-16">
                    {/* Footer content section */}
                    <div className="w-full grid grid-cols-5 gap-8">
                        <div className="col-span-2 pr-8 space-y-6">
                            <Link to="/" className='text-4xl text-neutral-50'>
                                Real<span className="text-neutral-300">Estate</span>
                            </Link>
                            <p className="text-sm text-neutral-300 font-normal mt-4">
                                Find the best house for your dream vacation in the world of luxury and comfort with us.
                                Rapidiously myocardinate cross-platform intellectual capital model. Appropriately create interactive infrastructures
                            </p>
                            {/* 24/7 Customer Support */}
                            <div className="flex items-center gap-x-4">
                                <div className="w-12 h-12 bg-neutral-600/40 rounded-lg flex items-center justify-center text-neutral-100">
                                    <FaHeadset className='text-3xl' />
                                </div>
                                <div className='space-y-0.5'>
                                    <h3 className="text-sm text-neutral-300 font-normal">24/7 Customer Support</h3>
                                    <p className="text-lg text-neutral-300 font-semibold">
                                        +978-123-4567
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div className="col-span-1">
                            <h3 className="text-lg text-neutral-50 font-semibold mb-4">
                                Company
                            </h3>
                            <ul className="space-y-2 text-base">
                                <li>
                                    <Link to="/" className='text-neutral-300 font-normal hover:text-neutral-50 ease-in-out duration-300'>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className='text-neutral-300 font-normal hover:text-neutral-50 ease-in-out duration-300'>
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/agents" className='text-neutral-300 font-normal hover:text-neutral-50 ease-in-out duration-300'>
                                        Agents
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/properties" className='text-neutral-300 font-normal hover:text-neutral-50 ease-in-out duration-300'>
                                        Properties
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/enquire" className='text-neutral-300 font-normal hover:text-neutral-50 ease-in-out duration-300'>
                                        Enquire
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-span-1">
                            <h3 className="text-lg text-neutral-50 font-semibold mb-4">
                                Support
                            </h3>
                            <ul className="space-y-2 text-base">
                                <li>
                                    <Link to="/" className='text-neutral-300 font-normal hover:text-neutral-50 ease-in-out duration-300'>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className='text-neutral-300 font-normal hover:text-neutral-50 ease-in-out duration-300'>
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/agents" className='text-neutral-300 font-normal hover:text-neutral-50 ease-in-out duration-300'>
                                        Agents
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/properties" className='text-neutral-300 font-normal hover:text-neutral-50 ease-in-out duration-300'>
                                        Properties
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/enquire" className='text-neutral-300 font-normal hover:text-neutral-50 ease-in-out duration-300'>
                                        Enquire
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-span-1">
                            <h3 className="text-xl text-neutral-50 font-semibold mb-4">
                                Contact
                            </h3>
                            <ul className="space-y-2 text-base">
                                <li>
                                    <Link to="/" className='text-neutral-300 font-normal hover:text-neutral-50 ease-in-out duration-300'>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className='text-neutral-300 font-normal hover:text-neutral-50 ease-in-out duration-300'>
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/agents" className='text-neutral-300 font-normal hover:text-neutral-50 ease-in-out duration-300'>
                                        Agents
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/properties" className='text-neutral-300 font-normal hover:text-neutral-50 ease-in-out duration-300'>
                                        Properties
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/enquire" className='text-neutral-300 font-normal hover:text-neutral-50 ease-in-out duration-300'>
                                        Enquire
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Seperator */}
                    <div className="w-full h-px bg-neutral-600 mt-20 mb-14" />

                    {/* Copyright section */}
                    <div className="w-full flex items-center justify-between py-4">
                        <p className="text-sm text-neutral-500 font-normal">Copyright &copy; 2023 RealEstate. All rights reserved.</p>
                        {/* Privacy Policy, terms and conditions */}
                        <div className="flex items-center gap-x-4">
                            <Link to="/" className='text-sm text-neutral-500 font-normal hover:text-neutral-300 ease-in-out duration-300'>
                                Privacy Policy
                            </Link>
                            <Link to="/" className='text-sm text-neutral-500 font-normal hover:text-neutral-300 ease-in-out duration-300'>
                                Terms & Conditions
                            </Link>
                        </div>
                    </div>
                </div>
            </RootLayout>

        </footer>
    )
}

export default Footer