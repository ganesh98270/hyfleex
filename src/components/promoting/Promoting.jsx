import React from "react";
import Rope from "../../assets/Vector 9.png";
import Girl from "../../assets/girl.png";
import Rutujs from "../../assets/Group 427318197.png";

const Promoting = () => {
  return (
    <div className="container mx-auto my-28">
      <div className="flex xmd:flex-wrap justify-between gap-2">
        {/* left */}
        <div className="flex items-center w-8/12 xmd:w-full">
          <div>
            <div className="relative flex gap-2">
              <p className="text-lightGrey font-kalam font-normal text-[20px]">
                About us
              </p>
              <img
                className="absolute top-[-9px] left-[72px]"
                src={Rope}
                alt=""
              />
            </div>

            <div className="heading">
              <h3 className="text-[30px] font-semibold flex items-center gap-3">
                Promoting global connectivity
                <img src={Girl} alt="" />
              </h3>
              <h3 className="text-[30px] font-semibold">
                through language and culture.
              </h3>

              <p className="mt-4 text-md font-normal text-grey pe-4">
                The mission of Hyfleex is to provide students with the
                opportunity to learn about different languages and cultures. The
                classes aim to promote an understanding and appreciation of the
                languages and cultures among students. Additionally, the types
                seek to prepare students for future academic and professional
                opportunities in which they may encounter the language.
              </p>
            </div>
          </div>
        </div>

        {/* right */}
        <div className="image flex justify-end xmd:justify-center xmd:mt-6 w-1/3  xmd:w-full">
          <img src={Rutujs} className="w-[338px] h-[412px]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Promoting;
