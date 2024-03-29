import { useState } from "react";
import Men from "../../assets/Mask group.png";
import Rope from "../../assets/Vector 9.png";
import Enter from "../../assets/icons8-enter-key-50 1.png";
import { data } from "../../dummyData/DummyData";
const ExploreCourse = () => {
    const [active, setActive] = useState("Spanish");




    return (
        <div className="container mx-auto my-28">
            <div className="flex">
                {/* left side */}
                <div className="image">
                    <img src={Men} alt="" />
                </div>

                {/* right side */}

                <div>
                    <div className="relative flex gap-2">
                        <p className="text-lightGrey font-kalam font-normal text-[17px]">Our Courses</p>
                        <img className="absolute top-[-9px] right-[-67px]" src={Rope} alt="" />
                    </div>

                    <div className="heading">
                        <h3 className="text-[30px] font-medium flex items-center gap-3">
                            Explore our courses
                            <img src={Enter} alt="" />
                        </h3>
                        <h3 className="text-[30px] font-medium">Your Multilingual Journey Begins Here!
                        </h3>
                    </div>


                    <div className="buttons flex items-center mt-8">
                        {
                            data.map((item, index) => (

                                <button key={index} onClick={() => setActive(item.language)} className={`flex items-center text-xs text-nowrap gap-2 border ${active === item.language ? 'border-lightBlue' : 'border-greyBorder'} mx-1 rounded-md px-3 py-1`}>
                                    <img className="w-[20px] h-[20px]" src={item.image} alt="" />
                                    {item.language}
                                </button>

                            ))
                        }
                    </div>


                    <div className="table  w-full overflow-hidden">
                        <table className="border w-full rounded-corners">
                            <thead>
                                <tr className="bg-lightPink">
                                    <td className="py-1 px-6 w-1/2">Level</td>
                                    <td className="py-1 px-6 w-1/2">About</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.filter(item => item.language === active)[0]?.data?.map((item, index) => (
                                        <tr key={index}>
                                            <td className="py-2 px-6 w-1/2 border-top">
                                                <div className="flex gap-3">
                                                    <img className="w-[40px] h-[40px]" src={item.avatar} alt="" />

                                                    <div className="heading">
                                                        <p className="text-sm font-semibold">{item.heading}</p>
                                                        <p className="text-xs font-semibold text-darkGrey">{item.subheading}</p>
                                                    </div>
                                                </div>

                                            </td>

                                            <td className="text-xs font-medium text-grey py-2 px-6 w-1/2 border-top">{item.about}</td>

                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExploreCourse;
