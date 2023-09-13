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
import httpService from '../../services/httpService';
import { API, CONTROLLERS, METHODS } from '../../constants/apiDetails';


const StoreData = ({ storeItem, setItem }) => {

    const [data, setData] = useState([]);
    const [searchData, setSearchdata] = useState([]);
    const [searchText, setSearchtext] = useState("");
    const [selectedFilter, setSelectedFilter] = useState("");
    const [showFilters, setShowFilters] = useState(false);

    const categories = {
        Harvested: ["Wet Seaweed", "Dry Seaweed", "Seed Material"],
        Processed: ["Extract/Sap", "Pulverized Seaweed", "Powdered Seaweed", "Hydrocolloids", "Cellulosic Residue"],
        FinishedGoods: ["Agriculture", "Food", "Packaging", "Fuel", "Textile"],
    };

    const toggleFilters = () => {
        setShowFilters(!showFilters);
    };

    const getStoreData = async () => {
        const response = await fetch('http://localhost:3000/api/getallproducts', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json', // Include your custom headers here
                // Other headers if needed
            },
        }).then(res => res.json()).then((res) => {
            setData(res);
            setSearchdata(res);
            console.log(res)
        });
    }


    const applyFilter = (filter) => {
        if (selectedFilter[0]?.toLowerCase() === filter.toLowerCase()) {
            setSelectedFilter("");
            setSearchdata(data);
        }
        else {
            setSelectedFilter(filter);
            if (filter === "") {
                setSearchdata(data);
            }
            else {
                const filteredData = data.filter((val, index) => {
                    return val?.subtype?.toLowerCase() === filter?.toLowerCase();
                })
                setSearchdata(filteredData);
            }

        }

        console.log("filtered data", searchData)
    };

    useEffect(() => {
        getStoreData();
    }, [])

    const router = useRouter();
    const cartItems = useSelector((store) => [
        store.cart.items
    ])

    const handleClick = () => {
        router.push('/cart')
    }


    return (

        <div>
            <div className='flex p-5 justify-between flex-wrap'>
                <div className='flex items-center mb-10 sm:mb-0 mr-32'>
                    <Link href={`/`}>
                        <img
                            src="/arrow-back.png"
                            alt="back"
                            className="w-10 h-10"
                        />
                    </Link>
                </div>

                <div className="flex-1">
                    <div className="relative p-2 mb-8 w-full sm:max-w-2xl sm:mx-auto">
                        <div className="overflow-hidden z-0 rounded-full relative p-3">
                            <form role="form" className="relative flex z-50 bg-white rounded-full">
                                <input onChange={(e) => {
                                    setSearchtext(e.target.value)
                                }} type="text"
                                    placeholder="Enter your search here"
                                    className="rounded-full flex-1 px-0 py-2 ml-2 text-gray-700 focus:outline-none sm:w-64 md:w-auto" />
                                <button onClick={(e) => {
                                    e.preventDefault();
                                    const newData = filterData(searchText, data, selectedFilter)
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

                <div className='flex justify-between'>
                    
                    <div className='flex justify-center'>
                        <button
                            onClick={() => setShowFilters(!showFilters)} // Toggle showFilters state
                            className={`bg-indigo-500 text-white rounded-full font-semibold px-4 py-2 ml-2 sm:hidden 
                        }`}
                        >
                            {showFilters ? "Hide Filters" : "Show Filters"}
                        </button>
                    </div>

                    <div className='flex items-center ml-32'>
                        <h1 className='font-bold text-white'>{cartItems[0]?.length}</h1>
                        <img
                            src="/cart.png"
                            alt="Cart"
                            className="w-10 h-10"
                            onClick={handleClick}
                        />
                    </div>
                </div>
            </div>



            <div className='flex'>
                <div className={`mb-2 ml-10 sm:w-auto sm:ml-10 ${!showFilters ? 'hidden sm:block' : '' // Hide filters content on mobile if showFilters is false
                    }`}>
                    <h2 className='text-xl font-semibold text-white mb-4'>Filters:</h2>
                    {Object.keys(categories).map((category) => (
                        <div key={category} className='mb-2'>
                            <label className='text-white font-black'>{category}:</label>
                            <div className='flex-col space-x-2'>
                                {categories[category].map((filter) => (
                                    <label key={filter} className='ml-2 text-white flex items-center'>
                                        <input
                                            type="radio"
                                            value={filter}
                                            checked={selectedFilter === filter}
                                            onChange={() => applyFilter(filter)}
                                        />
                                        {filter}
                                    </label>
                                ))}
                                <label className='ml-2 text-white flex items-center'>
                                    <input
                                        type="radio"
                                        value=""
                                        checked={selectedFilter === ""}
                                        onChange={() => applyFilter("")} // Deselect filter
                                    />
                                    All
                                </label>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={`w-full mt-4 sm:mt-0 ${showFilters ? 'sm:ml-0' : ''}`}>
                    {
                        data?.lenght === 0 ? (
                            <div>
                                <h1>No Item Found</h1>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-5">
                                {searchData.map((item, index) => {
                                    return (
                                        <StoreCard {...item} storeItem={storeItem} setItem={setItem} />
                                    );
                                })}
                            </div>
                        )
                    }
                </div>
            </div>
        </div>

    );

}


export default StoreData;