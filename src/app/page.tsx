import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div className='overflow-hidden h-auto w-full'>
      {/* MAIN SECTION */}
      <section className='h-[90vh] w-full bg-colorPrimary rounded-bl-[70%]'>
        <div className="inner-container relative w-full h-[100%] flex flex-col items-center justify-center">
          {/* <div className="h-[auto w-full flex flex-col jsutify-center items-center">
            <span className=''>THE</span>
            <span className=''>BETTER</span>
          </div> */}
          <h2 className=' text-7xl font-extrabold'>BETTER</h2>
          <div className="image-container relative w-[100%] h-[500px] bg-no-repeat bg-center bg-contain z-10" style={{backgroundImage: "url('/hero-5-img.png')"}}>
            {/* <Image className='absolute' width={1000} height={1000} alt='hero' src={"/hero-5-img.png"} priority /> */}
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
