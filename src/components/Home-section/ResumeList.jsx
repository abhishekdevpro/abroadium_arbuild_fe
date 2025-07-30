// import Slider from "react-slick";
// import resume1 from "../../assets/resume-1.png";
// import resume2 from "../../assets/resume-2.png";
// import resume3 from "../../assets/resume-3.png";
// import resume4 from "../../assets/resume-4.png";
// import resume5 from "../../assets/resume-3 (1).jpg";
// import Button from "../../UI/Button";

// const TemplateSlider = () => {
//   const resumes = [resume4, resume2, resume1, resume3, resume5];

//   const settings = {
//     centerMode: true,
//     centerPadding: "60px",
//     slidesToShow: 3,
//     speed: 500,
//     infinite: true,
//     arrows: true,
//     dots: true,
//     autoplay: false,
//     focusOnSelect: true,
//     swipeToSlide: true,
//     touchMove: true,
//     accessibility: true,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 1,
//           centerPadding: "40px",
//           arrows: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           centerPadding: "20px",
//           arrows: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           centerPadding: "10px",
//           arrows: true,
//           dots: true,
//         },
//       },
//     ],
//   };

//   return (
//     <section className="bg-primary py-20 px-4 sm:px-6 lg:px-10 overflow-hidden">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-4xl md:text-[50px] font-bold text-white leading-tight mb-4">
//             Explore Our Wide Range Of Trending <br />
//             Templates That Recruiters Love To See
//           </h2>
//           <p className="text-white/80 text-lg">
//             3,700,000+ users chose this template
//           </p>
//         </div>

//         {/* Slider Container */}
//         <div className="relative">
//           <Slider {...settings} className="template-slider">
//             {resumes.map((src, index) => (
//               <div
//                 key={index}
//                 className="px-2 sm:px-4 group outline-none focus:outline-none"
//               >
//                 <div className="relative bg-white rounded-2xl shadow-xl overflow-visible transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl mx-auto max-w-sm cursor-pointer">
//                   <div className="aspect-[3/4] relative p-4 overflow-visible">
//                     <img
//                       src={src}
//                       alt={`Resume Template ${index + 1}`}
//                       className="w-full h-full object-contain object-center select-none"
//                       draggable="false"
//                     />
//                     {/* Button only visible on center slide */}
//                     <div className="absolute inset-0 opacity-0 transition-all duration-300 flex items-end justify-center pointer-events-none center-slide-button pb-8">
//                       <Button
//                         variant="primary"
//                         size="sm"
//                         className="text-sm transform scale-0 transition-all duration-300 center-button"
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           console.log(`Template ${index + 1} selected`);
//                         }}
//                       >
//                         Use This Template
//                       </Button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>

//         {/* Custom CSS for slider dots and arrows */}
//         <style>{`
//           .template-slider {
//             position: relative;
//             z-index: 1;
//           }

//           .template-slider .slick-dots {
//             bottom: -50px;
//             position: relative;
//           }

//           .template-slider .slick-dots li button:before {
//             color: white;
//             font-size: 12px;
//             opacity: 0.5;
//           }

//           .template-slider .slick-dots li.slick-active button:before {
//             color: white;
//             opacity: 1;
//           }

//           .template-slider .slick-arrow {
//             z-index: 10;
//             width: 40px;
//             height: 40px;
//             background: #3B82F6;
//             border-radius: 50%;
//             border: none;
//             position: absolute;
//             top: 50%;
//             transform: translateY(-50%);
//             display: flex !important;
//             align-items: center;
//             justify-content: center;
//             color: white;
//             font-size: 18px;
//             font-weight: bold;
//             box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
//           }

//           .template-slider .slick-arrow:before {
//             color: white;
//             font-size: 18px;
//             font-weight: bold;
//           }

//           /* Hide text content in navigation buttons */
//           .template-slider .slick-arrow {
//             font-size: 0 !important;
//             color: transparent !important;
//           }

//           .template-slider .slick-arrow:hover {
//             background: #2563EB;
//             transform: translateY(-50%) scale(1.1);
//           }

//           /* Position arrows relative to center slide */
//           .template-slider .slick-prev {
//             left: calc(50% - 250px);
//           }

//           .template-slider .slick-next {
//             right: calc(50% - 250px);
//           }

//           @media (max-width: 1024px) {
//             .template-slider .slick-prev {
//               left: calc(50% - 200px);
//             }

//             .template-slider .slick-next {
//               right: calc(50% - 200px);
//             }
//           }

//           @media (max-width: 768px) {
//             .template-slider .slick-prev {
//               left: calc(50% - 150px);
//             }

//             .template-slider .slick-next {
//               right: calc(50% - 150px);
//             }
//           }

//           @media (max-width: 480px) {
//             .template-slider .slick-prev {
//               left: calc(50% - 120px);
//             }

//             .template-slider .slick-next {
//               right: calc(50% - 120px);
//             }
//           }

//           /* Center slide styling - show full image without cutting */
//           .template-slider .slick-center .group > div {
//             transform: none;
//             z-index: 5;
//             position: relative;
//             overflow: visible;
//           }

//           /* Side slides positioning - move them down and reduce visibility */
//           .template-slider .slick-slide:not(.slick-center) .group > div {
//             transform: translateY(50px) scale(0.85);
//             opacity: 0.3;
//             z-index: 1;
//           }

//           /* Hide overlapping parts of side slides */
//           .template-slider .slick-slide:not(.slick-center) {
//             overflow: hidden;
//           }

//           /* Ensure center slide container shows full image */
//           .template-slider .slick-center {
//             overflow: visible;
//             z-index: 5;
//           }

//           .template-slider .slick-center .group {
//             overflow: visible;
//             z-index: 5;
//           }

//           /* Ensure proper image display in center slide */
//           .template-slider .slick-center .group > div > div {
//             overflow: visible;
//             z-index: 5;
//           }

//           /* Force image to show completely without cutting */
//           .template-slider .slick-center img {
//             object-position: center !important;
//             object-fit: contain;
//             max-height: none;
//             width: 100%;
//             height: 100%;
//           }

//           /* Ensure no overflow cutting on center slide */
//           .template-slider .slick-center .group > div {
//             overflow: visible !important;
//           }

//           /* Ensure button is visible on center slide - positioned 20% above bottom */
//           .template-slider .slick-center .group {
//             position: relative;
//           }

//           .template-slider .slick-center .group .center-slide-button {
//             position: absolute;
//             bottom: 20%;
//             left: 50%;
//             transform: translateX(-50%);
//             z-index: 15;
//           }

//           /* Popup/Modal specific styles */
//           .template-slider.in-modal {
//             position: static;
//           }

//           .template-slider.in-modal .slick-dots {
//             position: static;
//             margin-top: 20px;
//           }
//         `}</style>
//       </div>
//     </section>
//   );
// };

// export default TemplateSlider;

import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";
import resume1 from "../../assets/resume-4.png";
import resume2 from "../../assets/resume-4.png";
import resume3 from "../../assets/resume-4.png";
import resume4 from "../../assets/resume-4.png";
import resume5 from "../../assets/resume-4.png";
import Button from "../../UI/Button";
import { useNavigate } from "react-router-dom";

const templates = [
  { id: 1, name: "Alex Snyder", image: resume1 },
  { id: 2, name: "Vince Murray", image: resume2 },
  { id: 3, name: "Elsa Williams", image: resume3 },
  { id: 4, name: "Daniel James", image: resume4 },
  { id: 5, name: "Alex Ellison", image: resume5 },
];

const CustomArrow = ({ direction, onClick }) => (
  <div
    className={`absolute top-1/2 transform -translate-y-1/2 z-30 cursor-pointer  ${
      direction === "left" ? "left-[460px]" : "right-[390px]"
    } bg-primary rounded-full shadow p-2`}
    onClick={onClick}
  >
    <span className="text-xl text-white">
      {direction === "left" ? "❮" : "❯"}
    </span>
  </div>
);
CustomArrow.propTypes = {
  direction: PropTypes.oneOf(["left", "right"]).isRequired,
  onClick: PropTypes.func.isRequired,
};
const TemplateSlider = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    const token = localStorage.getItem("token");
    {
      token
        ? window.open(
            `https://builder.abroadium.com/dashboard/resume-builder?${token}`
          )
        : navigate("/login");
    }
  };
  const [centerSlide, setCenterSlide] = useState(0);

  const settings = {
    centerMode: true,
    centerPadding: "160px",
    slidesToShow: 3,
    infinite: true,
    speed: 500,
    dots: true,
    beforeChange: (_, next) => setCenterSlide(next),
    nextArrow: <CustomArrow direction="right" />,
    prevArrow: <CustomArrow direction="left" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <div className="bg-primary py-20 overflow-hidden relative">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-[50px] font-bold text-white leading-tight mb-4">
          Explore Our Collection of Modern Resume Templates
        </h2>
        <p className="text-white/80 text-lg">
          Professionally designed, ATS-friendly, and tailored to impress
          recruiters across industries.
        </p>
      </div>
      <div className="max-w-7xl mx-auto relative px-4">
        <Slider {...settings}>
          {templates.map((template, index) => {
            let styleClass = "scale-100 z-10";
            if (index === centerSlide) {
              styleClass = "scale-100 z-30 shadow-2xl border-2 border-blue-500";
            } else if (index === centerSlide - 1 || index === centerSlide + 1) {
              styleClass = "scale-95 translate-y-4  z-10";
            } else {
              styleClass = "scale-90 translate-y-10  z-0";
            }

            return (
              <div key={template.id} className="">
                <div
                  className={` w-[380px] relative transition-all duration-500 transform bg-white rounded-xl overflow-hidden ${styleClass}`}
                  style={{ transformOrigin: "center center" }}
                >
                  <img
                    src={template.image}
                    alt={template.name}
                    className="w-full h-auto object-cover rounded-xl"
                  />
                  <Button
                    onClick={() => handleClick()}
                    variant="primary"
                    size="sm"
                    className={`absolute bottom-4 left-1/2 -translate-x-1/2 font-medium py-2 px-4 rounded shadow-lg transition-all duration-500 ${
                      index === centerSlide
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                    }`}
                  >
                    Use this template
                  </Button>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default TemplateSlider;
