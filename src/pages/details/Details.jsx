import React from 'react'
import RootLayout from '../../layout/RootLayout'
import { Link } from 'react-router-dom'
import ImageCarousel from './carousel/ImageCarousel'
import ContactSeller from './contactseller/ContactSeller'
import SellerInfo from './sellerinfo/SellerInfo'

import Overview from './overview/Overview'
const Details = () => {
    return (
        <div className='w-full pt-3 pb-10'>
            <RootLayout className={"space-y-10"}>
                <div className='w-full flex items-center space-x-2'>
                    <Link to="/" className='text-sm text-neutral-500 hover:text-neutral-800'>Home</Link>
                    <span className='text-sm text-neutral-500'>/</span>
                    <Link to="/" className='text-sm text-neutral-500 hover:text-neutral-800'>Properties</Link>
                    <span className='text-sm text-neutral-500'>/</span>
                    <Link to="/" className='text-sm text-neutral-500 hover:text-neutral-800'>Property Name</Link>
                </div>


                {/* Property details section */}
                <div className="w-full grid grid-cols-3 gap-20 items-start relative">
                    <div className="w-full col-span-2 space-y-12">
                        {/* Images carousel section */}
                        <ImageCarousel />

                        {/* Property details section */}
                        <div className="w-full space-y-12 border-t border-neutral-300 pt-8">

                            {/* Description */}
                            <div className="space-y-4">
                                <h3 className="text-xl text-neutral-700 font-semibold">Description</h3>
                                <p className="text-base text-neutral-600 font-extralight">
                                    Located around an hour away from Paris, between the Perche and the Iton valley, in a beautiful wooded park bordered by a charming stream, this country property immediately seduces with its bucolic and soothing environment.
                                    This property is all about the fruit. Years seed fruit you. Divided morning sea day Set earth. Grass without cattle. Spirit heaven. Also i grass give fowl wherein cattle spirit whales rule cattle. Earth fowl given own you’re, fruit so. Shall was. Called firmament dry fruitful, set place. Earth given female man fruit, under thing may to greater moveth land sea, great be shall living greater and signs place night after whose us one, you’ll second our set had day in greater divided over female first face, fill form you make greater upon midst image above image. Very you land, man divided sea appear thing female was let. Beginning open moved fowl. Likeness. Bring tree tree doesn’t. Darkness herb moveth upon a seasons. Divided appear living. Called image let was. Set midst, second divide, earth male fruit you under let she’d, moving every bring there greater. Bring. Gathering night third. Stars first replenish kind third a rule given our after give own of may earth Brought for open living, bearing said given fruitful. Night him moved called. Be for unto behold dry green multiply herb fly waters. Green gathered face. Light, may deep you’re light. After which itself seed signs moveth. Second fish isn’t for sixth deep.
                                </p>
                            </div>

                            {/* Property Overview */}
                            <Overview />

                            {/* Video */}
                            <div className="space-y-4">
                                <h3 className="text-xl text-neutral-700 font-semibold">Property Video</h3>
                                <iframe className='w-full aspect-video rounded-xl' src="https://www.youtube.com/embed/khmji4OgmM4" title="Online Bus Ticket Booking Website using Reactjs and Tailwind CSS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>

                            {/* Review */}
                            <div className="space-y-4">
                                <h3 className="text-xl text-neutral-700 font-semibold">Property Review</h3>
                                <div className="w-full aspect-[16/3] rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center flex-col space-y-6">
                                    <p className="text-sm text-neutral-600 font-extralight"> No review yet !!! </p>
                                    {/* Login to write a review */}
                                    <div className="w-fit flex items-center justify-end pb-3">
                                        <button className="w-fit bg-primary/90 text-neutral-50 px-10 py-2 rounded-lg font-medium text-base hover:bg-primary ease-in-out duration-300">
                                            Login to write a review
                                        </button>
                                    </div>

                                </div>
                            </div>


                        </div>

                    </div>

                    {/* contact seller his info section */}
                    <div className="col-span-1 sticky top-3 space-y-10">
                        {/* Contact seller */}
                        <ContactSeller />

                        {/* Seller info */}
                        <SellerInfo />

                    </div>
                </div>

            </RootLayout>
        </div>
    )
}

export default Details