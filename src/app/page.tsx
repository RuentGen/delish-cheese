import React from 'react'
import Image from 'next/image'
import aboutdata from '../data/aboutData.json'
import { ProductCard, ProductMenu1 } from './components'
import menusData from './../data/menuData.json'

const page = async () => {

  return (
    <div className='h-auto w-full'>
      {/* MAIN SECTION */}
      <section className='h-[75vh] md:h-[90vh] w-full bg-colorPrimar' style={{ backgroundImage: "url('/hero-5.jpg')" }}>
        <div className="inner-container w-full h-[100%] flex flex-col items-center justify-center pt-[9rem]">
          <h2 className=' relative top-[30px] md:top-[110px] text-[8rem] md:text-[17rem] font-extrabold text-white leading-none opacity-50'>PIZZA</h2>
          <div className="image-container w-full h-[80vh] z-10" >
            <Image className='mr-auto ml-auto block w-auto h-auto' width={1000} height={100} alt='hero' src={"/hero-5-img.png"} priority />
          </div>
          <div className="wave h-auto w-full relative bottom-[-1px] md:bottom-[200px] py-[2rem]  lg:py-[5rem] bg-no-repeat bg-cover bg-center" style={{ backgroundImage: 'url("/white-overlay-wave.png")' }}>
          </div>
        </div>
      </section>
      {/* ABOUT SECTION */}
      <section className='w-full h-auto p-20 '>
        <div className="inner-container">
          <ul className='flex flex-col md:flex-row'>
            {aboutdata.map((item: any) => {
              return (
                <li key={item.id} className='my-5 flex flex-col justify-center items-center text-center'>
                  <Image src={item.iconPath} color='white' width={100} height={100} alt='test' />
                  <h2 className='text-primaryTextColor uppercase text-[1.5rem] font-semibold'>{item.label}</h2>
                  <p className='text-secondaryTextColor'>{item.subHeading}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
      {/* ABOUT2 SECTION */}
      <section className='commercial bg-colorSecondary h-[100vh] w-full'>
        <div className="inner-container flex flex-col gap-7 md:flex-row justify-center w-full h-full p-10 md:p-20">
          <div className="image-container w-full h-auto flex items-center justify-center">
            <div className="inner-container relative w-[20rem] md:w-[30rem] h-[20rem] md:h-[30rem]">
              <Image src={"/about-02-img.png"} className='w-auto h-auto' width={100} height={100} alt='about-image' priority />
            </div>
          </div >
          <div className="content-container block w-full h-auto">
            <h2 className=' font-semibold text-[2rem] md:text-[2rem] lg:text-[3rem] lg:font-[700] text-primaryTextColor '>NOTHING BRINGS PEOPLE TOGETHER LIKE A GOOD PIZZA</h2>
            <p className='text-secondaryTextColor font-extralight '>Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae at integer orci congue and metus in mollislorem primis gravida</p>
            <div className='button-container'></div>
          </div>
        </div>
      </section>
      {/* MENU SECTION */}
      <section className='menu-section h-auto w-full flex flex-col items-center px-10'>
        <h2 className=' text-[3rem] text-primaryTextColor text-center mt-5 mb-2'>Our Original Recipe</h2>
        <p className='text-secondaryTextColor text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis animi dignissimos reiciendis eveniet neque laboriosam tenetur?</p>
        <ProductMenu1 />
      </section>
      {/* BANNER */}
      <section className='h-[500px] w-full '>

      </section>
      {/* MENU */}
    </div>
  )
}

export default page
