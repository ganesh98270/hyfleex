
import { useState } from "react";
import Logo from "../../assets/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";

const NavBar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav>
            <div className="container flex mx-auto">
                <div className="flex w-full justify-between items-start px-6">
                    {/* logo */}
                    <div className="logo">
                        <img className="w-[148.32px] h-[111.97px]" src={Logo} alt="logo" />
                    </div>

                    {/* navigation bar */}
                    <div className={` navlinkes flex ${toggle && "active"} items-center mt-4`}>
                        <p className="mx-3 text-grey cursor-pointer">Courses</p>
                        <p className="mx-3 text-grey cursor-pointer">About us</p>
                        <p className="mx-3 text-grey cursor-pointer">Teachers</p>
                        <p className="mx-3 text-grey cursor-pointer">Careers</p>
                        <p className="mx-3 text-grey cursor-pointer">Contact</p>
                    </div>


                    {/* enrool */}
                    <div className="green-border p-[1px] rounded-full overflow-hidden mt-4">
                        <button className="border-none outline-none py-2 px-4 font-medium bg-white  rounded-full overflow-hidden text-sm">
                            Enroll now
                        </button>
                    </div>


                </div>

                <div onClick={() => setToggle(!toggle)} className="crose hidden xmd:block p-4 flex justify-center mt-3">
                    <RxHamburgerMenu />
                </div>

            </div>
        </nav>
    );
};

export default NavBar;