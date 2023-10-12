import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div className=' overflow-hidden'>
      {/* MAIN SECTION */}
      <section className='h-[90vh] w-full bg-colorPrimary rounded-bl-[70%] p-5'>
        <div className="inner-container flex items-center">
          <div className="image-container w-full h-auto py-[10rem] z-10">
            <Image className='' width={1000} height={500} alt='hero' src={"/hero-5-img.png"} />
          </div>

          <div className="flex flex-col z-1">
            <span className='text-9xl text-white font-bold'>THE</span>
            <span className='text-9xl text-white font-bold'>BETTER</span>
            <span className='text-9xl text-white font-bold'>PIZZA</span>
          </div>
        </div>
      </section>
      {/* ABOUT SECTION */}
      {/* MENU SECTION */}
      {/* PROMO SECTION */}
      {/* BANNER */}
      {/* MENU */}
    </div>
  )
}

export default page
