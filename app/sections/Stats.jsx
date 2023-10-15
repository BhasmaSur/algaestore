'use client'

import { usePathname, useRouter } from 'next/navigation';


const Stats = ({statsObject}) => {
  
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (bos) => {
    console.log("option from static", bos);

    router.push(pathname + '/allList?selection=' + bos)
  }


  return (
    <>
      <div className="text-center py-4 bg-gray-100 dark:bg-gray-900 mt-20">
        <p className="text-dark text-lg mb-4 lg:text-5xl lg:mb-20">{statsObject.stats}:</p>
        <div className="flex items-center">
          <div className="container max-w-1 px-0 lg:px-5 mx-1 my-28">
            <div className="grid gap-7 grid-cols-1 lg:grid-cols-1">
              <div className="p-2 lg:p-5 bg-white rounded">
                <div className="text-base text-black lg:text-2xl">
                  {statsObject.sellers}
                </div>
                <div className="flex items-center pt-1">
                  <div className="text-2xl font-bold text-black">
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
                      {statsObject.sellersPara}
                    </div>
                    <button onClick = {() => {
                      handleClick("Sellers")
                    }}  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10">
                      {statsObject.exploreAllSellers}
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-5 bg-white rounded">
                <div className="text-base text-black lg:text-2xl">
                  {statsObject.buyers}
                </div>
                <div className="flex items-center pt-1">
                  <div className="text-2xl font-bold text-black">
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
                <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-2 order-last lg:order-first">
                  <div className="flex-row items-left pt-1">
                    <div>
                      {statsObject.buyersPara}
                    </div>
                    <button onClick = {() => {
                      handleClick("Buyers")
                    }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10">
                      {statsObject.exploreAllBuyers}
                    </button>
                  </div>
                  <div className="bg-indigo-300 order-first lg:order-last">
                    <img className="object-fill" src="farmers.jpg" />
                  </div>
                </div>
              </div>
              <div className="p-5 bg-white rounded">
                <div className="text-base text-black lg:text-2xl">
                  {statsObject.products}
                </div>
                <div className="flex items-center pt-1">
                  <div className="text-2xl font-bold text-black">
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
                      {statsObject.productsPara}
                    </div>
                    <button onClick = {
                      () => {
                        router.push('/store')
                      }
                    } className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10">
                      {statsObject.exploreAllProducts}
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
