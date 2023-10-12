
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <nav className=' fixed h-auto w-full p-5 bg-transparent'>
            <div className="outer-container flex items-center justify-between ">
                <div className="inner-container w-full h-auto p-5">
                    {/* CALL BUTTON */}
                    <ul className='flex float-right'>
                        <li className='mx-2 uppercase text-lg text-white'>About</li>
                        <li className='mx-2 uppercase text-lg text-white'>Menu</li>
                        <li className='mx-2 uppercase text-lg text-white'>Mega Menu</li>
                    </ul>
                </div>
                <div className="logo-container relative w-[500px] h-[90px] bg-gray-500 overflow-hidden">
                    <Image className='absolute object-cover w-full h-full' width={100} height={50} alt='Delish Cheese Dough Logo' src="/logo.jpg" />
                </div>
                {/* BURGER BUTTON */}
                <div className="inner-container w-full h-auto p-5">
                    <ul className='flex float-left'>
                        <li className='mx-2 uppercase text-lg text-white'>Shop</li>
                        <li className='mx-2 uppercase text-lg text-white'>Blog</li>
                        <li className='mx-2 uppercase text-lg text-white'>Contact</li>
                    </ul>
                    <button type="button" className=" sm:block md:hidden" aria-controls="mobile-menu" aria-expanded="false">
                        <span className="absolute -inset-0.5"></span>
                        <span className="sr-only">Open main menu</span>

                        <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>

                        <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar