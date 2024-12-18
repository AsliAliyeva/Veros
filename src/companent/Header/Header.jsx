import React from 'react'
import logo from '../../img/logo.webp'
import veramar from '../../img/veramar.png'
import { FaBars, FaRegUser } from 'react-icons/fa'
import { MdOutlineShoppingBag } from 'react-icons/md'

import { useState } from "react";
import { IoMdClose } from 'react-icons/io'
import { Link, NavLink } from 'react-router-dom'
import { IoCloseSharp } from "react-icons/io5";

 

function Header() {

  const [isOpen, setIsOpen] = useState(false);
  const [isBasket, setBasket] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const openBasket = () => {
    setBasket(true);
  };

  const closeBasket = () => {
    setBasket(false);
  }
  return (
    <div className='relative'>
        <div className='flex justify-between items-center w-[90%] mx-auto my-4 laptop:w-[75%]'>
            <Link to={"/"}><img className='w-[70px] max-h-[70px] tablet:max-h-[90px] tablet:w-[90px]' src={logo} alt="logo" /></Link>
            <div ><img className='m-auto max-h-[60px] tablet:w-[300px] tablet:max-h-[100px] ' src={veramar} alt="" /></div>
            <div></div>
        </div>
        <div className=' mob:w-[80%] tablet:w-[60%]  flex-col tablet:flex-row mx-auto mt-8 flex justify-between items-center'>
            <div className=' w-[50%] mb-5 tablet:mb-0 items-center tablet:gap-x-10 laptop:w-[20%] flex flex-wrap justify-between '>
              <button className='bg-[#d0c5ad] mini:text-[12px] tablet:text-[16px] mb-1 font-bold px-6 py-2 rounded-[5px] border hover:bg-[#748371] hover:text-white transition duration-200'><Link to={"/tienda"}>Tienda</Link></button>
              <div 
                  className='bg-[#f2f2f2] flex laptop:hidden  border rounded cursor-pointer mb-1'
                  onClick={toggleMenu}
                  >
                  <FaBars className={` ${isOpen ? "hidden" : "block"} text-[18px] tablet:text-[22px] m-2 ` } />
                  <IoMdClose className={` ${isOpen ? "block" : "hidden"}  text-[35px] p-1` }  />
              </div>

            </div>
            <ul id='deskbar' className='hidden laptop:flex justify-center  w-[60%]'>
              <li className='font-semibold hover:text-[#7A7A7A] border-transparent  border-b-[4px] px-4 py-2 mx-2 hover:border-[#d0c5ad] transition duration-200 text-[17px] '><NavLink to={"/"}  >Veramar</NavLink></li>
              <li className='font-semibold hover:text-[#7A7A7A] border-transparent  border-b-[4px] px-4 py-2 mx-2 hover:border-[#d0c5ad] transition duration-200 text-[17px]'><NavLink to={"/blog"}  >Blog</NavLink></li>
              <li className='font-semibold hover:text-[#7A7A7A] border-transparent  border-b-[4px] px-4 py-2 mx-2 hover:border-[#d0c5ad] transition duration-200 text-[17px]'><NavLink to={"/contact"} >Contacto</NavLink></li>
            </ul>
            
            <div className='flex items-center gap-[25px]'>
              <Link to={"/registr"}><FaRegUser className='w-[20px] h-[18px] tablet:w-[30px] tablet:h-[25px] cursor-pointer ' /></Link>
              <div className='relative'>
                <MdOutlineShoppingBag 
                onClick={openBasket}
                className='w-[25px] h-[20px] tablet:w-[35px] tablet:h-[28px] cursor-pointer hover:text-[#8e959d]'  />
                <div className='absolute top-[-5px] right-0 bg-[#748371] border rounded-[50%] px-1 text-[10px] tablet:text-[12px] text-white'>0</div>
              </div>
            </div>
            <div
        className={`fixed z-20 top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ${
          isBasket ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          onClick={closeBasket}
          className="absolute top-4 right-4 text-[30px] rounded-lg"
        >
          <IoCloseSharp />
        </button>

        <div className="p-6">
          <h3 className="text-xl font-semibold">Basket</h3>
          <p>Item 1</p>
          <p>Item 2</p>
          <p>Item 3</p>
        </div>
      </div>




        </div>
        <div 
              className={`${isOpen ? "max-h-[30vh]" : "max-h-0 "} flex laptop:hidden overflow-hidden  absolute mt-1  w-[100%] top-[100%] flex-col bg-[#748371] text-[#f7edde] transition-all duration-500 ease-in-out z-10 `}
              >
                <NavLink to={"/"} className='hover:bg-[#d0c5ad] hover:text-[#748371] pl-4 py-2 mini:text-[16px] tablet:text-[20px] font-semibold transition duration-200'>Veramar</NavLink>
                <NavLink to={"/blog"} className='hover:bg-[#d0c5ad] hover:text-[#748371] pl-4 py-2 mini:text-[16px] tablet:text-[20px] font-semibold transition duration-200'>Blog</NavLink>
                <NavLink to={"/contact"} className='hover:bg-[#d0c5ad] hover:text-[#748371] pl-4 py-2 mini:text-[16px] tablet:text-[20px] font-semibold transition duration-200'>Contacto</NavLink>
        </div>
    </div>
  )
}

export default Header