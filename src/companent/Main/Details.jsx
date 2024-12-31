// import React, { useContext, useState } from 'react'
// import { Link, useParams } from 'react-router-dom'
// import { DATA } from '../../Context/DataContex';

// function Details() {
//     const { id, index } = useParams();
//     const { tienda } = useContext(DATA);
//     const { ofertas } = useContext(DATA);
//     const [selectedImage, setSelectedImage] = useState(null);
//     if (tienda.length > 0 ) {
//         const elemet = tienda[index - 1].product[id - 1];
//         if (!selectedImage && elemet.img && elemet.img.length > 0) {
//             setSelectedImage(elemet.img[0]);
//         }

//         return (
//             <div className='m-4'>
//                 <div className='flex mini:flex-col laptop:flex-row gap-2'>
//                     <div className='flex mini:flex-col tablet:flex-row tablet:mt-6 laptop:w-[60%] desktop:w-[40%]'>
//                         <div className='flex mini:items-start tablet:flex-col gap-1 mini:my-2 tablet:my-0 mini:order-1 tablet:order-[-1] mini:h-[20vh]'>
//                             {elemet.img && elemet.img.slice(0).map((pic, i) => {
//                                 return (
//                                     <div className='flex' key={i}>
//                                         <img
//                                             className='object-cover flex-shrink-0 max-h-[10vh] w-[7vh] cursor-pointer'
//                                             src={pic}
//                                             alt={`image-${i + 1}`}
//                                             onClick={() => setSelectedImage(pic)} 
//                                         />
//                                     </div>
//                                 )
//                             })}
//                         </div>
//                         <div className='mini:w-[90%] mob:w-[80%] mx-auto'>
//                             <img
//                                 className='mini:h-[50vh] mob:h-[70vh] tablet:h-[90vh] w-full mini:object-cover tablet:object-contain'
//                                 src={selectedImage}
//                                 alt="selected image"
//                             />
//                         </div>
//                     </div>
//                     <div className='laptop:w-[40%] desktop:w-[60%]' style={{ fontFamily: "'Times New Roman', sans-serif" }}>
//                         <h3 className='mini:text-[30px] mob:text-[50px] font-normal text-[#7A7A7A] '>{elemet.name}</h3>
//                         <div className='text-[#748371] mini:text-[20px] mob:text-[25px]'>Q{elemet.current}</div>
//                         <div className='text-[#748371] mini:text-[20px] mob:text-[25px]'>{elemet.text}</div>
//                         <div className='flex justify-center gap-4 mini:items-center laptop:justify-start my-2'>
//                             <p className='text-[#748371] mini:text-[20px] mob:text-[25px]'>Talla</p>
//                             <div className='flex flex-wrap'>
//                                 {
//                                     elemet.size && elemet.size.map((size, i) => {
//                                         return (
//                                             <div key={i}>
//                                                 <button className='border w-[30px] rounded-[50%] transition-all duration-300 ease-in-out hover:scale-110 hover:border-2 hover:border-[#D3D3D3]'>{size}</button>
//                                             </div>
//                                         )
//                                     })
//                                 }
//                             </div>
//                         </div>
//                         <button className='bg-[#d0c5ad] mini:text-[12px] tablet:text-[16px] my-4 font-bold px-6 py-2 rounded-[5px] border hover:bg-[#748371] hover:text-white transition duration-200 tablet:ml-12 laptop:ml-0 '>
//                             <Link to={"/sebet"}>Anadir al carrito</Link>
//                         </button>
//                         <div className='flex items-center flex-col laptop:items-start'>
//                             <p className='mini:text-[20px] tablet:text-[30px] '>¿No conoces tu talla?</p>
//                             <Link to={"/table"} className='bg-[#d0c5ad] mini:text-[12px] tablet:text-[16px] my-4 font-bold px-6 py-2 rounded-[5px] border hover:bg-[#748371] hover:text-white transition duration-200'>
//                                 Ver tabla de medidas
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='flex flex-col items-center mt-10'>
//                     <div className='mini:text-[20px] tablet:text-[35px] text-[#748371]'>Productos Relacionados</div>
//                 </div>
//             </div>
//         );
//     } else if (ofertas.length > 0) {
//         const item = ofertas[id - 1];
//             if (!selectedImage && item.img && item.img.length > 0) {
//                 setSelectedImage(item.img[0]);
//             }
    
//             return (
//                 <div className='m-4'>
//                     <div className='flex mini:flex-col laptop:flex-row gap-2'>
//                         <div className='flex mini:flex-col tablet:flex-row tablet:mt-6 laptop:w-[60%] desktop:w-[40%]'>
//                             <div className='flex mini:items-start tablet:flex-col gap-1 mini:my-2 tablet:my-0 mini:order-1 tablet:order-[-1] mini:h-[20vh]'>
//                                 {item.img && item.img.slice(0).map((pic, i) => {
                                                                        
//                                     return (
//                                         <div className='flex' key={i}>
//                                             <img
//                                                 className='object-cover flex-shrink-0 max-h-[10vh] w-[7vh] cursor-pointer'
//                                                 src={pic}
//                                                 alt={`image-${i + 1}`}
//                                                 onClick={() => setSelectedImage(pic)} 
//                                             />
//                                         </div>
//                                     )
//                                 })}
//                             </div>
//                             <div className='mini:w-[90%] mob:w-[80%] mx-auto'>
//                                 <img
//                                     className='mini:h-[50vh] mob:h-[70vh] tablet:h-[90vh] w-full mini:object-cover tablet:object-contain'
//                                     src={selectedImage}
//                                     alt="selected image"
//                                 />
//                             </div>
//                         </div>
//                         <div className='laptop:w-[40%] desktop:w-[60%]' style={{ fontFamily: "'Times New Roman', sans-serif" }}>
//                             <h3 className='mini:text-[30px] mob:text-[50px] font-normal text-[#7A7A7A] '>{item.name}</h3>
//                             <div className='text-[#748371] mini:text-[20px] mob:text-[25px]'>Q{item.current}</div>
//                             <div className='text-[#748371] mini:text-[20px] mob:text-[25px]'>{item.text}</div>
//                             <div className='flex justify-center gap-4 mini:items-center laptop:justify-start my-2'>
//                                 <p className='text-[#748371] mini:text-[20px] mob:text-[25px]'>Talla</p>
//                                 <div className='flex flex-wrap'>
//                                     {
//                                         item.sizes && item.sizes.map((size, i) => {
//                                             return (
//                                                 <div key={i}>
//                                                     <button className='border w-[30px] rounded-[50%] transition-all duration-300 ease-in-out hover:scale-110 hover:border-2 hover:border-[#D3D3D3]'>{size}</button>
//                                                 </div>
//                                             )
//                                         })
//                                     }
//                                 </div>
//                             </div>
//                             <button className='bg-[#d0c5ad] mini:text-[12px] tablet:text-[16px] my-4 font-bold px-6 py-2 rounded-[5px] border hover:bg-[#748371] hover:text-white transition duration-200 tablet:ml-12 laptop:ml-0 '>
//                                 <Link to={"/sebet"}>Anadir al carrito</Link>
//                             </button>
//                             <div className='flex items-center flex-col laptop:items-start'>
//                                 <p className='mini:text-[20px] tablet:text-[30px] '>¿No conoces tu talla?</p>
//                                 <Link to={"/table"} className='bg-[#d0c5ad] mini:text-[12px] tablet:text-[16px] my-4 font-bold px-6 py-2 rounded-[5px] border hover:bg-[#748371] hover:text-white transition duration-200'>
//                                     Ver tabla de medidas
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                     <div className='flex flex-col items-center mt-10'>
//                         <div className='mini:text-[20px] tablet:text-[35px] text-[#748371]'>Productos Relacionados</div>
//                        <div>random cardlar</div>
//                     </div>
//                 </div>
//             );
//     }


//  }

// export default Details

import { useContext, useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { DATA } from '../../Context/DataContex';

function Details() {
    const { name, id, index } = useParams();
    console.log("ID: ", id, "Index: ", index); 
    const { tienda, ofertas } = useContext(DATA);
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentProduct, setCurrentProduct] = useState(null);
    const navigate = useNavigate();
    console.log(name);

    // Effect to update product details when params or data changes
    // useEffect(() => {
    //     let product = null;
        
    //     if (tienda?.length > 0) {
    //         // Check if indexes are valid
    //         if (index > 0 && id > 0 && tienda[index - 1]?.product?.[id - 1]) {
    //             product = tienda[index - 1].product[id - 1];
    //             navigate(`/details/${name}/${index}/${id}`);
    //         }
    //     } else if (ofertas?.length > 0) {
    //         // Check if index is valid
    //         if (id > 0 && ofertas[id - 1]) {
    //             product = ofertas[id - 1];
    //             navigate(`/details/${name}/${id}`);
    //         }
    //     }

    //     // If no valid product found, could redirect to error page or home
     

    //     setCurrentProduct(product);

    //     // Set initial selected image if not already set
    //     if (!selectedImage && product?.img?.length > 0) {
    //         setSelectedImage(product?.img[0]);
    //     }
    // }, [id, index, tienda, ofertas, navigate]);
    useEffect(() => {
        let product = null;
        
        if (name=="ofertas") {
            // Check if index is valid
            if (id > 0 && ofertas[id - 1]) {
                product = ofertas[id - 1];
            }
        } else if(name=="tienda"){
            // Check if indexes are valid
            if (index > 0 && id > 0 && tienda[index - 1]?.product?.[id - 1]) {
                product = tienda[index - 1].product[id - 1];
            }
 
        }

        // If no valid product found, could redirect to error page or home
     

        setCurrentProduct(product);

        // Set initial selected image if not already set
        if (!selectedImage && product?.img?.length > 0) {
            setSelectedImage(product?.img[0]);
        }
    }, [id, index, tienda, ofertas, navigate]);
    
    // If no product is loaded yet, you could show a loading state
    if (!currentProduct) {
        return <div>Loading...</div>;
    }

    const sizes = currentProduct.size || currentProduct.sizes || [];

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
                <div className='laptop:w-[40%] desktop:w-[60%]' style={{ fontFamily: "'Times New Roman', sans-serif" }}>
                    <h3 className='mini:text-[30px] mob:text-[50px] tablet:text-[65px] font-bold text-[#7A7A7A]  myfont'>
                        {currentProduct.name}
                    </h3>
                    <div className='text-[#748371] mini:text-[20px] mob:text-[25px] tablet:text-[40px]  myfont'>
                        Q{currentProduct.current}.00
                    </div>
                    <div className='text-[#748371] mini:text-[20px] mob:text-[25px] tablet:text-[30px] font-semibold  myfont'>
                        {currentProduct.text}
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
                    <button className='bg-[#d0c5ad] mini:text-[10px] mob:text-[13px] tablet:text-[16px] my-4 font-bold mini:px-4  tablet:px-6 py-2 rounded-[5px] border hover:bg-[#748371] hover:text-white transition duration-200 tablet:ml-12 laptop:ml-0'>
                        <Link to="/sebet" className='  '>Anadir al carrito</Link>
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
                {currentProduct.random && <div>random cardlar</div>}
            </div>
        </div>
    );
}

export default Details;