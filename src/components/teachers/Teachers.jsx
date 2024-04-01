import React from "react";
import Rope from "../../assets/Vector 9.png";
import Slider from "react-slick";
import Retuja from "../../assets/retusja.png";
import Sakshi from "../../assets/sakshi.png";
import Sanket from "../../assets/sanket.png";
import Ketagi from "../../assets/ketaki.png";
import Archana from "../../assets/archana.png";
import { MdChevronLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const Teachers = () => {
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="slick-arrow next-arrow" onClick={onClick}>
        <MdChevronLeft />
      </div>
    );
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="slick-arrow prev-arrow" onClick={onClick}>
        <MdKeyboardArrowRight />
      </div>
    );
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 419,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="container mx-auto my-28">
      <div className="relative">
        <div className="relative flex gap-2">
          <p className="text-lightGrey font-kalam font-normal text-[20px]">
            Key Persons
          </p>
          <img className="absolute top-[-20px] left-[82px]" src={Rope} alt="" />
        </div>

        <div className="heading">
          <h3 className="text-[30px] font-semibold">Meet our teachers</h3>
        </div>

        <div className="mt-6 w-full">
          <Slider {...settings}>
            <div>
              <img
                className="h-full w-[93%] rounded-2xl"
                src={Archana}
                alt=""
              />
            </div>
            <div>
              <img className="h-full w-[93%] rounded-2xl" src={Retuja} alt="" />
            </div>
            <div>
              <img className="h-full w-[93%] rounded-2xl" src={Sakshi} alt="" />
            </div>
            <div>
              <img className="h-full w-[93%] rounded-2xl" src={Sanket} alt="" />
            </div>
            <div>
              <img className="h-full w-[93%] rounded-2xl" src={Ketagi} alt="" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Teachers;
