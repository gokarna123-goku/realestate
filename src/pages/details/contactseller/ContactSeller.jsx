import React from 'react'
import Input from '../../../components/input/Input'

const ContactSeller = () => {
    return (
        <div className="w-full bg-neutral-50 rounded-xl shadow border border-neutral-300 py-6 px-8 space-y-9">
            <h3 className="text-xl text-neutral-800 font-medium">Contact Seller</h3>

            {/* form */}
            <div className="w-full space-y-7">
                <Input type={"text"} placeholder="Enter your name" />
                <Input type={"email"} placeholder="Enter your email" />
                <Input type={"text"} placeholder="Enter your phone number" />

                <textarea placeholder="Enter your message" className='w-full bg-transparent rounded-xl h-28 px-4 py-3 border border-neutral-300 text-neutral-700 placeholder:text-neutral-500 font-normal text-base focus:border-primary/70 focus:bg-primary/[.03] outline-none ease-in-out duration-300 resize-none'></textarea>

                {/* button */}
                <div className="w-full flex items-center justify-end pb-3">
                    <button className="w-full bg-primary/90 text-neutral-50 px-8 py-3 rounded-xl font-medium text-base hover:bg-primary ease-in-out duration-300">Contact Seller</button>
                </div>
            </div>
        </div>
    )
}

export default ContactSeller