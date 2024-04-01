import Play from "../../assets/Glass Icons.png";
import Plane from "../../assets/Glass Icons (1).png";
import Page from "../../assets/Glass Icons (2).png";

const Values = () => {
  return (
    <div className="container mx-auto my-28 lg:my-40">
      <div className="flex flex-col justify-center items-center">
        <p className="font-kalam text-[20px] font-normal text-lightGrey">
          Why choose us
        </p>
        <h3 className="text-[40px] font-semibold">Our Values</h3>
      </div>

      <div className="flex gap-6 flex-wrap justify-center items-center mt-16">
        <Card
          image={Play}
          heading={"Proven Success"}
          para={
            "Join us for a track record of student success, proving our commitment to helping you achieve your language goals."
          }
        />
        <Card
          image={Plane}
          heading={"Innovative Teaching"}
          para={
            "Experience a modern approach to learning with a mix of traditional methods and cutting-edge techniques for an engaging language journey."
          }
        />
        <Card
          image={Page}
          heading={"Community Support"}
          para={
            "Join a supportive language-learning community, emphasizing collaboration, cultural exchange, and constant motivation for language proficiency."
          }
        />
      </div>
    </div>
  );
};

export default Values;

const Card = ({ image, heading, para }) => {
  return (
    <div className="flex w-[28%]  h-[300px] flex-col justify-center items-center p-3 hover:shadow-2xl hover:shadow-lightBlue lg:w-[45%] full-width">
      <div className="glass-image">
        <img src={image} alt="" />
      </div>

      <div className="card-heading mt-10">
        <p className="text-2xl font-medium">{heading}</p>
      </div>

      <div className="paragraph my-3">
        <p className="text-grey font-normal text-center">{para}</p>
      </div>
    </div>
  );
};
