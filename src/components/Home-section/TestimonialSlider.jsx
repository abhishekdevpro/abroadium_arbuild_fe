
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Calendar, Star } from "lucide-react";
import vector from "../../assets/testimonial-vector.png";
import stars from "../../assets/stars.png";

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
  }, [isPlaying, isPaused, autoPlayInterval, testimonials.length, cardsPerSlide]);

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
        <div className={`grid gap-6 ${cardsPerSlide === 1 ? "grid-cols-1" : cardsPerSlide === 2 ? "grid-cols-2" : "grid-cols-3"}`}>
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
                  <p className="text-md text-gray-600">{testimonial.designation}</p>
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

        {/* Controls */}
        {/* {showControls && testimonials.length > cardsPerSlide && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-gray-100 border border-gray-200 rounded-full p-3 shadow-md transition hover:scale-110"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-gray-100 border border-gray-200 rounded-full p-3 shadow-md transition hover:scale-110"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </>
        )} */}
      </div>

      {/* Indicators */}
      {showIndicators && testimonials.length > cardsPerSlide && (
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex ? "bg-primary scale-125" : "bg-gray-300 hover:bg-gray-400"
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
      name: "Rajesh Kumar",
      designation: "Business Engineer",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      text: "I've never felt more confident and secure. The team was incredibly helpful, explained every detail clearly, and made the entire process smooth.",
      rating: 5,
      date: "11 Nov",
    },
    {
      id: 2,
      name: "Priya Sharma",
      designation: "Marketing Manager",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      text: "Outstanding service. The customer support team went above and beyond to ensure I understood every aspect of my policy.",
      rating: 5,
      date: "10 Nov",
    },
    {
      id: 3,
      name: "Amit Patel",
      designation: "Software Developer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      text: "From the consultation to policy activation, everything was professional. My family is protected and I’m happy with the service.",
      rating: 5,
      date: "9 Nov",
    },
    {
      id: 4,
      name: "Sarah Johnson",
      designation: "Project Manager",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      text: "Exceptional service and competitive rates. They took time to understand my needs and offered the best plans.",
      rating: 5,
      date: "8 Nov",
    },
    {
      id: 5,
      name: "Michael Chen",
      designation: "Financial Analyst",
      avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=100&h=100&fit=crop&crop=face",
      text: "Reliable and transparent. Explained terms clearly, helped me choose the best plan. Claims are hassle-free.",
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
