import BoxSection from "./BoxSection/BoxSection";
import "./ChooseUs.css";
const ChooseUs = () => {
  return (
    <div className="text-white px-[10%] chooseus-bg-col">
      <h1 className="text-xl tracking-wide py-12">WHY YOU SHOULD CHOOSE US</h1>

      <div className=" grid grid-cols-3 pl-10 gap-y-10 ">
        {Array(4)
          .fill()
          .map((_, index) => {
            return (
              <div key={index}>
                <BoxSection />
              </div>
            );
          })}
      </div>

      <div className="px-8  space-x-16 flex justify-between">
        <div className="w-[400px]    flex items-end text-start">
          <p className=" text-xl px-[6%]">
            Lorem ipsum dolor sit amet, dolor sit ametdolor sit ametdolor sit
            amet consectetur adipiscing elit. Nunc ullamcorper scelerisque mi,
            in malesuada felis malesuada vel.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in
            malesuada felis malesuada vel. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in
            malesuada felis madf
          </p>
        </div>
        <div className="bg-[#54677B] w-[600px] h-[400px] rounded-3xl"></div>

      </div>
        <h1 className="py-10 mx-10 px-4  text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis madf</h1>
    </div>
  );
};

export default ChooseUs;
