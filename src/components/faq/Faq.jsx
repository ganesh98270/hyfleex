import React, { useState } from "react";
import Rope from "../../assets/Vector 9.png";

const Faq = () => {
  return (
    <div className="container mx-auto my-28">
      <div className="flex relative justify-center">
        <div className=" flex gap-2">
          <p className="text-lightGrey text-center font-kalam font-normal text-[20px]">
            FAQs
          </p>
          <img
            className="absolute top-[-9px] left-1/2 translate-x-[-0%]"
            src={Rope}
            alt=""
          />
        </div>
      </div>

      <div className="heading">
        <h3 className="text-[30px] text-center font-semibold">
          Your Guide to Common Questions and Answers
        </h3>
      </div>

      <div className="flex mt-6 gap-8 xmd:gap-1 px-28 xl:px-0 flex-wrap justify-center items-start">
        <div className="w-[48%] xmd:w-full">
          <Question />
          <Question />
          <Question />
        </div>
        <div className="w-[48%] xmd:w-full">
          <Question />
          <Question />
          <Question />
        </div>
      </div>
    </div>
  );
};

export default Faq;

const Question = ({ }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      className={`${toggle ? "bg-color py-6" : "bg-hide py-3"
        } mb-3  border rounded-[25px] px-8 sm:px-6 `}
    >
      <div
        onClick={() => setToggle(!toggle)}
        className="flex justify-between items-center cursor-pointer"
      >
        <p className={`font-semibold `}>
          How can I know my level of knowledge?
        </p>

        {toggle ? (
          <div className="sm:pt-[2px] flex justify-center text-lightBlueTow leading-[1px] items-center bg-white h-[20px] w-[20px] rounded-full">
            -
          </div>
        ) : (
          <div className="sm:pt-[2px] flex justify-center text-white leading-[1px] items-center bg-lightBlueTow h-[20px] w-[20px] rounded-full">
            +
          </div>
        )}
      </div>

      <div className={`${toggle ? "show" : "hide"}`}>
        <p className={`${toggle && "text-white"} font-normal`}>
          By the end of the trial lesson, you will be able to determine for
          yourself whether this kind of online lesson is right for you or not.
          In our experience, most students appreciate the benefits of online
          education and decide to study online.
        </p>
      </div>
    </div>
  );
};
