import React from 'react'
import Image from 'next/image'
import aboutdata from '../data/aboutData.json'
import { ProductCard, ProductMenu1 } from './components'
import menusData from './../data/menuData.json'
import FeaturedMenu from './components/Menus/FeaturedMenu'

const page = async () => {

  return (
    <main className='h-auto w-full'>
      {/* MAIN SECTION */}
      <section className='h-[60vh] md:h-[90vh] w-full bg-colorPrimar' style={{ backgroundImage: "url('/hero-5.jpg')" }}>
        <div className="inner-container w-full h-full flex flex-col items-center justify-center pt-20 md:pt-[20rem]">
          <h2 className=' relative top-[30px] md:top-[70px] text-[8rem] md:text-[17rem] font-extrabold text-white leading-none opacity-50'>PIZZA</h2>
          <div className="image-container w-full h-[80vh] z-10" >
            <Image className='mr-auto ml-auto block w-auto h-auto' width={1000} height={100} alt='hero' src={"/hero-5-img.png"} priority />
          </div>
          <div className="wave h-auto w-full relative bottom-[-1px] md:bottom-[280px] lg:bottom-[165px] py-[2rem]  lg:py-[5rem] bg-no-repeat bg-cover bg-center" style={{ backgroundImage: 'url("/white-overlay-wave.png")' }}>
          </div>
        </div>
      </section>
      {/* ABOUT SECTION */}
      <section className='w-full h-auto p-20 '>
        <div className="inner-container mt-20">
          <ul className='flex flex-col md:flex-row'>
            {aboutdata.map((item: any) => {
              return (
                <li key={item.id} className='my-5 flex flex-col justify-center items-center text-center'>
                  <Image src={item.iconPath} color='white' width={100} height={100} alt='test' />
                  <h2 className='text-primaryTextColor uppercase text-[1.5rem] font-extralight -tracking-2'>{item.label}</h2>
                  <p className='text-secondaryTextColor'>{item.subHeading}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
      {/* ABOUT2 SECTION */}
      <section className='commercial bg-colorSecondary h-auto w-full'>
        <div className="inner-container flex flex-col gap-7 md:flex-row justify-center w-full h-auto p-10 md:p-20">
          <div className="image-container w-full h-auto flex items-center justify-center">
            <div className="inner-container relative w-[20rem] md:w-[30rem] h-[20rem] md:h-[30rem]">
              <Image src={"/about-02-img.png"} className='w-auto h-auto' width={100} height={100} alt='about-image' priority />
            </div>
          </div >
          <div className="content-container block w-full h-auto">
            <h2 className='text-primaryTextColor font-light text-[2rem] md:text-[2rem] lg:text-[3rem] lg:font-[700] -tracking-2'>NOTHING BRINGS PEOPLE TOGETHER LIKE A GOOD PIZZA</h2>
            <p className='text-secondaryTextColor font-extralight '>Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae at integer orci congue and metus in mollislorem primis gravida</p>
            <div className='button-container w-full h-auto mt-10'>
              <button className='btn btn-md font-thin bg-colorPrimary border-0 text-white hover:text-primaryTextColor'>
                Order Now
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* MENU SECTION */}
      <section className='menu-section h-auto w-full flex flex-col items-center px-10'>
        <h2 className=' text-[3rem] text-colorPrimary text-center mt-5 mb-2'>Our Original Recipe</h2>
        <p className='text-secondaryTextColor text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis animi dignissimos reiciendis eveniet neque laboriosam tenetur?</p>
        <ProductMenu1 />
      </section>
      {/* BANNER */}
      <section className='h-auto w-full p-10'>
        <div className="inner-container h-auto w-full flex flex-col md:flex-row gap-3">
          {/* LEFT */}
          <div className="left-overlay w-full md:w-[50%] h-full bg-red-300 rounded-md bg-no-repeat bg-cover bg-center" style={{backgroundImage: "url('/images/banners/carrers.jpg')"}}>
            <div className='left w-full h-full p-20 rounded-md flex flex-col items-center justify-center bg-overlay-6' >
                <h2 className='text-white text-[2.5rem] uppercase -tracking-3'>Carrers</h2>
                <p className='text-white'>What to join our team?</p>
                <button className='btn px-10 bg-colorPrimary text-white mt-5 rounded-none hover:bg-overlay-9 hover::border-2'>
                  Learn More
                </button>
            </div>
          </div>
         {/* MIDDLE */}
          <div className="middle-overlay w-full md:w-[100%] h-full bg-red-300 rounded-md bg-no-repeat bg-cover bg-center" style={{backgroundImage: "url('/images/banners/order-now.jpg')"}}>
            <div className='middle w-full h-full p-20 rounded-md flex flex-col items-center justify-center  bg-overlay-6'>
                <h2 className='text-white text-[2.5rem] uppercase -tracking-3'>Order Now</h2>
                <p className='text-white'>Enjoy Testo Burgers at home!</p>
                <button className='btn px-10 bg-colorPrimary text-white mt-5 rounded-none hover:bg-overlay-9 hover::border-2'>
                  Learn More
                </button>
              </div>
          </div>
          {/* RIGHT */}
          <div className="right-overlay w-full md:w-[50%] h-full bg-red-300 rounded-md bg-no-repeat bg-cover bg-center" style={{backgroundImage: "url('/images/banners/gift-cards1.jpg')"}}>
            <div className='right w-full h-full bg-red-300 p-20 rounded-md flex flex-col items-center justify-center bg-overlay-6'>
                <h2 className='text-white text-[2.5rem] uppercase -tracking-3'>Gift Cards</h2>
                <p className='text-white'>Give the gift of Yummy!</p>
                <button className='btn px-10 bg-colorPrimary text-white mt-5 rounded-none hover:bg-overlay-9 hover::border-2'>
                  Learn More
                </button>
              </div>
          </div>
         
        </div>
      </section>
      {/* FEATURED SECTION */}
      <section className='featured-section w-full h-auto'>
        <FeaturedMenu />
      </section>
      {/* BLOG SECTION */}
      <section className='blog-section w-full h-auto'>

      </section>
      {/* GALLERY */}
      {/* TESTIMONIALS */}
      {/* CONTACT US */}
      <section className='contact-us h-auto w-full'>
        
      </section>
    </main>
  )
}

export default page
