import React from 'react'
import './Quantity.css'
import prev from '../../images/icon-minus.svg'
import next from '../../images/icon-plus.svg'
import cart from '../../images/icon-cart.svg'

export default function Quantity({handleIn,handleDe,totalPrice,value}) {
  return (
    <div>
        <div className='btn-container'>
            <div className='btn-detail'>
                <img className='inde-btn' src={prev} onClick={handleDe} />
            </div>
            <div className='btn-detail'>
                {value}
            </div>
            <div className='btn-detail'>
                <img className='inde-btn' src={next} onClick={handleIn} />
            </div>
            <button className='add-cart' onClick={totalPrice}>
                    <img src={cart} className='cart-btn' />
                    <span>Add to cart</span>
            </button>
        </div>
        
        
    </div>
  )
}
