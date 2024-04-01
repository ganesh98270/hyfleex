import React from "react";
import { GrLocation } from "react-icons/gr";
import Map from "../../assets/map.png";
import { PiPhoneThin } from "react-icons/pi";
import { MdOutlineEmail } from "react-icons/md";

const Contect = () => {
  return (
    <div className="container mx-auto my-28">
      <div className="gap-2">
        <p className="text-lightGrey text-center font-kalam font-normal text-[20px]">
          Get in Touch
        </p>
      </div>

      <div className="heading">
        <h3 className="text-[30px] text-center font-semibold">
          Contact Us Today!
        </h3>

        <p className="text-center text-grey">
          Have questions, inquiries, or just want to connect? Reach out to us
          through the contact information below. Our dedicated team is here to{" "}
          <br className="sm:hidden" />
          assist you and ensure you have the information you need. We look
          forward to hearing from you!
        </p>
      </div>

      <div className="flex flex-wrap gap-16 xl:gap-10 mt-10 px-6 sm:px-0">
        <div className="border rounded-xl px-6 py-8 w-[47%] xmd:w-full">
          <div className="input flex gap-3 flex-col mt-5">
            <label htmlFor="">Name*</label>
            <input
              type="text"
              className="outline-nonde border-b-2 border-[black]"
            />
          </div>
          <div className="input flex gap-3 flex-col mt-5">
            <label htmlFor="">Email*</label>
            <input
              type="email"
              className="outline-nonde border-b-2 border-[black]"
            />
          </div>
          <div className="flex gap-3 flex-col mt-5 border-b-2 border-[black] pb-1">
            <p>What are you looking for*</p>
            <div className="flex flex-wrap gap-2 items-center">
              <div className="flex items-center gap-2 me-4">
                <input type="checkbox" id="checkbox_1" />
                <label htmlFor="checkbox_1">Spanish</label>
              </div>
              <div className="flex items-center gap-2 me-4">
                <input type="checkbox" id="checkbox_2" />
                <label htmlFor="checkbox_2">French</label>
              </div>
              <div className="flex items-center gap-2 me-4">
                <input type="checkbox" id="checkbox_3" />
                <label htmlFor="checkbox_3">Japanese</label>
              </div>
              <div className="flex items-center gap-2 me-4">
                <input type="checkbox" id="checkbox_4" />
                <label htmlFor="checkbox_4">German</label>
              </div>
              <div className="flex items-center gap-2 me-4">
                <input type="checkbox" id="checkbox_5" />
                <label htmlFor="checkbox_5">English & IELTS</label>
              </div>
              <div className="flex items-center gap-2 me-4">
                <input type="checkbox" id="checkbox_6" />
                <label htmlFor="checkbox_6">Sanskrit</label>
              </div>
            </div>
          </div>

          <div className="input flex gap-3 flex-col mt-5">
            <label htmlFor="">Message*</label>
            <input
              type="text"
              className="outline-nonde border-b-2 border-[black]"
            />
          </div>

          <div className="flex justify-end mt-5">
            <button className="send-button border-lightBlue py-3 px-4 pe-16 rounded-3xl relative flex items-center">
              Send Message
            </button>
          </div>
        </div>

        <div className="w-[47%] xmd:w-full">
          <div className="flex gap-3 items-center">
            <span className="bg-[#CCD7F9] rounded p-1">
              <GrLocation />
            </span>
            <span className="font-semibold">Address:</span>
          </div>
          <p className="text-grey font-normal mt-2">
            Block 3, Bhagyalaxmi Apartment Old D'Souza Colony, College <br />{" "}
            Rd, opp. Model Colony, Nashik, Maharashtra 422005
          </p>

          <div className="flex justify-between items-center mt-4">
            <div>
              <div className="flex gap-3 items-center">
                <span className="bg-[#CCD7F9] rounded p-1">
                  <PiPhoneThin />
                </span>
                <span className="font-semibold">Phone number:</span>
              </div>
              <p className="text-grey font-normal mt-2">+91 9922185551</p>
            </div>
            <div>
              <div className="flex gap-3 items-center">
                <span className="bg-[#CCD7F9] rounded p-1">
                  <MdOutlineEmail />
                </span>
                <span className="font-semibold">Email:</span>
              </div>
              <p className="text-grey font-normal mt-2">
                <span className="text-black font-semibold">Contact</span>:
                info@hyfleex.com
              </p>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-grey italic">Find Our Office Easily</p>
            <img src={Map} alt="" className="rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contect;
