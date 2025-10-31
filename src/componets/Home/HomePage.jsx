import Carousel from "../Carousel/Carousel";
import CarouselCategory from "../Carousel/CarouselCategory";
import CarouselProducts from "../Carousel/CarouselProducts";
import HomePageCard from "../HomePageCard/HomePageCard";

const HomePage = () => {
  return (
    <div className="bg-amazonclone-background">
      <div className="min-w-[1000px] max-w-[1500px] m-auto">
        <Carousel />
        <div className="grid grid-cols-3 xl:grid-cols-4 -mt-80">
          <HomePageCard
            title={"We have a surprise for you"}
            img={"../../../public/images/home_grid_1.jpg"}
            link={"See terms and conditions"}
          />
          <HomePageCard
            title={"Watch The Rings of Power"}
            img={"../../../public/images/home_grid_2.jpg"}
            link={"Start streaming now"}
          />
          <HomePageCard
            title={"Unlimited Streaming"}
            img={"../../../public/images/home_grid_3.jpg"}
            link={"Find out more"}
          />
          <HomePageCard
            title={"More titles to explore"}
            img={"../../../public/images/home_grid_4.jpg"}
            link={"Browse Kindle Unlimited"}
          />
          <HomePageCard
            title={"Shop Pet Supplies"}
            img={"../../../public/images/home_grid_5.jpg"}
            link={"See more"}
          />
          <HomePageCard
            title={"Spring Sale"}
            img={"../../../public/images/home_grid_6.jpg"}
            link={"See the deals"}
          />
          <HomePageCard
            title={"Echo Buds"}
            img={"../../../public/images/home_grid_7.jpg"}
            link={"See more"}
          />
          <HomePageCard
            title={"Family Plan: 3 months free"}
            img={"../../../public/images/home_grid_8.jpg"}
            link={"Learn more"}
          />
          <div className="m-3 pt-8">
            <img
              className="xl:hidden"
              src={"../../../public/images/banner_image_2.jpg"}
              alt="Banner 2"
            />
          </div>
        </div>
        <CarouselProducts />
        <CarouselCategory />
        <div className="h-[200px]">
          <img
            className="h-[100%] m-auto"
            src={"../../../public/images/banner_image.jpg"}
            alt="Banner 1"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;