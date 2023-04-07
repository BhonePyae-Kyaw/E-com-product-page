import React from 'react'
import './Price.css'
export default function Price({discount,discounted,price}) {
  return (
    <div>
        <span className='discountedPrice'>${discounted}.00</span>
        <span className='discount'>{discount}%</span>
        <p className='price-tag'>${price}.00</p>
    </div>
  )
}
