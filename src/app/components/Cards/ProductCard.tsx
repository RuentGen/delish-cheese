"use client"

import React from 'react'
import Image from 'next/image'
import IconButton from '../Buttons/IconButton'
import { TextIconButton } from '..'



const ProductCard = ({ imagePath, name, description, price, ratings, isLiked }: { name: string, description: string, imagePath: string, price: number, ratings: number, isLiked: boolean }) => {

    const [onFocus, setOnFocus] = React.useState(false)


    return (
        <div className='product-card w-full max-h-auto border border-1 rounded-lg' onMouseEnter={() => setOnFocus(!onFocus)} onMouseLeave={() => setOnFocus(!onFocus)}>
            {/* Image */}
            <div className="inner-container block w-[100%] h-[20rem] relative overflow-hidden rounded-tl-lg rounded-tr-lg">
                <Image className={`w-auto h-auto absolute object-cover object-center duration-300 hover:scale-[2] hover:rotate-90`} src={imagePath} width={100} height={100} priority alt={name} />
            </div>
            {/* Ratings and Likes */}
            <div className="ratings-likes-container w-full h-[50px] p-5 flex items-center justify-between">
                {/* Ratings */}
                <div className="rating">
                    <input type="radio" name="rating-1" className="mask mask-star" />
                    <input type="radio" name="rating-1" className="mask mask-star" />
                    <input type="radio" name="rating-1" className="mask mask-star" />
                    <input type="radio" name="rating-1" className="mask mask-star" />
                    <input type="radio" name="rating-1" className="mask mask-star" />
                </div>
                {/* Likes */}
                <IconButton className={`bg-red-200 text-colorPrimary`} iconName={isLiked ? "fas-regular fa-heart" : "fa-regular fa-heart"} size={25} color='' />
            </div>
            <div className="details-container p-5">
                {/* Name */}
                <h2 className='text-primaryTextColor h-[2rem] text-[1.5rem] font-[700] uppercase'>{name}</h2>
                {/* Description */}
                <p className='text-secondaryTextColor h-[5rem] font-thin my-1'>{description}</p>
                {/* Price */}
                <div className='bg-colorPrimary text-white p-5 rounded-lg flex'>
                    {/* Price */}
                    <h3>Php{price.toFixed(2)}</h3>
                    {/* AddToCartBTN */}
                    <TextIconButton style={{ padding: '1rem', }} icon={`fa-bag-shopping`} size={25} color='white' text={'Add to cart'} />
                </div>
            </div>
        </div>
    )
}

export default ProductCard