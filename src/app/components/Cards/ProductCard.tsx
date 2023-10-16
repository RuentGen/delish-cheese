import React from 'react'
import Image from 'next/image'
const ProductCard = ({ imagePath, title }: { imagePath: string, title: string }) => {
    return (
        <div className='product-card w-5rem h-auto'>
            <div className="inner-container">
                <Image className='w-auto h-auto' src={imagePath} width={100} height={100} priority alt={title} />
            </div>
        </div>
    )
}

export default ProductCard