import { useContext, useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { DATA } from '../../Context/DataContex';
import { BASKET } from '../../Context/BasketContext';
import Loading from './../../Loading';

function Details() {
    const { name, id, index } = useParams();
    console.log("ID: ", id, "Index: ", index); 
    const { tienda, ofertas } = useContext(DATA);
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentProduct, setCurrentProduct] = useState(null);
    const navigate = useNavigate();
    const {addToBasket} = useContext(BASKET)

    useEffect(() => {
        let product = null;
        
        if (name=="ofertas") {
            if (id > 0 && ofertas[id - 1]) {
                product = ofertas[id - 1];
            }
        } else if(name=="tienda"){
            if (index > 0 && id > 0 && tienda[index - 1]?.product?.[id - 1]) {
                product = tienda[index - 1].product[id - 1];
            }
 
        }

        setCurrentProduct(product);

        if (!selectedImage && product?.img?.length > 0) {
            setSelectedImage(product?.img[0]);
        }
    }, [id, index, tienda, ofertas, navigate]);

    if (!currentProduct) {
        return <div><Loading /></div>;
    }

    const sizes = currentProduct.size || currentProduct.sizes || []
    return (
        <div className='m-4'>
            <div className='flex mini:flex-col laptop:flex-row gap-2'>
                <div className='flex mini:flex-col tablet:flex-row tablet:mt-6 laptop:w-[60%] desktop:w-[40%]'>
                    <div className='flex mini:items-start tablet:flex-col gap-1 mini:my-2 tablet:my-0 mini:order-1 tablet:order-[-1] mini:h-[20vh]'>
                        {currentProduct.img?.map((pic, i) => (
                            
                            <div className='flex' key={i}>
                                <img
                                    className='object-cover flex-shrink-0 max-h-[10vh] w-[7vh] cursor-pointer'
                                    src={pic}
                                 
                                    onClick={() => setSelectedImage(pic)}
                                />
                            </div>
                        ))}
                    </div>
                    <div className='mini:w-[90%] mob:w-[80%] mx-auto'>
                        <img
                            className='mini:h-[50vh] mob:h-[70vh] tablet:h-[90vh] w-full mini:object-cover tablet:object-contain'
                            src={selectedImage}
                            alt="selected image"
                        />
                    </div>
                </div>
                <div className='laptop:w-[40%] desktop:w-[60%] myFont'>
                    <h3 className='mini:text-[30px] mob:text-[50px] tablet:text-[65px] font-bold text-[#7A7A7A]  myFont'>
                        {currentProduct.name}
                    </h3>
                    <div className='text-[#748371] mini:text-[20px] mob:text-[25px] tablet:text-[40px]  myfont'>
                        Q{currentProduct.current}.00
                    </div>
                    <div className='text-[#748371] mini:text-[20px] mob:text-[25px] tablet:text-[30px] font-semibold  myfont'>
                        {currentProduct.size}
                    </div>
                    <div className='flex justify-center gap-4 mini:items-center laptop:justify-start my-2'>
                        <p className='text-[#748371] mini:text-[20px] mob:text-[25px] tablet:text-[30px] font-semibold  myfont'>Talla</p>
                        <div className='flex flex-wrap'>
                            {sizes.map((size, i) => (
                                <div key={i}>
                                    <button className=' myfont text-[20px] font-bold border w-[30px] rounded-[50%] transition-all duration-300 ease-in-out hover:scale-110 hover:border-2 hover:border-[#D3D3D3]'>
                                        {size}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button 
                    onClick={(e)=>{
                        e.preventDefault()
                        addToBasket(currentProduct.id, currentProduct.img[0], currentProduct.name, currentProduct.current, currentProduct.size, currentProduct.color)
                    }}
                    className='bg-[#d0c5ad] mini:text-[10px] mob:text-[13px] tablet:text-[16px] my-4 font-bold mini:px-4  tablet:px-6 py-2 rounded-[5px] border hover:bg-[#748371] hover:text-white transition duration-200 tablet:ml-12 laptop:ml-0'>
                    Anadir al carrito
                    </button>
                    <div className='flex items-center flex-col laptop:items-start'>
                        <p className='mini:text-[20px] tablet:text-[38px]  myfont'>¿No conoces tu talla?</p>
                        <Link to="/table" className='  bg-[#d0c5ad] mini:text-[10px] mob:text-[13px] tablet:text-[16px] my-4 font-bold mini:px-4  tablet:px-6 py-2 rounded-[5px] border hover:bg-[#748371] hover:text-white transition duration-200'>
                            Ver tabla de medidas
                        </Link>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center mt-10'>
                <div className='mini:text-[20px] tablet:text-[35px] text-[#748371]  myfont'>
                    Productos Relacionados
                </div>
                <div>random cardlar</div>
            </div>
        </div>
    );
}

export default Details;