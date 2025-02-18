import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import banner1 from "./../../assets/banner1.jpeg";
import banner2 from "./../../assets/banner-2.jpeg";
import banner3 from "./../../assets/banner-3.jpeg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="relative -mt-5">
      <Carousel
        autoPlay
        infiniteLoop
        interval={2000} // Time in milliseconds between slides
        showThumbs={false} // Hide the thumbnail navigation
        showStatus={false} // Hide the status indicator
        showIndicators={true} // Show dots as indicators
        stopOnHover={false} // Continue autoplay even when hovered
      >
        {/* Banner 1 */}
        <div className="relative">
          <img
            src={banner1}
            alt="Banner 1"
            className="w-full h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Welcome to Our Platform</h1>
            <p className="text-lg">
              Experience the best services tailored for you.
            </p>
            <Link to={"/all-classes"} className="btn mt-4 btn-success">
              Go For Learn
            </Link>
          </div>
        </div>

        {/* Banner 2 */}
        <div className="relative">
          <img
            src={banner2}
            alt="Banner 2"
            className="w-full h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Achieve Your Goals</h1>
            <p className="text-lg">We help you unlock your potential.</p>
            <Link to={"/all-classes"} className="btn mt-4 btn-success">
              Go For Learn
            </Link>
          </div>
        </div>

        {/* Banner 3 */}
        <div className="relative">
          <img
            src={banner3}
            alt="Banner 3"
            className="w-full h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Join Our Community</h1>
            <p className="text-lg">Connect, learn, and grow together.</p>
            <Link to={"/all-classes"} className="btn mt-4 btn-success">
              Go For Learn
            </Link>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
