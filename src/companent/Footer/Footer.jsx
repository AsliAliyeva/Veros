import React, { useState } from 'react'
import { FaBars, FaFacebookF, FaInstagram } from 'react-icons/fa'
import logoFinal from '../../img/Logo-final.png'
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';

function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='bg-[#748371] text-white '>
      <div className='w-[90%]  mx-auto  flex flex-col tablet:flex-row items-center tablet:items-start justify-between'>
        <div className='pt-20'>
            <h3 className='mb-8 font-bold'>¡Síguenos en nuestras redes!</h3>
            <div className='flex justify-center'>
              <a href="#"><FaFacebookF className='font-bold text-[25px] mr-6 hover:scale-[70%] duration-150' /></a>
              <a href="#"><FaInstagram className='font-bold text-[25px] hover:scale-[70%] duration-150' /></a>
            </div>
        </div>
        <div >
          <Link to={"/"}><img className='mob:max-w-[200px] tablet:max-w-[275px]' src={logoFinal} alt="VeraMar" /></Link>
        </div>
        <div>
          <ul className='hidden tablet:flex flex-col justify-center pt-16 '>
            <li className='font-semibold  border-transparent  border-b-[3px] px-6  py-2 hover:border-[#d0c5ad] transition duration-200 text-[15px] '><Link to={"/"} >Veramar</Link></li>
            <li className='font-semibold  border-transparent  border-b-[3px] px-6  py-2 hover:border-[#d0c5ad] transition duration-200 text-[15px] '><Link to={"/tienda"} >Tienda</Link></li>
            <li className='font-semibold  border-transparent  border-b-[3px] px-6  py-2 hover:border-[#d0c5ad] transition duration-200 text-[15px]'><Link to={"/blog"} >Blog</Link></li>
            <li className='font-semibold  border-transparent  border-b-[3px] px-6  py-2 hover:border-[#d0c5ad] transition duration-200 text-[15px]'><Link to={"/contact"} >Contacto</Link></li>
          </ul>


          <div className='flex flex-col items-center tablet:hidden cursor-pointer mb-4 tablet:mt-20'>
          <div onClick={toggleMenu}>
              <FaBars className={` ${isOpen ? "hidden" : "block"} text-[22px] m-2 hover:text-[#d0c5ad]` } />
              <IoMdClose className={` ${isOpen ? "block" : "hidden"}  text-[35px] p-1 hover:text-[#d0c5ad]` }  />
          </div>
          <ul className={`${isOpen ? "max-h-[30vh] " : "max-h-0 hidden "} flex overflow-hidden  mt-1 w-[80vw] flex-col text-[#f7edde] transition-all duration-500 ease-in-out bg-[#d0c5ad]   `}>
            <li className='font-semibold text-[#7A7A7A] border-transparent  border-b-[4px] pl-8 py-2 hover:border-[#d0c5ad] transition duration-200 text-[15px] hover:bg-[#f7ede0]'><Link to={"/"}>Veramar</Link></li>
            <li className='font-semibold text-[#7A7A7A] border-transparent  border-b-[4px] pl-8 py-2 hover:border-[#d0c5ad] transition duration-200 text-[15px] hover:bg-[#f7ede0]'><Link to={"/tienda"}>Tienda</Link></li>
            <li className='font-semibold text-[#7A7A7A] border-transparent  border-b-[4px] pl-8 py-2 hover:border-[#d0c5ad] transition duration-200 text-[15px] hover:bg-[#f7ede0]'><Link to={"/blog"}>Blog</Link></li>
            <li className='font-semibold text-[#7A7A7A] border-transparent  border-b-[4px] pl-8 py-2 hover:border-[#d0c5ad] transition duration-200 text-[15px] hover:bg-[#f7ede0]'><Link to={"/contact"}>Contacto</Link></li>
          </ul>
          </div>
        </div>

      </div>
      <div className='font-semibold flex justify-center items-center pb-[15px] mini:text-[12px] tablet:text-[18px]'>
        ©2024 Veramar. Todos los derechos reservados.
      </div>
    </div>
  )
}

export default Footer