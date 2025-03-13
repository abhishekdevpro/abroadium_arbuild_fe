// const FilterSidebar = () => {
//     return (
//         <div className=" pd-right ">
//             <div className="filters-outer text-center">

//                <div className="flex-row flex justify-center">
//                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLMI5YxZE03Vnj-s-sth2_JxlPd30Zy7yEGg&s"
//                 className="rounded-full w-28 h-28"
//                 alt="" />
//                </div>

//                 <h4 className="m-3">Ben Dexter</h4>

//             </div>
//             <div className="filters-outer text-center bg-">

//                <div className="flex-row flex justify-center">
//                <img src="https://w7.pngwing.com/pngs/352/661/png-transparent-flowers-bouquet-watercolor-flowers-flower-clip-art-thumbnail.png"
//                 className="rounded-full w-28 h-28"
//                 alt="" />
//                </div>

//                 <h6 className="m-3">YOUR GROUPS</h6>
//                 <p className="text-xs my-2">
//                 Discover and join groups with like-minded women who share your interests, profession, and lifestyle.
//                 </p>
//                 <button className="my-2 text-blue-950">Explore</button>
//             </div>
//             <div className="filters-outer text-center">

//                <div className="flex-row flex justify-center">
//                <img src="https://www.shutterstock.com/image-vector/3d-illustration-abstract-modern-urban-600nw-2345134001.jpg"
//                 className="rounded-full w-28 h-28"
//                 alt="" />
//                </div>

//                <h6 className="m-3">COMPANIES YOU FOLLOW</h6>
//                 <p className="text-xs my-2">
//                Get alerted when there are new employee reviews.
//                 </p>
//                 <button className="my-2 text-blue-950">Explore</button>

//             </div>
//         </div>
//     );
// };

// export default FilterSidebar;
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const FilterSidebar = () => {
  const token = localStorage.getItem("token");
  useEffect(() => {
    fetchUser();
  }, [token]);
  const [user, setUser] = useState({});
  const fetchUser = async () => {
    try {
      const response = await axios.get(
        "https://api.abroadium.com/api/jobseeker/user-profile",
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setUser(response.data.data.personal_details);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(user, "mai hu iser");
  return (
    <div className="space-y-6 bg-white shadow-md rounded-lg p-4">
      {/* Profile Section */}
      <div className="filters-outer text-center bg-gray-50 rounded-lg p-4">
        <div className="flex justify-center mb-3">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLMI5YxZE03Vnj-s-sth2_JxlPd30Zy7yEGg&s"
            className="rounded-full w-14 h-14 object-cover border-2 border-gray-200"
            alt="Profile"
          />
        </div>
        <h4 className="text-lg font-semibold text-gray-800">
          {user.first_name} {user.last_name}
        </h4>
        <p className="text-md font-medium text-gray-600">
          {user.proffesional_title || " "}
        </p>
      </div>

      {/* Groups Section */}
      <div className="filters-outer text-center bg-blue-50 rounded-lg p-4">
        <div className="flex justify-center mb-3">
          <img
            src="https://w7.pngwing.com/pngs/352/661/png-transparent-flowers-bouquet-watercolor-flowers-flower-clip-art-thumbnail.png"
            className="rounded-full w-14 h-14 object-cover border-2 border-blue-100"
            alt="Groups"
          />
        </div>
        <h6 className="text-sm font-bold text-blue-900 mb-3">YOUR GROUPS</h6>
        <p className="text-xs text-gray-600 mb-3">
          Discover and join groups with like-minded women who share your
          interests, profession, and lifestyle.
        </p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
          Explore
        </button>
      </div>

      {/* Companies Section */}
      <div className="filters-outer text-center bg-green-50 rounded-lg p-4">
        <div className="flex justify-center mb-3">
          <img
            src="https://www.shutterstock.com/image-vector/3d-illustration-abstract-modern-urban-600nw-2345134001.jpg"
            className="rounded-full w-14 h-14 object-cover border-2 border-green-100"
            alt="Companies"
          />
        </div>
        <h6 className="text-sm font-bold text-green-900 mb-3">
          COMPANIES YOU FOLLOW
        </h6>
        <p className="text-xs text-gray-600 mb-3">
          Get alerted when there are new employee reviews.
        </p>
        <button className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors">
          Explore
        </button>
      </div>
    </div>
  );
};

export default FilterSidebar;
