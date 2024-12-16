import React from 'react'
import RootLayout from '../../../layout/RootLayout'
import { PiBathtubFill, PiBracketsSquareFill } from 'react-icons/pi'
import { IoIosBed } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { LuMapPin } from 'react-icons/lu'
import { FaCamera, FaVideo } from 'react-icons/fa6'
import { FaRulerCombined } from "react-icons/fa";

const FeaturedProperties = () => {
    return (
        <RootLayout className={"py-12 space-y-12"}>
            <h2 className="text-2xl text-neutral-800 font-semibold text-center">
                Featured Properties
            </h2>

            {/* Featured Properties cards */}
            <div className="space-y-8">
                {/* First grid */}
                <div className="grid grid-cols-2 gap-8">
                    {/* First card */}
                    <div className="w-full h-auto p-1 space-y-3 group">
                        {/* background image with overlay contents */}
                        <div className="w-full aspect-video rounded-xl overflow-hidden border relative">
                            <img
                                src="https://cdn.pixabay.com/photo/2022/07/09/05/23/house-7310177_640.jpg"
                                alt="category img"
                                className="w-full h-full object-cover object-center rounded-xl group-hover:scale-110 ease-in-out duration-300"
                            />

                            {/* Overlay bg */}
                            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-10" />

                            {/* Overlay Photos content */}
                            <div className="w-fit h-fit absolute top-0 left-0 p-4 z-20">
                                <div className="border border-neutral-400 bg-neutral-50/20 py-0 px-1 rounded-md flex items-center justify-center gap-1.5">
                                    <FaCamera className="text-neutral-50" size={15} />
                                    <p className="text-neutral-50 text-base font-medium">3</p>
                                </div>
                            </div>

                            {/* Overlay Video content */}
                            <div className="w-fit h-fit absolute top-0 left-12 p-4 z-20">
                                <div className="border border-neutral-400 bg-neutral-50/20 py-0 px-1 rounded-md flex items-center justify-center gap-1.5">
                                    <FaVideo className="text-neutral-50" size={15} />
                                    <p className="text-neutral-50 text-base font-medium">1</p>
                                </div>
                            </div>

                            {/* Overlay type content */}
                            <div className="w-fit h-fit absolute top-0 right-0 p-4 z-20">
                                <p className="bg-red-500 py-0.5 px-2 text-sm text-neutral-50 font-normal rounded-lg flex items-center justify-center gap-1.5">
                                    for sale
                                </p>
                            </div>

                            {/* Overlay featured content */}
                            <div className="w-fit h-fit absolute top-0 right-20 p-4 z-20">
                                <p className="bg-primary py-0.5 px-2 text-sm text-neutral-50 font-normal rounded-lg flex items-center justify-center gap-1.5">
                                    Featured
                                </p>
                            </div>

                            {/* Overlay location content */}
                            <div className="w-fit h-fit absolute bottom-0 left-0 p-4 z-20">
                                <div className="w-full flex items-center justify-center gap-1.5">
                                    <LuMapPin className="text-neutral-50" size={15} />
                                    <p className="text-neutral-50 text-sm font-normal">
                                        New York NY 10001 United States of America
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Title, desc, and features section */}
                        <div className="w-full px-1 space-y-4">
                            <div className="space-y-1">
                                <Link to="/" className="text-xl text-neutral-800 font-semibold">
                                    Gokarna's luxurious villa
                                </Link>
                                <div className="w-full flex items-center gap-3">
                                    <div className="flex items-center gap-x-1">
                                        <FaRulerCombined className="text-primary" size={12} />
                                        <p className="text-sm text-neutral-700 font-medium">
                                            <span className="text-neutral-500">Sqft:</span> 1150
                                        </p>
                                    </div>

                                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-500" />

                                    <div className="flex items-center gap-x-1">
                                        <IoIosBed className="text-primary" size={15} />
                                        <p className="text-sm text-neutral-700 font-medium">
                                            <span className="text-neutral-500">Beds:</span> 10
                                        </p>
                                    </div>

                                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-500" />

                                    <div className="flex items-center gap-x-1">
                                        <PiBathtubFill className="text-primary" size={15} />
                                        <p className="text-sm text-neutral-700 font-medium">
                                            <span className="text-neutral-500">Baths:</span> 5
                                        </p>
                                    </div>

                                </div>
                            </div>
                            {/* Price */}
                            <div className="w-full flex items-center justify-between">
                                <p className="text-2xl text-neutral-800 font-bold">
                                    $120,000
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Second card */}
                    <div className="w-full h-auto p-1 space-y-3 group">
                        {/* background image with overlay contents */}
                        <div className="w-full aspect-video rounded-xl overflow-hidden border relative">
                            <img
                                src="https://cdn.pixabay.com/photo/2023/11/07/13/44/house-8372418_640.jpg"
                                alt="category img"
                                className="w-full h-full object-cover object-center rounded-xl group-hover:scale-110 ease-in-out duration-300"
                            />

                            {/* Overlay bg */}
                            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-10" />

                            {/* Overlay Photos content */}
                            <div className="w-fit h-fit absolute top-0 left-0 p-4 z-20">
                                <div className="border border-neutral-400 bg-neutral-50/20 py-0 px-1 rounded-md flex items-center justify-center gap-1.5">
                                    <FaCamera className="text-neutral-50" size={15} />
                                    <p className="text-neutral-50 text-base font-medium">3</p>
                                </div>
                            </div>

                            {/* Overlay Video content */}
                            <div className="w-fit h-fit absolute top-0 left-12 p-4 z-20">
                                <div className="border border-neutral-400 bg-neutral-50/20 py-0 px-1 rounded-md flex items-center justify-center gap-1.5">
                                    <FaVideo className="text-neutral-50" size={15} />
                                    <p className="text-neutral-50 text-base font-medium">1</p>
                                </div>
                            </div>

                            {/* Overlay type content */}
                            <div className="w-fit h-fit absolute top-0 right-0 p-4 z-20">
                                <p className="bg-red-500 py-0.5 px-2 text-sm text-neutral-50 font-normal rounded-lg flex items-center justify-center gap-1.5">
                                    for sale
                                </p>
                            </div>

                            {/* Overlay featured content */}
                            <div className="w-fit h-fit absolute top-0 right-20 p-4 z-20">
                                <p className="bg-primary py-0.5 px-2 text-sm text-neutral-50 font-normal rounded-lg flex items-center justify-center gap-1.5">
                                    Featured
                                </p>
                            </div>

                            {/* Overlay location content */}
                            <div className="w-fit h-fit absolute bottom-0 left-0 p-4 z-20">
                                <div className="w-full flex items-center justify-center gap-1.5">
                                    <LuMapPin className="text-neutral-50" size={15} />
                                    <p className="text-neutral-50 text-sm font-normal">
                                        New York NY 10001 United States of America
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Title, desc, and features section */}
                        <div className="w-full px-1 space-y-4">
                            <div className="space-y-1">
                                <Link to="/" className="text-xl text-neutral-800 font-semibold">
                                    Gokarna's luxurious villa
                                </Link>
                                <div className="w-full flex items-center gap-3">
                                    <div className="flex items-center gap-x-1">
                                        <FaRulerCombined className="text-primary" size={12} />
                                        <p className="text-sm text-neutral-700 font-medium">
                                            <span className="text-neutral-500">Sqft:</span> 1150
                                        </p>
                                    </div>

                                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-500" />

                                    <div className="flex items-center gap-x-1">
                                        <IoIosBed className="text-primary" size={15} />
                                        <p className="text-sm text-neutral-700 font-medium">
                                            <span className="text-neutral-500">Beds:</span> 10
                                        </p>
                                    </div>

                                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-500" />

                                    <div className="flex items-center gap-x-1">
                                        <PiBathtubFill className="text-primary" size={15} />
                                        <p className="text-sm text-neutral-700 font-medium">
                                            <span className="text-neutral-500">Baths:</span> 5
                                        </p>
                                    </div>

                                </div>
                            </div>
                            {/* Price */}
                            <div className="w-full flex items-center justify-between">
                                <p className="text-2xl text-neutral-800 font-bold">
                                    $120,000
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Second grid */}
                <div className="grid grid-cols-3 gap-8">

                    {/* First property */}
                    <div className="w-full h-auto p-1 space-y-3 group">
                        {/* background image with overlay contents */}
                        <div className="w-full aspect-[16/10] rounded-xl overflow-hidden border relative">
                            <img
                                src="https://cdn.pixabay.com/photo/2017/03/19/18/29/villa-2157268_640.jpg"
                                alt="category img"
                                className="w-full h-full object-cover object-center rounded-xl group-hover:scale-110 ease-in-out duration-300"
                            />

                            {/* Overlay bg */}
                            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-10" />

                            {/* Overlay Photos content */}
                            <div className="w-fit h-fit absolute top-0 left-0 p-4 z-20">
                                <div className="border border-neutral-400 bg-neutral-50/20 py-0 px-1 rounded-md flex items-center justify-center gap-1.5">
                                    <FaCamera className="text-neutral-50" size={15} />
                                    <p className="text-neutral-50 text-base font-medium">3</p>
                                </div>
                            </div>

                            {/* Overlay Video content */}
                            <div className="w-fit h-fit absolute top-0 left-12 p-4 z-20">
                                <div className="border border-neutral-400 bg-neutral-50/20 py-0 px-1 rounded-md flex items-center justify-center gap-1.5">
                                    <FaVideo className="text-neutral-50" size={15} />
                                    <p className="text-neutral-50 text-base font-medium">1</p>
                                </div>
                            </div>

                            {/* Overlay type content */}
                            <div className="w-fit h-fit absolute top-0 right-0 p-4 z-20">
                                <p className="bg-red-500 py-0.5 px-2 text-sm text-neutral-50 font-normal rounded-lg flex items-center justify-center gap-1.5">
                                    for sale
                                </p>
                            </div>

                            {/* Overlay location content */}
                            <div className="w-fit h-fit absolute bottom-0 left-0 p-4 z-20">
                                <div className="w-full flex items-center justify-center gap-1.5">
                                    <LuMapPin className="text-neutral-50" size={15} />
                                    <p className="text-neutral-50 text-sm font-normal">
                                        New York NY 10001 United States of America
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Title, desc, and features section */}
                        <div className="w-full px-1 space-y-4">
                            <div className="space-y-1">
                                <Link to="/" className="text-lg text-neutral-800 font-semibold">
                                    Gokarna's luxurious villa
                                </Link>
                                <div className="w-full flex items-center gap-2">
                                    <div className="flex items-center gap-x-1">
                                        <FaRulerCombined className="text-primary" size={10} />
                                        <p className="text-xs text-neutral-700 font-medium">
                                            <span className="text-neutral-500">Sqft:</span> 1150
                                        </p>
                                    </div>

                                    <div className="w-1 h-1 rounded-full bg-neutral-500" />

                                    <div className="flex items-center gap-x-1">
                                        <IoIosBed className="text-primary" size={12} />
                                        <p className="text-xs text-neutral-700 font-medium">
                                            <span className="text-neutral-500">Beds:</span> 10
                                        </p>
                                    </div>

                                    <div className="w-1 h-1 rounded-full bg-neutral-500" />

                                    <div className="flex items-center gap-x-1">
                                        <PiBathtubFill className="text-primary" size={12} />
                                        <p className="text-xs text-neutral-700 font-medium">
                                            <span className="text-neutral-500">Baths:</span> 5
                                        </p>
                                    </div>

                                </div>
                            </div>
                            {/* Price */}
                            <div className="w-full flex items-center justify-between">
                                <p className="text-xl text-neutral-800 font-bold">
                                    $120,000
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Second property */}
                    <div className="w-full h-auto p-1 space-y-3 group">
                        {/* background image with overlay contents */}
                        <div className="w-full aspect-[16/10] rounded-xl overflow-hidden border relative">
                            <img
                                src="https://cdn.pixabay.com/photo/2015/11/06/11/48/office-building-1026494_640.jpg"
                                alt="category img"
                                className="w-full h-full object-cover object-center rounded-xl group-hover:scale-110 ease-in-out duration-300"
                            />

                            {/* Overlay bg */}
                            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-10" />

                            {/* Overlay Photos content */}
                            <div className="w-fit h-fit absolute top-0 left-0 p-4 z-20">
                                <div className="border border-neutral-400 bg-neutral-50/20 py-0 px-1 rounded-md flex items-center justify-center gap-1.5">
                                    <FaCamera className="text-neutral-50" size={15} />
                                    <p className="text-neutral-50 text-base font-medium">3</p>
                                </div>
                            </div>

                            {/* Overlay Video content */}
                            <div className="w-fit h-fit absolute top-0 left-12 p-4 z-20">
                                <div className="border border-neutral-400 bg-neutral-50/20 py-0 px-1 rounded-md flex items-center justify-center gap-1.5">
                                    <FaVideo className="text-neutral-50" size={15} />
                                    <p className="text-neutral-50 text-base font-medium">1</p>
                                </div>
                            </div>

                            {/* Overlay type content */}
                            <div className="w-fit h-fit absolute top-0 right-0 p-4 z-20">
                                <p className="bg-red-500 py-0.5 px-2 text-sm text-neutral-50 font-normal rounded-lg flex items-center justify-center gap-1.5">
                                    for sale
                                </p>
                            </div>

                            {/* Overlay location content */}
                            <div className="w-fit h-fit absolute bottom-0 left-0 p-4 z-20">
                                <div className="w-full flex items-center justify-center gap-1.5">
                                    <LuMapPin className="text-neutral-50" size={15} />
                                    <p className="text-neutral-50 text-sm font-normal">
                                        New York NY 10001 United States of America
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Title, desc, and features section */}
                        <div className="w-full px-1 space-y-4">
                            <div className="space-y-1">
                                <Link to="/" className="text-lg text-neutral-800 font-semibold">
                                    Gokarna's luxurious villa
                                </Link>
                                <div className="w-full flex items-center gap-2">
                                    <div className="flex items-center gap-x-1">
                                        <FaRulerCombined className="text-primary" size={10} />
                                        <p className="text-xs text-neutral-700 font-medium">
                                            <span className="text-neutral-500">Sqft:</span> 1150
                                        </p>
                                    </div>

                                    <div className="w-1 h-1 rounded-full bg-neutral-500" />

                                    <div className="flex items-center gap-x-1">
                                        <IoIosBed className="text-primary" size={12} />
                                        <p className="text-xs text-neutral-700 font-medium">
                                            <span className="text-neutral-500">Beds:</span> 10
                                        </p>
                                    </div>

                                    <div className="w-1 h-1 rounded-full bg-neutral-500" />

                                    <div className="flex items-center gap-x-1">
                                        <PiBathtubFill className="text-primary" size={12} />
                                        <p className="text-xs text-neutral-700 font-medium">
                                            <span className="text-neutral-500">Baths:</span> 5
                                        </p>
                                    </div>

                                </div>
                            </div>
                            {/* Price */}
                            <div className="w-full flex items-center justify-between">
                                <p className="text-xl text-neutral-800 font-bold">
                                    $120,000
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Second property */}
                    <div className="w-full h-auto p-1 space-y-3 group">
                        {/* background image with overlay contents */}
                        <div className="w-full aspect-[16/10] rounded-xl overflow-hidden border relative">
                            <img
                                src="https://cdn.pixabay.com/photo/2012/11/14/19/54/villas-66229_640.jpg"
                                alt="category img"
                                className="w-full h-full object-cover object-center rounded-xl group-hover:scale-110 ease-in-out duration-300"
                            />

                            {/* Overlay bg */}
                            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-10" />

                            {/* Overlay Photos content */}
                            <div className="w-fit h-fit absolute top-0 left-0 p-4 z-20">
                                <div className="border border-neutral-400 bg-neutral-50/20 py-0 px-1 rounded-md flex items-center justify-center gap-1.5">
                                    <FaCamera className="text-neutral-50" size={15} />
                                    <p className="text-neutral-50 text-base font-medium">3</p>
                                </div>
                            </div>

                            {/* Overlay Video content */}
                            <div className="w-fit h-fit absolute top-0 left-12 p-4 z-20">
                                <div className="border border-neutral-400 bg-neutral-50/20 py-0 px-1 rounded-md flex items-center justify-center gap-1.5">
                                    <FaVideo className="text-neutral-50" size={15} />
                                    <p className="text-neutral-50 text-base font-medium">1</p>
                                </div>
                            </div>

                            {/* Overlay type content */}
                            <div className="w-fit h-fit absolute top-0 right-0 p-4 z-20">
                                <p className="bg-red-500 py-0.5 px-2 text-sm text-neutral-50 font-normal rounded-lg flex items-center justify-center gap-1.5">
                                    for sale
                                </p>
                            </div>

                            {/* Overlay location content */}
                            <div className="w-fit h-fit absolute bottom-0 left-0 p-4 z-20">
                                <div className="w-full flex items-center justify-center gap-1.5">
                                    <LuMapPin className="text-neutral-50" size={15} />
                                    <p className="text-neutral-50 text-sm font-normal">
                                        New York NY 10001 United States of America
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Title, desc, and features section */}
                        <div className="w-full px-1 space-y-4">
                            <div className="space-y-1">
                                <Link to="/" className="text-lg text-neutral-800 font-semibold">
                                    Gokarna's luxurious villa
                                </Link>
                                <div className="w-full flex items-center gap-2">
                                    <div className="flex items-center gap-x-1">
                                        <FaRulerCombined className="text-primary" size={10} />
                                        <p className="text-xs text-neutral-700 font-medium">
                                            <span className="text-neutral-500">Sqft:</span> 1150
                                        </p>
                                    </div>

                                    <div className="w-1 h-1 rounded-full bg-neutral-500" />

                                    <div className="flex items-center gap-x-1">
                                        <IoIosBed className="text-primary" size={12} />
                                        <p className="text-xs text-neutral-700 font-medium">
                                            <span className="text-neutral-500">Beds:</span> 10
                                        </p>
                                    </div>

                                    <div className="w-1 h-1 rounded-full bg-neutral-500" />

                                    <div className="flex items-center gap-x-1">
                                        <PiBathtubFill className="text-primary" size={12} />
                                        <p className="text-xs text-neutral-700 font-medium">
                                            <span className="text-neutral-500">Baths:</span> 5
                                        </p>
                                    </div>

                                </div>
                            </div>
                            {/* Price */}
                            <div className="w-full flex items-center justify-between">
                                <p className="text-xl text-neutral-800 font-bold">
                                    $120,000
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </RootLayout>
    )
}

export default FeaturedProperties