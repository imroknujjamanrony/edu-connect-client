import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

import banner1 from "./../../assets/banner1.jpeg";
import banner2 from "./../../assets/banner-2.jpeg";
import banner3 from "./../../assets/banner-3.jpeg";

const slides = [
  {
    id: 1,
    img: banner1,
    title: "Welcome to Our Platform",
    description: "Experience the best services tailored for you.",
  },
  {
    id: 2,
    img: banner2,
    title: "Achieve Your Goals",
    description: "We help you unlock your potential.",
  },
  {
    id: 3,
    img: banner3,
    title: "Join Our Community",
    description: "Connect, learn, and grow together.",
  },
];

const Banner = () => {
  return (
    <div className="relative -mt-8">
      <Carousel
        autoPlay
        infiniteLoop
        interval={3000}
        showThumbs={false}
        showStatus={false}
        showIndicators={true}
        stopOnHover={false}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="relative">
            <img
              src={slide.img}
              alt={`Banner ${slide.id}`}
              className="w-full h-[300px] md:h-[450px] lg:h-[570px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
              <h1 className="text-2xl md:text-4xl font-bold mb-3">
                {slide.title}
              </h1>
              <p className="text-base md:text-lg">{slide.description}</p>
              <Link
                to="/all-classes"
                className="btn bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 border-none shadow-lg mt-4"
              >
                Go For Learn
              </Link>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
