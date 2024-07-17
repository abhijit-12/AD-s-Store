import React from "react";
import { FaStar } from "react-icons/fa6";
import Img1 from "../../assets/women/pic.png";
import Img2 from "../../assets/women/pic2.png";
import Img3 from "../../assets/women/pic3.png";
import Img4 from "../../assets/women/pic4.png";
import Img5 from "../../assets/women/pic5.png";
const productsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Women Western",
    rating: 4.5,
    color: "red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    rating: 4.7,
    color: "brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "T-Shirts",
    rating: 4.4,
    color: "yellow",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Jeans",
    rating: 4.5,
    color: "pink",
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header selection */}
        <div className="text-center mb-10 mx-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top selleing Products for You
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
            similique reprehenderit pariatur id eum dignissimos, reiciendis ex
            dolor est quo delectus error in et numquam ducimus nulla iusto ullam
            quaerat?
          </p>
        </div>
        {/* Body selection */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card selection */}
            {productsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  className="h-[220px] w-[150px] object-cover rounded-md group-hover:scale-110 duration-100 drop-shadow-md  "
                ></img>
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex justify-center gap-1">
                    <FaStar className="text-yellow-500"></FaStar>
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
