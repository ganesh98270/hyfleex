import ExploreCourse from "./components/exploreCourse/ExploreCourse";
import MainSection from "./components/mainSection/MainSection";
import NavBar from "./components/navbar/NavBar";

import Values from "./components/values/Values";

import SliderContent from "./customComponents/SliderContent";

const App = () => {
  return (
    <>
      <section className="relative m-2">
        <div className=" rounded-xl bg-pink overflow-hidden mb-10">
          <div className="bg-ellipes pb-24">
            <NavBar />
            <MainSection />
            <p>sdfsdfsdfsd</p>
          </div>
        </div>

        <SliderContent />
      </section>

      <section>
        <Values />
      </section>

      <section>
        <ExploreCourse />
      </section>
    </>
  );
};

export default App;
