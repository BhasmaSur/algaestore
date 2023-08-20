"use client";
import React, { useEffect, useState, useContext } from 'react';
import { storeData } from '../../constants/index';
import StoreCard from './StoreCard';
import { ItemContext } from '../../utils/ItemContext';
import store from '../../utils/store';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { filterData } from '../../utils/helper';

const StoreData = ({ storeItem, setItem }) => {

    const [data, setData] = useState([]);
    const [searchData, setSearchdata] = useState([]);
    const [searchText, setSearchtext] = useState("")

    useEffect(() => {
        setData(storeData);
        setSearchdata(storeData);
    }, [])

    const router = useRouter();
    // const { items, addItem } = useItemContext();
    // {console.log("storeItem", items)}

    const cartItems = useSelector((store) => [
        store.cart.items
    ])

    const handleClick = () => {
        router.push('/cart')
    }


    return (

        <div>
            <div className='flex p-5 justify-between'>
                <div className='flex items-center'>
                    <Link href={`/`}>
                        <img
                            src="/arrow-back.png"
                            alt="search"
                            className="w-10 h-10"
                        />
                    </Link>
                </div>
                {/* <h1 className='font-bold text-white'>Welcome to the Store</h1> */}

                <div>
                    <div className="relative p-12 w-full sm:max-w-2xl sm:mx-auto">
                        <div className="overflow-hidden z-0 rounded-full relative p-3">
                            <form role="form" className="relative flex z-50 bg-white rounded-full">
                                <input onChange={(e) => {
                                    setSearchtext(e.target.value)
                                }} type="text" placeholder="enter your search here" className="rounded-full flex-1 px-6 py-4 text-gray-700 focus:outline-none" />
                                <button onClick={(e) => {
                                    e.preventDefault();
                                    const newData = filterData(searchText, data)
                                    setSearchdata(newData)
                                    console.log("Filterdata", newData)
                                }} className="bg-indigo-500 text-white rounded-full font-semibold px-8 py-4 hover:bg-indigo-400 focus:bg-indigo-600 focus:outline-none">Search</button>
                            </form>
                            <div className="glow glow-1 z-10 animate-glow1 bg-pink-400 rounded-100 w-120 h-120 -top-10 -left-10 absolute"></div>
                            <div className="glow glow-2 z-20 animate-glow2 bg-purple-400 rounded-100 w-120 h-120 -top-10 -left-10 absolute"></div>
                            <div className="glow glow-3 z-30 animate-glow3 bg-yellow-400 rounded-100 w-120 h-120 -top-10 -left-10 absolute"></div>
                            <div className="glow glow-4 z-40 animate-glow4 bg-blue-400 rounded-100 w-120 h-120 -top-10 -left-10 absolute"></div>
                        </div>
                    </div>
                </div>

                <div className='flex items-center'>
                    <h1 className='font-bold text-white'>{cartItems[0]?.length}</h1>
                    <img
                        src="/cart.png"
                        alt="Cart"
                        className="w-10 h-10"
                        onClick={handleClick}
                    />
                </div>
            </div>
            {
                data?.lenght === 0 ? (
                    <div>
                        <h1>No Item Found</h1>
                    </div>
                ) : (
                    <div className="flex flex-wrap justify-center gap-4 px-5">
                        {searchData.map((item, index) => {
                            return (
                                    <StoreCard {...item} storeItem={storeItem} setItem={setItem} />
                            );
                        })}
                    </div>
                )
            }
        </div>

    );

}


export default StoreData;