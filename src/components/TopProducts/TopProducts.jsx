import { data } from "autoprefixer";
import React from "react";
import Img1 from "../../assets/shirts/shirts.png";
import Img2 from "../../assets/shirts/shirts1.png";
import Img3 from "../../assets/shirts/shirts2.png";
import { FaStar } from "react-icons/fa6";

const productsData = [
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    description: "cudsugubsd",
  },
  {
    id: 2,
    img: Img2,
    title: "Printed Shirt",
    description: "hduucbvdubcb",
  },
  {
    id: 3,
    img: Img3,
    title: "Check Shirt",
    description: "hdkcvbksjvcj",
  },
];
const TopProducts = () => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <div>
          <div className="text-left mb-24">
            <p data-aos="fade-up" className="text-sm text-primary">
              Top Rated Products for You
            </p>
            <h1 data-aos="fade-up" className="text-3xl font-bold">
              Best Products
            </h1>
            <p data-aos="fade-up" className="text-xs text-gray-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias similique reprehenderit pariatur id eum dignissimos,
              reiciendis ex dolor est quo delectus error in et numquam ducimus
              nulla iusto ullam quaerat?
            </p>
          </div>
        </div>
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {productsData.map((data) => (
            <div data-aos="zoom-in" className=" rounded-2xl bg-white dark:bg-gray-700 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]  ">
              {/* Image selection */}
              <div>
                <img
                  src={data.img}
                  alt=""
                  className="mx-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md "
                />
              </div>
              {/* Details selection */}
              <div className="p-4 text-center gap-1">
                {/* Ratings */}
                <div className="w-full flex items-center justify-center">
                  <FaStar className="text-yellow-500"></FaStar>
                  <FaStar className="text-yellow-500"></FaStar>
                  <FaStar className="text-yellow-500"></FaStar>
                  <FaStar className="text-yellow-500"></FaStar>
                  <FaStar className="text-yellow-500"></FaStar>
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <button className="bg-primary hover:scale-105 duration-300 text-white py-1 px4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary">Order Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
