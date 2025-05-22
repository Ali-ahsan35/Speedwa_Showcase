import { useLoaderData } from "react-router-dom";
import CarCard from "./CarCard";

// import images
import slider1 from "../../assets/slider1.jpeg";
import slider2 from "../../assets/slider2.jpeg";
import slider3 from "../../assets/slider3.jpeg";
import slider4 from "../../assets/slider4.jpeg";

const BrandDetails = () => {
  const cars = useLoaderData();

  return (
    <div className="px-4 md:px-10 lg:px-20 py-10 space-y-10">
      {/* Slider Section */}
      <div className="carousel w-full lg:h-[600px] rounded-2xl overflow-hidden shadow-xl">
        {[slider1, slider2, slider3, slider4].map((slide, index) => (
          <div
            key={index}
            id={`slide${index + 1}`}
            className="carousel-item relative w-full"
          >
            <img
              src={slide}
              className="w-full object-cover object-center"
            />
            {/* Overlay with Text */}
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center p-5">
              <h2 className="text-3xl md:text-5xl font-bold drop-shadow">
                Explore the Finest Cars
              </h2>
              <p className="mt-2 text-lg hidden md:block">
                Find your dream car in our exclusive brand collection.
              </p>
            </div>
            {/* Navigation Buttons */}
            <div className="absolute flex justify-between transform -translate-y-1/2 left-4 right-4 top-1/2">
              <a href={`#slide${index === 0 ? 4 : index}`} className="btn btn-circle bg-white/80 hover:bg-white">
                ❮
              </a>
              <a href={`#slide${index === 3 ? 1 : index + 2}`} className="btn btn-circle bg-white/80 hover:bg-white">
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Cars Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {cars.map((car) => (
          <CarCard key={car._id} car={car} id={car._id} />
        ))}
      </div>
    </div>
  );
};

export default BrandDetails;
