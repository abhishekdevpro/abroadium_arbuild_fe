

import Slider from "react-slick";
import resume1 from "../../assets/resume-1.png";
import resume2 from "../../assets/resume-2.png";
import resume3 from "../../assets/resume-3.png";
import resume4 from "../../assets/resume-4.png";
import resume5 from "../../assets/resume-3 (1).jpg";
import Button from "../../UI/Button";

const TemplateSlider = () => {
  const resumes = [resume4, resume2, resume1, resume3, resume5];

  const settings = {
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    infinite: true,
    arrows: true,
    dots: true,
    autoplay: false,
    focusOnSelect: true,
    swipeToSlide: true,
    touchMove: true,
    accessibility: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerPadding: "40px",
          arrows: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
          arrows: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "10px",
          arrows: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <section className="bg-primary py-20 px-4 sm:px-6 lg:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-[50px] font-bold text-white leading-tight mb-4">
            Explore Our Wide Range Of Trending <br />
            Templates That Recruiters Love To See
          </h2>
          <p className="text-white/80 text-lg">
            3,700,000+ users chose this template
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          <Slider {...settings} className="template-slider">
            {resumes.map((src, index) => (
              <div key={index} className="px-2 sm:px-4 group outline-none focus:outline-none">
                <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl mx-auto max-w-sm cursor-pointer">
                  <div className="aspect-[3/4] relative">
                    <img
                      src={src}
                      alt={`Resume Template ${index + 1}`}
                      className="w-full h-full object-cover object-top select-none"
                      draggable="false"
                    />
                    {/* Button only visible on center slide */}
                    <div className="absolute inset-0  opacity-0 transition-all duration-300 flex items-center justify-center pointer-events-none center-slide-button">
                      <Button 
                        variant="primary" 
                        className="text-sm px-6 py-3 transform scale-0 transition-all duration-300 center-button"
                        onClick={(e) => {
                          e.stopPropagation();
                          console.log(`Template ${index + 1} selected`);
                        }}
                      >
                        Use This Template
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Custom CSS for slider dots and arrows */}
        <style jsx>{`
          .template-slider {
            position: relative;
            z-index: 1;
          }
          
          .template-slider .slick-dots {
            bottom: -50px;
            position: relative;
          }
          
          .template-slider .slick-dots li button:before {
            color: white;
            font-size: 12px;
            opacity: 0.5;
          }
          
          .template-slider .slick-dots li.slick-active button:before {
            color: white;
            opacity: 1;
          }
          
          .template-slider .slick-arrow {
            z-index: 10;
            width: 40px;
            height: 40px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
          }
          
          .template-slider .slick-arrow:before {
            font-size: 20px;
            color: white;
          }
          
          .template-slider .slick-arrow:hover {
            background: rgba(255, 255, 255, 0.2);
          }
          
          .template-slider .slick-prev {
            left: -60px;
          }
          
          .template-slider .slick-next {
            right: -60px;
          }
          
          @media (max-width: 1024px) {
            .template-slider .slick-prev {
              left: -40px;
            }
            
            .template-slider .slick-next {
              right: -40px;
            }
          }
          
          @media (max-width: 768px) {
            .template-slider .slick-prev {
              left: -30px;
            }
            
            .template-slider .slick-next {
              right: -30px;
            }
          }
          
          @media (max-width: 480px) {
            .template-slider .slick-prev {
              left: -20px;
            }
            
            .template-slider .slick-next {
              right: -20px;
            }
          }
          
          .template-slider .slick-slide {
            padding: 0 8px;
          }
          
          .template-slider .slick-center .group > div {
            transform: scale(1.05);
          }
          
          /* Center slide button styling */
          .template-slider .slick-center .center-slide-button {
            opacity: 1;
            pointer-events: auto;
          }
          
          .template-slider .slick-center .center-button {
            transform: scale(0.5);
          }
          
          /* Popup/Modal specific styles */
          .template-slider.in-modal {
            position: static;
          }
          
          .template-slider.in-modal .slick-dots {
            position: static;
            margin-top: 20px;
          }
        `}</style>
      </div>
    </section>
  );
};

export default TemplateSlider;