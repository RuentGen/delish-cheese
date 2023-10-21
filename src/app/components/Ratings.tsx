import React from 'react'

const Ratings = ({disabled, className}:{disabled?: boolean, className?: string}) => {

  return (
    <div className={`rating ${className}`}>
      <input disabled={disabled} type="radio" name="rating-2" className="mask mask-star-2" />
      <input disabled={disabled} type="radio" name="rating-2" className="mask mask-star-2" />
      <input disabled={disabled} type="radio" name="rating-2" className="mask mask-star-2" />
      <input disabled={disabled} type="radio" name="rating-2" className="mask mask-star-2" />
      <input disabled={disabled} type="radio" name="rating-2" className="mask mask-star-2" />
    </div>
  )
}

export default Ratings