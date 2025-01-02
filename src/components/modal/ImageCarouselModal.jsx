import React, { useState } from 'react';

const ImageCarouselModal = ({ isOpen, closeModal, images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Don't render the modal if it's closed
    if (!isOpen) return null;

    // Function to handle the left navigation
    const goToPreviousImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    // Function to handle the right navigation
    const goToNextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="absolute top-0 left-0 inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="relative bg-neutral-900/30 rounded-lg shadow-lg w-full p-6">
                <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
                >
                    &times;
                </button>

                {/* Carousel container */}
                <div className="relative">
                    <img
                        src={images[currentImageIndex]}
                        alt={`Property ${currentImageIndex + 1}`}
                        className="w-full h-64 object-cover rounded-lg"
                    />

                    {/* Left Navigation Button */}
                    <button
                        onClick={goToPreviousImage}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
                    >
                        &#8592;
                    </button>

                    {/* Right Navigation Button */}
                    <button
                        onClick={goToNextImage}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
                    >
                        &#8594;
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ImageCarouselModal