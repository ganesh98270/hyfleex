import React from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="container-full mx-auto my-28 mb-6">
      <div className="bg-[#f0f3fd] rounded-[40px] overflow-hidden">
        <div className="flex flex-wrap p-24 pt-16 lg:p-8  justify-between items-centerc gap-6">
          <div className="heading">
            <h2 className="text-[#363679] font-bold text-[36px]">HYFLEEX</h2>
            <p className="text-grey">
              Block 3, Bhagyalaxmi Apartment <br />
              Old D'Souza Colony, College Rd, <br />
              opp. Model Colony, Nashik, Maharashtra
            </p>
          </div>

          <div className="links flex items-center gap-3">
            <p className="text-grey text-sm cursor-pointer hover:text-lightBlue  hover:underline hover:underline-offset-4">Careers</p>
            <p className="text-grey text-sm cursor-pointer hover:text-lightBlue  hover:underline hover:underline-offset-4">Teachers</p>
            <p className="text-grey text-sm cursor-pointer hover:text-lightBlue  hover:underline hover:underline-offset-4">Support</p>
            <p className="text-grey text-sm cursor-pointer hover:text-lightBlue  hover:underline hover:underline-offset-4">Contact</p>
          </div>

          <div className="links flex items-center gap-4">
            <div className="rounded-full cursor-pointer border h-[35px] w-[35px] flex justify-center items-center hover:bg-lightBlue hover:text-white transition-all duration-300">
              <BiLogoFacebook />
            </div>
            <div className="rounded-full cursor-pointer border h-[35px] w-[35px] flex justify-center items-center hover:bg-lightBlue hover:text-white transition-all duration-300">
              <BiLogoTwitter />
            </div>
            <div className="rounded-full cursor-pointer border h-[35px] w-[35px] flex justify-center items-center hover:bg-lightBlue hover:text-white transition-all duration-300">
              <FaInstagram />
            </div>
          </div>
        </div>

        <div className="bottom flex  px-28 py-2 lg:p-8 flex-wrap justify-between gap-6 sm:gap-2 bg-[#ADBBF4] w-full">
          <p className="text-grey text-sm">WWW.hyfleex.com</p>
          <p className="text-grey text-sm">Designed By: yashwebdesign.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
