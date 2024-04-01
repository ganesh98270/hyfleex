import GoogleIcon from "../assets/Frame 427318161.png";
import Stars from "../assets/image 6.png";


const Students = (Student) => {
    return (
        <div className="bg-lightBlue mx-2 relative rounded-xl p-3 px-5 pt-5">
            <div className="absolute left-[50%] top-[-20px] translate-x-[-50%]">
                <img className="h-[50px] w-[50px]" src={Student.Student} alt="" />
            </div>
            <p className="my-2 text-nowrap">Rucha Kulkarni</p>
            <div className="flex justify-center items-center gap-1">
                <img className="h-[18px] w-[18px]" src={GoogleIcon} alt="" />
                <img className="h-[15px] w-[55px]" src={Stars} alt="" />
            </div>
        </div>
    );
};

export default Students;
