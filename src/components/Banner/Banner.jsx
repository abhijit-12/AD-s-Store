import React from "react";
import BannerIMG from "../../assets/banner/banner.jpg";
import { GrAccessibility, GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import { AiFillDashboard } from "react-icons/ai";

const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container ">
        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* image section */}
          <div data-aos="zoom-in">
            <img
              src={BannerIMG}
              alt=""
              className=" mx-w-[400px] h-[350px] w-full  mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
            />
          </div>
          {/* text details  section */}
          <div className=" flex flex-col justify-center gap-6 sm:pt-0">
            <h1 className=" text-3xl sm:text-4xl font-bold">
              Winter sale is upto 50% off{" "}
            </h1>
            <p className=" text-sm text-gray-500 tracking-wide leading-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
              vel iure numquam amet, aut nobis cupiditate deserunt aliquid
            </p>
            <div className="flex flex-col gap-4">
              <div className=" flex items-center gap-4" data-aos="fade-up">
                <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400"></GrSecure>
                <p>Quality profuct</p>
              </div>
              <div className="flex items-center gap-4" data-aos="fade-up">
                <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-200 dark:bg-violet-400"></IoFastFood>
                <p>Fast Delivery</p>
              </div>
              <div className="flex items-center gap-4" data-aos="fade-up">
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-200 dark:bg-violet-400"></GiFoodTruck>
                <p>Easy Payment Methods</p>
              </div>
              <div className="flex items-center gap-4" data-aos="fade-up">
                <AiFillDashboard className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-200 dark:bg-violet-400"></AiFillDashboard>
                <p>Easy to Acess</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
