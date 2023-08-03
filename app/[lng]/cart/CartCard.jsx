import React from 'react';
import { motion } from 'framer-motion';
import { children_variant } from "./helper/framer-motion";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import { useDispatch } from 'react-redux';
import { removeItem } from '../../utils/cartSlice';

const CartCard = ({ image_url, name }) => {
    const dispatch = useDispatch();
    const removeWeedItem = (item) => {
        dispatch(removeItem(item))
    }
    return (
        <motion.div variants={children_variant} className="cursor-pointer group relative card border-[1px] border-[#dbdbdb] rounded-[12px] overflow-hidden bg-white">
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
                <p className="mt-3 font-bold text-[1.6rem] ">₹{120}</p>
            </div>
            <button

                onClick={() => {removeWeedItem({ image_url, name })}}
                className="absolute bottom-[-100%] group-hover:bottom-0 bg-[#001134] w-full text-[1.5rem] font-semibold text-white p-5 z-10 transition-all  flex items-center justify-center gap-x-4"
            >
                <ShoppingBagIcon className="w-8 h-8" />
                Remove Item
            </button>
        </motion.div>
    )
}

export default CartCard;