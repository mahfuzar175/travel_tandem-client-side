import React from 'react';

const Reviews = () => {
  return (
    <section className="my-8 dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex flex-col items-center mx-auto mb-4">
        <h1 className="p-4 text-4xl font-semibold leading text-center">
          What our customers are saying about their travel experiences
        </h1>
      </div>
      <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-center lg:px-10">
        {/* Review Card 1 */}
        <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
          <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
            <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
              "Our trip to Bali was magical! The beaches, the culture, and the people made our
              experience unforgettable. Highly recommend this tour company!"
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-400 dark:text-gray-900">
            <img
              src="https://source.unsplash.com/50x50/?portrait?1"
              alt=""
              className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-700"
            />
            <p className="text-xl font-semibold leading">Alice Johnson</p>
            <p className="text-sm uppercase">Travel Enthusiast</p>
          </div>
        </div>
        
        {/* Review Card 2 */}
        <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
          <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
            <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
              "Kyoto was a dream come true! The ancient temples, cherry blossoms, and traditional
              tea ceremonies made our journey to Japan incredibly special."
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-400 dark:text-gray-900">
            <img
              src="https://source.unsplash.com/50x50/?portrait?2"
              alt=""
              className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-700"
            />
            <p className="text-xl font-semibold leading">David Lee</p>
            <p className="text-sm uppercase">Adventure Seeker</p>
          </div>
        </div>
        
        {/* Review Card 3 */}
        <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
          <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
            <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
              "Our safari in Serengeti National Park was beyond words. Witnessing the wildlife up
              close was thrilling. A big thanks to our tour guides for the amazing experience!"
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-400 dark:text-gray-900">
            <img
              src="https://source.unsplash.com/50x50/?portrait?3"
              alt=""
              className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-700"
            />
            <p className="text-xl font-semibold leading">Emily Roberts</p>
            <p className="text-sm uppercase">Nature Lover</p>
          </div>
        </div>
        
        {/* Review Card 4 */}
        <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
          <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
            <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
              "Lapland's winter wonderland exceeded our expectations. The Northern Lights, husky
              sledding, and cozy cabins made it a perfect getaway. Truly magical!"
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:text-gray-900">
            <img
              src="https://source.unsplash.com/50x50/?portrait?4"
              alt=""
              className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-700"
            />
            <p className="text-xl font-semibold leading">Michael Clark</p>
            <p className="text-sm uppercase">Winter Explorer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
