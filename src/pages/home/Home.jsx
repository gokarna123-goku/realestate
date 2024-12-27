import React from 'react'
import Hero from './hero/Hero'
import PropertyRecommendation from './recommended/PropertyRecommendation'
import FeaturedProperties from './featured/FeaturedProperties'
import EnqueryProperties from './enquire/EnqueryProperties'
import Agents from './agents/Agents'

const Home = () => {
    return (
        <div className='w-full min-h-[calc(100vh-8ch)] flex flex-col space-y-16 relative'>
            {/* Hero section */}
            <Hero />

            {/* Recommended section */}
            <PropertyRecommendation />

            {/* Featured Properties */}
            <FeaturedProperties />

            {/* Want to sell or rent / Enquire */}
            <EnqueryProperties />

            {/* Property agents */}
            <Agents />

            {/* extra div */}
            <div className="w-full py-6 bg-neutral-600">
                j
            </div>

        </div>
    )
}

export default Home