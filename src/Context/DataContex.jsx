import React, { createContext, useEffect, useState } from 'react'
import { getColleciones, getOfertas, getSlider, getTienda } from '../Service/Api'
export const DATA = createContext(null)


function DataContex({children}) {
    
    const [slider, setSlider] = useState([])
    const [collec, setCollec] = useState([])
    const [ofertas, setOfertas] = useState([])
    const [tienda, setTienda] = useState([])

    useEffect(()=>{
        getSlider().then(res => setSlider(res))
        getColleciones().then(res => setCollec(res)) 
        getOfertas().then(res => setOfertas(res))
        getTienda().then(res => setTienda(res))
    }, [])


    return (
        <DATA.Provider value={{
            slider, setSlider,
            collec, setCollec,
            ofertas, setOfertas,
            tienda, setTienda
        }}>
            {children}
        </DATA.Provider>
    )
}

export default DataContex