const Stats = () => {
  return (
    <>
      <div className="text-center py-4 bg-gray-100 dark:bg-gray-900 mt-20">
        <p className="text-dark text-lg mb-4 lg:text-5xl lg:mb-20">Stats:</p>
        <div className="flex items-center">
          <div className="container max-w-1 px-0 lg:px-5 mx-1 my-28">
            <div className="grid gap-7 grid-cols-1 lg:grid-cols-1">
              <div className="p-2 lg:p-5 bg-white rounded">
                <div className="text-base text-dark lg:text-2xl dark:text-gray-300">
                  Sellers
                </div>
                <div className="flex items-center pt-1">
                  <div className="text-2xl font-bold text-dark dark:text-gray-100">
                    200
                  </div>
                  <span className="flex items-center px-2 py-0.5 mx-2 text-sm rounded-full text-green-600 bg-green-100 dark:bg-green-900 dark:text-emerald-400">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18 15L12 9L6 15"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>1.8%</span>
                  </span>
                </div>
                <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-2">
                  <div className="bg-indigo-300">
                    <img className="object-fill" src="buyer.jpg" />
                  </div>
                  <div className="flex-row items-left pt-1">
                    <div>
                      For sellers, algae present a burgeoning market with a wide
                      array of products. From nutritional supplements and
                      cosmetics to biofuels and pharmaceuticals, the demand for
                      algae-derived goods continues to grow. Capitalizing on
                      this burgeoning demand can be a lucrative venture for
                      entrepreneurs and distributors alike.
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10">
                      Explore All Sellers
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-5 bg-white rounded">
                <div className="text-base text-dark lg:text-2xl dark:text-gray-300">
                  Buyers
                </div>
                <div className="flex items-center pt-1">
                  <div className="text-2xl font-bold text-dark dark:text-gray-100">
                    10
                  </div>
                  <span className="flex items-center px-2 py-0.5 mx-2 text-sm rounded-full text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-300">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>2.5%</span>
                  </span>
                </div>
                <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-2">
                  <div className="flex-row items-left pt-1">
                    <div>
                      Seaweed buyers, explore the ocean's bounty! Seaweed offers
                      a world of culinary delights, health benefits, and
                      sustainable alternatives. Dive into a diverse selection of
                      seaweed products for an eco-friendly and delicious
                      addition to your kitchen. Embrace the sea's natural
                      goodness today!
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10">
                      Explore All Buyers
                    </button>
                  </div>
                  <div className="bg-indigo-300">
                    <img className="object-fill" src="farmers.jpg" />
                  </div>
                </div>
              </div>
              <div className="p-5 bg-white rounded">
                <div className="text-base text-dark lg:text-2xl dark:text-gray-300">
                  Products
                </div>
                <div className="flex items-center pt-1">
                  <div className="text-2xl font-bold text-dark dark:text-gray-100">
                    10
                  </div>
                  <span className="flex items-center px-2 py-0.5 mx-2 text-sm rounded-full text-green-600 bg-green-100 dark:bg-green-900 dark:text-emerald-400">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18 15L12 9L6 15"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>5.2%</span>
                  </span>
                </div>
                <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-2">
                  <div className="bg-indigo-300">
                    <img className="object-fill" src="products.jpg" />
                  </div>
                  <div className="flex-row items-left pt-1">
                    <div>
                      Discover the wonders of seaweed products. From savory
                      snacks to skincare essentials, seaweed's versatility knows
                      no bounds. Packed with nutrients, it promotes health and
                      sustainability. Dive into a world of flavor, wellness, and
                      eco-conscious choices with seaweed-based goods. Unlock the
                      potential of the ocean's treasure!
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10">
                      Explore All Products
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
