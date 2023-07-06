import React, {useContext} from 'react';
import 'tailwindcss/tailwind.css';
import Link from 'next/link';
import { ItemContext } from '../../utils/ItemContext';
import { useRouter } from 'next/router';

const StoreHeader = () => {
    const { items, addItem } = useContext(ItemContext);
    const router = useRouter();

    return (
        <div className='flex p-5 justify-between'>
            <Link href="/">
                <img
                    src="/arrow-back.png"
                    alt="Store"
                    className="w-10 h-10"
                />
            </Link>
            <h1 className='font-bold text-white'>Welcome to the Store</h1>
            <div className='flex items-center'>
                <h1 className='font-bold text-white'>{items.length}</h1>
                <img
                    src="/cart.png"
                    alt="Cart"
                    className="w-10 h-10"
                    onClick={() => {router.push('/cart');}}
                />
            </div>
        </div>

    )
}

export default StoreHeader;