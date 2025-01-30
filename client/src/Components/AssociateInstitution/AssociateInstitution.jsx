
const AssociateInstitution = () => {
  return (
    <div className="bg-black text-center py-16">
        <h1 className="text-font text-white text-2xl pb-10">Associated Institution</h1>
    {/* First Row - 4 Circles */}
    <div className="flex justify-center gap-24 mb-10">
      {Array(4)
        .fill("")
        .map((_, index) => (
          <div
            key={`row1-${index}`}
            className="w-20 h-20 bg-[#54677B] rounded-full"
          ></div>
        ))}
    </div>
    
    {/* Second Row - 5 Circles */}
    <div className="flex justify-center gap-24">
      {Array(5)
        .fill("")
        .map((_, index) => (
          <div
            key={`row2-${index}`}
            className="w-20 h-20 bg-[#54677B] rounded-full"
          ></div>
        ))}
    </div>

    {/* Caption */}
    <p className="text-white text-font text-xl mt-12">And many more...</p>
  </div>  )
}

export default AssociateInstitution