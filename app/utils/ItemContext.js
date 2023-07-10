
import { createContext, useContext, useState } from "react";

const ItemContext = createContext();

export default function ItemStore({ children }){
    const [items, setItems] = useState([]);

    const addItem = (newItem) => {
        setItems([...items, newItem])
    }

    return (
        <ItemContext.Provider value={{ items, addItem }}>
            {children}
        </ItemContext.Provider>
    );

}


export function useItemContext(){
    return useContext(ItemContext)
}

