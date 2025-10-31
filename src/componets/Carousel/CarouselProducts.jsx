import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import product0 from "../../../public/images/product_0_small.jpg";
import product1 from "../../../public/images/product_1_small.jpg";
import product2 from "../../../public/images/product_2_small.jpg";
import product3 from "../../../public/images/product_3_small.jpg";
import product4 from "../../../public/images/product_4_small.jpg";
import product5 from "../../../public/images/product_5_small.jpg";
import product6 from "../../../public/images/product_6_small.jpg";
import product7 from "../../../public/images/product_7_small.jpg";
import product8 from "../../../public/images/product_8_small.jpg";
import product9 from "../../../public/images/product_9_small.jpg";


const CarouselProducts = () => {
  const products = [
    product0,
    product1,
    product2,
    product3,
    product4,
    product5,
    product6,
    product7,
    product8,
        product9,

    
  ];

  return (
    <div className="bg-white m-3">
      <div className="text-2xl font-semibold p-3">Best Sellers</div>
      <Swiper
        slidesPerView={7}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
      >
        {products.map((product, i) => (
          <SwiperSlide key={i}>
            <Link to={`/product/${i}`}>
              <img
                src={product}
                alt={`Carousel product ${i}`}
                loading="lazy" 
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselProducts;
