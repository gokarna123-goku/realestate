import React from 'react'
import { propertyRecommendationData } from '../../../../constants/propertyRecommendation'

const RecommendationCarousel = () => {
    return (
        <div className="w-full rounded-lg p-2">
            <Swiper
                slidesPerView={1}
                spaceBetween={5}
                navigation={{
                    prevEl: ".custom-prevv",
                    nextEl: ".custom-nextt",
                }}
                breakpoints={breakpointsResponsive}
                onInit={(swiper) => handleSwiperEvents(swiper)}
                onSlideChange={(swiper) => handleSwiperEvents(swiper)}
                modules={[Autoplay, Navigation]}
                className="mySwiper p-1 [&_.swiper-wrapper]:!ease-linear [&_.swiper-wrapper]:!duration-300"
            >
                {propertyRecommendationData.map((property) => (
                    <SwiperSlide key={property.id} className='p-1'>
                        <div className="w-full h-auto p-1 space-y-3 group">
                            {/* background image with overlay contents */}
                            <div className="w-full aspect-[16/10] rounded-xl overflow-hidden border relative">
                                <img
                                    src={property.img}
                                    alt="category img"
                                    className="w-full h-full object-cover object-center rounded-xl group-hover:scale-110 ease-in-out duration-300"
                                />

                                {/* Overlay bg */}
                                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-10" />

                                {/* Overlay Photos content */}
                                <div className="w-fit h-fit absolute top-0 left-0 p-4 z-20">
                                    <div className="border border-neutral-400 bg-neutral-50/20 py-0 px-1 rounded-md flex items-center justify-center gap-1.5">
                                        <FaCamera className="text-neutral-50" size={15} />
                                        <p className="text-neutral-50 text-base font-medium">{property.totalPhotos}</p>
                                    </div>
                                </div>

                                {/* Overlay Video content */}
                                <div className="w-fit h-fit absolute top-0 left-12 p-4 z-20">
                                    <div className="border border-neutral-400 bg-neutral-50/20 py-0 px-1 rounded-md flex items-center justify-center gap-1.5">
                                        <FaVideo className="text-neutral-50" size={15} />
                                        <p className="text-neutral-50 text-base font-medium">{property.totalVideos}</p>
                                    </div>
                                </div>

                                {/* Overlay type content */}
                                <div className="w-fit h-fit absolute top-0 right-0 p-4 z-20">
                                    <p className={`${property.type === "for buy" ? "bg-primary" : "bg-red-500"} py-0.5 px-2 text-sm text-neutral-50 font-normal rounded-lg flex items-center justify-center gap-1.5`}>
                                        {property.type}
                                    </p>
                                </div>

                                {/* Overlay location content */}
                                <div className="w-fit h-fit absolute bottom-0 left-0 p-4 z-20">
                                    <div className="w-full flex items-center justify-center gap-1.5">
                                        <LuMapPin className="text-neutral-50" size={15} />
                                        <p className="text-neutral-50 text-sm font-normal">
                                            {property.location}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Title, desc, and features section */}
                            <div className="w-full px-1 space-y-4">
                                <div className="space-y-1">
                                    <Link to={`/property/${property.link}`} className="text-lg text-neutral-800 font-semibold">
                                        {property.title}
                                    </Link>
                                    <div className="w-full flex items-center gap-2">
                                        <div className="flex items-center gap-x-1">
                                            <PiBracketsSquareFill className="text-primary" size={12} />
                                            <p className="text-xs text-neutral-700 font-medium">
                                                <span className="text-neutral-500">Sqft:</span> {property.area}
                                            </p>
                                        </div>

                                        <div className="w-1 h-1 rounded-full bg-neutral-500" />

                                        <div className="flex items-center gap-x-1">
                                            <IoIosBed className="text-primary" size={12} />
                                            <p className="text-xs text-neutral-700 font-medium">
                                                <span className="text-neutral-500">Beds:</span> {property.totalBaths}
                                            </p>
                                        </div>

                                        <div className="w-1 h-1 rounded-full bg-neutral-500" />

                                        <div className="flex items-center gap-x-1">
                                            <PiBathtubFill className="text-primary" size={12} />
                                            <p className="text-xs text-neutral-700 font-medium">
                                                <span className="text-neutral-500">Baths:</span> {property.totalBeds}
                                            </p>
                                        </div>

                                    </div>
                                </div>
                                {/* Price */}
                                <div className="w-full flex items-center justify-between">
                                    <p className="text-xl text-neutral-800 font-bold">
                                        {property.price}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default RecommendationCarousel