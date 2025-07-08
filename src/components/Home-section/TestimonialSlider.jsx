import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Star } from 'lucide-react';

const TestimonialSlider = ({ 
  testimonials = [], 
  autoPlayInterval = 4000, 
  showControls = true, 
  showIndicators = true
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying || isPaused || testimonials.length <= 3) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = Math.max(0, testimonials.length - 3);
        return prevIndex >= maxIndex ? 0 : prevIndex + 1;
      });
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isPlaying, isPaused, autoPlayInterval, testimonials.length]);

  // Navigation functions
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = Math.max(0, testimonials.length - 3);
      return prevIndex <= 0 ? maxIndex : prevIndex - 1;
    });
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = Math.max(0, testimonials.length - 3);
      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
  };

  // Handle mouse enter/leave for pause on hover
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  // Get current visible testimonials
  const getCurrentTestimonials = () => {
    return testimonials.slice(currentIndex, currentIndex + 3);
  };

  // Calculate total slides
  const totalSlides = Math.max(1, testimonials.length - 2);

  // Render star rating
  const renderStars = (rating) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating
                ? 'text-yellow-400 fill-yellow-400'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  if (testimonials.length === 0) {
    return (
      <div className="w-full max-w-7xl mx-auto p-6">
        <div className="text-center py-12 bg-gray-100 rounded-lg">
          <p className="text-gray-500">No testimonials to display</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      {/* Slider Container */}
      <div 
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getCurrentTestimonials().map((testimonial, index) => (
            <div
              key={`${currentIndex}-${index}`}
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* User Info */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-background rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="ml-3 flex-1">
                  <h4 className="font-semibold  text-lg">
                    {testimonial.name}
                  </h4>
                  <p className=" text-md">
                    {testimonial.designation}
                  </p>
                </div>
                <div className="text-gray-400 text-4xl font-bold">
                  "
                </div>
              </div>

              {/* Testimonial Text */}
              <p className=" text-lg leading-relaxed mb-4 line-clamp-4">
                {testimonial.text}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center text-gray-500 text-lg">
                  <Calendar className="w-3 h-3 mr-1" />
                  {testimonial.date}
                </div>
                {renderStars(testimonial.rating)}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        {showControls && testimonials.length > 3 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110 border border-gray-200"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110 border border-gray-200"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </>
        )}
      </div>

      {/* Indicators */}
      {showIndicators && testimonials.length > 3 && (
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? 'bg-blue-500 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// Main Testimonial Section Component
const CustomerTestimonialSection = () => {
  // Sample testimonial data
  const testimonialData = [
    {
      id: 1,
      name: "Rajesh Kumar",
      designation: "Business Engineer",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      text: "I've never felt more confident and secure. The team was incredibly helpful, explained every detail clearly, and made the entire process smooth. Truly the most trustworthy insurance provider I've come across!",
      rating: 5,
      date: "11 Nov"
    },
    {
      id: 2,
      name: "Priya Sharma",
      designation: "Marketing Manager",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      text: "Outstanding service from start to finish. The customer support team went above and beyond to ensure I understood every aspect of my policy. Highly recommended for anyone seeking reliable coverage.",
      rating: 5,
      date: "10 Nov"
    },
    {
      id: 3,
      name: "Amit Patel",
      designation: "Software Developer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      text: "The entire experience was seamless. From the initial consultation to policy activation, everything was handled professionally. I feel confident knowing my family is protected with such a trustworthy company.",
      rating: 5,
      date: "9 Nov"
    },
    {
      id: 4,
      name: "Sarah Johnson",
      designation: "Project Manager",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      text: "Exceptional customer service and competitive rates. The team took time to understand my specific needs and provided tailored solutions. I couldn't be happier with my decision to choose this provider.",
      rating: 5,
      date: "8 Nov"
    },
    {
      id: 5,
      name: "Michael Chen",
      designation: "Financial Analyst",
      avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=100&h=100&fit=crop&crop=face",
      text: "Professional, reliable, and transparent. They explained all the terms clearly and helped me choose the perfect plan for my budget. The claims process is straightforward and hassle-free.",
      rating: 5,
      date: "7 Nov"
    }
  ];

  return (
    <section className="bg-background py-16 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            What Our Customer Says
          </h2>
        </div>

        {/* Testimonial Slider */}
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