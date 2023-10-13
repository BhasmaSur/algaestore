'use client';

import React, { useState, useEffect } from 'react';
import Card from './Card';
import { useSearchParams } from 'next/navigation';

const page = () => {

    const [data, setData] = useState([]);

    const searchParams = useSearchParams();
    const options = searchParams.get('selection')

    const getData = async () => {
        let fetchApi;
        fetchApi = options == "Sellers" ? fetchApi = 'getAllSellerProfile' : 'getAllBuyerProfile';

        try {
            const response = await fetch(`https://www.algaestore.in/api/${fetchApi}`, {
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
        getData();
        console.log("option", options)
    }, [])

    return (
        <div className='bg-header-bg'>
            <div class="flex justify-center">
                <h1 class="text-4xl font-semibold text-center text-white m-10">Explore All {options}</h1>
            </div>
            <div className="flex flex-wrap ml-0 md:ml-32">
                {
                    data.map((val, index) => {
                        return (
                            <Card id={index} name={val.name} email={val.username} phone={val.phone} img={val.img} />
                        );
                    })
                }
            </div>
        </div>

    );
}

export default page;