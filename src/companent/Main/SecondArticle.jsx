import React from 'react'
import { Link } from 'react-router-dom'

function SecondArticle() {
    return (
        <div>
            <div>
                <h1 className='bg-[#d0c5ad] mini:w-[85%] tablet:w-[40%] laptop:w-[35%] mini:text-[30px] tablet:text-[40px] laptop:text-[53px] mb-10 text-center mx-auto my-10 ' style={{ fontFamily: "'Frunchy', sans-serif" }}>Responsabilidad Social</h1>
                <p className='text-[#7A7A7A] mx-auto  font-bold w-[80%] mini:text-[10px] mob:text-[16px] laptop:text-[20px]'>En Veramar y mi eelo, creemos que la moda y la responsabilidad social van de la mano. No se trata solo de crear productos hermosos y de alta calidad, sino también de generar un impacto positivo en el mundo que nos rodea. Nos apasiona contribuir a un futuro más sostenible y justo</p>
            </div>
            <div className='flex flex-col laptop:flex-row mt-10 mb-4 w-[90%] mx-auto'>
                <div className='laptop:w-[50%]'>
                    <video
                        className='w-full ' controls autoPlay loop muted
                    >
                        <source className='' src="https://veramar.gt/wp-content/uploads/2024/10/Mi-Eelo-Made-with-Clipchamp-1.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className='laptop:w-[50%] mt-8 tablet:mb-0'>
                    <div className='bg-[#d0c5ad] mini:w-[85%] tablet:w-[75%] mini:text-[30px] tablet:text-[53px] mb-10 text-center mx-auto ' style={{ fontFamily: "'Frunchy', sans-serif" }}>mi eelo</div>
                    <p className='text-[#7A7A7A] mx-auto  font-bold w-[80%] mini:text-[10px] mob:text-[16px] laptop:text-[20px]'>mi eelo es mucho más que una organización, es un motor de cambio social que se dedica a empoderar a mujeres en situación de riesgo, brindándoles no solo un trabajo digno, sino también la oportunidad de transformar sus vidas. A través de la capacitación y el acompañamiento, les brindan las herramientas necesarias para alcanzar su independencia económica y emocional, rompiendo ciclos de desigualdad y abriendo caminos hacia un futuro más prometedor. Mi eelo no solo crea productos de alta calidad, sino que también teje historias de resiliencia y esperanza, demostrando el poder transformador del trabajo digno y la solidaridad.</p>
                </div>
            </div>
            <div className='my-8 flex flex-col mob:flex-row justify-between mini:text-center tablet:w-[30%] mx-auto'>
                <Link to={"/"} className='bg-[#d0c5ad] mini:my-4 mob:my-0 mini:text-[10px] mob:text-[16px]  laptop:text-[16px] px-5 py-2 rounded-[5px] border-white hover:bg-[#748371] hover:text-white transition hover:scale-[110%] duration-150 font-semibold'>Volver</Link>
                <Link to={"/tienda"} className='bg-[#d0c5ad] mini:text-[10px] mob:text-[16px]  laptop:text-[16px] px-5 py-2 rounded-[5px] border-white hover:bg-[#748371] hover:text-white transition hover:scale-[110%] duration-150 font-semibold'>Ver Tienda</Link>
            </div>
        </div>
    )
}

export default SecondArticle