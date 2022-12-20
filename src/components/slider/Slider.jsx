import React from 'react';
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import sliderImage from "../../assets/slider-image/Banner-FINAL.png";



export default function Slider() {
  return (
    <>
        <Swiper
            autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            }}
            modules={[Autoplay]}
        >
            <SwiperSlide>
                <img src={sliderImage} alt="" />
            </SwiperSlide>
        </Swiper>
    </>
  )
}
