import bannerImg from "../../assets/Banner_3.jpg";
import bannerImg2 from "../../assets/h5.jpg";
import bannerImg3 from "../../assets/Banner_2.jpg";
import bannerImg4 from "../../assets/lambo.jpg";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full md:h-[700px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={bannerImg} className="w-full relative" />
          <div className="h-full w-full absolute bg-[#00000080]">
            <h1 className="text-4xl md:text-7xl font-bold text-white flext text-center mt-60">
              Elevate Your Drive <br /> to Excellence.
            </h1>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn">
              ❮
            </a>
            <a href="#slide2" className="btn">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={bannerImg2} className="w-full" />
          <div className="h-full w-full absolute bg-[#00000090]">
              <h1 className="text-4xl md:text-7xl font-bold text-white flext text-center mt-60">
               Where Dreams <br /> Meet the Road
              </h1>
            </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn">
              ❮
            </a>
            <a href="#slide3" className="btn">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={bannerImg3} className="w-full" />
          <div className="h-full w-full absolute bg-[#00000080] rounded">
              <h1 className="text-4xl md:text-7xl font-bold text-white flext text-center mt-60">
                Experience <br /> Automotive Perfection
              </h1>
            </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn">
              ❮
            </a>
            <a href="#slide4" className="btn">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={bannerImg4} className="w-full" />
          <div className="h-full w-full absolute bg-[#00000080] rounded">
              <h1 className="text-4xl md:text-7xl font-bold text-white flext text-center mt-60">
                Unleash <br /> Your Driving Passion Here
              </h1>
            </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn">
              ❮
            </a>
            <a href="#slide1" className="btn">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
