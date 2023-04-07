import React, {useState} from 'react'
import Navbar from '../Nav/Navbar'
import Image from '../Image/Image'
import Detail from '../Detail/Detail'
import ZoomSlider from '../Image/ZoomSlider'
import Cart from '../Cart/Cart'
import './Home.css'

export default function Home() {
    const [name, setName] = useState('Fall Limited Edition Sneakers')
    const [desc, setDesc] = useState('These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, hey’ll withstand everything the weather can offer.')
    const [price, setPrice] = useState(250.00)
    const [discount, setDiscount] = useState(50)
    const [discounted, setDiscounted] = useState(price * (discount / 100))
    const [value,setValue] = useState(1)
    const [total,setTotal] = useState(0)
    const [buyQ, setBuyQ] = useState(0)
    const [showC, setShowC] = useState(false)
    const [showSlider, setShowSlider] = useState(false)
    const showCart = () =>{
        if (showC){
            setShowC(false)
        }else{
            setShowC(true)
        }
    }
    const handleIn = () => {
        setValue(value + 1)
    }
    const handleDe = () => {
        setValue(value - 1)
    }
    const totalPrice = () =>{
        setBuyQ(value)
        setTotal(value * discounted)
    }
    return (
        <div className="home">
            <nav>
                <Navbar 
                    setbuyQ={setBuyQ}
                    buyQ={buyQ}
                    name={name}
                    total={total}
                    discounted={discounted}
                    showCart ={showCart}
                />
            </nav>
            <section>
                <div className='content'>
                    <div className='img-container'>
                        <Image 
                            setShowSlider={setShowSlider}
                            
                        />
                    </div>
                    <div className='detail-container'>
                        <Detail 
                            name ={name} 
                            desc={desc} 
                            price={price} 
                            discount={discount} 
                            discounted={discounted} 
                            value={value}
                            handleDe={handleDe}
                            handleIn={handleIn}
                            totalPrice={totalPrice}
                            total={total}
                            setBuyQ={setBuyQ}
                        />
                    </div>
                </div>
            </section>
            <aside>
                {
                    showSlider && (
                        <ZoomSlider setShowSlider={setShowSlider}/>
                    )
                }
                {showC && (
                    <Cart 
                        buyQ={buyQ}
                        name={name}
                        discounted={discounted}
                        total={total}   
                        setBuyQ={setBuyQ}
                        setShowC={setShowC}
                    />
                )}               
            </aside>
            <footer>
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                Coded by <a href="#">Bhone Pyae Kyaw</a>.
            </footer>
        </div>
    )
}
