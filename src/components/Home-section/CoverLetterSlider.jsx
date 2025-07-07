// import React from "react";

// // Images (replace with your own images if needed)

// const coverLetters = [cl1, cl2, cl3, cl4, cl5];

// export default function CoverLetterSlider() {
//   return (
//     <section className="bg-white px-4 sm:px-6 lg:px-8 py-20">
//       <div className="max-w-7xl mx-auto text-center">
//         {/* Heading */}
//         <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
//           Looking For <span className="text-primary">Impressive</span> Cover Letters?
//         </h2>
//         <p className="text-gray-500 max-w-2xl mx-auto mb-10">
//           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
//         </p>

//         {/* Slider */}
//         <Slider
//           items={coverLetters}
//           renderItem={(img, index) => (
//             <div className="bg-white shadow-md rounded-lg overflow-hidden w-[260px] sm:w-[300px] mx-auto">
//               <img
//                 src={img}
//                 alt={`Cover Letter ${index + 1}`}
//                 className="w-full h-full object-contain"
//               />
//             </div>
//           )}
//         />
//       </div>
//     </section>
//   );
// }

import React from "react";

// Images (replace with your own)
import cl1 from "../../assets/resume-1.png";
import cl2 from "../../assets/resume-2.png";
import cl3 from "../../assets/resume-3.png";
import cl4 from "../../assets/resume-4.png";
import cl5 from "../../assets/resume-5.png";
import ImageSlider from "../../UI/Slider";

const coverLetters = [cl1, cl2, cl3, cl4, cl5];

// export default function CoverLetterSlider() {
//   return (
//     <section className="bg-white py-20 px-4 sm:px-6 lg:px-10">
//       <div className="max-w-7xl mx-auto text-center">
//         <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
//           Looking For <span className="text-primary">Impressive</span> Cover
//           Letters?
//         </h2>
//         <p className="text-gray-500 max-w-2xl mx-auto mb-10">
//           Lorem Ipsum is simply dummy text of the printing and typesetting
//           industry. Lorem Ipsum has been the industrys standard dummy text ever
//           since the 1500s.
//         </p>

//         <ImageSlider
//           items={coverLetters}
//           slidesToShow={4}
//           renderItem={(img, index) => (
//             <div className="bg-white rounded-xl shadow-md overflow-hidden w-[260px] sm:w-[300px] mx-auto">
//               <img
//                 src={img}
//                 alt={`Cover ${index + 1}`}
//                 className="w-full object-contain"
//               />
//             </div>
//           )}
//         />
//       </div>
//     </section>
//   );
// }

export default function CoverLetterSlider() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
          Looking For <span className="text-blue-600">Impressive</span> Cover
          Letters?
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s.
        </p>

        <ImageSlider
          items={coverLetters}
          slidesToShow={4}
          renderItem={(img, index) => (
            <div className="bg-white rounded-xl shadow-lg overflow-hidden w-[260px] mx-auto hover:shadow-xl transition-shadow duration-300">
              <img
                src={img}
                alt={`Cover Letter ${index + 1}`}
                className="w-full h-auto object-cover"
              />
            </div>
          )}
        />
      </div>
    </section>
  );
}
