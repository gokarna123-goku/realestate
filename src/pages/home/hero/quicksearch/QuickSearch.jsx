import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

import { Link } from 'react-router-dom';
import { quicksearchData } from '../../../../constants/quicksearchData';

const QuickSearch = () => {

    const [isBeginning, setIsBeginning] = useState(true); // Track if on the first slide
    const [isEnd, setIsEnd] = useState(false); // Track if on the last slide


    const breakpointsResponsive = {
        '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        '@0.75': {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        '@1.00': {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        '@1.50': {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    };


    const handleSwiperEvents = (swiper) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };

    return (
        <div className="w-full space-y-6 relative">
            <div className="w-full flex items-center justify-between px-4">
                <h2 className="text-lg text-neutral-50 font-medium">
                    {/* Quick Search Properties */}
                    Find Properties Quickly & Easily
                </h2>

                {/* Custom Navigation Buttons */}
                <div className="flex items-center gap-6">
                    <button
                        className={`custom-prev text-white bg-primary hover:bg-blue-700 p-2 rounded-full z-10 ${isBeginning ? "cursor-not-allowed opacity-50" : "cursor-pointer"
                            }`}
                        disabled={isBeginning}
                    >
                        <FaChevronLeft size={20} />
                    </button>

                    <button
                        className={`custom-next text-white bg-primary hover:bg-blue-700 p-2 rounded-full z-10 ${isEnd ? "cursor-not-allowed opacity-50" : "cursor-pointer"
                            }`}
                        disabled={isEnd}
                    >
                        <FaChevronRight size={20} />
                    </button>
                </div>
            </div>

            {/* Quick Search card */}
            <div className="w-full rounded-lg p-2">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={5}
                    // loop={true}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    navigation={{
                        prevEl: ".custom-prev",
                        nextEl: ".custom-next",
                    }}
                    breakpoints={breakpointsResponsive}
                    onInit={(swiper) => handleSwiperEvents(swiper)}
                    onSlideChange={(swiper) => handleSwiperEvents(swiper)}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper p-1 [&_.swiper-wrapper]:!ease-linear [&_.swiper-wrapper]:!duration-300"
                >
                    {quicksearchData.map((search) => (
                        <SwiperSlide key={search.id} className='p-1'>
                            <Link to={search.link} className="w-full h-auto p-1 rounded-full bg-neutral-50/30 backdrop-blur-sm border border-neutral-500 flex items-center gap-3">
                                {/* Img */}
                                <img src={search.img}
                                    alt="category img"
                                    className="w-16 h-16 object-cover object-center rounded-full border"
                                />

                                {/* Content */}
                                <div className="flex-1 flex items-center justify-between">
                                    <div className="space-y-0">
                                        <h2 className="text-lg text-neutral-50 font-medium">{search.name}</h2>
                                        <p className="text-xs text-neutral-200 font-normal">{search.propertyFound} Properties</p>
                                    </div>
                                    {/* <Link to={search.link} className="flex items-center justify-center pr-1">
                                        <LuSquareArrowOutUpRight className="text-neutral-50 text-3xl" />
                                    </Link> */}
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </div>
    )
}

export default QuickSearch