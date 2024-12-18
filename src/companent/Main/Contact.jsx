import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import bottle from '../../img/bottle.webp';

import { Autoplay, EffectFade } from 'swiper/modules';
import { IoCallSharp } from 'react-icons/io5';
import { FaLocationDot } from 'react-icons/fa6';
import { MdOutlineMail } from 'react-icons/md';
import { useContext } from 'react';
import { DATA } from '../../Context/DataContex';

function Contact() {
  const {slider} = useContext(DATA)

  return (
    <div>
      <div className=' mt-6 mini:mb-10 tablet:mb-16'>
        <Swiper
          spaceBetween={30}
          effect={'fade'}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, EffectFade]}
          className="mySwiper relative mini:h-[25vh] mob:h-[50vh] laptop:h-[75vh]"
        >
          {slider.length > 0 &&  slider.map((item,index)=> {
                  return(
                  <SwiperSlide className="w-full h-full object-fill" key={index}>
                  <img className="w-full h-full object-cover"   src={item.url} />
                  </SwiperSlide>
                  )
                })
                }
          

          <div className='absolute flex flex-col items-end tablet:mr-4 mini:top-[5%] mob:top-[30%] tablet:top-[30%] mini:right-10 tablet:right-24 z-10'>
            <h1 style={{ fontFamily: "'Frunchy', sans-serif" }} className='text-white mini:text-[25px] mob:text-[60px] tablet:text-[95px] laptop:text-[120px] '>CONTACTO</h1>
          </div>
        </Swiper>
      </div>

      <div className='flex justify-between mini:flex-col tablet:flex-row mini:w-[90%] mx-auto mini:mb-3 tablet:mb-10 laptop:w-[85%] mini:pl-1 mob:pl-6 tablet:pl-16'>
        <div className='text-[#748371] font-bold tablet:w-[35%] mb-6'    style={{ fontFamily: "'Frunchy', sans-serif" }} >
          <h4 className='mini:text-[25px] mob:text-[30px] tablet:text-[50px] mini:text-center mob:text-left'>Contáctanos</h4>
          <div className='flex mini:flex-col mob:flex-row items-center gap-4 my-3'>
            <IoCallSharp className='mini:text-[18px] mob:text-[23px] tablet:text-[30px]' />
            <a href="tel:+56239313" className='mini:text-[15px] mob:text-[20px] tablet:text-[22px] laptop:text-[27px]'>5623.9313</a>
          </div>
          <div className='flex mini:flex-col mob:flex-row items-center gap-4'>
            <FaLocationDot className='mini:text-[18px] mob:text-[23px] tablet:text-[30px] my-3' />
            <p className='mini:text-[15px] mob:text-[18px] tablet:text-[22px] laptop:text-[27px]'>Caserío El Milagro, 3 calle lote 78, Sipacate, El Paredón Buena Vista 00000</p>
          </div>
          <div className='flex mini:flex-col mob:flex-row items-center gap-4 my-3'>
            <MdOutlineMail className='mini:text-[18px] mob:text-[23px] tablet:text-[30px]' />
            <a href="mailto:corporacionveramar@gmail.com" className='mini:text-[13px] mob:text-[18px] tablet:text-[22px] laptop:text-[27px]'>corporacionveramar@gmail.com</a>
          </div>
        </div>

        <form className='flex flex-col items-start mini:w-full tablet:w-[40%]  font-semibold'>
          <p className='text-[#748371] mini:text-[14px] tablet:text-[17px] '>Nombre Completo</p>
          <input className='py-2 w-full border-b px-2 border-black outline-[#e5e5e5]' type="text" placeholder='Nombre' />
          <p className='text-[#748371] mini:text-[14px] tablet:text-[17px] '>Número de Teléfono</p>
          <input className='py-2 w-full border-b px-2 border-black  outline-[#e5e5e5]'  type="number" placeholder='Número' />
          <p className='text-[#748371] mini:text-[14px] tablet:text-[17px] '>Correo electrónico</p>
          <input required className='py-2 w-full px-2 border-b  border-black  outline-[#e5e5e5]'  type="email" placeholder='Correo electrónico' />
          <p className='text-[#748371] mini:text-[14px] tablet:text-[17px] '>Déjanos un Mensaje</p>
          <textarea className='py-2 w-full border-b px-2 border-black mb-2  outline-[#e5e5e5]'  placeholder='Mensaje' ></textarea>
          <button className='bg-[#d0c5ad] font-semibold mini:text-[12px] tablet:text-[16px] mb-1 px-6 py-2 rounded-[5px] border hover:bg-[#748371] hover:text-white transition duration-200'>Enviar</button>
        </form>
      </div>

      <div className='mx-auto w-[90%] h-[70vh] tablet:h-[100vh] my-16'>
        <iframe className='w-full h-full' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1936.340683941571!2d-91.068162!3d13.917984!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8588c94b301f2bc5%3A0xfb217999d10c888c!2sVeramar%20El%20Pared%C3%B3n!5e0!3m2!1saz!2sus!4v1732660341866!5m2!1saz!2sus"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      
    </div>
  )
}

export default Contact