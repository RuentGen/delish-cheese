"use client"
import Image from 'next/image'
import React, { SetStateAction } from 'react'
import IconButton from '../Buttons/IconButton'
import CartButton from '../Buttons/CartButton'

const Navbar = () => {
    const [showMenu, setShowMenu] = React.useState(false)
    const [scrollPos, setScrollPos] = React.useState(0)

    const handleButtonClick = () => {
        setShowMenu(!showMenu)
    }
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPos(position);
    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPos])


    return (
        <nav className={`fixed h-auto w-full z-50 ${scrollPos > 0 ? "bg-colorPrimary" : "bg-transparent"}`}>
            <div className={`outer-container flex items-center justify-between p-5`}>
                {/* CALL BUTTON */}
                <IconButton className='block md:hidden' iconName="fa-phone" size={20} color='white' flip />
                <div className="inner-container w-full h-auto p-5">
                    {/* UL LIST */}
                    <ul className='hidden md:flex items-center justify-center float-right'>
                        <li className='mx-2 uppercase text-lg text-white'>About</li>
                        <li className='mx-2 uppercase text-lg text-white'>Menu</li>
                        <li className='mx-2 uppercase text-lg text-white'>Mega Menu</li>
                    </ul>
                </div>
                {/* LOGO */}
                <div className="logo-container relative w-[600px] h-[80px] overflow-hidden">
                    <Image className='absolute object-cover object-center w-full h-full' width={300} height={300} alt='Delish Cheese Dough Logo' src="/logo.png" priority />
                </div>
                <div className="inner-container w-full h-auto p-5">
                    {/* UL LIST */}
                    <ul className='hidden md:flex items-center justify-center float-left'>
                        <li className='mx-2 uppercase text-lg text-white'>Shop</li>
                        <li className='mx-2 uppercase text-lg text-white'>Blog</li>
                        <li className='mx-2 uppercase text-lg text-white'>Contact</li>
                        <CartButton />
                    </ul>
                </div>
                {/* BUTTON */}
                <div onClick={handleButtonClick} className=" p-1 cursor-pointer sm:block md:hidden ">
                    <span className={`ease-in-out duration-300 block h-[5px] w-[12.5px] rounded-full bg-white ${showMenu ? 'translate-x-[1px] translate-y-[1px] rotate-[45deg]' : 'my-1'}`}></span>
                    <span className={`ease-in-out duration-300 block h-[5px] w-[25px] rounded-full bg-white ${showMenu ? 'rotate-[-45deg]' : 'my-1'}`}></span>
                    <span className={`ease-in-out duration-300 block h-[5px] w-[12.5px] rounded-full bg-white translate-x-[10px] ${showMenu ? "translate-y-[-1px] rotate-[45deg]" : 'my-1'}`}></span>
                </div>
            </div>
            <div className={`h-auto w-full md:hidden`}>
                <ul className={`ease-in-out duration-300 overflow-hidden px-5 bg-white flex flex-col justify-evenly ${showMenu ? "h-[300px] " : "h-0"}`}>
                    <li className='text-primaryTextColor mx-2 my-3 uppercase text-xl font-bold'>About</li>
                    <li className='text-primaryTextColor mx-2 my-3 uppercase text-xl font-bold'>Menu</li>
                    <li className='text-primaryTextColor mx-2 my-3 uppercase text-xl font-bold'>Mega Menu</li>
                    <li className='text-primaryTextColor mx-2 my-3 uppercase text-xl font-bold'>Shop</li>
                    <li className='text-primaryTextColor mx-2 my-3 uppercase text-xl font-bold'>Blog</li>
                    <li className='text-primaryTextColor mx-2 my-3 uppercase text-xl font-bold'>Contact</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar