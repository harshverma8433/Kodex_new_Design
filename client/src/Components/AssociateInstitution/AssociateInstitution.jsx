import galgotia from './galgotia.jpg'
import gla from "./gla.png"
import iftm from "./iftm.jpg"
import iilm from "./iilm.png"
import kalasalingam from "./kalasalingam.jpg"
import nims from "./nims.png"
import sharada from "./sharada.jpg"
import vishwaniketan from "./vishwaniketan.png"
import kg_reddy from "./kg_reddy.png"

const AssociateInstitution = () => {

  const AssociateInstitutionContent = [
    galgotia,
    gla,
    iftm,
    iilm,
    kalasalingam,
    nims,
    sharada,
    vishwaniketan,
    kg_reddy,

  ]


  return (
    <div className="bg-black text-center py-20">
        <h1 className="text-font text-white text-2xl pb-10">Associated Institution</h1>
    {/* First Row - 4 Circles */}
    <div className="flex justify-center gap-10 mb-10">
        {AssociateInstitutionContent.slice(0, 4).map((image, index) => (
          // <div key={index} className="w-36 h-36 bg-[#54677B] rounded-full overflow-hidden">
            <img key={index}  src={image}  alt={`Institution-${index + 1}`} className="w-40 h-36" />
          // </div>
        ))}
      </div>
    
    {/* Second Row - 5 Circles */}
    <div className="flex justify-center gap-10">
        {AssociateInstitutionContent.slice(4).map((image, index) => (
          // <div key={index + 4} className="w-36 h-36 bg-[#54677B] rounded-full overflow-hidden">
            <img key={index} src={image} alt={`Institution-${index + 5}`} className="w-48 h-36 " />
          // </div>
        ))}
      </div>

    {/* Caption */}
    <p className="text-white text-font text-xl mt-12">And many more...</p>
  </div>  )
}

export default AssociateInstitution