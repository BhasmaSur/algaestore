import React, {useContext} from 'react';
import 'tailwindcss/tailwind.css';
import Link from 'next/link';
import { ItemContext } from '../../utils/ItemContext';
import { useRouter } from 'next/navigation';
// import { ItemProvider } from '../../utils/ItemContext';
import { useItemContext } from '../../utils/ItemContext';
import { useSelector } from 'react-redux';

const StoreHeader = ({storeItem}) => {
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
                <h1 className='font-bold text-white'>{cartItems[0]?.length}</h1>
                <img
                    src="/cart.png"
                    alt="Cart"
                    className="w-10 h-10"
                    onClick={handleClick}
                />
            </div>
        </div>

    )
}

export default StoreHeader;