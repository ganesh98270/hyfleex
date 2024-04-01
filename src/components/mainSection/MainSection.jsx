import DoteOne from "../../assets/Group 427318222.png";
import DoteTow from "../../assets/Group 427318223.png";
import Frame from "../../assets/Frame 427318205.png";
import Play from "../../assets/Group 427318225.png";

const MainSection = () => {
  return (
    <div className="container relative mx-auto mt-20 sm:mt-10">
      <div className="flex xmd:block xl:p-6 padding-0">
        <div className="w-1/2 xmd:w-full">
          <div>
            <h1 className="text-[52px] leading-[56px] font-playfair ps-2 sm:text-[35px]">
              Become Fluent in
            </h1>
            <h1 className="text-[52px] leading-[56px] text-lightBlue rounded-lg py-2 px-3 pt-0 border-text font-playfair w-max sm:text-[35px]">
              Foreign Language
            </h1>
            <h1 className=" text-[52px] leading-[56px] font-playfair ps-2 sm:text-[35px]">
              with Hyfleex
            </h1>

            <p className="text-grey px-2 mt-4">
              Discover Spanish, German, English, IELTS, Japanese, and more
              languages <br /> with Hyfleex. Break barriers, build
              connections—start your multilingual <br /> journey!
            </p>
          </div>

          <button className="explore flex itmes-center gap-3 relative text-lightBlue font-semibold  p-2 my-5">
            Explore courses
          </button>

          <div className="pt-20 sm:pt-10">
            <img src={DoteOne} alt="" />
          </div>
        </div>
        <div className="w-1/2  xmd:w-full ps-56 xl:ps-20 lg:ps-30 xmd:flex xmd:justify-center xmd:p-0 relative">
          <div className="relative w-[305px] h-[400px] md:w-7/12 md:h-9/12 full-width">
            <img className="w-full h-full" src={Frame} alt="" />
            <img
              className="absolute bottom-[80px] right-[46px]"
              src={Play}
              alt=""
            />
          </div>
          <img
            className="absolute right-[-30px] sm:right-[-68px] top-6"
            src={DoteTow}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
