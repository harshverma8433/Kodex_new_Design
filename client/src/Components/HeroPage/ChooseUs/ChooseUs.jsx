import WhyDifferent from "../WhyDifferent/WhyDifferent";
import BoxSection from "./BoxSection/BoxSection";
import "./ChooseUs.css";
const ChooseUs = () => {
  const chooseuscontent = [
    "Expert-Led Training Programs",
    "Comprehensive Curriculum",
    "Flexible Learning Options",
    "Personalized Career Guidance",
  ];
  return (
    <>    <div className="text-white px-[10%] rounded-t-3xl chooseus-bg-col">
      <h1 className="text-xl tracking-wide py-12">WHY YOU SHOULD CHOOSE US</h1>

      <div className=" grid grid-cols-3 pl-10 gap-y-10 ">
        {chooseuscontent.map((content, index) => {
          return (
            <div key={index}>
              <BoxSection element={content} />
            </div>
          );
        })}
      </div>

      <div className="px-8 mt-10   flex justify-between">
        <div className="w-[500px]    flex items-end text-start">
          <p className=" text-xl tracking-wide ">
            At Kodevortex, our mission is to bridge the gap between academic
            learning and industry needs. We believe in empowering students and
            professionals with the right skills to succeed in today’s
            competitive technology-driven world. Our training programs are
            designed to provide hands-on experience, making learning interactive
            and effective.
            Hulallaala Hulallaala Hulallaala Hulallaala Hulallaala Hulallaala Hulallaala Hulallaala Hulallaala Hulallaala Hulallaala Hulallaala Hulallaala Hulallaala Hulallaala Hulallaala  Hulallaala Hulallaala Hulallaala Hulallaala Hulallaala Hulallaala Hulallaala Hulallaala Hulallaala Hulallaala Hulallaala Hulallaala Hulallaala Hulallaala Hulallaala   

          </p>
        </div>
        <div className="bg-[#54677B] w-[600px] h-[380px] rounded-3xl"></div>
      </div>
      <div className="mt-6 mx-[2%]">
        <h1 className="py-10 text-xl   text-start">
          We understand that every learner has unique goals and aspirations.
          That’s why we offer personalized guidance to help you navigate your
          career path and achieve your dreams. From foundational skills to
          advanced technologies, our comprehensive curriculum ensures that
          you’re prepared to tackle real-world challenges with confidence.
        </h1>
      </div>
    </div>

        <WhyDifferent/>
    </>

  );
};

export default ChooseUs;
