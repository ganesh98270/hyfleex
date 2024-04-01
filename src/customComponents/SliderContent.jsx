import Google from "../assets/image 12.png";
import Student from "../assets/student img.png";
import RightArrow from "../assets/Vector 7.png";
import Students from "../customComponents/Students";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderContent = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="mainslider absolute  xmd:static flex lg:flex-wrap justify-between lg:justify-center items-center left-[50%] translate-x-[-50%] xmd:translate-x-0 bottom-[-43px] lg:bottom-[-92px] xmd:w-full bg-lightBlueTow text-white rounded-2xl p-5 pe-8 xmd:p-2 xmd:gap-8">
      <div className="absolute lg:static flex flex-col justify-center items-center bg-white px-6 py-2 rounded-2xl left-32 xl:left-6 top-[-28px] border-2 border-lightBlue">
        <span className="text-[30px] font-semibold text-lightBlue">4.9</span>
        <span className="text-grey text-nowrap text-[12px]">Rated on</span>
        <img className="h-[20px] w-[55px]" src={Google} alt="" />
      </div>
      <p className="help ps-60 xl:ps-32 font-normal sm:text-center">
        We help 1500+ students to <br className="lg:hidden" />
        Achieve their goals
      </p>

      <div className="w-[482px] md:w-[326px] h-[144px] absolute lg:relative right-28 xl:right-[4.5em] right-zero top-[-106px] lg:top-[-35px] ">
        <Slider {...settings}>
          <Students Student={Student} />
          <Students Student={Student} />
        </Slider>
      </div>

      <div>
        <img src={RightArrow} alt="" />
      </div>
    </div>
  );
};

export default SliderContent;

{
  /* <div className="relative">
    <div className="absolute xmd:static right-32 xl:right-20 top-[-31px] flex justify-center items-center gap-3">
        <Students Student={Student} />
        <Students Student={Student} />
        <Students Student={Student} />
    </div>
</div>; */
}
