import React from 'react'
import './Description.css'

export default function Description({desc,name}) {
  return (
    <div>
        <span className='company'>SNEAKER COMPANY</span>
        <br/>
        <span className='product-name'>{name}</span>
        <p className='product-description'>
            {desc}
        </p>
    </div>
  )
}
