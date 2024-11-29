// const FilterleftSidebar = () => {
//   return (
//       <div className=" pd-right ">
//           <div className="filters-outer text-center">
//           <h4 className="">Personalize your jobs          </h4>
//              <div className="flex-row flex justify-center">
//              <img src="https://img.freepik.com/premium-vector/people-talking-discussing-together-vector-young-man-woman-people-talking-have-funny-discussion-planning-togetherness-characters-boy-girl-communication-flat-cartoon-illustration_87720-5022.jpg"
//               className="rounded-full w-36 h-40 "
//               alt="" />
//              </div>

//              <p className="text-xs my-2">
//              Get recommendations for recent and relevant jobs.
//               </p>
//               <button className="py-1 px-4 m-3 bg-blue-950 text-white">Get Started</button>
              
//           </div>
//           <div className="filters-outer text-center bg-">
              
//              <div className="flex-row flex justify-center">
//              <img src="https://w7.pngwing.com/pngs/352/661/png-transparent-flowers-bouquet-watercolor-flowers-flower-clip-art-thumbnail.png"
//               className="rounded-full w-28 h-28"
//               alt="" />
//              </div>

//               <h6 className="m-3">YOUR GROUPS</h6>
//               <p className="text-xs my-2">
//               Discover and join groups with like-minded women who share your interests, profession, and lifestyle.
//               </p>
//               <button className="my-2 text-blue-950">Explore</button>
//           </div>
//           <div className="filters-outer text-center">
              
//              <div className="flex-row flex justify-center">
//              <img src="https://www.shutterstock.com/image-vector/3d-illustration-abstract-modern-urban-600nw-2345134001.jpg"
//               className="rounded-full w-28 h-28"
//               alt="" />
//              </div>

//              <h6 className="m-3">COMPANIES YOU FOLLOW</h6>
//               <p className="text-xs my-2">
//              Get alerted when there are new employee reviews.
//               </p>
//               <button className="my-2 text-blue-950">Explore</button>
              
//           </div>
//       </div>
//   );
// };

// export default FilterleftSidebar;
import React from 'react';
import { Link } from 'react-router-dom';

const FilterleftSidebar = () => {
  return (
    <div className="space-y-6 bg-white shadow-md rounded-lg p-4">
      {/* Personalize Jobs Section */}
      <div className="filters-outer text-center bg-indigo-50 rounded-lg p-4">
        <h4 className="text-lg font-semibold text-gray-800 mb-4">
          Personalize your jobs
        </h4>
        <div className="flex justify-center mb-4">
          <img 
            src="https://img.freepik.com/premium-vector/people-talking-discussing-together-vector-young-man-woman-people-talking-have-funny-discussion-planning-togetherness-characters-boy-girl-communication-flat-cartoon-illustration_87720-5022.jpg"
            className="rounded-full w-14 h-14 object-cover border-2 border-indigo-100"
            alt="Personalize Jobs" 
          />
        </div>
        <p className="text-xs text-gray-600 mb-4">
          Get recommendations for recent and relevant jobs.
        </p>
        <Link to={`/job-list`}>
        <button 
        className="py-2 px-6 bg-blue-950 text-white rounded-full hover:bg-blue-900 transition-colors">
          Get Started
        </button>
        </Link>

      </div>

      {/* Groups Section */}
      <div className="filters-outer text-center bg-green-50 rounded-lg p-4">
        <div className="flex justify-center mb-3">
          <img 
            src="https://w7.pngwing.com/pngs/352/661/png-transparent-flowers-bouquet-watercolor-flowers-flower-clip-art-thumbnail.png"
            className="rounded-full w-14 h-14 object-cover border-2 border-green-100"
            alt="Groups" 
          />
        </div>
        <h6 className="text-sm font-bold text-green-900 mb-3">YOUR GROUPS</h6>
        <p className="text-xs text-gray-600 mb-3">
          Discover and join groups with like-minded women who share your interests, profession, and lifestyle.
        </p>
        <button className="px-4 py-2 text-green-800 hover:bg-green-100 rounded-full transition-colors">
          Explore
        </button>
      </div>

      {/* Companies Section */}
      <div className="filters-outer text-center bg-purple-50 rounded-lg p-4">
        <div className="flex justify-center mb-3">
          <img 
            src="https://www.shutterstock.com/image-vector/3d-illustration-abstract-modern-urban-600nw-2345134001.jpg"
            className="rounded-full w-14 h-14 object-cover border-2 border-purple-100"
            alt="Companies" 
          />
        </div>
        <h6 className="text-sm font-bold text-purple-900 mb-3">COMPANIES YOU FOLLOW</h6>
        <p className="text-xs text-gray-600 mb-3">
          Get alerted when there are new employee reviews.
        </p>
        <button className="px-4 py-2 text-purple-800 hover:bg-purple-100 rounded-full transition-colors">
          Explore
        </button>
      </div>
    </div>
  );
};

export default FilterleftSidebar;