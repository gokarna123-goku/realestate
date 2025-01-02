import React from 'react'

const Photos = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const propertyImages = [
        'https://cdn.pixabay.com/photo/2022/07/09/05/23/house-7310177_640.jpg',
        'https://cdn.pixabay.com/photo/2023/11/07/13/44/house-8372418_640.jpg',
        'https://cdn.pixabay.com/photo/2017/03/19/18/29/villa-2157268_640.jpg',
        'https://cdn.pixabay.com/photo/2015/11/06/11/48/office-building-1026494_640.jpg',
        'https://cdn.pixabay.com/photo/2012/11/14/19/54/villas-66229_640.jpg',
    ];

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="p-8">
            <h1 className="text-2xl font-semibold mb-4">Property Details</h1>

            {/* Thumbnail Image */}
            <div className="mb-4">
                <img
                    src={propertyImages[0]} // Display the first image as thumbnail
                    alt="Property Thumbnail"
                    className="w-full h-64 object-cover rounded-lg cursor-pointer"
                    onClick={openModal}
                />
            </div>

            {/* Modal Component */}
            <Modal isOpen={isModalOpen} closeModal={closeModal} images={propertyImages} />
        </div>
    )
}

export default Photos