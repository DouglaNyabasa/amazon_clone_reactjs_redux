import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import carousel0 from "../../assets/images/category_0.jpg";
import carousel1 from "../../assets/images/category_1.jpg";
import carousel2 from "../../assets/images/category_2.jpg";
import carousel4 from "../../assets/images/category_3.jpg";
import carousel5 from "../../assets/images/category_4.jpg";
import carousel6 from "../../assets/images/category_5.jpg";
import { useNavigate, createSearchParams } from "react-router-dom";

const CarouselCategory = () => {

  const navigate = useNavigate();

  const searchCategory = (category) => {
    navigate({
      pathname: "search",
      search: createSearchParams({
        category: category,
        searchTerm: ``,
      }).toString(),
    });
  };
    
  return (
    <div className="bg-white mt-3">
        <div className="text-2xl font-semibold p-2">Shop by Category</div>
        <Swiper
        slidesPerView={5}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        >
            <SwiperSlide>
            <img src={carousel0}   />
        </SwiperSlide>

        <SwiperSlide>
            <img src={carousel1}   />
        </SwiperSlide>

           <SwiperSlide>
            <img src={carousel2}   />
        </SwiperSlide>

           <SwiperSlide>
            <img src={carousel4}   />
        </SwiperSlide>

           <SwiperSlide>
            <img src={carousel5}   />
        </SwiperSlide>

           <SwiperSlide>
            <img src={carousel6}   />
        </SwiperSlide>


        </Swiper>
      
    </div>
  );
}

export default CarouselCategory;
