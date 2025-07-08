import React from "react";

// Images (replace with your own)
import cl1 from "../../assets/resume-1.png";
import cl2 from "../../assets/resume-2.png";
import cl3 from "../../assets/resume-3.png";
import cl4 from "../../assets/resume-4.png";
import cl5 from "../../assets/resume-3 (1).jpg";
import ImageSlider from "../../UI/Slider";

const coverLetters = [cl1, cl2, cl3, cl4, cl5];

// export default function CoverLetterSlider() {
//   return (
//     <section className="bg-white py-20 px-4 sm:px-6 lg:px-10">
//       <div className="max-w-7xl mx-auto text-center">
//         <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
//           Looking For <span className="text-blue-600">Impressive</span> Cover
//           Letters?
//         </h2>
//         <p className="text-gray-500 max-w-2xl mx-auto mb-10">
//           Lorem Ipsum is simply dummy text of the printing and typesetting
//           industry. Lorem Ipsum has been the industrys standard dummy text ever
//           since the 1500s.
//         </p>

//         <ImageSlider
//           images={coverLetters}
//           autoPlayInterval={4000}
//           showControls={true}
//           showIndicators={true}
          
//         />
//       </div>
//     </section>
//   );
// }


const CoverLetterSlider = () => {
  // Sample cover letter data - replace with your actual image imports
  const coverLetterImages = [
    {
      src: cl1,
      alt: "Professional Cover Letter Template 1",
      title: "Executive Template",
      description: "Perfect for senior positions"
    },
    {
      src: cl2,
      alt: "Professional Cover Letter Template 2", 
      title: "Creative Design",
      description: "Stand out with style"
    },
    {
      src: cl3,
      alt: "Professional Cover Letter Template 3",
      title: "Modern Layout",
      description: "Clean and professional"
    },
    {
      src: cl4,
      alt: "Professional Cover Letter Template 4",
      title: "Classic Format",
      description: "Traditional approach"
    },
    {
      src: cl5,
      alt: "Professional Cover Letter Template 5",
      title: "Minimalist Style",
      description: "Simple yet effective"
    }
  ];

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
          images={coverLetterImages}
          autoPlayInterval={4000}
          showControls={true}
          showIndicators={true}
        />
      </div>
    </section>
  );
};

export default CoverLetterSlider;
