import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import './Slider.css'
import ZoomSlider from "./ZoomSlider";
import { FreeMode, Thumbs } from "swiper";
import img1 from '../../images/image-product-1.jpg'
import img2 from '../../images/image-product-2.jpg'
import img3 from '../../images/image-product-3.jpg'
import img4 from '../../images/image-product-4.jpg'



export default function MyComponent({setShowSlider}) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const handleClick = () => {
        setShowSlider(true)
    }
    const imgData = [
        {
            "id": 1,
            "src": img1
        },
        {
            "id": 2,
            "src": img2
        },
        {
            "id": 3,
            "src": img3
        },
        {
            "id": 4,
            "src": img4
        },
    ]
    return (
        <> 
            {/* {
                showSlider && (
                    <ZoomSlider setShowSlider={setShowSlider}/>
                )
            } */}
            
            <Swiper
                spaceBetween={10}
                thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                modules={[FreeMode, Thumbs]}
                className="mySwiper2"
            >
                {/* <SwiperSlide>
                    <img src={img1}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2}/>
                </SwiperSlide> */}
                {imgData.map(img => (
                    <SwiperSlide key={img.id} onClick={handleClick}>
                        <img className='img-display' src={img.src} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Thumbs]}
                className="mySwiper"
            >
                {/* <SwiperSlide>
                    <img src={img1}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2}/>
                </SwiperSlide> */}
                {imgData.map(img => (
                    <SwiperSlide key={img.id}>
                        <img className='img-display' src={img.src} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )

}


