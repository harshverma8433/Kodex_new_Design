import "./HeroPage.css";

function HeroPage() {
  return (
    <div className=" h-[550px]  mt-10">
      <div>
      <div className="relative flex flex-col lg:flex-row  mb-8">
        <div className="md:flex md:flex-row lg:w-full flex flex-col-reverse">
          <div
            className="rounded-2xl     w-full  px-4 md:h-[350px] md:px-0 m      cursor-pointer"
            id="gradient-color"
          >
            <div className=" text-white   pb-12 px-4 lg:px-8">
              {/* Text Section */}
              <div className=" lg:mb-0  ">
                <div className="px-3 pt-6 ">
                  <h1 className="text-2xl   lg:text-4xl font-bold text-left leading-relaxed">
                    Your Gateway to <br /> Innovation and <br /> Success
                    Revolutionizing <br />
                    Learning and Software <br /> Solutions
                  </h1>

                  {/* <p className="text-base lg:text-lg mb-4 lg:mb-6 text-left py-4">
                    Discover a new era of learning with our innovative courses
                    and cutting-edge resources. We bridge the gap between
                    academic excellence and real-world skills, ensuring success
                    for students, professionals, and lifelong learners alike.
                    But that’s not all—our expertise goes beyond education! We
                    offer end-to-end software development services tailored to
                    your needs. Whether you have a project in mind or require
                    solutions across any technology, we’re here to bring your
                    vision to life.
                  </p> */}
                </div>

                <div className="flex flex-col mt-8 md:flex-row gap-4 lg:gap-8">
                  <button className="bg-indigo-950 text-white font-bold py-3 md:w-[20%] px-8 lg:py-2 lg:px-14 rounded-full text-base lg:text-xl">
                    TRAININGS
                  </button>
                  <button
                    id="gradient-color"
                    className="bg-black border border-gray-900 text-white font-bold md:w-[20%] py-2 px-8 lg:py-2 lg:px-14  rounded-full text-base lg:text-xl"
                  >
                    SERVICES
                  </button>
                </div>
              </div>
              {/* Image Section */}
            </div>
          </div>
          
        </div>
        
      </div>

      <div className="row mt-28 w-[90%] mx-auto  justify-content-center">
            <div className="col-12">
              <div className="horizontal-band mx-auto"></div>
            </div>
          </div>


      
    </div>
      <div className="bg-grad-homepage relative left-[1200px]  bottom-[90%] "></div>
      </div>
  );
}

export default HeroPage;
