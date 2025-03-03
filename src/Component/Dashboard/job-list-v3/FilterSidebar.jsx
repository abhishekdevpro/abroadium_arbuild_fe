// import Categories from "../components/Categories";
// import DatePosted from "../components/DatePosted";
// import DestinationRangeSlider from "../components/DestinationRangeSlider";
// import ExperienceLevel from "../components/ExperienceLevel";
// import JobType from "../components/JobType";
// import LocationBox from "../components/LocationBox";
// import SalaryRangeSlider from "../components/SalaryRangeSlider";
// import SearchBox from "../components/SearchBox";
// import Tag from "../components/Tag";

// const FilterSidebar = () => {
//   return (
//     <div className="inner-column">
//       <div className="filters-outer">
//         <button
//           type="button"
//           className="btn-close text-reset close-filters show-1023"
//           data-bs-dismiss="offcanvas"
//           aria-label="Close"
//         ></button>
//         {/* End .close filter */}

//         <div className="filter-block">
//           <h4>Search by Keywords</h4>
//           <div className="form-group">
//             <SearchBox />
//           </div>
//         </div>
//         {/* <!-- Filter Block --> */}

//         <div className="filter-block">
//           <h4>Location</h4>
//           <div className="form-group">
//             <LocationBox />
//           </div>

//           <p>Radius around selected destination</p>
//           <DestinationRangeSlider />
//         </div>
//         {/* <!-- Filter Block --> */}

//         <div className="filter-block">
//           <h4>Category</h4>
//           <div className="form-group">
//             <Categories />
//           </div>
//         </div>
//         {/* <!-- Filter Block --> */}

//         <div className="switchbox-outer">
//           <h4>Job type</h4>
//           <JobType />
//         </div>
//         {/* <!-- Switchbox Outer --> */}

//         <div className="checkbox-outer">
//           <h4>Date Posted</h4>
//           <DatePosted />
//         </div>
//         {/* <!-- Checkboxes Ouer --> */}

//         <div className="checkbox-outer">
//           <h4>Experience Level</h4>
//           <ExperienceLevel />
//         </div>
//         {/* <!-- Checkboxes Ouer --> */}

//         <div className="filter-block">
//           <h4>Salary</h4>

//           <SalaryRangeSlider />
//         </div>
//         {/* <!-- Filter Block --> */}

//         <div className="filter-block">
//           <h4>Tags</h4>
//           <Tag />
//         </div>
//         {/* <!-- Filter Block --> */}
//       </div>
//       {/* Filter Outer */}
//     </div>
//   );
// };

// export default FilterSidebar;
// import React, { useState, useEffect } from 'react';
// import { useSearchParams } from 'react-router-dom';
// // import Categories from "./components/Categories";
// // import DatePosted from "./components/DatePosted";
// // import DestinationRangeSlider from "./components/DestinationRangeSlider";
// import ExperienceLevel from "./components/ExperienceLevel";
// import JobType from "./components/JobType";
// import LocationBox from "./components/LocationBox";
// import SalaryRangeSlider from "./components/SalaryRangeSlider";
// import SearchBox from "./components/SearchBox";
// // import Tag from "./components/Tag";

// // FilterSidebar Component with URL Parameter Management
// const FilterSidebar = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
  
//   // Handler functions for each filter type
//   const updateSearchParams = (key, value) => {
//     const currentParams = Object.fromEntries(searchParams);
    
//     if (value) {
//       currentParams[key] = value;
//     } else {
//       delete currentParams[key];
//     }
    
//     setSearchParams(currentParams);
//   };

//   return (
//     <div className="inner-column">
//       <div className="filters-outer">
//         <button
//           type="button"
//           className="btn-close text-reset close-filters show-1023"
//           data-bs-dismiss="offcanvas"
//           aria-label="Close"
//         ></button>

//         <div className="filter-block">
//           <h4>Search by Keywords</h4>
//           <div className="form-group">
//             <SearchBox 
//               onSearch={(query) => updateSearchParams('keywords', query)} 
//             />
//           </div>
//         </div>

//         <div className="filter-block">
//           <h4>Location</h4>
//           <div className="form-group">
//             <LocationBox 
//               onLocationChange={(location) => updateSearchParams('location', location)} 
//             />
//           </div>
          
//           {/* <p>Radius around selected destination</p>
//           <DestinationRangeSlider 
//             onRangeChange={(range) => updateSearchParams('radius', range)}
//           /> */}
//         </div>

//         {/* <div className="filter-block">
//           <h4>Category</h4>
//           <div className="form-group">
//             <Categories 
//               onCategorySelect={(category) => updateSearchParams('category', category)} 
//             />
//           </div>
//         </div> */}

//         <div className="switchbox-outer">
//           <h4>Job type</h4>
//           <JobType 
//             onJobTypeChange={(jobType) => updateSearchParams('jobType', jobType)}
//           />
//         </div>

//         {/* <div className="checkbox-outer">
//           <h4>Date Posted</h4>
//           <DatePosted 
//             onDateSelect={(dateRange) => updateSearchParams('datePosted', dateRange)}
//           />
//         </div> */}

//         <div className="checkbox-outer">
//           <h4>Experience Level</h4>
//           <ExperienceLevel 
//             onExperienceLevelChange={(level) => updateSearchParams('experienceLevel', level)}
//           />
//         </div>

//         <div className="filter-block">
//           <h4>Salary</h4>
//           <SalaryRangeSlider 
//             onSalaryRangeChange={(range) => updateSearchParams('salaryRange', JSON.stringify(range))}
//           />
//         </div>

//         {/* <div className="filter-block">
//           <h4>Tags</h4>
//           <Tag 
//             onTagSelect={(tags) => updateSearchParams('tags', tags.join(','))}
//           />
//         </div> */}
//       </div>
//     </div>
//   );
// };
// export default FilterSidebar

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
// import Categories from "./components/Categories";
// import DatePosted from "./components/DatePosted";
// import DestinationRangeSlider from "./components/DestinationRangeSlider";
import ExperienceLevel from "./components/ExperienceLevel";
import JobType from "./components/JobType";
import LocationBox from "./components/LocationBox";
import SalaryRangeSlider from "./components/SalaryRangeSlider";
import SearchBox from "./components/SearchBox";
// import Tag from "./components/Tag";

// FilterSidebar Component with URL Parameter Management
const FilterSidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Handler functions for each filter type
  const updateSearchParams = (key, value) => {
    const currentParams = Object.fromEntries(searchParams);
    
    if (value) {
      currentParams[key] = value;
    } else {
      delete currentParams[key];
    }
    
    setSearchParams(currentParams);
  };

  return (
    <div className="w-full sm:w-80 p-6 bg-white shadow-lg rounded-lg space-y-6">
      <div className="filters-outer space-y-6">
        <button
          type="button"
          className="btn-close text-reset close-filters sm:hidden"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <span className="sr-only">Close</span>
        </button>

        <div className="filter-block space-y-4">
          <h4 className="text-xl font-semibold text-gray-800">Search by Keywords</h4>
          <div className="form-group">
            <SearchBox 
              onSearch={(query) => updateSearchParams('keywords', query)} 
            />
          </div>
        </div>

        <div className="filter-block space-y-4">
          <h4 className="text-xl font-semibold text-gray-800">Location</h4>
          <div className="form-group">
            <LocationBox 
              onLocationChange={(location) => updateSearchParams('location', location)} 
            />
          </div>
          
          {/* <p className="text-sm text-gray-500">Radius around selected destination</p>
          <DestinationRangeSlider 
            onRangeChange={(range) => updateSearchParams('radius', range)}
          /> */}
        </div>

        {/* <div className="filter-block space-y-4">
          <h4 className="text-xl font-semibold text-gray-800">Category</h4>
          <div className="form-group">
            <Categories 
              onCategorySelect={(category) => updateSearchParams('category', category)} 
            />
          </div>
        </div> */}

        <div className="switchbox-outer space-y-4">
          <h4 className="text-xl font-semibold text-gray-800">Job Type</h4>
          <JobType 
            onJobTypeChange={(jobType) => updateSearchParams('jobType', jobType)}
          />
        </div>

        {/* <div className="checkbox-outer space-y-4">
          <h4 className="text-xl font-semibold text-gray-800">Date Posted</h4>
          <DatePosted 
            onDateSelect={(dateRange) => updateSearchParams('datePosted', dateRange)}
          />
        </div> */}

        <div className="checkbox-outer space-y-4">
          <h4 className="text-xl font-semibold text-gray-800">Experience Level</h4>
          <ExperienceLevel 
            onExperienceLevelChange={(level) => updateSearchParams('experienceLevel', level)}
          />
        </div>

        <div className="filter-block space-y-4">
          <h4 className="text-xl font-semibold text-gray-800">Salary</h4>
          <SalaryRangeSlider 
            onSalaryRangeChange={(range) => updateSearchParams('salaryRange', JSON.stringify(range))}
          />
        </div>

        {/* <div className="filter-block space-y-4">
          <h4 className="text-xl font-semibold text-gray-800">Tags</h4>
          <Tag 
            onTagSelect={(tags) => updateSearchParams('tags', tags.join(','))}
          />
        </div> */}
      </div>
    </div>
  );
};

export default FilterSidebar;
