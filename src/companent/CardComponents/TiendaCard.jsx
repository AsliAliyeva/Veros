import { useContext, useState } from 'react'
import { LiaWineBottleSolid } from 'react-icons/lia'
import { Link } from 'react-router-dom'
import { BASKET } from '../../Context/BasketContext'

function TiendaCard({ elem, item }) {
    const { addToBasket } = useContext(BASKET)
    const [count, setCount] = useState(1)

    const inc = () => {
        setCount(count + 1)
    }

    const dec = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    const handleAddToBasket = (e) => {
        e.preventDefault()
        addToBasket(elem.id, elem.img[0], elem.name, elem.current, null, null, count)
    }

    return (
        <>
            <Link className='mini:h-[50vh]' to={`/details/tienda/${item.id}/${elem.id}`} >
                <img className=' mob:h-[70vh] tablet:h-[80vh] object-contain' src={elem.img[0]} alt="shekil" />
            </Link>
            <div className='flex flex-col font-semibold items-start mini:pl-[20px] mob:pl-12 tablet:pl-0 h-[30vh] tablet:h-[40vh] '>
                <h3 className='mini:text-[30px] tablet:text-[50px] font-normal text-[#7A7A7A]' style={{ fontFamily: "'Frunchy', sans-serif" }} >{elem.name}</h3>
                <div className='flex justify-between mini:gap-4 mob:gap-10 text-[#748371] mini:text-[14px] mob:text-[18px] '>
                    <h6>Recicla</h6>
                    {elem.bottle && (
                        <div className='flex items-end'>
                            <LiaWineBottleSolid className='mini:text-[20px] mob:text-[25px]' />
                            <p>{elem.bottle}</p>
                        </div>
                    )}
                </div>

                {elem.previous ? (
                    <div className='text-[#748371] mini:text-[14px] mob:text-[16px] h-[7vh]'>
                        <p className='line-through'>Q{elem.previous}.00</p>
                        <p className='border-b-2 border-black'>Q{elem.current}.00</p>
                    </div>
                ) : (
                    <p className='text-[#748371] mini:text-[14px] mob:text-[16px] h-[7vh]'>Q{elem.current}.00</p>
                )}

                <div className=''>
                    <div className='flex justify-between items-center'>
                        <button onClick={inc}>+</button>
                        <p>{count}</p>
                        <button onClick={dec}>-</button>
                    </div>

                    <button
                        onClick={handleAddToBasket}
                        className='bg-[#d0c5ad] text-[#788573] font-bold px-2 py-1 mini:text-[12px] mob:text-[14px] tablet:text-[16px] desktop:text-[18px] mob:my-2 border-white hover:bg-[#748371] hover:text-white transition duration-150'
                    >
                        Anadir al carrito
                    </button>
                </div>
            </div>
        </>
    )
}

export default TiendaCard