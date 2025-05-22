import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/BAnner";

import Marquee from "react-fast-marquee";
import BrandCard from "../BrandCard/BrandCard";
import Services from "./Services";
import WhyChooseUs from "./WhyChooseUs";
import FeaturedCars from "./FeaturedCars";
import VideoTour from "./VideoTour";

const Home = () => {
  const carBrands = useLoaderData();
  console.log(carBrands);
  return (
    <div >
      <Banner></Banner>
      <hr />
      <div>
        <Marquee className="p-5 text-lg">
          <p className="mr-14">
            Unwrap the Perfect Ride this Winter! Incredible Savings Await!
          </p>
          <p className="mr-14">
            Winter Wheels, Hot Deals! Drive into Savings Today!
          </p>
          <p className="mr-14">
            Chase Away the Winter Chill with{" "}
            <span className="font-bold text-2xl"> 25% Off </span> - Your Dream
            Car Awaits!
          </p>
        </Marquee>
      </div>
      <hr />
      <h2 className="text-5xl font-bold text-center my-10">
        Choose Your Brand
      </h2>
      {/* News container */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 m-5 max-w-7xl mx-auto my-16">
        {carBrands.map((brand) => (
          <BrandCard key={brand.id} brand={brand}></BrandCard>
        ))}
      </div>
      <div>
        <FeaturedCars/>
      </div>
      <h2 className="text-5xl font-bold my-10 text-center">
        Services We Offer
      </h2>
        <div>
          <Services></Services>
        </div>
        <div>
          <VideoTour/>
        </div>
        <h1 className="text-5xl font-poppins font-bold text-center mt-16">Why Choose Us?</h1>
        <div className="max-w-7xl mx-auto">
          <WhyChooseUs></WhyChooseUs>
        </div>

    </div>
  );
};
export default Home;
