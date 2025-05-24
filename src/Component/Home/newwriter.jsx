// import dummyimg from "../assest/dummyimg.png";
// export default function NewWriter() {
//   return (
//     <div className="bg-[#041122] py-16 px-4">
//       <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
//         Choose a resume writer to get started
//       </h2>
//       <p className="text-center text-gray-300 mb-12">
//         Select from our curated list of professional resume writers.
//       </p>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
//         {/* Writer 1 */}
//         <div className="bg-[#0a1b31] rounded-lg p-6 text-center">
//           <img
//             src={dummyimg}
//             alt="Olivia Clark"
//             className="w-20 h-20 mx-auto rounded-full mb-4 object-cover"
//           />
//           <h3 className="text-lg font-bold">Olivia Clark</h3>
//           <p className="text-sm text-gray-300 mt-2">
//             Experienced in marketing roles. Based in New York, I craft
//             compelling resumes.
//           </p>
//           <p className="mt-4 text-white">
//             <strong>Price:</strong> $150 <br />
//             <strong>Turnaround:</strong> 5 days
//           </p>
//           <button className="mt-4 bg-orange-600 hover:bg-orange-500 text-white font-semibold px-4 py-2 rounded">
//             Select
//           </button>
//         </div>

//         {/* Writer 2 */}
//         <div className="bg-[#0a1b31] rounded-lg p-6 text-center">
//           <img
//             src={dummyimg}
//             alt="Michael Turner"
//             className="w-20 h-20 mx-auto rounded-full mb-4 object-cover"
//           />
//           <h3 className="text-lg font-bold">Michael Turner</h3>
//           <p className="text-sm text-gray-300 mt-2">
//             Specializing in tech and engineering. San Francisco expert resume
//             strategist.
//           </p>
//           <p className="mt-4 text-white">
//             <strong>Price:</strong> $175 <br />
//             <strong>Turnaround:</strong> 6 days
//           </p>
//           <button className="mt-4 bg-orange-600 hover:bg-orange-500 text-white font-semibold px-4 py-2 rounded">
//             Select
//           </button>
//         </div>

//         {/* Writer 3 */}
//         <div className="bg-[#0a1b31] rounded-lg p-6 text-center">
//           <img
//             src={dummyimg}
//             alt="Rachel Kim"
//             className="w-20 h-20 mx-auto rounded-full mb-4 object-cover"
//           />
//           <h3 className="text-lg font-bold">Rachel Kim</h3>
//           <p className="text-sm text-gray-300 mt-2">
//             Finance sector resumes are my forte. Dedicated writer in Chicago.
//           </p>
//           <p className="mt-4 text-white">
//             <strong>Price:</strong> $160 <br />
//             <strong>Turnaround:</strong> 6 days
//           </p>
//           <button className="mt-4 bg-orange-600 hover:bg-orange-500 text-white font-semibold px-4 py-2 rounded">
//             Select
//           </button>
//         </div>

//         {/* Writer 4 */}
//         <div className="bg-[#0a1b31] rounded-lg p-6 text-center">
//           <img
//             src={dummyimg}
//             alt="James Patel"
//             className="w-20 h-20 mx-auto rounded-full mb-4 object-cover"
//           />
//           <h3 className="text-lg font-bold">James Patel</h3>
//           <p className="text-sm text-gray-300 mt-2">
//             Expert in management careers. Professional resume creator from
//             Toronto.
//           </p>
//           <p className="mt-4 text-white">
//             <strong>Price:</strong> $200 <br />
//             <strong>Turnaround:</strong> 5 days
//           </p>
//           <button className="mt-4 bg-orange-600 hover:bg-orange-500 text-white font-semibold px-4 py-2 rounded">
//             Select
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
import { useState } from "react";
import dummyimg from "../assest/dummyimg.png";
import ResumeFormModal from "./ResumeFormModal";
// New modal component

const writers = [
  {
    name: "Olivia Clark",
    description:
      "Experienced in marketing roles. Based in New York, I craft compelling resumes.",
    price: "$150",
    turnaround: "5 days",
    img: dummyimg,
  },
  {
    name: "Michael Turner",
    description:
      "Specializing in tech and engineering. San Francisco expert resume strategist.",
    price: "$175",
    turnaround: "6 days",
    img: dummyimg,
  },
  {
    name: "Rachel Kim",
    description:
      "Finance sector resumes are my forte. Dedicated writer in Chicago.",
    price: "$160",
    turnaround: "6 days",
    img: dummyimg,
  },
  {
    name: "James Patel",
    description:
      "Expert in management careers. Professional resume creator from Toronto.",
    price: "$200",
    turnaround: "5 days",
    img: dummyimg,
  },
];

export default function NewWriter() {
  const [selectedWriter, setSelectedWriter] = useState(null);

  return (
    <div className="bg-[#041122] py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
        Choose a resume writer to get started
      </h2>
      <p className="text-center text-gray-300 mb-12">
        Select from our curated list of professional resume writers.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {writers.map((writer, index) => (
          <div key={index} className="bg-[#0a1b31] rounded-lg p-6 text-center">
            <img
              src={writer.img}
              alt={writer.name}
              className="w-20 h-20 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-lg font-bold">{writer.name}</h3>
            <p className="text-sm text-gray-300 mt-2">{writer.description}</p>
            <p className="mt-4 text-white">
              <strong>Price:</strong> {writer.price} <br />
              <strong>Turnaround:</strong> {writer.turnaround}
            </p>
            <button
              className="mt-4 bg-orange-600 hover:bg-orange-500 text-white font-semibold px-4 py-2 rounded"
              onClick={() => setSelectedWriter(writer.name)}
            >
              Select
            </button>
          </div>
        ))}
      </div>

      {selectedWriter && (
        <ResumeFormModal
          writer={selectedWriter}
          onClose={() => setSelectedWriter(null)}
        />
      )}
    </div>
  );
}
