import React, { createContext, useState } from 'react'
import Cookies from './../../node_modules/react-cookie/cjs/Cookies.d';
export const BASKET = createContext(null)


function BasketContext({ children }) {
    const cook = new Cookies()
    const [sebet, setSebet] = useState(cook.get("sebet") || [])
    
    function addToBasket(id, img, name, current, size, color, count) {
        const existingProduct = sebet.find(item => item.id === id && item.size === size && item.color === color);
        
        if (existingProduct) {
            const updatedSebet = sebet.map(item => 
                item.id === id && item.size === size && item.color === color
                    ? { ...item, count: item.count + count }  
                    : item
            );
            setSebet(updatedSebet);  
            cook.set("sebet", JSON.stringify(updatedSebet)); 
        } else {
            const updatedSebet = [...sebet, { id, img, name, current, size, color, count }];
            setSebet(updatedSebet); 
            cook.set("sebet", JSON.stringify(updatedSebet)); 
        }
    }

    function clearBasket() {
        setSebet([]);  
        cook.set("sebet", JSON.stringify([]));  
    }


    return (
        <BASKET.Provider value={{ sebet, setSebet, addToBasket, clearBasket }}>
            {children}
        </BASKET.Provider>
    )
}

export default BasketContext