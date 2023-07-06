import React, { useContext } from 'react';
import { ItemContext } from '../../utils/ItemContext';

const CartItem = () => {
    const { items } = useContext(ItemContext);

    {console.log("cart items", items)}

    return items?.length === 0 ? (
        <div>
            <h1>No Item in the cart</h1>
        </div>
    ) : (
        <div className="flex flex-wrap px-16 justify-between">
            {items.map((item, index) => {
                return (<StoreCard {...item} />);
            })}
        </div>
    );
}

export default CartItem;