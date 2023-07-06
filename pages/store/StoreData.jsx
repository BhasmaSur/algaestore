import React, { useEffect, useState, useContext } from 'react';
import { storeData } from '../../constants/index';
import StoreCard from './StoreCard';
import { ItemContext } from '../../utils/ItemContext';

const StoreData = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        setData(storeData);
    }, [])

    


    return data?.lenght === 0 ? (
        <div>
            <h1>No Item Found</h1>
        </div>
    ) : (
        <div className="flex flex-wrap px-16 justify-between">
            {data.map((item, index) => {
                return (<StoreCard {...item} />);
            })}
        </div>
    );
}


export default StoreData;