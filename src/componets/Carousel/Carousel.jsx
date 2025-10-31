import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import carousel1 from "../../../public/images/carousel_1.jpg";
import carousel2 from "../../../public/images/carousel_2.jpg";
import carousel4 from "../../../public/images/carousel_4.jpg";
import carousel5 from "../../../public/images/carousel_5.jpg";
import carouselVid from "../../../public/images/carousel_vid.mp4";

const Carousel = () => {
  return (
    <div className="h-[600px] bg-white">
      <Swiper
        loop={true}
        spaceBetween={0}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 4500,
        }}
        className="h-[50%]"
      >
        <SwiperSlide>
          <img src={carousel1} alt="Carousel 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel2} alt="Carousel 2" />
        </SwiperSlide>
        <SwiperSlide className="bg-black">
          <video controls muted>
            <source src={carouselVid} type="video/mp4" />
          </video>
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel4} alt="Carousel 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel5} alt="Carousel 5" />
        </SwiperSlide>
      </Swiper>
      <div className="h-[50%] bg-gradient-to-b from-stone-900" />
    </div>
  );
};

export default Carousel;
