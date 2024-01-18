import React from 'react';
import { motion } from 'framer-motion';
import { children_variant } from '../[lng]/seller-profile/helper/framer-motion';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { USER_SELLER_ROLE } from '../constants/userConstants';

const ProductCard = ({ image_url, name, price, userType }) => {
  // const { items, addItem } = useItemContext();

  // console.log("cart item from store", items)

  // const newItemObj = {image_url, name};

  return (
    <motion.div
      variants={children_variant}
      className="cursor-pointer group relative card border-[1px] border-[#dbdbdb] rounded-[12px] overflow-hidden bg-white"
    >
      <img
        src={image_url}
        alt="product"
        className="mx-auto w-full md:w-[15rem] h-[15rem] object-cover"
        loading="lazy"
      />
      <div className="card-body p-9">
        <div className="h-10">{name}</div>

        {/* <div className="flex items-center gap-x-3 my-6">
                    <div className="flex items-center gap-x-ks2">
                        {[...Array(5)].map((item, index) => (
                            <StarIcon key={index} color="#FBBF24" className="w-6 h-6" />
                        ))}
                    </div>
                    <p className="text-[#6B81A1] text-2xl font-semibold">
                        ({120})
                    </p>
                </div> */}
        <p className="mt-3 font-bold text-[1.6rem] ">₹{price}</p>
      </div>
      {userType !== USER_SELLER_ROLE && (
        <button
          onClick={() => {
            addWeedItem({ image_url, name });
          }}
          className="absolute bottom-[-100%] group-hover:bottom-0 bg-[#001134] w-full text-[1.5rem] font-semibold text-white p-5 z-10 transition-all  flex items-center justify-center gap-x-4"
        >
          <ShoppingBagIcon className="w-8 h-8" />
          Add to cart
        </button>
      )}
    </motion.div>
  );
};

export default ProductCard;
