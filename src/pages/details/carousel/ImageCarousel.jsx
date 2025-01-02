import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { detailImgData } from '../../../constants/detailImgData';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

const ImageCarousel = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const [isBeginning, setIsBeginning] = useState(true); // Track if on the first slide
    const [isEnd, setIsEnd] = useState(false); // Track if on the last slide


    const handleSwiperEvents = (swiper) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };

    return (
        <>
            <div className="w-full relative">
                <Swiper
                    spaceBetween={10}
                    navigation={{
                        prevEl: ".custom-prevv",
                        nextEl: ".custom-nextt",
                    }}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    onInit={(swiper) => handleSwiperEvents(swiper)}
                    onSlideChange={(swiper) => handleSwiperEvents(swiper)}
                    className="mySwiper2"
                >
                    {detailImgData.map((img) => (
                        <SwiperSlide key={img.id}>
                            <div className="w-full h-[calc(100vh-32ch)]">
                                <img src={img.img} alt={img.alt} className="w-full h-full object-cover object-center rounded-2xl" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>


                {/* Navigation buttons */}
                <div className="w- h- bg-neutral-50 rounded-full flex items-center justify-center p-1 absolute top-1/2 -left-4 z-20">
                    <button
                        className={`custom-prevv text-white bg-primary hover:bg-blue-700 p-1 rounded-full z-10 ${isBeginning ? "cursor-not-allowed opacity-50" : "cursor-pointer"
                            }`}
                        disabled={isBeginning}
                    >
                        <FaChevronLeft size={20} />
                    </button>
                </div>
                <div className="w- h- bg-neutral-50 rounded-full flex items-center justify-center p-1 absolute top-1/2 -right-4 z-20">
                    <button
                        className={`custom-nextt text-white bg-primary hover:bg-blue-700 p-1 rounded-full z-10 ${isEnd ? "cursor-not-allowed opacity-50" : "cursor-pointer"
                            }`}
                        disabled={isEnd}
                    >
                        <FaChevronRight size={20} />
                    </button>
                </div>
            </div>

            {/* Thumbs as a Pagination */}
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={20}
                slidesPerView={5}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper border border-neutral-300/80 bg-neutral-100/60 !px-3 !py-4 !rounded-lg !mt-4"
            >
                {detailImgData.map((img) => (
                    <SwiperSlide key={img.id}>
                        <div className="w-full flex items-center justify-center cursor-pointer">
                            <img src={img.img} alt={img.alt} className="w-32 h-20 object-cover object-center rounded-md" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default ImageCarousel