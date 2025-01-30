
const SuccessStories = () => {
  return (
    <div className="bg-[#181739] pb-24">
        <h1 className="text-3xl tracking-wide py-12 text-font text-white ">Success Stories</h1>
    <div className=" flex flex-wrap justify-center gap-x-10 gap-y-10 place-items-center">
        {
            Array(8).fill().map((_,index) => {
                return(
                    <div className="w-[18%] h-72 rounded-xl  flex items-end justify-center pb-4 px-4 border-2 border-white  bgcol3" key={index}>
                        <h1 className="text-white  text-center">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus asperiores, labore quos natus obcaecati ullam sunt! 

                        </h1>
                </div>
                )
            })
        }
    </div>
    </div>
  )
}

export default SuccessStories