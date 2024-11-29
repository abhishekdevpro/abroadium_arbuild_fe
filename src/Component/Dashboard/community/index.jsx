import React from 'react';
import FilterSidebar from "./FilterSidebar";
import FilterleftSidebar from "./FilterleftSidebar";
import FeedSection from "./FeedSection";
import Footer from "../../Footer/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-stone-200 flex flex-col">
      <section className="flex-grow flex  py-8">
        <div className="container mx-auto items-start justify-center px-4 flex gap-4 w-full">
          {/* Left Filter Sidebar */}
          <div className="hidden md:flex flex-col w-1/4 ">
            <FilterSidebar />
          </div>

          {/* Center Feed Section */}
          <div className="flex-1">
            <FeedSection />
          </div>

          {/* Right Filter Sidebar */}
          <div className="hidden md:flex flex-col w-1/4">
            <FilterleftSidebar />
          </div>

          {/* Mobile Filter Offcanvas */}
          <div 
            className="md:hidden offcanvas offcanvas-start fixed inset-y-0 left-0 z-50 w-64 bg-white transform -translate-x-full transition-transform"
            tabIndex="-1" 
            id="filter-sidebar" 
            aria-labelledby="offcanvasLabel"
          >
            <FilterSidebar />
          </div>
        </div>
      </section>

    </div>
  );
};

export default Index;