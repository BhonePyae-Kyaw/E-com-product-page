import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import './ZoomSlider.css'
import { FreeMode, Navigation, Thumbs } from "swiper";
import img1 from '../../images/image-product-1-thumbnail.jpg'
import img2 from '../../images/image-product-2-thumbnail.jpg'
import img3 from '../../images/image-product-3-thumbnail.jpg'
import img4 from '../../images/image-product-4-thumbnail.jpg'
import img11 from '../../images/image-product-1.jpg'
import img22 from '../../images/image-product-2.jpg'
import img33 from '../../images/image-product-3.jpg'
import img44 from '../../images/image-product-4.jpg'
import close from '../../images/icon-close.svg'
export default function ZoomSlider({setShowSlider}) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const closeModal = () => {
        setShowSlider(false)
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
    const imgData2 = [
        {
            "id": 1,
            "src": img11
        },
        {
            "id": 2,
            "src": img22
        },
        {
            "id": 3,
            "src": img33
        },
        {
            "id": 4,
            "src": img44
        },
    ]
    return (
        <div className="modal-backdrop-slider">
            <div className="modal-slider">
                <div className="zoom-slider">
                    <p className="svg-container"><img onClick={closeModal} src={close} className="close-btn" /></p>
                    <Swiper
                        style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff",
                        }}
                        spaceBetween={10}
                        navigation={true}
                        thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2"
                    >
                        {/* <SwiperSlide>
                            <img src={img1}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img2}/>
                        </SwiperSlide> */}
                        {imgData2.map(img => (
                            <SwiperSlide key={img.id}>
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
                        modules={[FreeMode, Navigation, Thumbs]}
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
                </div>
            </div>
        </div>
        
    )

}


