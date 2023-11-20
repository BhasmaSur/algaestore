'use client'

import { async } from '@firebase/util';
import React, { useState, useEffect } from 'react';
import Card from './BuyerCard';

const Buyer = () => {

    const [data, setData] = useState([]);
    const getBuyer = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/getAllBuyerProfile', {
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
            console.log("buyer data", res);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleActive = async(email) => {
        console.log("Email", email)
        try {
            const response = await fetch(`http://localhost:3000/api/changeActive?username=${email}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const res = await response.json();
            console.log("res", res.active)
            getBuyer();
            window.scrollTo(0, window.scrollY);
        }
        catch (error) {
            console.log("Error fetching data:", error)
        }
    }

    useEffect(() => {
        getBuyer();
    }, [])

    return (
        <div className="flex flex-wrap">
            {
                data.map((val, index) => {
                    return (
                        <Card id={index} name={val.name} email={val.username} phone={val.phone} img={val.img} active={val.active} handleActive={handleActive} />
                    );
                })
            }
        </div>
    )
}

export default Buyer;