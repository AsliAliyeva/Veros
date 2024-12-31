import React from 'react'
import bottle from '../../img/bottle.webp';
import plastico from '../../img/plastico.webp';
import { Link } from 'react-router-dom';

function FirstArt() {
  return (
    <div>
      <div className='w-[90%] mx-auto '>
        <div className='bg-[#d0c5ad] mini:w-[85%] tablet:w-[25%] mini:text-[30px] tablet:text-[53px] mb-10 text-center mx-auto my-10 ' style={{ fontFamily: "'Frunchy', sans-serif" }}>Ecologiya</div>
        <p className='text-[#7A7A7A] mx-auto  font-bold w-[80%] mini:text-[10px] mob:text-[16px] laptop:text-[20px]'>En Veramar, nuestra conexión con el mar va más allá de la inspiración para nuestros diseños. Creemos que la belleza de nuestros océanos debe ser protegida y preservada para las futuras generaciones. Por eso, la sostenibilidad es el corazón de nuestra marca y se manifiesta en cada paso del proceso de creación de nuestros trajes de baño.</p>
        <div className='flex flex-col laptop:flex-row justify-between my-8'>
          <div className='laptop:w-[50%]'>
            <div className='bg-[#d0c5ad] mini:w-[70%] tablet:w-[75%] mini:text-[30px] tablet:text-[53px] mb-10 text-center mx-auto my-10 ' style={{ fontFamily: "'Frunchy', sans-serif" }}>Ecologiya</div>
            <div className='laptop:px-16'>
              <p className='text-[#7A7A7A] my-3  font-bold mini:text-[10px] mob:text-[16px] laptop:text-[20px]'>Veramar no solo fabrica trajes de baño, sino que lo hace con una profunda conciencia ecológica. Conscientes del impacto ambiental que genera el plástico, hemos decidido convertir un problema en una solución.</p>
              <p className='text-[#7A7A7A]  font-bold mini:text-[10px] mob:text-[16px] laptop:text-[20px]'>Recolectamos botellas de plástico que de otra manera contaminarían nuestros océanos y mediante un proceso innovador, las transformamos en la tela con la que elaboramos nuestros hermosos trajes de baño.</p>
            </div>
          </div>
          <div className=' hidden tablet:flex  laptop:w-[50%]  gap-4 '>
            <img className='w-[50%] object-contain' src={bottle} alt="" />
            <img className='w-[50%] object-contain' src={plastico} alt="" />
          </div>
        </div>
        <div className='flex flex-col laptop:flex-row my-4 '>
          <div className='laptop:w-[50%]'>
            <video
              className='w-full ' controls autoPlay loop muted
            >
              <source className='' src="https://veramar.gt/wp-content/uploads/2024/10/Veramar-por-el-Mar-Made-with-Clipchamp.mp4" type="video/mp4" />
            </video>
          </div>
          <div className='laptop:w-[50%]'>
            <div className='bg-[#d0c5ad] mini:w-[85%] tablet:w-[75%] mini:text-[30px] tablet:text-[53px] mb-10 text-center mx-auto my-10 ' style={{ fontFamily: "'Frunchy', sans-serif" }}>Veramar por el Mar</div>
            <p className='text-[#7A7A7A] mx-auto  font-bold w-[80%] mini:text-[10px] mob:text-[16px] laptop:text-[20px]'>El movimiento “Veramar por el Mar” es una iniciativa inspiradora que une a voluntarios apasionados por la conservación de nuestros océanos. Con un profundo amor por las playas de El Paredón, estos héroes ambientales se reúnen periódicamente para llevar a cabo jornadas de limpieza, recolectando residuos plásticos y otros desechos que contaminan la costa.</p>
          </div>
        </div>
        <div className='my-8 flex flex-col mob:flex-row justify-between mini:text-center tablet:w-[80%] laptop:w-[30%] mx-auto'>
          <Link to={"/"} className='bg-[#d0c5ad] mini:my-4 mob:my-0 mini:text-[10px] mob:text-[16px]  laptop:text-[16px] px-5 py-2 rounded-[5px] border-white hover:bg-[#748371] hover:text-white transition hover:scale-[110%] duration-150 font-semibold'>Volver</Link>
          <Link to={"/tienda"} className='bg-[#d0c5ad] mini:text-[10px] mob:text-[16px]  laptop:text-[16px] px-5 py-2 rounded-[5px] border-white hover:bg-[#748371] hover:text-white transition hover:scale-[110%] duration-150 font-semibold'>Ver Tienda</Link>
        </div>
      </div>
    </div>
  )
}

export default FirstArt