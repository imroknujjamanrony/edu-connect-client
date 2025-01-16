import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import banner1 from "./../../assets/banner-1.jpeg";
import banner2 from "./../../assets/banner-2.jpeg";
import banner3 from "./../../assets/banner-3.jpeg";

const Banner = () => {
  return (
    <div className="">
      <Carousel
        autoPlay
        infiniteLoop
        interval={2000} // Time in milliseconds between slides
        showThumbs={false} // Hide the thumbnail navigation
        showStatus={false} // Hide the status indicator
        showIndicators={true} // Show dots as indicators
        stopOnHover={false} // Continue autoplay even when hovered
      >
        <div>
          <img src={banner1} alt="Banner 1" className="w-full h-[600px]" />
        </div>
        <div>
          <img src={banner2} alt="Banner 2" className="w-full h-[600px]" />
        </div>
        <div>
          <img src={banner3} alt="Banner 3" className="w-full h-[600px]" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
