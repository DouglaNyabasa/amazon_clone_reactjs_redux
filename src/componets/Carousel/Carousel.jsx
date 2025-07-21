import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation,Autoplay} from "swiper";
import "swiper/css";
import "swiper/css/navigation";


const Carousel = () => {
  return (
    <div className='h-[600px] bg-white'>

       <Swiper
        loop={true}
        spaceBetween={0}
        navigation={true}
        module={[Navigation,Autoplay]}
        autoplay={{
            delay: 4500
        }}
        className="h-[50%]"
       >
        <SwiperSlide>
            <img src={"../../assets/images/carousel_1.jpg"}/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={"../../assets/images/carousel_2.jpg"}/>
        </SwiperSlide>
        <SwiperSlide>
            <video>
                <source src="{../../../../assets/images/carousel_vid.mp4}"/>
            </video>
        </SwiperSlide>
         <SwiperSlide>
            <img src={"../../assets/images/carousel_4.jpg"}/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={"../../assets/images/carousel_5.jpg"}/>
        </SwiperSlide>

       </Swiper>
    </div>
  );
}

export default Carousel;
