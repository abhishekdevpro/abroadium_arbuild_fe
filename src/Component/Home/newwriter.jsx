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
    <div className="py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
        Choose a resume writer to get started
      </h2>
      <p className="text-center text-black mb-12">
        Select from our curated list of professional resume writers.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {writers.map((writer, index) => (
          <div
            key={index}
            className="bg-[#e4e0d7] border-2 border-black rounded-lg p-6 text-center flex flex-col justify-between h-full transition duration-300 transform hover:shadow-xl hover:scale-105"
          >
            <div>
              <img
                src={writer.img}
                alt={writer.name}
                className="w-20 h-20 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-lg font-bold">{writer.name}</h3>
              <p className="text-sm text-gray-800 mt-2">{writer.description}</p>
              <p className="mt-4 text-black">
                <strong>Price:</strong> {writer.price} <br />
                <strong>Turnaround:</strong> {writer.turnaround}
              </p>
            </div>

            <button
              className="mt-6 text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-600 hover:shadow-xl hover:shadow-[#0c448f] bg-[#0c448f]"
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
