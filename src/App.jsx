import Contect from "./components/contect/Contect";
import ExploreCourse from "./components/exploreCourse/ExploreCourse";
import Faq from "./components/faq/Faq";
import Footer from "./components/footer/Footer";
import MainSection from "./components/mainSection/MainSection";
import NavBar from "./components/navbar/NavBar";
import Promoting from "./components/promoting/Promoting";
import Teachers from "./components/teachers/Teachers";
import Testimonials from "./components/testimonials/Testimonials";

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

      <section>
        <Promoting />
      </section>

      <section>
        <Teachers />
      </section>

      <section>
        <Testimonials />
      </section>

      <section>
        <Faq />
      </section>

      <section>
        <Contect />
      </section>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
