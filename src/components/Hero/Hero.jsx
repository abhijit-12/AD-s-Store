import React from "react";
import Image1 from "../../assets/hero/shopping.png";
import Image2 from "../../assets/hero/women.png";
import Image3 from "../../assets/hero/sale.png";
import Slider from "react-slick";
const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "upto 40% off on all Men's Wear",
    description:
      "Offers a wide selection of men's clothing and accessories from top brands at a minimum discount of 40%",
  },
  {
    id: 2,
    img: Image2,
    title: "upto 60% off on all WOmen's Wear",
    description:
      "Offers a wide selection of Women's clothing and accessories from top brands at a minimum discount of 60%",
  },
  {
    id: 3,
    img: Image3,
    title: "upto 70% off on all Products",
    description:
      " Offers 70% off or more on electronics, including accessories, cameras, computers, and more",
  },
];

const Hero = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScrool: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-900 dark:text-white duration-200">
      {/* Background Pattern */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2  rounded-3xl rotate-45 -z-9 "></div>
      {/* Hero selection */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div>
              <div className=" grid grid-cols-1 sm:grid-cols-2">
                {/* Text content section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-in"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className=" text-5xl sm:text-6xl lg:text-7xl font-bold"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="zoom-in"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className=" text-sm"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="zoom-in"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full ">
                      Order Now
                    </button>
                  </div>
                </div>
                {/* Immage section */}
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
