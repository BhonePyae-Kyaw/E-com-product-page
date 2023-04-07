import React from 'react'
import './Cart.css'
import del from '../../images/icon-delete.svg'
import img from '../../images/image-product-1-thumbnail.jpg'


export default function Cart({buyQ,name,total,discounted,setBuyQ}) {
    const deleteCart = () => {
        setBuyQ(0)
        // setShowC(false)
    }
    return (
        <div className='cart'>
            <div className="modal-backdrop">
                <div className="modal">
                    <div className='cart-header'>
                        Cart
                    </div>
                    <hr/>
                    {buyQ == 0 && (
                        <div>    
                            <div className='cart-container'>
                                <div className='cart-content-container-empty'>
                                    Your cart is empty.
                                </div>
                            </div>
                        </div>
                        )
                    }
                    {buyQ != 0 && (
                        <div className='cart-container'>
                            <div className='cart-content-container'>
                                <div className='cart-content-image'>
                                    <img src={img} />
                                </div>
                                <div className='cart-content-detail'>
                                    <span>{name}</span>
                                    <br/>
                                    <span>${discounted} x {buyQ} = ${total}</span>
                                </div>
                                <div className='del-btn'>
                                    <span onClick={deleteCart}>
                                        <img src={del}/>
                                    </span>
                                </div>
                            </div>
                            <div>
                                <button className='checkout-btn'>Checkout</button>
                            </div>

                        </div>
                        
                        )
                    }
                </div>
            </div>
        </div>
        
    )
}
