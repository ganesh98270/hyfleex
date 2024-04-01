import React from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="container-full mx-auto my-28 mb-6">
      <div className="bg-[#f0f3fd] rounded-[40px] overflow-hidden">
        <div className="flex flex-wrap p-28 lg:p-8  justify-between items-centerc gap-6">
          <div className="heading">
            <h2 className="text-[#363679] font-bold text-[36px]">HYFLEEX</h2>
            <p className="text-grey">
              Block 3, Bhagyalaxmi Apartment <br />
              Old D'Souza Colony, College Rd, <br />
              opp. Model Colony, Nashik, Maharashtra
            </p>
          </div>

          <div className="links flex items-center gap-3">
            <p className="text-grey text-sm">Careers</p>
            <p className="text-grey text-sm">Teachers</p>
            <p className="text-grey text-sm">Support</p>
            <p className="text-grey text-sm">Contact</p>
          </div>

          <div className="links flex items-center gap-4">
            <div className="rounded-full cursor-pointer border h-[35px] w-[35px] flex justify-center items-center">
              <BiLogoFacebook />
            </div>
            <div className="rounded-full cursor-pointer border h-[35px] w-[35px] flex justify-center items-center">
              <BiLogoTwitter />
            </div>
            <div className="rounded-full cursor-pointer border h-[35px] w-[35px] flex justify-center items-center">
              <FaInstagram />
            </div>
          </div>
        </div>

        <div className="bottom flex  px-28 py-2 lg:p-8 flex-wrap justify-between gap-6 bg-[#ADBBF4] w-full">
          <p className="text-grey text-sm">WWW.hyfleex.com</p>
          <p className="text-grey text-sm">Designed By: yashwebdesign.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
