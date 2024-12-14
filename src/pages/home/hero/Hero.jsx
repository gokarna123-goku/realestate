import React from "react";
import { FaSearch } from "react-icons/fa";
import QuickSearch from "./quicksearch/QuickSearch";

const Hero = () => {

    return (
        <div className='flex-1 relative'>
            {/* Hero Background section */}
            <div className="w-full h-[calc(100vh-30ch)] bg-primary mb-48" />

            {/* Hero Carousel section */}
            <div className="w-full px-16 absolute top-2 left-[50%] translate-x-[-50%] z-20">
                <div className="w-full h-[calc(100vh-12ch)] bg-[url('https://cdn.pixabay.com/photo/2018/07/08/18/25/lake-geneva-3524431_1280.jpg')] bg-cover bg-no-repeat bg-top rounded-3xl shadow-2xl relative overflow-hidden">
                    {/* Background Overlay */}
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-55 z-10" />

                    {/* Hero Content */}
                    <div className="flex items-center justify-center flex-col h-full w-full mx-auto relative z-20">

                        {/* Hero content */}
                        <div className="w-full px-14 space-y-24">
                            {/* Title, desc, and search section */}
                            <div className="w-full space-y-16">
                                {/* Heading & Description */}
                                <div className="space-y-4 text-center">
                                    <h1 className="text-7xl text-neutral-50 font-black">
                                        Looking for a Real Estate?
                                    </h1>
                                    <p className="text-lg text-neutral-300 font-normal">
                                        {/* Find the best house for your dream vacation in the world of luxury and comfort with us. */}
                                        {/* Search for the best house for your dream vacation in the world of luxury and comfort with us. */}
                                        Search over 10,000+ real estate properties for your dream vacation in the world of <br /> luxury and comfort with us.
                                    </p>
                                </div>

                                {/* Search Form */}
                                <div className="w-full flex items-center justify-center px-6">
                                    <form className="grid grid-cols-7 items-center w-full h-20 bg-neutral-50/55 backdrop-blur-sm px-0 rounded-2xl">
                                        {/* Type */}
                                        <div className="col-span-2 w-full h-full py-1 flex justify-center flex-col px-4 space-y-0">
                                            {/* Label indicator */}
                                            <p className="text-neutral-800 font-normal text-sm">Select Type</p>


                                            {/* dropdown items */}
                                            <select name="" id="" className="w-full px-0 py-2 cursor-pointer bg-transparent text-neutral-950 focus:outline-none rounded-xl">
                                                <option value="all">All</option>
                                                <option value="house">House</option>
                                                <option value="apartment">Apartment</option>
                                                <option value="land">Land</option>
                                                <option value="villa">Villa</option>
                                            </select>
                                        </div>

                                        {/* Location */}
                                        <div className="col-span-2 w-full h-full py-1 flex justify-center flex-col px-4 border-r border-l border-neutral-700 space-y-0">
                                            {/* Label indicator */}
                                            <p className="text-neutral-700 font-normal text-sm">Select Status</p>


                                            {/* dropdown items */}
                                            <select name="" id="" className="w-full px-0 py-2 cursor-pointer bg-transparent text-neutral-950 focus:outline-none rounded-xl">
                                                <option value="all">All</option>
                                                <option value="rent">Rent</option>
                                                <option value="sell">Sell</option>
                                                <option value="buy">Buy</option>
                                            </select>
                                        </div>

                                        {/* status */}
                                        <div className="col-span-2 w-full h-full py-1 flex justify-center flex-col px-4 space-y-0">
                                            {/* Label indicator */}
                                            <p className="text-neutral-700 font-normal text-sm">Enter Location</p>

                                            {/* dropdown items */}
                                            <input type="text" placeholder="Kathmandu" className="w-full px-0 py-2 text-neutral-950 placeholder:text-neutral-700 bg-transparent focus:outline-none rounded-xl" />

                                        </div>

                                        {/* Search */}
                                        <div className="col-span-1 px-4 flex items-center justify-center">
                                            <button
                                                type="submit"
                                                className="bg-primary text-base text-neutral-50 py-3 px-8 rounded-xl font-medium flex items-center justify-center gap-2 ease-in-out duration-300"
                                            >
                                                <FaSearch />
                                                Search
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            {/* Quick Search Properties Section */}
                            {/* Will be some card with full car image and text, add some carousel if required */}
                            <QuickSearch />

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero