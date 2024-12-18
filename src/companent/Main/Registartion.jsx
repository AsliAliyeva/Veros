import React from 'react'

function Registartion() {
  return (
    <div className='my-10 mini:mx-6 tablet:mx-40 tablet:my-20'>
       <div className='mx-auto w-full'><p className='bg-[#d0c5ad] mini:text-[25px] mob:text-[30px] tablet:text-[55px] text-center mini:w-[70%]  laptop:w-[30%] mx-auto' style={{ fontFamily: "'Frunchy', sans-serif" }} >Mi Cuenta</p></div> 
       <h3 className='mini:text-[25px] tablet:text-[40px] mini:my-10 tablet:my-20'>Acceder</h3>
       <form className='mob:border rounded mini:p-0 mob:p-8 border-[#d5d8dc]' action="">
            <p className='text-[#69727d] mb-2 font-semibold mini:text-[14px] tablet:text-[17px]'>Nombre de usuario o correo electrónico</p>
            <input className='bg-[#f9fafa] outline-none py-3 w-full' type="text" />
            <p className='text-[#69727d] mb-2 font-semibold mini:text-[14px] tablet:text-[17px]'>Contraseña</p>
            <input className='bg-[#f9fafa] outline-none py-3 w-full' type="password" />
            <div className='mt-8 flex mini:flex-col tablet:flex-row gap-4 items-start'>
                <button className='bg-[#d0c5ad] mini:text-[14px] tablet:text-[17px] mb-1 font-semibold mini:px-3 mob:px-7 py-3 rounded-[5px] border hover:bg-[#748371] hover:text-white transition duration-200'>Acceso</button>
                <div className='flex gap-2 items-center mt-2'>
                    <input type="checkbox"  />
                    <p className='text-[#69727d] font-semibold mini:text-[14px] tablet:text-[17px]'>Recuérdame</p>
                </div>
            </div>
            <div className='my-3'><a className='text-[#d0c5ad] font-semibold hover:text-[#748371] mini:text-[14px] tablet:text-[17px]' href="/">¿Olvidaste la contraseña?</a></div>
       </form>
    </div>
  )
}

export default Registartion