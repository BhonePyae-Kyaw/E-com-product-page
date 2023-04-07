import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../../images/logo.svg'
import profile from '../../images/image-avatar.png'
import cart from '../../images/icon-cart.svg'

export default function Navbar({buyQ,showCart}) {
    return (
        <>
            <div className='nav-container'>
                <div className='nav-bar'>
                    <div className='logo-container'>
                        <Link to="/">
                            <img src={logo} />
                        </Link>
                    </div>
                    <div className='nav-items'>
                        <Link to="/">
                            Collections
                        </Link>
                    </div>
                    <div className='nav-items'>
                        <Link to="/">
                            Men
                        </Link>
                    </div>
                    <div className='nav-items'>
                        <Link to="/">
                            Women
                        </Link>
                    </div>
                    <div className='nav-items'>
                        <Link to="/">
                            About
                        </Link>
                    </div>
                    <div className='nav-items'>
                        <Link to="/">
                            Contact
                        </Link>
                    </div>
                    <div className='show-btn'>
                        <img onClick={showCart} src={cart} />
                        {buyQ != 0 && (
                            <span className='cart-number'>{buyQ}</span>
                        )}
                    </div>
                    <div>
                        <img src={profile} className='profile-pic'/>
                    </div>
                </div>
            </div>
        </>
    )
}
