import React from "react";
import { children_variant } from "../[lng]/seller-profile/helper/framer-motion";
import { motion } from 'framer-motion';
const PreviousOrderCard = ({order}) => {
  return (
    <motion.div
      variants={children_variant}
      className="cursor-pointer group relative card border-[1px] border-[#dbdbdb] rounded-[12px] overflow-hidden bg-white"
    >
        <div>{order.transactionDate}</div>
      <div className="card-body p-9">
        <div className="h-10">adasd</div>

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
        <p className="mt-3 font-bold text-[1.6rem] ">tasda</p>
      </div>
      <button className="absolute bottom-[-100%] group-hover:bottom-0 bg-[#001134] w-full text-[1.5rem] font-semibold text-white p-5 z-10 transition-all  flex items-center justify-center gap-x-4">
        Add to cart
      </button>
    </motion.div>
  );
};

export default PreviousOrderCard;
