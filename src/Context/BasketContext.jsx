import React, { createContext, useState } from 'react'
import Cookies from './../../node_modules/react-cookie/cjs/Cookies.d';
export const BASKET = createContext(null)


function BasketContext({ children }) {
    const [sebet, setSebet] = useState([])
    const cook = new Cookies()
    console.log(cook.get("sebet"));
    
    function addToBasket(id, img, name, current, size, color) {
        // console.log(id, img, name, current, size, color);
        setSebet([...sebet, {
            id, img, name, current, size, color
        }])
        cook.set("sebet", JSON.stringfy(sebet))
    }
    return (
        <BASKET.Provider value={{ sebet, setSebet, addToBasket }}>
            {children}
        </BASKET.Provider>
    )
}

export default BasketContext