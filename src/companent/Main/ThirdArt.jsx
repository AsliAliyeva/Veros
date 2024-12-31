import React from 'react'
import inclusion from '../../img/inclusion.webp';
import { Link } from 'react-router-dom';

function ThirdArt() {
    return (
        <div>
            <div>
                <div className='bg-[#d0c5ad] mini:w-[85%] tablet:w-[55%] laptop:w-[35%] mini:text-[30px] tablet:text-[53px] mb-10 text-center mx-auto my-10 ' style={{ fontFamily: "'Frunchy', sans-serif" }}>Mujeres para Mujeres</div>
                <p className='text-[#7A7A7A] mx-auto  font-bold w-[80%] mini:text-[10px] mob:text-[16px] laptop:text-[20px]'>Veramar, creemos en el poder transformador de la mujer. Más que una marca de moda, somos una comunidad que celebra la fuerza, la resiliencia y la creatividad femenina. Nuestras prendas están diseñadas por mujeres para mujeres, con un profundo entendimiento de las necesidades y deseos del cuerpo femenino.</p>
            </div>
            <div className='flex flex-col laptop:flex-row mt-10 mb-4 items-start justify-between w-[90%] laptop:w-[80%] mx-auto'>
                <div className=' laptop:w-[50%]'>
                    <div className='bg-[#d0c5ad] mini:w-[85%] tablet:w-[80%] mini:text-[20px] mob:text-[35px] tablet:text-[45px] mx-auto laptop:ml-0 mb-10 text-center  ' style={{ fontFamily: "'Frunchy', sans-serif" }}>Inclusión y Empoderamiento</div>
                    <p className='text-[#7A7A7A] mx-auto laptop:ml-0 font-semibold w-[80%] mini:text-[10px] mob:text-[16px] laptop:text-[20px] mb-2'>Creemos en la belleza en todas sus formas y tallas. Nuestros diseños están pensados para realzar la figura femenina, ofreciendo opciones para cada estilo y personalidad. En Veramar, todas las mujeres son bienvenidas.</p>
                    <p className='text-[#7A7A7A] mx-auto laptop:ml-0 font-semibold w-[80%] mini:text-[10px] mob:text-[16px] laptop:text-[20px]'>Al elegir Veramar, te unes a un movimiento que busca inspirar y apoyar a la mujer. Juntas, construimos un futuro donde la solidaridad, la inclusión y el empoderamiento femenino son los pilares de una sociedad más justa.</p>
                </div>
                <div className='laptop:w-[50%] flex tablet:justify-end mt-14 laptop:mt-0 mx-auto'>
                    <img className='mini:h-[50vh] tablet:h-[65vh]' src={inclusion} alt="inclusion" />
                </div>
            </div>
            <div className='my-8 flex flex-col mob:flex-row justify-between mini:text-center tablet:w-[80%] laptop:w-[30%] mx-auto'>
                <Link to={"/"} className='bg-[#d0c5ad] mini:my-4 mob:my-0 mini:text-[10px] mob:text-[16px]  laptop:text-[16px] px-5 py-2 rounded-[5px] border-white hover:bg-[#748371] hover:text-white transition hover:scale-[110%] duration-150 font-semibold'>Volver</Link>
                <Link to={"/tienda"} className='bg-[#d0c5ad] mini:text-[10px] mob:text-[16px]  laptop:text-[16px] px-5 py-2 rounded-[5px] border-white hover:bg-[#748371] hover:text-white transition hover:scale-[110%] duration-150 font-semibold'>Ver Tienda</Link>
            </div>
        </div>
    )
}

export default ThirdArt