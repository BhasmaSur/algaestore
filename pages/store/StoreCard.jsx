import React, { useContext } from 'react';
import { ItemContext } from '../../utils/ItemContext';

const StoreCard = ({ image_url, name }) => {

    const { items, addItem } = useContext(ItemContext);


    
    return (
        
        <div className="max-w-xs rounded overflow-hidden shadow-lg">
            {console.log("Context Item", items)}
            <img src={image_url} alt={name} className="w-full h-48 object-cover" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                onClick ={() => {addItem({image_url, name})}}
                >
                    Add to Cart
                </button>
            </div>
        </div>

    )
}

export default StoreCard;