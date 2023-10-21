"use client"
import Image from 'next/image'
import React from 'react'
import IconButton from '../Buttons/IconButton'
import { Icon, Ratings } from '..'

const FeaturedCard = ({image, name, description, price, ratings, isLiked, onClick}: {image: string, name: string, description: string, price: number, ratings: number, isLiked: boolean, onClick: () => void}) => {
  return (
    <div className='featured-card w-full h-auto flex items-center justify-center'>
      <div className="inner-container w-full h-auto flex flex-col items-center justify-center">
        {/* Image */}
        <div className="image-container w-full md:w-[15rem] h-full relative flex items-center justify-center border border-1 rounded-md">
          <IconButton className={`bg-red-200 text-colorPrimary absolute right-5 top-5`} iconName={isLiked ? "fas-regular fa-heart" : "fa-regular fa-heart"} size={25} onClick={onClick} />
          <div className="image-inner-container w-[20rem] md:w-[15rem] h-[20rem] md:h-[15rem]">
            <Image className='w-auto h-auto' src={image} width={100} height={100} alt={name}/>
          </div>
          <h5 className='absolute bottom-5 left-5 bg-colorPrimary py-1 px-5 rounded-md text-white'>₱{price.toFixed(2)}</h5>
          <Ratings className='absolute bottom-5 right-5' />
        </div>
        {/* Description */}
        <div className="description-container w-[15rem] h-auto flex flex-col items-center p-2">
          <h3 className='text-colorPrimary uppercase'>{name}</h3>
          <p className='text-secondaryTextColor text-center'>{description}</p>
        </div>
        {/* Button */}
        <div className="button-container">
          <button className='btn btn-neutral bg-transparent text-black font-bold p-2 px-10 flex gap-2 items-center justify-center border border-1 border-overlay-1 hover:border-colorSecondary rounded-none hover:bg-colorSecondary'>
            <Icon iconName='fa-solid fa-shopping-bag' size={30} color="black"/>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default FeaturedCard
