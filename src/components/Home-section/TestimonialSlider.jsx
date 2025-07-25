import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Calendar, Star } from "lucide-react";
import vector from "../../assets/testimonial-vector.png";
import stars from "../../assets/stars.png";
import cl1 from "../../assets/customer1.jpg";
import cl2 from "../../assets/customer2.jpg";
import cl3 from "../../assets/customer3.jpg";
import cl4 from "../../assets/customer4.jpg";
import cl5 from "../../assets/customer5.jpg";
import cl6 from "../../assets/customer6.jpg";
const TestimonialSlider = ({
  testimonials = [],
  autoPlayInterval = 4000,
  showControls = true,
  showIndicators = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);

  // Adjust cards per slide based on screen size
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setCardsPerSlide(1);
      else if (width < 1024) setCardsPerSlide(2);
      else setCardsPerSlide(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-play logic
  useEffect(() => {
    if (!isPlaying || isPaused || testimonials.length <= cardsPerSlide) return;
    const interval = setInterval(() => {
      const maxIndex = Math.max(0, testimonials.length - cardsPerSlide);
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, autoPlayInterval);
    return () => clearInterval(interval);
  }, [
    isPlaying,
    isPaused,
    autoPlayInterval,
    testimonials.length,
    cardsPerSlide,
  ]);

  const totalSlides = Math.max(1, testimonials.length - (cardsPerSlide - 1));

  const goToPrevious = () => {
    const maxIndex = Math.max(0, testimonials.length - cardsPerSlide);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToNext = () => {
    const maxIndex = Math.max(0, testimonials.length - cardsPerSlide);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  const getCurrentTestimonials = () =>
    testimonials.slice(currentIndex, currentIndex + cardsPerSlide);

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={`grid gap-6 ${
            cardsPerSlide === 1
              ? "grid-cols-1"
              : cardsPerSlide === 2
              ? "grid-cols-2"
              : "grid-cols-3"
          }`}
        >
          {getCurrentTestimonials().map((testimonial, index) => (
            <div
              key={`${currentIndex}-${index}`}
              className="bg-white rounded-[30px] p-6 border border-gray-100"
            >
              {/* Header */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-background rounded-full overflow-hidden">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="ml-3 flex-1">
                  <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-md text-gray-600">
                    {testimonial.designation}
                  </p>
                </div>
                <img src={vector} alt="vector" className="w-[50px] h-[36px]" />
              </div>

              {/* Content */}
              <p className="text-[18px] leading-relaxed mb-6 text-gray-700 line-clamp-4">
                {testimonial.text}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar className="w-[18px] h-[18px] mr-2" />
                  <span>{testimonial.date}</span>
                </div>
                <img src={stars} alt="stars" className="h-8" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Indicators */}
      {showIndicators && testimonials.length > cardsPerSlide && (
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? "bg-primary scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const CustomerTestimonialSection = () => {
  const testimonialData = [
    {
      id: 1,
      name: "Emily Johnson",
      designation: "Marketing Specialist from Toronto",
      avatar: cl1,
      text: "Abroadium helped me create a highly effective ATS-compliant resume that landed me multiple interviews. The AI assistance was a game-changer!",
      rating: 5,
      date: "11 Nov",
    },
    {
      id: 2,
      name: "Liam Thompson",
      designation: "Software Developer from Vancouver ",
      avatar: cl2,
      text: "The cover letter templates on Abroadium are professional and easy to customize. I was impressed by the platform's user-friendly interface and AI support.",
      rating: 5,
      date: "10 Nov",
    },
    {
      id: 3,
      name: "James Anderson",
      designation: "Project Manager from Calgary",
      avatar: cl3,
      text: "The AI assist was really helpful in tailoring my cover letters to specific job descriptions. Abroadium's tools saved me a lot of time and stress.",
      rating: 5,
      date: "9 Nov",
    },
    {
      id: 4,
      name: "Sophia Martinez",
      designation: "Graphic Designer from Montreal",
      avatar: cl4,
      text: "Abroadium's resume builder made crafting my resume effortless. The ATS compliance feature gave me confidence during my job applications. Highly recommended!",
      rating: 5,
      date: "8 Nov",
    },
    {
      id: 5,
      name: "Olivia Wilson ",
      designation: "Financial Analyst from Ottawa",
      avatar: cl5,
      text: "loved the variety of modern templates on Abroadium. The quality of resumes and cover letters provided great value for job seekers like me.",
      rating: 5,
      date: "7 Nov",
    },
    {
      id: 6,
      name: "Ethan White",
      designation: "Data Scientist from Quebec City",
      avatar: cl6,
      text: "Abroadium’s platform is intuitive and powerful. The AI features made it easy for me to highlight my skills effectively in both my resume and cover letter.",
      rating: 5,
      date: "7 Nov",
    },
  ];

  return (
    <section className="bg-background py-16 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            What Our Customers Say
          </h2>
        </div>

        <TestimonialSlider
          testimonials={testimonialData}
          autoPlayInterval={5000}
          showControls={true}
          showIndicators={true}
        />
      </div>
    </section>
  );
};

export default CustomerTestimonialSection;
