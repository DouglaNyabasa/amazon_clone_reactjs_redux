import React from "react";
import Carousel from "../Carousel/Carousel";
import HomePageCard from "../HomePageCard/HomePageCard";
import cardImg1 from "../../assets/images/home_grid_1.jpg";
import cardImg2 from "../../assets/images/home_grid_2.jpg";
import cardImg3 from "../../assets/images/home_grid_3.jpg";
import cardImg4 from "../../assets/images/home_grid_4.jpg";
import cardImg5 from "../../assets/images/home_grid_5.jpg";
import cardImg6 from "../../assets/images/home_grid_6.jpg";
import cardImg7 from "../../assets/images/home_grid_7.jpg";
import cardImg8 from "../../assets/images/home_grid_8.jpg";
import bannerImg from "../../assets/images/banner2.jpg";
import bannerImg1 from "../../assets/images/banner_image.jpg";
import CarouselCategory from "../Carousel/CarouselCategory";
import CarouselProducts from "../Carousel/CarouselProducts";






const HomePage = () => {
  return (
    <div className="bg-amazonClone-background">
      <div className="min-w-[1000px] max-w-[1500px]  m-auto">
        <Carousel />
        <div className="grid grid-cols-3 xl:grid-cols-4 -mt-80">
          <HomePageCard
            title={"We have a surprise for you"}
            img={cardImg1}
            link={"See terms and conditions"}
          />
           <HomePageCard
            title={"Watch the rings of power"}
            img={cardImg2}
            link={"Start streaming now"}
          />
           <HomePageCard
            title={"Unlimited Streaming"}
            img={cardImg3}
            link={"Find out more"}
          />
           <HomePageCard
            title={"More titles to explore"}
            img={cardImg4}
            link={"Browse Kindle Unlimited"}
          />
           <HomePageCard
            title={"Shop Pet Supplies"}
            img={cardImg5}
            link={"See more"}
          />
           <HomePageCard
            title={"Spring sale"}
            img={cardImg6}
            link={"See the deals"}
          />
           <HomePageCard
            title={"Echo buds"}
            img={cardImg7}
            link={"See more"}
          />
           <HomePageCard
            title={"Family plan: 3 months free"}
            img={cardImg8}
            link={"Learn more"}
          />

          <div className="p-2 pt-8">
            <img className="xl:hidden" src={bannerImg} alt=""/>
          </div>

        </div>
        <CarouselProducts/>
        <CarouselCategory/>
        <div className=" h-[200px] ">
           <img className="h-[100%] m-auto" src={bannerImg1} alt=""/>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
