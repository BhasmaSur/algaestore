"use client";
import React, { useEffect, useState, useContext } from 'react';
import { storeData } from '../../constants/index';
import StoreCard from './StoreCard';
import { ItemContext } from '../../utils/ItemContext';

const StoreData = ({storeItem, setItem}) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        setData(storeData);
    }, [])

    


    return data?.lenght === 0 ? (
        <div>
            <h1>No Item Found</h1>
        </div>
    ) : (
        <div className="flex flex-wrap justify-center gap-4 px-5">
            {data.map((item, index) => {
                return (<StoreCard {...item} storeItem = {storeItem} setItem = {setItem}/>);
            })}
        </div>
    );
}


export default StoreData;