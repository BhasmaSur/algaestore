'use client';
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { useRouter } from 'next/navigation';
import { getUserDetailsFromCookie } from '../../services/auth';
import httpService from '../../services/httpService';
import { API, CONTROLLERS, METHODS } from '../../constants/apiDetails';
import { removeAllCookies } from '../../utils/loginUtils';
// Dummy order history data
const dummyOrderHistory = [
  { id: 1, date: '2023-08-01', total: 100 },
  { id: 2, date: '2023-08-05', total: 150 },
  // Add more data as needed
];

const profiledata = {
  name: 'Piyush Mishra',
  email: 'pm@gmail.com',
  contact: '+917007856878',
  address: 'Benajhabar, kanpur 208001',
  wishlist: 3,
  totalorders: 4,
  farmer: 2,
  reviewsgiven: 0,
  orderdetails: [
    {
      name: 'Seaweed Snack',
      brand: 'Ocean Delights',
      description:
        'A delicious and nutritious seaweed snack with a hint of sea salt.',
      price: 4.99,
      weight: '50g',
      ingredients: ['Organic Seaweed', 'Sunflower Oil', 'Sea Salt'],
      image_url:
        'https://www.salamat.gr/image/cache/catalog/GEORGINA%20ESHOP/04-03-22/EE11002-1080x1080.png',
    },
    {
      name: 'Oceanic Nori Sheets',
      brand: 'SeaweedCo',
      description:
        'Premium seaweed nori sheets for making sushi rolls and wraps.',
      price: 9.99,
      weight: '25 sheets',
      ingredients: ['Seaweed Nori'],
      image_url:
        'https://cdn.shopify.com/s/files/1/0579/3149/7654/products/OCE8_large_a8180de7-daeb-4869-b1fb-6269f3a537e5.jpg?v=1674656643',
    },
    {
      name: 'Seaweed Crisps',
      brand: 'SeaCrunch',
      description: 'Crunchy seaweed crisps seasoned with a blend of spices.',
      price: 3.49,
      weight: '30g',
      ingredients: ['Seaweed', 'Canola Oil', 'Spices'],
      image_url:
        'https://cdn.shopify.com/s/files/1/0522/0125/9183/products/634158955907_T1.jpg?v=1665569729',
    },
    {
      name: 'Sea Veggie Mix',
      brand: 'SeaNutri',
      description:
        'A mix of different seaweed varieties for a healthy and nutrient-rich addition to meals.',
      price: 6.99,
      weight: '100g',
      ingredients: ['Seaweed Mix (Dulse, Nori, Wakame)', 'Sea Lettuce'],
      image_url:
        'https://www.doorsteporganics.com.au/image/optimised/large/Sea-Vegetables-Toated-Fine-Cut-Nori-Nutritionist-Choice-25g.jpg',
    },
  ],
};

const Profile = () => {
  // State for edit profile section
  const [userProfileData, setUserProfileData] = useState(null);
  const router = useRouter();
  useEffect(() => {
    if (!userProfileData) {
      const userDetails = getUserDetailsFromCookie();
      if (userDetails) {
        httpService(
          CONTROLLERS.getBuyerProfile,
          METHODS.post,
          {
            userId: userDetails.emailId,
          },
          API
        ).then((res) => {
          if (res) {
            console.log(res.data);
            setUserProfileData(res.data);
          }
        });
      } else {
        router.push('/buyer-profile');
      }
    }
  }, []);

  const logout = () =>{
    removeAllCookies()
    router.push('/');
  }

  const redirectTo = () => {
    router.push('/edit-buyer-profile');
  };

  return (
    <>
      {userProfileData && (
        <div>
          <div class="p-16">
            <div class="p-8 bg-white shadow mt-24">
              <div class="grid grid-cols-1 md:grid-cols-3">
                <div class="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
                  <div>
                    <p class="font-bold text-gray-700 text-xl">
                      {userProfileData.orderHistory.length}
                    </p>
                    <p class="text-gray-400">Orders</p>
                  </div>
                  <div>
                    <p class="font-bold text-gray-700 text-xl">
                      {userProfileData.wishlist.length}
                    </p>
                    <p class="text-gray-400">Wishlist</p>
                  </div>
                  <div>
                    <p class="font-bold text-gray-700 text-xl">
                      {profiledata.reviewsgiven}
                    </p>
                    <p class="text-gray-400">Reviews</p>
                  </div>{' '}
                </div>{' '}
                <div class="relative">
                  <div class="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                    <img
                      alt="farmer image"
                      src={userProfileData.image_url}
                      class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                      style={{ width: '150px', height: '150px' }}
                    />
                  </div>
                </div>
                <div class="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
                  <button onClick={redirectTo} class="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                    EDIT PROFILE
                  </button>
                  <button onClick={logout} class="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                    LOGOUT
                  </button>
                </div>
              </div>
              <div class="mt-20 text-center border-b pb-12">
                <h1 class="text-4xl font-medium text-gray-700">
                  {userProfileData.name}{' '}
                  <span class="font-light text-gray-500">27</span>
                </h1>
                <p class="font-light text-gray-600 mt-3">
                  {userProfileData.city}
                </p>
                <p class="mt-8 text-gray-500">
                  Email - {userProfileData.username}
                </p>
                <p class="mt-2 text-gray-500">{userProfileData.address}</p>
              </div>

              <div className="flex flex-col justify-center">
                <div className="mt-12 text-center">
                  <h2 className="text-3xl font-semibold text-gray-700">
                    Wishlist
                  </h2>
                </div>

                <div class="mt-12 flex flex-col ">
                  <div class="w-full lg:w-9/12 px-4 m-auto">
                    <div className="flex flex-nowrap overflow-x-scroll justify-center">
                      {userProfileData?.wishlist?.map((item, index) => {
                        return (
                          <div class="flex-none w-64 mr-4 mb-6">
                            <ProductCard {...item} />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
