import { useContext, useEffect, useState } from "react"
import { DATA } from "../../Context/DataContex"
import Loading from './../../Loading';
import { Link } from "react-router-dom";

const getRandomItems = (items, num) => {
    const selectedItems = []
    const itemsCopy = [...items]

    for (let i = 0; i < num; i++) {
        const randomIndex = Math.floor(Math.random() * itemsCopy.length)
        selectedItems.push(itemsCopy[randomIndex])
        itemsCopy.splice(randomIndex, 1)
    }

    return selectedItems;
}

const RandomCard = () => {
    const [randomProducts, setRandomProducts] = useState([])
    const { tienda } = useContext(DATA)

    useEffect(() => {
        if (tienda && Array.isArray(tienda)) {
            const allProducts = tienda.flatMap(tiendaCategory =>
                tiendaCategory.product?.map(product => ({
                    ...product,
                    parentId: tiendaCategory.id, // Valideyn obyektin id-si
                })) || []
            );

            if (allProducts.length > 0) {
                const selectedProducts = getRandomItems(allProducts, 3);
                setRandomProducts(selectedProducts);
            }
        }
    }, [tienda])

    return (
        <div className="my-6 ">
            <div className="cards flex flex-col tablet:flex-row justify-between tablet:gap-16">
                {randomProducts.length > 0 ? (
                    randomProducts.map((product, i) => (
                        <div key={i}>
                            <div className="rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 my-6">
                                <img src={product.img[0]} alt="" className="object-cover object-center w-full rounded-t-md mini:h-[50vh] mob:h-[70vh] tablet:h-[60vh] dark:bg-gray-500" />
                                <div className="flex flex-col justify-between">
                                    <div className="">
                                        <h2 className="tablet:text-3xl text-[16px] font-semibold tracking-wide">{product.name}</h2>
                                        <p className="dark:text-gray-800">Q{product.current}.00</p>
                                    </div>
                                    <Link
                                        to={`/details/tienda/${product.parentId}/${product.id}`}
                                        type="button"
                                        className='bg-[#d0c5ad] text-[#788573] font-bold px-3 py-2 text-[12px] mob:text-[16px] border-white hover:bg-[#748371] hover:text-white transition duration-150'
                                    >
                                        Seleccionar opciones
                                    </Link>
                                    {/* Valideyn obyektin id-sini göstəririk */}
                                    <div>Parent ID: {product.parentId}</div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div><Loading /></div>
                )}
            </div>
        </div>
    )
}

export default RandomCard