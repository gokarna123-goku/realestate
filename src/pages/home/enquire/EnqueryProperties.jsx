import React from 'react'
import RootLayout from '../../../layout/RootLayout'

const EnqueryProperties = () => {
    return (
        <RootLayout className={"py-28 flex items-center justify-center flex-col space-y-12 bg-neutral-400/20"}>
            {/* Image or logo */}
            {/* <div className="w-full flex items-center justify-center">
                <img
                    src="https://cdn.pixabay.com/photo/2016/02/03/08/31/hands-1176674_640.jpg"
                    alt="category img"
                    className="w-64 aspect-video object-cover object-center rounded-lg shadow-md group-hover:scale-110 ease-in-out duration-300"
                />
            </div> */}

            <div className="space-y-10 text-center">
                <div className="space-y-2">
                    {/* Looking for a property to buy or rent? */}
                    <h1 className="text-4xl text-neutral-950 font-bold">
                        {/* Looking for a property to buy or rent? */}
                        Ready to Find Your Perfect Real Estate?
                    </h1>

                    {/* Don’t take a stress and leave the rest to our experts. */}
                    <p className="text-lg text-neutral-800 font-normal">
                        {/* Don’t take a stress and leave the rest to our experts. */}
                        Let our experienced agents help you navigate the real estate market and <br /> find the property that's right for you.
                    </p>
                </div>

                {/* Button section */}
                <div className="w-full flex items-center justify-center mt-6">
                    <button className="bg-primary text-neutral-50 text-lg font-medium px-10 py-3 rounded-full hover:bg-neutral-950 hover:text-neutral-50 ease-in-out duration-300">
                        Make an Enquire Now
                    </button>
                </div>

            </div>

        </RootLayout>
    )
}

export default EnqueryProperties