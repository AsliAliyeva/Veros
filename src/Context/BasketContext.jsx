import React, { createContext, useState, useEffect } from 'react'
import { Cookies } from 'react-cookie'

export const BASKET = createContext(null)

function BasketContext({ children }) {
    const cook = new Cookies()
    const [sebet, setSebet] = useState(cook.get("sebet") || [])

    useEffect(() => {
        const storedBasket = cook.get("sebet")

        if (storedBasket) {
            try {
                const parsedBasket = typeof storedBasket === 'string' ? JSON.parse(storedBasket) : storedBasket
                const fixedBasket = parsedBasket.map(item => {
                    if (!item.count || isNaN(item.count) || item.count <= 0) {
                        item.count = 1
                    }
                    return item
                })

                setSebet(fixedBasket)
            } catch (error) {
                console.error("Error", error)
                setSebet([])
            }
        }
    }, [])

    function addToBasket(id, img, name, current, size, color, count) {
        const validCount = isNaN(count) || count <= 0 ? 1 : count

        const existingProduct = sebet.find(item => item.id === id && item.size === size && item.color === color)

        let updatedSebet

        if (existingProduct) {
            updatedSebet = sebet.map(item => 
                item.id === id && item.size === size && item.color === color
                    ? { ...item, count: item.count + validCount } 
                    : item
            )
        } else {
            updatedSebet = [...sebet, { id, img, name, current, size, color, count: validCount }]
        }

        setSebet(updatedSebet)
        cook.set("sebet", updatedSebet)
    }

    function removeFromBasket(id, size, color) {
        const updatedSebet = sebet.filter(item => item.id !== id || item.size !== size || item.color !== color)
        setSebet(updatedSebet)
        cook.set("sebet", updatedSebet)
    }

    function clearBasket() {
        setSebet([])
        cook.set("sebet", [])
    }

    return (
        <BASKET.Provider value={{ sebet, setSebet, addToBasket, removeFromBasket, clearBasket }}>
            {children}
        </BASKET.Provider>
    )
}

export default BasketContext
