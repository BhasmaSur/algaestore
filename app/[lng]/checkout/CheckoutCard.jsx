import React from 'react';
<<<<<<< HEAD
import { StarIcon } from "@heroicons/react/24/solid";
=======
import { StarIcon } from '@heroicons/react/24/solid';
>>>>>>> aa538517e5fcc6460ea866fd8df92b825adbd2dd
import { useDispatch } from 'react-redux';
import { removeItem } from '../../utils/cartSlice';

const CheckourCard = ({ poduct_id, price, image_url, name }) => {
<<<<<<< HEAD
    return (
        <div className="cursor-pointer group relative card border-[1px] border-[#dbdbdb] rounded-[12px] overflow-hidden bg-white">
            <img
                src={image_url}
                width={600}
                height={200}
                alt="product"
                className="mx-auto w-full md:w-[15rem] h-[15rem] object-cover"
                loading="lazy"
            />
            <div className="card-body p-9 ">
                {name}
                <div className="flex items-center gap-x-3 my-6">
                    <div className="flex items-center gap-x-2">
                        {[...Array(5)].map((item, index) => (
                            <StarIcon key={index} color="#FBBF24" className="w-6 h-6" />
                        ))}
                    </div>
                    <p className="text-[#6B81A1] text-2xl font-semibold">
                        ({120})
                    </p>
                </div>
                <p className="mt-3 font-bold text-[1.6rem] ">${price}</p>
            </div>

 
        </div>
    )
}

export default CheckourCard;
=======
  return (
    <div className="cursor-pointer group relative card border-[1px] border-[#dbdbdb] rounded-[12px] overflow-hidden bg-white">
      <img
        src={image_url}
        width={600}
        height={200}
        alt="product"
        className="mx-auto w-full md:w-[15rem] h-[15rem] object-cover"
        loading="lazy"
      />
      <div className="card-body p-9 ">
        {name}
        <div className="flex items-center gap-x-3 my-6">
          <div className="flex items-center gap-x-2">
            {[...Array(5)].map((item, index) => (
              <StarIcon key={index} color="#FBBF24" className="w-6 h-6" />
            ))}
          </div>
          <p className="text-[#6B81A1] text-2xl font-semibold">({120})</p>
        </div>
        <p className="mt-3 font-bold text-[1.6rem] ">${price}</p>
      </div>
    </div>
  );
};

export default CheckourCard;
>>>>>>> aa538517e5fcc6460ea866fd8df92b825adbd2dd
