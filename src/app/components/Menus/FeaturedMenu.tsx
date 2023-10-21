"use client"
import React from 'react'
import FeaturedCard from '../Cards/FeaturedCard'
import featuredProducts from '../../../data/featuredProductData.json'
const FeaturedMenu = () => {

  const [products] = React.useState(featuredProducts)

  return (
    <div className='featured-menu w-full h-auto'>
      <div className="inner-container w-full h-auto flex items-center justify-center">
        <ul className='featured-menu-list w-full md:w-[70%] h-auto grid gap-3 grid-cols-1 md:grid-cols-4 items-center justify-center p-10 '>
          {products.map((product, index) => (
            <FeaturedCard 
              image={product.imagePath} 
              name={product.name} 
              description={product.description} 
              price={product.price} 
              ratings={product.ratings} 
              key={index}
              isLiked={false}
              onClick={() => {}}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default FeaturedMenu
