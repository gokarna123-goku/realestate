import React from 'react';
import { FaTag, FaDoorOpen, FaBath, FaRulerCombined, FaWifi } from 'react-icons/fa';
import { RiBuildingFill } from 'react-icons/ri';
import { IoIosBed } from 'react-icons/io';
import { MdPointOfSale } from 'react-icons/md';
import { LuCircleParking } from 'react-icons/lu';
import { PiElevatorFill } from 'react-icons/pi';

const propertyData = [
    { id: 1, icon: <FaTag />, title: "ID NO.", value: "#G1234" },
    { id: 2, icon: <RiBuildingFill />, title: "Type", value: "Residential" },
    { id: 3, icon: <FaDoorOpen />, title: "Rooms", value: "10" },
    { id: 4, icon: <IoIosBed />, title: "Bedrooms", value: "12" },
    { id: 5, icon: <FaBath />, title: "Bath", value: "5" },
    { id: 6, icon: <MdPointOfSale />, title: "Purpose", value: "For Sale" },
    { id: 7, icon: <FaRulerCombined />, title: "Sqft", value: "3256" },
    { id: 8, icon: <LuCircleParking />, title: "Parking", value: "Yes" },
    { id: 9, icon: <PiElevatorFill />, title: "Elevator", value: "No" },
    { id: 10, icon: <FaWifi />, title: "Internet", value: "Yes" },
];

const Overview = () => {
    return (
        <div className="space-y-4">
            <h3 className="text-xl text-neutral-700 font-semibold">Overview</h3>
            <div className="w-full border border-neutral-300 rounded-xl p-10 flex items-center gap-12 flex-wrap">
                {propertyData.map(({ id, icon, title, value }) => (
                    <div key={id} className="flex items-center gap-x-2">
                        <div className="w-11 h-11 text-2xl text-primary flex items-center justify-center border border-neutral-600/60 rounded-lg">
                            {icon}
                        </div>
                        <div className='space-y-0.5'>
                            <h3 className="text-xs text-neutral-700 font-semibold">{title}</h3>
                            <p className="text-xs text-neutral-700 font-normal">{value}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Overview;
