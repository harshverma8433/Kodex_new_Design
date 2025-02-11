import { DownloadCloud } from "lucide-react"; // For the icon
import "./BrochureSection.css"
import rec_65 from "./Rectangle 65.png"
const BrochureSection = () => {
  return (
    <div className="">
    <div>
      <div className="flex justify-center mb-6 ">
        
        <div className="bg-[#985A3B] py-4  flex justify-center items-center text-white font-mono tracking-wide text-xl  w-64 cursor-pointer rounded-xl">Wants to know more?</div>
      </div>
    </div>
    <div className="relative  min-h-[300px] flex justify-center items-center">
      {/* Background Overlapping Layers */}
      <div className="absolute bg-broc-col1 w-[80%] rounded-2xl  h-[140px] skew-y-[5deg] z-10 top-20 " />
      <div className="absolute bg-broc-col2 w-[80%] rounded-2xl   h-[120px] skew-y-[-6deg] z-10" />

      {/* Main Content Section */}
      <div className="flex items-center relative bg-slate-600 h-36  px-10 w-[80%] rounded-md shadow-xl z-10">
        {/* Left Image */}
        <div className="w-40 ">
          <img
            src={rec_65}
            alt="Brochure"
            className="transform w-60 -rotate-6 absolute top-[-70px] left-[-30px] shadow-lg"
          />
        </div>


        {/* Download Button */}
       <div className=" w-full flex justify-end">
       <a href="./Brochure.pdf"  download="./Brochure.pdf"  className="cursor-pointer bg-orange-400 hover:bg-orange-500 px-4 py-2 flex items-center rounded-md shadow-lg text-black font-medium">
          <DownloadCloud className="mr-2" />
          Download Brochure
        </a>
       </div>
      </div>
    </div>
    <div className=" mx-24 my-10 ">
    <h1 className="text-white text-font  text-start ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis madf</h1>

    </div>
      </div>
  );
};

export default BrochureSection;
