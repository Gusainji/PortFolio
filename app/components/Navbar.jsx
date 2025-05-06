import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = () => {

  const [isScroll, setIssScroll] =  useState(false);

  const sideMenuRef = useRef();

  const openMenu =  () => {
    sideMenuRef.current.style.transform = 'translate(-16rem)'
  }

  const closeMenu =  () => {
    sideMenuRef.current.style.transform = 'translate(16rem)'
  }

  useEffect(() => {
    window.addEventListener('scroll',()=>{
      if(scrollY > 50){
        setIssScroll(true)
      }else{
        setIssScroll(false)
      }
    })
  },[])

  return (
    <>

    <div className='fixed top-0 right-0 w-full h-full -z-10 overflow-hidden'>
      <Image src={assets.header_bg_color} alt='' className='w-full'
      />
    </div>

    <nav 
    className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""}`}>
      <a href="#top">
        <Image src={assets.name2} alt='' className='w-24 h-5 cursor-pointer mr-14'/>
      </a>

      <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" :"bg-white shadow-sm bg-opacity-50"} `}>
        <li><a href="#top">Home</a></li>
        <li><a href="#about">About me</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#work">My Work</a></li>
        <li><a href="#contact">Contact me</a></li>
      </ul>


      <div className='flex items-center gap-4'>

        <button> 
          <Image 
          className='w-6'
          src={assets.moon_icon} alt=''/>
        </button>

        <a className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4'
      href="#contact">Contact <Image src={assets.arrow_icon} alt='' className='w-3'/> 
      </a>

      <button className='block md:hidden ml-3' onClick={openMenu}><Image 
          className='w-6'
          src={assets.menu_black} alt=''/></button>
      </div>

{/* mobile menu ......................*/}
          <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>
            <div className='absolute right-6 top-6' onClick={closeMenu}>
              <Image src={assets.close_black} alt='' className='w-5 cursor-pointer'/>
            </div>
        <li><a onClick={closeMenu} href="#top">Home</a></li>
        <li><a onClick={closeMenu} href="#about">About me</a></li>
        <li><a onClick={closeMenu} href="#services">Services</a></li>
        <li><a onClick={closeMenu} href="#work">My Work</a></li>
        <li><a onClick={closeMenu} href="#contact">Contact me</a></li>
      </ul>
      
    </nav>
    </>
    
  )
}

export default Navbar
