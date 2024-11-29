import React from 'react';
import FilterSidebar from "./FilterSidebar";
import FilterJobsBox from "./FilterJobsBox";

const JobFilterLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main content */}
      <main className="w-full px-4 py-8 mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Mobile Filter Offcanvas */}
          <div
            className="lg:hidden fixed inset-y-0 left-0 z-40 w-full max-w-xs bg-white shadow-lg"
            tabIndex="-1"
            id="filter-sidebar"
            aria-labelledby="offcanvasLabel"
          >
            <div className="h-full overflow-y-auto">
              <FilterSidebar />
            </div>
          </div>

          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-full lg:w-80 flex-shrink-0">
            <div className="sticky top-4">
              <FilterSidebar />
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow">
              <FilterJobsBox />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default JobFilterLayout;