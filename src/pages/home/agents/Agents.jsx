import React from 'react'
import RootLayout from '../../../layout/RootLayout'
import { FaChevronRight, FaStar } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import AgentCard from '../../../components/agent/AgentCard'

const Agents = () => {
    return (
        <RootLayout className={"space-y-5"}>
            <div className="w-full flex items-center justify-between">
                <h2 className="text-2xl text-neutral-800 font-semibold">
                    Our Agents
                </h2>

                {/* Custom Navigation Buttons */}
                <Link to="/agents" className="flex items-center gap-x-1">
                    View All
                    <FaChevronRight className="text-neutral-800" size={15} />
                </Link>
            </div>

            {/* Agents cards */}
            <div className="grid grid-cols-4 gap-10">

                <AgentCard
                    img="https://cdn.pixabay.com/photo/2024/05/26/11/40/business-8788632_640.jpg"
                    name="John Doe"
                    propertySold="200+ Properties Sold"
                    rating="4.5"
                />

                <AgentCard
                    img="https://cdn.pixabay.com/photo/2024/05/26/11/33/business-8788601_640.jpg"
                    name="John Doe"
                    propertySold="200+ Properties Sold"
                    rating="4.5"
                />

                <AgentCard
                    img="https://cdn.pixabay.com/photo/2024/05/26/11/40/business-8788636_640.jpg"
                    name="John Doe"
                    propertySold="200+ Properties Sold"
                    rating="4.5"
                />

                <AgentCard
                    img="https://cdn.pixabay.com/photo/2024/05/26/11/40/business-8788628_640.jpg"
                    name="John Doe"
                    propertySold="200+ Properties Sold"
                    rating="4.5"
                />

            </div>
        </RootLayout>
    )
}

export default Agents