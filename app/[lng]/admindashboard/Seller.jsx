'use-client'

import React, { useState, useEffect } from 'react';
import Card from './BuyerCard';

const Seller = () => {

    const [data, setData] = useState([]);

    const getSeller = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/getAllSellerProfile', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const res = await response.json();
            setData(res);
            console.log("seller data", res);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }


    useEffect(() => {
        getSeller();
    }, [])

    return (
        <div className="flex flex-wrap">
            {
                data.map((val, index) => {
                    return (
                        <Card id={index} name={val.name} email={val.username} phone={val.phone} img={val.img} />
                    );
                })
            }
        </div>
    );
}

export default Seller;