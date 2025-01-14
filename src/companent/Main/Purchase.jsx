import React, { useContext } from 'react'
import { BASKET } from '../../Context/BasketContext'
import { Cookies } from 'react-cookie'
import { Link } from 'react-router-dom'

function Purchase() {
    const { sebet, setSebet } = useContext(BASKET)
    const cook = new Cookies()
    const totalSum = sebet && sebet.length > 0
        ? sebet.reduce((total, item) => total + item.count * item.current, 0)
        : 0

    const handleCountChange = (item, newCount) => {
        if (newCount <= 0) return;
        const updatedItem = { ...item, count: newCount }
        const updatedSebet = sebet.map(seb => seb.id === item.id && seb.size === item.size && seb.color === item.color ? updatedItem : seb)
        setSebet(updatedSebet)
        cook.set("sebet", updatedSebet)
    }

    const handleRemoveItem = (item) => {
        const updatedSebet = sebet.filter(seb => seb.id !== item.id || seb.size !== item.size || seb.color !== item.color)
        setSebet(updatedSebet)
        cook.set("sebet", updatedSebet)
    }

    return (
        <div className="mx-auto w-[90%]">
            <h1 className="myfont text-[rgb(116,131,113)] text-[30px] tablet:text-[60px] my-6">Carrito de Compras</h1>
            <div className="flex flex-col laptop:flex-row justify-between items-start">
                <div className="overflow-x-auto laptop:w-[60%]">
                    <table className="hidden tablet:block min-w-full text-[12px] tablet:text-[16px] table-auto border-collapse border border-[#d5d8dc] my-6 text-[#748371]">
                        <thead>
                            <tr className="mini:text-[14px] tablet:text-[25px]">
                                <th className="px-4 py-2 border-[#748371] text-left font-semibold"></th>
                                <th className="px-4 py-2 border-[#748371] text-left font-semibold">Producto</th>
                                <th className="px-4 py-2 border-[#748371] text-left font-semibold">Precio</th>
                                <th className="px-4 py-2 border-[#748371] text-left font-semibold">Cantidad</th>
                                <th className="px-4 py-2 border-[#748371] text-left font-semibold">Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sebet && sebet.length > 0 ? (
                                sebet.map((item, i) => (
                                    <tr key={i} className="border-none border-[#748371]">
                                        <td className="px-4 py-2 flex gap-2">
                                            <button
                                                onClick={() => handleRemoveItem(item)}
                                                className="text-[#748371] hover:text-[#d0c5ad] hover:scale-75"
                                            >
                                                X
                                            </button>
                                            <img className="h-[8vh] mr-1" src={item.img} alt={item.name} />
                                        </td>
                                        <td className="px-4 py-2">{item.name}</td>
                                        <td className="px-4 py-2">Q{item.current}.00</td>
                                        <td className="px-4 py-2">
                                            <div className="flex items-center gap-2">
                                                <input
                                                    type="number"
                                                    value={item.count}
                                                    min="1"
                                                    onChange={(e) => handleCountChange(item, parseInt(e.target.value))}
                                                    className="w-12 text-center border border-[#748371] rounded-md"
                                                />
                                            </div>
                                        </td>
                                        <td className="px-4 py-2">Q{item.count * item.current}.00</td>
                                    </tr>
                                ))
                            ) : (
                                <tr className="text-center"><td>No product</td></tr>
                            )}
                        </tbody>
                    </table>

                    <div className="flex gap-1  items-start flex-wrap tablet:hidden">
                        {sebet && sebet.length > 0 ? (
                            sebet.map((item, i) => (
                                <div key={i} className="border border-[#d5d8dc] p-4 mb-4">
                                    <button
                                        onClick={() => handleRemoveItem(item)}
                                        className="text-[#748371] hover:text-[#d0c5ad] hover:scale-75"
                                    >
                                        X
                                    </button>
                                    <div>
                                        <p className="font-semibold">Producto: {item.name}</p>
                                        <p>Precio: Q{item.current}.00</p>
                                        <p>Cantidad:
                                            <input
                                                type="number"
                                                value={item.count}
                                                min="1"
                                                onChange={(e) => handleCountChange(item, parseInt(e.target.value))}
                                                className="w-12 text-center border border-[#748371] rounded-md"
                                            />
                                        </p>
                                        <p>Subtotal: Q{item.count * item.current}.00</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No product</p>
                        )}
                    </div>
                </div>

                <div className="border border-[#d5d8dc] laptop:w-[30%] mini:p-2 mob:p-6 my-6 mini:text-[12px] tablet:text-[16px]">
                    <h3 className="px-4 py-2 border-[#748371] text-left font-semibold">Totales del carrito</h3>
                    <div className="flex flex-col mob:flex-row justify-between items-start mob:items-center">
                        <p className="px-4 py-2 border-[#748371] text-left font-semibold">Total</p>
                        <p className='pl-3'>Q{totalSum}.00</p>
                    </div>
                    <div className='my-2'>
                        <Link
                            to={sebet.length === 0 ? "#" : "/final"}
                            className={`w-full bg-[#d0c5ad] mob:text-sm text-white p-2 mt-4 rounded-md ${sebet.length === 0 ? '' : 'hover:bg-[#748371] transition'
                                }`}
                            style={{ pointerEvents: sebet.length === 0 ? 'none' : 'auto' }}
                        >
                            Finalizar Compra
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Purchase