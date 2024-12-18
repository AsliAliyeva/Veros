import React, { useContext, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import bottle from '../../img/bottle.webp';

import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';
import { LiaWineBottleSolid } from 'react-icons/lia';
import { DATA } from './../../Context/DataContex';
import { Link } from 'react-router-dom';
import Tienda from './Tienda';


function Veramar() {
  const {collec} = useContext(DATA)
  const {slider} = useContext(DATA)
  const {ofertas} = useContext(DATA)
  const [reload, setReload] = useState(false);
  const [swiperRef, setSwiperRef] = useState(null);  

  return (
    <div id='veramar'>
        <div className=' mt-6'>
            <Swiper
                  spaceBetween={30}
                  effect={'fade'}
                  autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                  modules={[Autoplay, EffectFade]}
                  className="mySwiper relative mini:h-[25vh] mob:h-[50vh] laptop:h-[85vh]"
              >
                {slider.length > 0 &&  slider.map((item,index)=> {
                  return(
                  <SwiperSlide className="w-full h-full object-fill" key={index}>
                  <img className="w-full h-full object-cover"   src={item.url} />
                  </SwiperSlide>
                  )
                })
                }
                  
                  
              <div className='absolute flex flex-col items-end tablet:mr-4 mini:top-[5%] mob:top-[30%] tablet:top-[30%] right-10 z-10'>
                  <h1 style={{ fontFamily: "'Frunchy', sans-serif" }} className='text-white mini:text-[30px] mob:text-[60px] tablet:text-[95px] laptop:text-[150px] '>VERAMAR</h1>
                  <Link to={"/tienda"} className='bg-[#d0c5ad] mini:text-[10px] mob:text-[16px]  laptop:text-[20px] px-5 py-2 rounded-[5px] border-white hover:bg-[#748371] hover:text-white transition hover:scale-[110%] duration-150'>Ver Tienda</Link>
              </div>
              </Swiper>
        </div>
        <div className='w-[90%] tablet:w-[70%]  flex flex-col items-center mx-auto my-12'>
          <div className='bg-[#d0c5ad] text-[35px] tablet:text-[55px] px-1 mob:px-10 laptop:px-20 mb-4 text-center mx-auto my-1 '  style={{ fontFamily: "'Frunchy', sans-serif" }}>Descubre Veramar</div>
          <div className='text-[#7a7a7a] font-bold mini:[16px] mob:text-[24px] text-justify'style={{ fontFamily: "'Frunchy', sans-serif" }}>Somos una marca ecológica comprometida con la preservación del medio ambiente y la responsabilidad social. Diseñada por mujeres para mujeres, celebramos la diversidad y fortaleza femenina.</div>
        </div>
        <div className=' mini:w-[90%] mob:w-[70%] laptop:w-[80%]  mx-auto'>
          <video 
          className='w-full mini:h-[15vh] mob:h-[45vh] laptop:h-[80vh]'
          key={reload}  controls autoPlay loop muted
          >
            <source src="https://veramar.gt/wp-content/uploads/2024/10/Veramar-Institucional-720-Made-with-Clipchamp.mp4" type="video/mp4" />
          </video>
        </div>

        <div className='px-6 mt-12 mx-auto w-[90%]'>
          <div className='bg-[#d0c5ad] mini:w-[85%] tablet:w-[50%] mini:text-[25px]  mob:text-[35px] tablet:text-[55px] mb-4 text-center mx-auto my-1 '  style={{ fontFamily: "'Frunchy', sans-serif" }}>Nuestros Pilares</div>
          <div className='flex flex-col my-8 mx-auto tablet:flex-row mini:gap-2 tablet:gap-6 justify-between items-center'>
            <div className='flex flex-col items-center '>
                <img className='w-[280px] mini:h-[200px] tablet:h-[400px]' src={bottle} alt="" />
                <h3 className='text-[45px]' style={{ fontFamily: "'Frunchy', sans-serif" }}>Ecología</h3>
                <p className='text-[#7a7a7a] px-6 text-[15px] text-bold text-justify'>Veramar no solo fabrica trajes de baño, sino que lo hace con una profunda conciencia ecológica. Conscientes del impacto ambiental que genera el plástico, hemos decidido convertir un problema en una solución.</p>
            </div>
            <div className='flex flex-col items-center '>
                <img className='w-[280px] mini:h-[200px] tablet:h-[400px]' src={bottle} alt="" />
                <h3 className='text-[45px]' style={{ fontFamily: "'Frunchy', sans-serif" }}>Ecología</h3>
                <p className='text-[#7a7a7a] px-6 text-[15px] text-bold text-justify'>Veramar no solo fabrica trajes de baño, sino que lo hace con una profunda conciencia ecológica. Conscientes del impacto ambiental que genera el plástico, hemos decidido convertir un problema en una solución.</p>
            </div>
            <div className='flex flex-col items-center '>
                <img className='w-[280px] mini:h-[200px] tablet:h-[400px]' src={bottle} alt="" />
                <h3 className='text-[45px]' style={{ fontFamily: "'Frunchy', sans-serif" }}>Ecología</h3>
                <p className='text-[#7a7a7a] px-6 text-[15px] text-bold text-justify'>Veramar no solo fabrica trajes de baño, sino que lo hace con una profunda conciencia ecológica. Conscientes del impacto ambiental que genera el plástico, hemos decidido convertir un problema en una solución.</p>
            </div>
          </div>
        </div>

        <div className='mt-28'>
          <div className='bg-[#d0c5ad] mini:w-[85%] tablet:w-[50%] mini:text-[30px] tablet:text-[55px] mb-4 text-center mx-auto my-1 '   style={{ fontFamily: "'Frunchy', sans-serif" }}>Colecciones</div>
          <div className='w-full desktop:w-[85%] mini:gap-[5px] laptop:gap-[20px] mx-auto mt-12 items-center flex flex-col tablet:flex-row justify-between'>
          {collec.length > 0 &&  collec.map((item,index)=> {
            
              return (
                <div key={index} className='relative w-full'>
                  <img className='w-full mini:my-2 mob:my-6 mx-auto mini:object-cover mini:h-[60vh] mob:h-[70vh] laptop:h-[65vh] desktop:h-[80vh]  ' src={item.url} alt="" />
                  <div className='text-[#f7ede0] mini:text-[25px] mob:text-[30px] laptop:text-[40px] w-full text-center absolute bottom-6 tablet:bottom-4' style={{ fontFamily: "'Frunchy', sans-serif" }}>{item.heading}</div>
                </div>
              ) 
            })

            } 
              
          </div>
        </div>

        <div className='flex items-center justify-center mt-4 mb-8'><Link to={"/tienda"} className='bg-[#d0c5ad] font-bold px-6 py-2 mini:text-[13px] tablet:text-[18px] rounded-[5px] border-white hover:bg-[#748371] hover:text-white transition duration-150'>Ver Tienda</Link></div>

        <div className='my-16'>
          <div className='bg-[#d0c5ad] mob:mt-16 laptop:mt-28 mini:w-[85%] tablet:w-[45%] mini:text-[30px] tablet:text-[40px] laptop:text-[55px] mb-5 text-center mx-auto  '   style={{ fontFamily: "'Frunchy', sans-serif" }}>Ofertas de Temporada</div>
          <div className='hidden laptop:flex flex-row items-center justify-between gap-6 w-[80%] mx-auto py-6' style={{ fontFamily: "'Frunchy', sans-serif" }} >
            {
              ofertas.length > 0 &&  ofertas.map((item,index)=> {
                                
                return(
                  <div className='w-[33%]' key={index}>
              <div className='w-full'><img className='h-[75vh] w-full ' src={item.img[0]} alt="" /></div>
              <div className='flex flex-col font-semibold items-start'>
                <h3 className='text-[55px]  font-normal text-[#7A7A7A] '>{item.name}</h3>
                <div className='flex justify-between text-[#748371] text-[30px] '>
                  <h6>Recicla</h6>
                  <div className='flex '>
                    <LiaWineBottleSolid />
                    <p>{item.bottle}</p>
                  </div>
                </div>
                <div className='text-[#748371] text-[30px]'>
                  <p>Q{item.precious}.00  {/* ustuxetli*/}</p>
                  <p>Q{item.current}.00 {/* altixetli*/}</p>
                </div>
                <div><button className='bg-[#d0c5ad] text-[#788573] font-bold px-2 py-1 text-[26px]  border-white hover:bg-[#748371] hover:text-white transition duration-150'>Seleccionar opciones</button></div>
              </div>
            </div>
                )
              })
                  
            }
          </div>


          {/* tablet ucun sviper */}
          <div className=' mini:hidden tablet:block laptop:hidden my-8'>
          <Swiper
            onSwiper={setSwiperRef}
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={30}
            pagination={{
              type: 'fraction',
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            style={{ fontFamily: "'Frunchy', sans-serif" }} 
          >
            {
              ofertas.length > 0 &&  ofertas.map((item,index)=> {
                return(
                  <SwiperSlide key={index}>
                  <div><img className='h-[50vh]' src={item.img[0]} alt="" /></div>
                  <div className='flex flex-col font-semibold items-start mini:pl-[20px] mob:pl-12 tablet:pl-0'>
                    <h3 className='text-[40px]  font-normal text-[#7A7A7A] '>{item.name}</h3>
                    <div className='flex justify-between text-[#748371] mini:text-[20px] mob:text-[25px] '>
                      <h6>Recicla</h6>
                      <div className='flex '>
                        <LiaWineBottleSolid />
                        <p>{item.bottle}</p>
                      </div>
                    </div>
                    <div className='text-[#748371] mini:text-[20px] mob:text-[25px]'>
                      <p>Q{item.precious}.00  {/* ustuxetli*/}</p>
                      <p>Q{item.current}.00 {/* altixetli*/}</p>
                    </div>
                    <div><button className='bg-[#d0c5ad] text-[#788573] font-bold px-2 py-1 text-[20px]  border-white hover:bg-[#748371] hover:text-white transition duration-150'>Seleccionar opciones</button></div>
                  </div>
                </SwiperSlide>
                )
              })}
                   
          </Swiper>
          </div>


                    {/* mob ucun sviper */}
            <div className='mini:block tablet:hidden my-4'>
              <Swiper 
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Pagination]}
              pagination={true} 
              className="mySwiper"
              style={{ fontFamily: "'Frunchy', sans-serif" }} >
                {
                  ofertas.length > 0 &&  ofertas.map((item,index)=> {
                    return(
                      <SwiperSlide key={index}>
                      <div className='mini:w-[70%]  mx-auto'><img src={item.img[0]} alt="" /></div>
                      <div className='flex flex-col  text-[25px] font-semibold items-start mini:pl-[20px] mob:pl-12 tablet:pl-0'>
                        <h3 className='mini:text-[30px] mob:text-[50px] font-normal text-[#7A7A7A] '>{item.name}</h3>
                        <div className='flex justify-between text-[#748371] mini:text-[20px] mob:text-[25px] '>
                          <h6>Recicla</h6>
                          <div className='flex '>
                            <LiaWineBottleSolid />
                            <p>{item.bottle}</p>
                          </div>
                        </div>
                        <div className='text-[#748371] mini:text-[20px] mob:text-[25px]'>
                          <p>Q{item.precious}.00  {/* ustuxetli*/}</p>
                          <p>Q{item.current}.00 {/* altixetli*/}</p>
                        </div>
                        <div><button className='bg-[#d0c5ad] text-[#788573] font-bold px-2 py-1 mini:text-[13px] mob:text-[16px]  border-white hover:bg-[#748371] hover:text-white transition duration-150'>Seleccionar opciones</button></div>
                      </div>
                    </SwiperSlide>
                    )
                  })}
                              
              </Swiper>
            </div>
    
          <div></div>
        </div>
    </div>
  )
}

export default Veramar