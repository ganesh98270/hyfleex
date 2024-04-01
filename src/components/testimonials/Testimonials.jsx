import React from "react";
import Colen from "../../assets/colen.png";

const Testimonials = () => {
  return (
    <div className="container mx-auto my-28">
      <div className="gap-2">
        <p className="text-lightGrey text-center font-kalam font-normal text-[20px]">
          Student Voices
        </p>
      </div>

      <div className="heading">
        <h3 className="text-[30px] text-center font-semibold">
          Testimonials and Insights from Our Community
        </h3>
      </div>

      <div className="flex gap-6 mt-16 justify-between items-center lg:flex-wrap lg:justify-center">
        <Card
          letter={"P"}
          heading={"Pratiksha Tambat"}
          para={
            "The best german class in Nashik with proper guidance and Ms.Rutuja takes in a lot of effort to teach. Each and every concept is explained by her in detail without any hesitation. And there is a lot of interaction with the other students which helps to boost confidence. Would highly recommend."
          }
        />
        <Card
          letter={"S"}
          heading={"Shubham W"}
          para={
            "Has best instructors to develop German language skills efficiently for beginners as well as professionals. Instructors helped me build my confidence during difficulties and kept me motivated until I reach my goals!They have flexible schedules, affordable courses and interactive sessions. Highly recommended."
          }
        />
        <Card
          letter={"C"}
          heading={"Charul Patil"}
          para={
            "I have completed my A1 course. It has been a fun learning ride. The concepts were eased into us with the help of many interactive activities, games and worksheet. Ma'am has been really good with her knowledge and efforts. I would highly recommend you if u really wanna learn German."
          }
        />
      </div>
    </div>
  );
};

export default Testimonials;

const Card = ({ letter, heading, para }) => {
  return (
    <div className="testimonial-card transition-all duration-300 w-[33%] md-w-full lg:w-[48%] full-width border border-[#F0F3FD] opacity-50 rounded-[36px] p-6 hover:opacity-100 hover:shadow-3xl">
      <div className="testimonial flex justify-between items-center gap-3">
        <div className="letter-box flex items-center gap-4">
          <p className="letter flex justify-center items-center text-white h-[50px] w-[50px] rounded-full bg-[#7077E4]">
            {letter}
          </p>
          <h3 className="text-[18px] font-medium">{heading}</h3>
        </div>
        <div className="image">
          <img className="h-[25px]" src={Colen} alt="" />
        </div>
      </div>

      <div className="paragraph mt-4">
        <p className="font-normal text-sm">{para}</p>
      </div>
    </div>
  );
};
