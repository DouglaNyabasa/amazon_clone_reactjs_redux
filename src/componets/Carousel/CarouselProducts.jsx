import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import product0 from "../../assets/images/product_0_small.jpg";
import product1 from "../../assets/images/product_1_small.jpg";
import product2 from "../../assets/images/product_2_small.jpg";
import product3 from "../../assets/images/product_3_small.jpg";
import product4 from "../../assets/images/product_4_small.jpg";
import product5 from "../../assets/images/product_5_small.jpg";
import product6 from "../../assets/images/product_6_small.jpg";
import product7 from "../../assets/images/product_7_small.jpg";
import product8 from "../../assets/images/product_8_small.jpg";
import product9 from "../../assets/images/product_9_small.jpg";

const CarouselProducts = () => {
  return (
    <div className="bg-white m-3">
        <div className="text-2xl font-semibold p-3">Best Sellers</div>
      <Swiper
        slidesPerView={7}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
      >
        <SwiperSlide>
          <Link  to={`/product`}>
                    <img src={product0} alt="" />

          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link  to={`/product`}>
                         <img src={product1} alt="" />

          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link  to={`/product`}>
                        <img src={product2} alt="" />

          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <img src={product3} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={product4} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={product5} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={product6} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={product7} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={product8} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={product9} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CarouselProducts;
