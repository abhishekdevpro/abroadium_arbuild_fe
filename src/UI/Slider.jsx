import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const ImageSlider = ({ 
  images = [], 
  autoPlayInterval = 3000, 
  showControls = true, 
  showIndicators = true,
  title = "Image Slider"
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying || isPaused || images.length <= 4) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = Math.max(0, images.length - 4);
        return prevIndex >= maxIndex ? 0 : prevIndex + 1;
      });
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isPlaying, isPaused, autoPlayInterval, images.length]);

  // Navigation functions
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = Math.max(0, images.length - 4);
      return prevIndex <= 0 ? maxIndex : prevIndex - 1;
    });
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = Math.max(0, images.length - 4);
      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Handle mouse enter/leave for pause on hover
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  // Get current visible images
  const getCurrentImages = () => {
    return images.slice(currentIndex, currentIndex + 4);
  };

  // Calculate total slides
  const totalSlides = Math.max(1, images.length - 3);

  if (images.length === 0) {
    return (
      <div className="w-full max-w-7xl mx-auto p-6">
        <div className="text-center py-12 bg-gray-100 rounded-lg">
          <p className="text-gray-500">No images to display</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      {/* Slider Container */}
      <div 
        className="relative bg-white rounded-xl shadow-lg overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
          {getCurrentImages().map((image, index) => (
            <div
              key={`${currentIndex}-${index}`}
              className="relative group cursor-pointer transform transition-all duration-300 hover:scale-105"
            >
              <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden shadow-md">
                <img
                  src={image.src}
                  alt={image.alt || `Cover Letter ${currentIndex + index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center">
                      <p className="font-semibold text-sm">{image.title}</p>
                      {image.description && (
                        <p className="text-xs mt-1 opacity-80">{image.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        {showControls && images.length > 4 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </>
        )}
      </div>

      {/* Indicators */}
      {showIndicators && images.length > 4 && (
        <div className="flex justify-center mt-6 space-x-2">
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

export default ImageSlider