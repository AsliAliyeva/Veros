import React from 'react'
import { Link } from 'react-router-dom'
import "./../../index.css"

function Blog() {
  return (
    <div>
        <div id='blog' className='flex flex-col justify-center mini:h-[50vh] tablet:h-[75vh] w-[85%] mx-auto my-6'>
            <div className='mini:w-[90%] mob:w-[70%] mx-auto bg-black bg-opacity-30 text-white  text-center' style={{ fontFamily: "'Frunchy', sans-serif" }} >
                <h1 className='mini:text-[30px] mob:text-[45px] tablet:text-[60px] laptop:text-[120px]'>Blog</h1>
                <p className='font-semibold mini:text-[18px] tablet:text-[25px] laptop:text-[33px]'>¡Bienvenidos al rincón de la sostenibilidad en el blog de Veramar </p>
                <p className='font-semibold mini:text-[18px] tablet:text-[25px] laptop:text-[33px]'>Aquí exploramos cómo la moda y la responsabilidad ambiental pueden ir de la mano.</p>
            </div>
        </div>
        <div className='mt-10 mb-14  mini:w-[100%] mob:w-[85%] tablet:w-[70%] mini:mx-auto tablet:mx-0 tablet:ml-16 laptop:ml-20 desktop:ml-28 laptop:w-[50%]'>
            <Link to={"/article"}>
                <div id='blog1' className='mini:h-[30vh] tablet:h-[40vh] mb-6 mini:w-[100%] tablet:w-[70%] '></div>
                <div >
                    <h3
                    style={{ fontFamily: "'Frunchy', sans-serif" }} 
                    className='text-[#748371] mini:text-[35px] tablet:text-[45px]'>Uniendo fuerzas por mares más limpios: Veramar y 4ocean</h3>
                    <p className='text-[#7A7A7A] mini:text-[16px] laptop:text-[18px] laptop:font-semibold my-4'>Uniendo fuerzas por mares más limpios: Veramar y 4ocean En Veramar, creemos que la moda puede ser una fuerza para</p>
                    <p className='text-[#d0c5ae] text-[16px] italic my-2 font-semibold'>Leer Más</p>
                    <hr className='bg-black h-[1px] border-0' />
                    <p className='text-[#748371] font-semibold text-[18px] my-2'>Octubre 23, 2024</p>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Blog