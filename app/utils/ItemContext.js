import { createContext, useState } from "react";

const ItemContext = createContext();

const ItemProvider = ({ children }) => {
    const [items, setItems] = useState([]);

    const addItem = (item) => {
        setItems([...items, item])
    }

    return (
        <ItemContext.Provider value={{ items, addItem }}>
            {children}
        </ItemContext.Provider>
    );

}


export { ItemContext, ItemProvider }; 