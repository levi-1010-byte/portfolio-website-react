import React, { useState } from 'react';

export const ServiceCard = ({ serviceName, description, reviews, details, color, size, quantity, price, buttonText, imageUrl , imagePosition = 'left',}) => {
  const [selectedLink, setSelectedLink] = useState('description');
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };
  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };
  const isImageOnLeft = imagePosition === 'left';


  return (
    <>
      <section className=" relative text-gray-600 body-font overflow-hidden z-30">
        <div className="container px-5 py-24 mx-auto">
        <div className={`lg:w-4/5 mx-auto flex flex-wrap ${isImageOnLeft ? 'flex-row-reverse' : 'flex-row'}`}>
          <div className={`lg:w-1/2 w-full lg:pr-10 lg:pl-10 lg:py-6 mb-6 lg:mb-0 ${isImageOnLeft ? 'lg:pl-10' : 'lg:pr-10'}`}>
       
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4 font-Montserrat">{serviceName}</h1>
              <div className="flex mb-4">
                <div
                  className={`flex-grow cursor-pointer ${selectedLink === 'description' ? 'text-purple-500 border-b-2 border-purple-500' : 'border-b-2 border-gray-300'} py-2 text-lg px-1`}
                  onClick={() => handleLinkClick('description')}
                >
                  Description
                </div>
                <div
                  className={`flex-grow cursor-pointer ${selectedLink === 'reviews' ? 'text-purple-500 border-b-2 border-purple-500' : 'border-b-2 border-gray-300'} py-2 text-lg px-1`}
                  onClick={() => handleLinkClick('reviews')}
                >
                  Reviews
                </div>
                <div
                  className={`flex-grow cursor-pointer ${selectedLink === 'details' ? 'text-purple-500 border-b-2 border-purple-500' : 'border-b-2 border-gray-300'} py-2 text-lg px-1`}
                  onClick={() => handleLinkClick('details')}
                >
                  Details
                </div>
              </div>
              {selectedLink === 'description' && (
                <p className="leading-relaxed mb-4">{description}</p>
              )}
              {selectedLink === 'reviews' && (
                <div className="bg-gray-950 flex justify-center items-center w-full ">
                  {/* Render reviews content using the 'reviews' prop */}
                  {reviews.map((review, index) => (
                    <div key={index} className="md:w-full w-full px-10 flex flex-col gap-2 p-2 bg-gray-800 text-white">
                      <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-4 bg-gray-700 p-4">
                          <div className="flex justify justify-between">
                            <div className="flex gap-2">
                              <div className="w-7 h-7 text-center rounded-full bg-red-500">J</div>
                              <span>{review.author}</span>
                            </div>
                            <div className="flex p-1 gap-1 text-orange-300">
                              {/* Render star icons based on review.rating */}
                              {Array.from({ length: review.rating }).map((_, i) => (
                                <ion-icon key={i} name="star"></ion-icon>
                              ))}
                            </div>
                          </div>
                          <div>{review.comment}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {selectedLink === 'details' && (
                <div>
                  
                  <p>{details}</p>
                  {/* Add your details content here */}
                </div>
              )}
             
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">{price}</span>
                <button
                className="flex ml-auto text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded"
                type="button"
                onClick={handleModalToggle}  // Add this line to handle modal toggle
              >
                  Get
                </button>
                



                
              </div>
            </div>
            <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={imageUrl} />
          </div>
        </div>
      </section>
      {isModalOpen && (<div   className=" overflow-y-auto overflow-x-hidden fixed inset-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%)] max-h-full">
    <div className="relative p-4 w-full max-w-md max-h-full">
    
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
           
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="font-Montserrat text-lg font-semibold text-gray-900 dark:text-white">
                    Notify your Requirement about {serviceName}
                </h3>
                <button type="button" 
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" 
                onClick={handleModalToggle}>
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only" >Close modal</span>
                </button>
            </div>
           
            <form className="p-4 md:p-5">
                <div className="grid gap-4 mb-4 grid-cols-2">
                    <div className="col-span-2">
                        <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder={serviceName} disabled/>
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                        <label for="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                        <input type="number" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder={price} disabled/>
                    </div>
                    
                    <div className="col-span-2">
                        <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Requirement in Breif</label>
                        <textarea id="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write product description here"></textarea>                    
                    </div>
                    <div className="col-span-2">
                        <label for="description" className="font-Montserrat block mb-2 text-sm font-medium text-gray-900 dark:text-white">Send me your Requirement and i will reach you as soon as possible </label>
                       
                    </div>
                </div>
                <button type="submit" className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                   
                    Notify me
                </button>
            </form>
        </div>
    </div>
</div> )
}
    </>
  );
};
