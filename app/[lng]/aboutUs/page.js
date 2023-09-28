'use client';
import { useRouter } from 'next/navigation';
import { ABOUT_US_DETAILS } from '../../constants/aboutUsDetails';

const Page = () => {
  const router = useRouter();
  const redirectToRegister = () => {
    router.push('/signup');
  };
  return (
    <div className="text-center bg-gray-100 min-h-screen p-4 bg-[url('/bg357.jpg')]">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-semibold mb-4">About Us</h1>
        <p className="text-gray-600">
          Are you in the business of seaweed cultivation, processing, or
          distribution? Look no further. Algae Store is your one-stop digital
          destination, revolutionizing the way seaweed buyers and sellers
          connect, collaborate, and thrive.
        </p>
        <br />

        {ABOUT_US_DETAILS.map((aboutUs, index) => {
          return (
            <>
              <div className="text-left">
                <span className="font-extrabold text-dark">
                  {index + 1}. {aboutUs.heading} :
                </span>{' '}
                {aboutUs.textMessage}
              </div>
              <br />
            </>
          );
        })}
        <p className="text-gray-600">
          Join Algae Store today and become a part of the future of the seaweed
          industry. Empower your business, connect with trusted partners, and
          help shape a more sustainable and prosperous seaweed sector. Together,
          we're cultivating the sea's potential.
        </p>
        <button
          onClick={redirectToRegister}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10"
        >
          Register Here
        </button>
      </div>
    </div>
  );
};

export default Page;
