import React from 'react';

const CartCard = ({image_url, name}) => {
    return (
        <div className="max-w-xs rounded overflow-hidden shadow-lg" >
            {console.log("Card Name", name)}
            < img src={image_url} alt={name} className="w-full h-48 object-cover" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
            </div>
        </div >
    )
}

export default CartCard;