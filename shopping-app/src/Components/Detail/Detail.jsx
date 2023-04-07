import React from 'react'
import './Detail.css'
import Description from '../Description/Description'
import Price from '../Price/Price'
import Quantity from '../Quantity/Quantity'

export default function Detail({name,desc,price,discount,discounted,handleIn, handleDe,value,totalPrice,total}) {
  return (
    <div className='detail'>
        <Description
            name={name}
            desc={desc}
        />
        <Price
            discount={discount}
            discounted={discounted}
            price={price}
        />
        <Quantity
            handleDe={handleDe}
            handleIn={handleIn}
            totalPrice={totalPrice}
            value={value}
        />
    </div>
  )
}
