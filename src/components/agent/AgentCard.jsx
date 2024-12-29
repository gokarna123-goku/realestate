import React from 'react'
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const AgentCard = ({ img, name, propertySold, rating }) => {
    return (
        <div className="w-full p-4 space-y-6 rounded-xl overflow-hidden border border-neutral-300 shadow-sm">
            <div className="w-full flex items-center gap-3">
                <img
                    src={img}
                    alt="category img"
                    className="w-16 h-16 object-cover object-center rounded-full"
                />

                <div className="space-y-0">
                    <h3 className="text-lg text-neutral-800 font-semibold">
                        {name}
                    </h3>

                    <p className="text-xs text-neutral-800 font-normal">
                        {propertySold} Properties Sold
                    </p>
                </div>
            </div>

            {/* Rating and Contact button */}
            <div className="w-full flex items-center justify-between gap-12">
                {/* rating */}
                <div className="flex items-center gap-1 w-fit px-3 py-1 bg-yellow-200 rounded-full">
                    <p className="text-sm text-neutral-800 font-semibold">
                        {rating}
                    </p>
                    <FaStar className="text-yellow-600 pb-0.5" size={15} />
                </div>

                {/* contact button */}
                <Link
                    to="/agents"
                    className="flex-1 bg-transparent border border-primary text-primary text-base font-medium px-4 py-1 flex items-center justify-center gap-2 hover:border-primary rounded-full ease-in-out duration-300"
                >
                    Contact
                </Link>
            </div>
        </div>
    )
}

export default AgentCard