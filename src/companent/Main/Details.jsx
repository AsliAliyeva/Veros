import React, { useContext, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { DATA } from '../../Context/DataContex';

function Details() {
    const { id, index } = useParams()
    // console.log(index, id);
    
    const { tienda } = useContext(DATA)
    const {ofertas} = useContext(DATA)
    if (tienda.length > 0) {
         
        const elemet = tienda[index - 1].product[id - 1]
        // console.log(elemet.img)

        return (
            <>
                {
                   <div className='m-4'>
                        <div className='flex mini:flex-col laptop:flex-row gap-2'>
                            <div className='flex  mini:flex-col tablet:flex-row tablet:mt-6 laptop:w-[60%] desktop:w-[40%]'>
                                <div className='flex mini:items-start tablet:flex-col gap-1 mini:my-2  tablet:my-0 mini:order-1 tablet:order-[-1] mini:h-[20vh]'>
                                {elemet.img && elemet.img.slice(1).map((pic, i) => {
                                    return (
                                        <div className='flex' key={i}>
                                            <img className=' object-cover flex-shrink-0 max-h-[10vh]' src={pic} alt={`image-${i + 1}`} />
                                        </div>
                                    )
                                })}
                                </div>
                                
                                <div className='mini:w-[90%] mob:w-[80%]  mx-auto'><img className='mini:h-[50vh] mob:h-[70vh] tablet:h-[90vh] w-full mini:object-cover tablet:object-contain ' src={elemet.img[0]} alt="" /></div>
                            </div>
                            <div className='laptop:w-[40%] desktop:w-[60%]' style={{ fontFamily: "'Times New Roman', sans-serif" }}>
                                <h3  className='mini:text-[30px] mob:text-[50px] font-normal text-[#7A7A7A] '>{elemet.name}</h3> 
                                <div className='text-[#748371] mini:text-[20px] mob:text-[25px]'>Q{elemet.current}</div>                  
                                <div className='text-[#748371] mini:text-[20px] mob:text-[25px]'>{}</div>                  
                                <div className='text-[#748371] mini:text-[20px] mob:text-[25px]'>{elemet.text}</div>   
                                <div className='flex justify-center  gap-4 mini:items-center laptop:justify-start my-2'>
                                    <p className='text-[#748371] mini:text-[20px] mob:text-[25px]'>Talla</p>
                                    <div className='flex flex-wrap'>
                                    {
                                        elemet.size && elemet.size.map((size, i)=> {

                                            return (
                                                <div key={i}>
                                                    <button className='border w-[30px] rounded-[50%] transition-all duration-300 ease-in-out hover:scale-110 hover:border-2 hover:border-[#D3D3D3]'>{size}</button>
                                                </div>
                                            )
                                        })
                                    }
                                    </div>
                                </div> 
                                <button className='bg-[#d0c5ad] mini:text-[12px] tablet:text-[16px] my-4 font-bold px-6 py-2 rounded-[5px] border hover:bg-[#748371] hover:text-white transition duration-200 tablet:ml-12 laptop:ml-0 '><Link to={"/sebet"}>Anadir al carrito</Link></button>
                                <div className='flex items-center flex-col laptop:items-start'>
                                    <p className='mini:text-[20px] tablet:text-[30px] '>¿No conoces tu talla?</p>
                                    <Link to={"/table"} className='bg-[#d0c5ad] mini:text-[12px] tablet:text-[16px] my-4 font-bold px-6 py-2 rounded-[5px] border hover:bg-[#748371] hover:text-white transition duration-200'>Ver tabla de medidas</Link>
                                </div>            
                            </div>
                        </div>
                        <div className='flex flex-col items-center mt-10'>
                            <div className='mini:text-[20px] tablet:text-[35px] text-[#748371]'>Productos Relacionados</div>
                            <div>random cardlar</div>
                        </div>
                   </div>
                   
                }
            </>
        )
    }
    else if (ofertas.length >0) {
        const item = ofertas[index-1] 
        return (
            <>
            {item && item.index}
            </>
        )
    }

}

export default Details