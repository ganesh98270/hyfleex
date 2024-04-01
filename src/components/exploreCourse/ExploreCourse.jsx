import { useState } from "react";
import Men from "../../assets/Mask group.png";
import Rope from "../../assets/Vector 9.png";
import Enter from "../../assets/icons8-enter-key-50 1.png";
import { data } from "../../dummyData/DummyData";
import Arrow from "../../assets/Icon.png";
const ExploreCourse = () => {
    const [active, setActive] = useState("Spanish");

    return (
        <div className="container mx-auto my-28">
            <div className="flex xmd:flex-wrap gap-4">
                {/* left side */}
                <div className="image">
                    <img src={Men} alt="" className="w-[580px] sm:w-full" />
                </div>

                {/* right side */}

                <div className="flex justify-center items-center">
                    <div>
                        <div className="relative flex gap-2">
                            <p className="text-lightGrey font-kalam font-normal text-[20px]">
                                Our Courses
                            </p>
                            <img
                                className="absolute top-[-9px] left-[72px]"
                                src={Rope}
                                alt=""
                            />
                        </div>

                        <div className="heading">
                            <h3 className="text-[30px] font-semibold flex items-center gap-3">
                                Explore our courses
                                <img src={Enter} alt="" />
                            </h3>
                            <h3 className="text-[30px] font-semibold">
                                Your Multilingual Journey Begins Here!
                            </h3>
                        </div>

                        <div className="buttons flex  xl:flex-wrap gap-2 items-center mt-8">
                            {data.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActive(item.language)}
                                    className={`flex items-center text-sm text-nowrap gap-1 border ${active === item.language
                                        ? "border-lightBlue boxshadow-down"
                                        : "border-greyBorder"
                                        } rounded-md px-3 py-1`}
                                >
                                    <img className="w-[20px] h-[20px]" src={item.image} alt="" />
                                    {item.language}
                                </button>
                            ))}
                        </div>

                        <div style={{ overflowX: "auto" }} className="table w-full mt-6">
                            <table className="border w-full rounded-corners">
                                <thead>
                                    <tr className="bg-lightPink">
                                        <td className="py-2 px-6 text-grey font-medium text-sm flex items-center gap-2">
                                            Level <img src={Arrow} alt="" />
                                        </td>
                                        <td className="py-2 px-2 w-[49.5%] text-grey font-medium text-sm">
                                            About
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data
                                        .filter((item) => item.language === active)[0]
                                        ?.data?.map((item, index) => (
                                            <tr key={index}>
                                                <td className="py-2 px-6 border-top">
                                                    <div className="flex gap-3">
                                                        <img
                                                            className="w-[40px] h-[40px]"
                                                            src={item.avatar}
                                                            alt=""
                                                        />

                                                        <div className="heading">
                                                            <p className="text-sm font-semibold">
                                                                {item.heading}
                                                            </p>
                                                            <p className="text-xs font-semibold text-darkGrey">
                                                                {item.subheading}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>

                                                <td className="text-xs font-medium text-grey py-2 px-2 border-top">
                                                    {item.about}
                                                </td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExploreCourse;
