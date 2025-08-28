// }
import { useState } from "react";
import resumeExpert1 from "../assest/resume-expert1.png";
import resumeExpert2 from "../assest/resume-expert2.png";
import resumeExpert3 from "../assest/resume-expert3.png";
import resumeExpert4 from "../assest/resume-expert4.png";
import resumeExpert5 from "../assest/resume-expert5.png";
import resumeExpert6 from "../assest/resume-expert6.png";

import ResumeFormModal from "./ResumeFormModal";
import Button from "../../UI/Button";
// New modal component

const writers = [
  {
    name: "Alison Marie",
    description: "Executive Resumes",
    price: "$39",
    turnaround: "5 days",
    img: resumeExpert1,
  },
  {
    name: "Ken Docherty",
    description: "Senior Level Resumes",
    price: "$50",
    turnaround: "6 days",
    img: resumeExpert2,
  },
  {
    name: "Adrienne Tom",
    description: "Executive Resumes",
    price: "$59",
    turnaround: "6 days",
    img: resumeExpert3,
  },
  {
    name: "Alean Kearns",
    description: "Career Coachings",
    price: "$65",
    turnaround: "5 days",
    img: resumeExpert4,
  },
  // {
  //   name: "Mark Karpinka",
  //   description: "Resumes & Cover Letters",
  //   price: "$79",
  //   turnaround: "6 days",
  //   img: resumeExpert5,
  // },
  // {
  //   name: "Devon Carter",
  //   description: "Resume Writing",
  //   price: "$99",
  //   turnaround: "5 days",
  //   img: resumeExpert6,
  // },
];

export default function NewWriter() {
  const [selectedWriter, setSelectedWriter] = useState(null);

  // Always return the first 4 writers
  const getCurrentItems = () => {
    return writers.slice(0, 4);
  };

  return (
    <div className="bg-background py-16 px-4">
      <h2 className="text-center text-3xl md:text-[50px] font-bold mb-4 text-black">
        Can&apos;t build your resume online?{" "}
        <span className="text-primary">Get it done</span> from our Resume
        experts.
      </h2>
      <p className="text-center text-[#6D6D6D] mx-auto md:w-[800px] px-4">
        Upload your file here and let our experts review it manually.
      </p>
      <p className="text-center text-[#6D6D6D] mx-auto md:w-[800px] mb-10 px-4">
        ✅ Fast response | 📬 Goes directly to our resume experts | 💬 Add
        comments
      </p>

      {/* Writers Grid */}
      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {getCurrentItems().map((writer, index) => (
            <div
              key={index}
              className="bg-background border-2 border-black rounded-lg p-6 text-center flex flex-col justify-between h-full transition duration-300 transform hover:shadow-xl hover:scale-105"
            >
              <div>
                <img
                  src={writer.img}
                  alt={writer.name}
                  className="w-20 h-20 mx-auto rounded-full mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold">{writer.name}</h3>
                <p className="text-sm text-gray-600">{writer.description}</p>
                <p className="mt-4 text-black">
                  <strong>Price:</strong> {writer.price} <br />
                  <strong>Turnaround:</strong> {writer.turnaround}
                </p>
              </div>

              <Button
                variant="primary"
                size="md"
                className="w-full mt-6 hover:shadow-xl hover:bg-primary/90"
                onClick={() => setSelectedWriter(writer.name)}
              >
                Select
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedWriter && (
        <ResumeFormModal
          writer={selectedWriter}
          onClose={() => setSelectedWriter(null)}
        />
      )}
    </div>
  );
}

// import { useState } from "react";
// import resumeExpert1 from "../assest/resume-expert1.png";
// import resumeExpert2 from "../assest/resume-expert2.png";
// import resumeExpert3 from "../assest/resume-expert3.png";
// import resumeExpert4 from "../assest/resume-expert4.png";
// import resumeExpert5 from "../assest/resume-expert5.png";
// import resumeExpert6 from "../assest/resume-expert6.png";

// import ResumeFormModal from "./ResumeFormModal";
// import Button from "../../UI/Button";

// const writers = [
//   {
//     name: "Alison Marie",
//     description: "Executive Resumes",
//     price: "$39",
//     turnaround: "5 days",
//     img: resumeExpert1,
//   },
//   {
//     name: "Ken Docherty",
//     description: "Senior Level Resumes",
//     price: "$50",
//     turnaround: "6 days",
//     img: resumeExpert2,
//   },
//   {
//     name: "Adrienne Tom",
//     description: "Executive Resumes",
//     price: "$59",
//     turnaround: "6 days",
//     img: resumeExpert3,
//   },
//   {
//     name: "Alean Kearns",
//     description: "Career Coachings",
//     price: "$65",
//     turnaround: "5 days",
//     img: resumeExpert4,
//   },
//   // {
//   //   name: "Mark Karpinka",
//   //   description: "Resumes & Cover Letters",
//   //   price: "$79",
//   //   turnaround: "6 days",
//   //   img: resumeExpert5,
//   // },
//   // {
//   //   name: "Devon Carter",
//   //   description: "Resume Writing",
//   //   price: "$99",
//   //   turnaround: "5 days",
//   //   img: resumeExpert6,
//   // },
// ];

// export default function NewWriter() {
//   const [selectedWriter, setSelectedWriter] = useState(null);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   // Decide which items to show
//   const getCurrentItems = () => {
//     if (currentSlide === 0) {
//       return writers.slice(0, 4); // show first 4
//     }
//     return writers.slice(4); // show last 2
//   };

//   return (
//     <div className="bg-background py-16 px-4">
//       <h2 className="text-center text-3xl md:text-[50px] font-bold mb-4 text-black">
//         Can&apos;t build your resume online?{" "}
//         <span className="text-primary">Get it done</span> from our Resume
//         experts.
//       </h2>
//       <p className="text-center text-[#6D6D6D] mx-auto md:w-[800px] px-4">
//         Upload your file here and let our experts review it manually.
//       </p>
//       <p className="text-center text-[#6D6D6D] mx-auto md:w-[800px] mb-10 px-4">
//         ✅ Fast response | 📬 Goes directly to our resume experts | 💬 Add
//         comments
//       </p>

//       {/* Slider Container */}
//       <div className="relative max-w-6xl mx-auto">
//         <div
//           className={`grid gap-8 mb-8 ${
//             currentSlide === 0
//               ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-4"
//               : "grid-cols-1 sm:grid-cols-2 md:grid-cols-2"
//           }`}
//         >
//           {getCurrentItems().map((writer, index) => (
//             <div
//               key={index}
//               className="bg-background border-2 border-black rounded-lg p-6 text-center flex flex-col justify-between h-full transition duration-300 transform hover:shadow-xl hover:scale-105"
//             >
//               <div>
//                 <img
//                   src={writer.img}
//                   alt={writer.name}
//                   className="w-20 h-20 mx-auto rounded-full mb-4 object-cover"
//                 />
//                 <h3 className="text-lg font-semibold">{writer.name}</h3>
//                 <p className="text-sm text-gray-600 ">{writer.description}</p>
//                 <p className="mt-4 text-black">
//                   <strong>Price:</strong> {writer.price} <br />
//                   <strong>Turnaround:</strong> {writer.turnaround}
//                 </p>
//               </div>

//               <Button
//                 variant="primary"
//                 size="md"
//                 className="w-full mt-6 hover:shadow-xl hover:bg-primary/90"
//                 onClick={() => setSelectedWriter(writer.name)}
//               >
//                 Select
//               </Button>
//             </div>
//           ))}
//         </div>

//         {/* Dots Navigation */}
//         <div className="flex justify-center space-x-3 mt-8">
//           {[0, 1].map((dotIndex) => (
//             <button
//               key={dotIndex}
//               onClick={() => setCurrentSlide(dotIndex)}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 currentSlide === dotIndex
//                   ? "bg-primary scale-125"
//                   : "bg-gray-300 hover:bg-gray-400"
//               }`}
//               aria-label={`Go to slide ${dotIndex + 1}`}
//             />
//           ))}
//         </div>
//       </div>

//       {selectedWriter && (
//         <ResumeFormModal
//           writer={selectedWriter}
//           onClose={() => setSelectedWriter(null)}
//         />
//       )}
//     </div>
//   );
// }
