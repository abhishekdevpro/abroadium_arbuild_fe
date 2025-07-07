// import React from "react";
// import Slider from "react-slick";
// import PropTypes from "prop-types";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// export default function ImageSlider({ items, renderItem, slidesToShow = 3 }) {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <Slider {...settings}>
//       {items.map((item, index) => (
//         <div key={index} className="px-2">
//           {renderItem(item, index)}
//         </div>
//       ))}
//     </Slider>
//   );
// }

// ImageSlider.propTypes = {
//   items: PropTypes.array.isRequired,
//   renderItem: PropTypes.func.isRequired,
//   slidesToShow: PropTypes.number,
// };



import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Custom ImageSlider component that works without external dependencies
function ImageSlider({ items, renderItem, slidesToShow = 3 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + slidesToShow >= items.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, items.length - slidesToShow) : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Responsive slidesToShow
  const getResponsiveSlidesToShow = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 480) return 1;
      if (window.innerWidth < 768) return 2;
      if (window.innerWidth < 1024) return 3;
    }
    return slidesToShow;
  };

  const responsiveSlidesToShow = getResponsiveSlidesToShow();
  const maxIndex = Math.max(0, items.length - responsiveSlidesToShow);

  return (
    <div className="relative w-full">
      {/* Slider container */}
      <div className="overflow-hidden relative">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ 
            transform: `translateX(-${(currentIndex * 100) / responsiveSlidesToShow}%)`,
            width: `${(items.length * 100) / responsiveSlidesToShow}%`
          }}
        >
          {items.map((item, index) => (
            <div 
              key={index} 
              className="px-2"
              style={{ width: `${100 / items.length}%` }}
            >
              {renderItem(item, index)}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        disabled={currentIndex === 0}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed z-10"
      >
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>

      <button
        onClick={nextSlide}
        disabled={currentIndex >= maxIndex}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed z-10"
      >
        <ChevronRight className="w-6 h-6 text-gray-700" />
      </button>

      {/* Dots indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-blue-600 w-6' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
