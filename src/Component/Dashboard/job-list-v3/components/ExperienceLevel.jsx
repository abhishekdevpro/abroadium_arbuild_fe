

// // import { useDispatch, useSelector } from "react-redux";
// // import { addExperience } from "../../../features/filter/filterSlice";
// // import { experienceLavelCheck } from "../../../features/job/jobSlice";

// // const ExperienceLevel = () => {
// //     const { experienceLavel } = useSelector((state) => state.job) || {};
// //     const dispatch = useDispatch();

// //     // experience handler
// //     const experienceHandler = (e, id) => {
// //         dispatch(addExperience(e.target.value));
// //         dispatch(experienceLavelCheck(id));
// //     };

// //     return (
// //         <ul className="switchbox">
// //             {experienceLavel?.map((item) => (
// //                 <li key={item.id}>
// //                     <label className="switch">
// //                         <input
// //                             type="checkbox"
// //                             checked={item.isChecked}
// //                             value={item.value}
// //                             onChange={(e) => experienceHandler(e, item.id)}
// //                         />
// //                         <span className="slider round"></span>
// //                         <span className="title">{item.name}</span>
// //                     </label>
// //                 </li>
// //             ))}
// //             <li>
// //                 <button className="view-more">
// //                     <span className="icon flaticon-plus"></span> View More
// //                 </button>
// //             </li>
// //         </ul>
// //     );
// // };

// // export default ExperienceLevel;
// // import React, { useCallback, useMemo, useEffect } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import { useSearchParams } from "react-router-dom";
// // import { addExperience } from "../../../features/filter/filterSlice";
// // import { experienceLavelCheck } from "../../../features/job/jobSlice";

// // const ExperienceLevel = () => {
// //   const [searchParams, setSearchParams] = useSearchParams();
// //   const { experienceLavel } = useSelector((state) => state.job) || {};
// //   const dispatch = useDispatch();

// //   // Get the current selected experience level ID from URL
// //   const selectedExperienceLevelId = useMemo(() => {
// //     const idFromUrl = searchParams.get('experience_id');
// //     return idFromUrl ? Number(idFromUrl) : null;
// //   }, [searchParams]);

// //   // Experience handler to toggle selection
// //   const experienceHandler = useCallback((id) => {
// //     // If already selected, deselect (remove from URL)
// //     if (selectedExperienceLevelId === id) {
// //       const currentParams = Object.fromEntries(searchParams);
// //       delete currentParams['experience_id'];
      
// //       // Reset all checked states
// //       experienceLavel.forEach(item => {
// //         if (item.isChecked) {
// //           dispatch(experienceLavelCheck(item.id));
// //         }
// //       });

// //       // Update URL and Redux
// //       setSearchParams(currentParams, { replace: true });
// //       dispatch(addExperience(null));
// //     } else {
// //       // Uncheck previously checked items
// //       experienceLavel.forEach(item => {
// //         if (item.isChecked) {
// //           dispatch(experienceLavelCheck(item.id));
// //         }
// //       });

// //       // Check the new item
// //       dispatch(experienceLavelCheck(id));

// //       // Update URL and Redux
// //       const currentParams = Object.fromEntries(searchParams);
// //       currentParams['experience_id'] = id;
// //       setSearchParams(currentParams, { replace: true });
// //       dispatch(addExperience(id));
// //     }
// //   }, [selectedExperienceLevelId, dispatch, searchParams, experienceLavel, setSearchParams]);

// //   // Sync initial state if needed
// //   useEffect(() => {
// //     // If there's an experience_id in URL, ensure it's checked
// //     if (selectedExperienceLevelId) {
// //       const itemToCheck = experienceLavel.find(item => item.id === selectedExperienceLevelId);
// //       if (itemToCheck && !itemToCheck.isChecked) {
// //         dispatch(experienceLavelCheck(selectedExperienceLevelId));
// //         dispatch(addExperience(selectedExperienceLevelId));
// //       }
// //     }
// //   }, [selectedExperienceLevelId, experienceLavel, dispatch]);

// //   // Memoized rendering of experience level list
// //   const experienceLevelListRender = useMemo(() => {
// //     return [
// //       ...experienceLavel.map((item) => (
// //         <li key={item.id}>
// //           <label className="switch">
// //             <input
// //               type="checkbox"
// //               checked={selectedExperienceLevelId === item.id}
// //               onChange={() => experienceHandler(item.id)}
// //             />
// //             <span className="slider round"></span>
// //             <span className="title">{item.name}</span>
// //           </label>
// //         </li>
// //       )),
// //       <li key="view-more">
// //         <button className="view-more">
// //           <span className="icon flaticon-plus"></span> View More
// //         </button>
// //       </li>
// //     ];
// //   }, [experienceLavel, selectedExperienceLevelId, experienceHandler]);

// //   return (
// //     <ul className="switchbox">
// //       {experienceLevelListRender}
// //     </ul>
// //   );
// // };

// // export default React.memo(ExperienceLevel);

// import React, { useEffect, useState, useCallback, useMemo } from "react";
// import { useSearchParams } from "react-router-dom";

// const ExperienceLevel = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [experienceLevels, setExperienceLevels] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // Fetch experience levels from the API
//   useEffect(() => {
//     const fetchExperienceLevels = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch(
//           "https://api.sentryspot.co.uk/api/employeer/experience-level"
//         );
//         const result = await response.json();
//         if (result.status === "success" && result.data) {
//           setExperienceLevels(result.data);
//         } else {
//           setError("Failed to fetch experience levels.");
//         }
//       } catch (err) {
//         setError("An error occurred while fetching experience levels.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchExperienceLevels();
//   }, []);

//   // Get the current selected experience level ID from the URL
//   const selectedExperienceLevelId = useMemo(() => {
//     const idFromUrl = searchParams.get("experience_id");
//     return idFromUrl ? Number(idFromUrl) : null;
//   }, [searchParams]);

//   // Experience handler to toggle selection
//   const experienceHandler = useCallback(
//     (id) => {
//       const currentParams = Object.fromEntries(searchParams);

//       if (selectedExperienceLevelId === id) {
//         // Deselect current level
//         delete currentParams["experience_id"];
//       } else {
//         // Select new level
//         currentParams["experience_id"] = id;
//       }

//       // Update URL with the new parameters
//       setSearchParams(currentParams, { replace: true });
//     },
//     [selectedExperienceLevelId, searchParams, setSearchParams]
//   );

//   // Render experience level list
//   const experienceLevelListRender = useMemo(() => {
//     if (loading) {
//       return <li>Loading...</li>;
//     }

//     if (error) {
//       return <li>{error}</li>;
//     }

//     return [
//       ...experienceLevels.map((item) => (
//         <li key={item.id}>
//           <label className="switch">
//             <input
//               type="checkbox"
//               checked={selectedExperienceLevelId === item.id}
//               onChange={() => experienceHandler(item.id)}
//             />
//             <span className="slider round"></span>
//             <span className="title">{item.name}</span>
//           </label>
//         </li>
//       )),
//       <li key="view-more">
//         <button className="view-more">
//           <span className="icon flaticon-plus"></span> View More
//         </button>
//       </li>,
//     ];
//   }, [experienceLevels, selectedExperienceLevelId, experienceHandler, loading, error]);

//   return (
//     <ul className="switchbox">
//       {experienceLevelListRender}
//     </ul>
//   );
// };

// export default React.memo(ExperienceLevel);
import React, { useEffect, useState, useCallback, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { PlusCircle } from "lucide-react";

const ExperienceLevel = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [experienceLevels, setExperienceLevels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExperienceLevels = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://api.sentryspot.co.uk/api/employeer/experience-level"
        );
        const result = await response.json();
        if (result.status === "success" && result.data) {
          setExperienceLevels(result.data);
        } else {
          setError("Failed to fetch experience levels.");
        }
      } catch (err) {
        setError("An error occurred while fetching experience levels.");
      } finally {
        setLoading(false);
      }
    };

    fetchExperienceLevels();
  }, []);

  const selectedExperienceLevelId = useMemo(() => {
    const idFromUrl = searchParams.get("experience_id");
    return idFromUrl ? Number(idFromUrl) : null;
  }, [searchParams]);

  const experienceHandler = useCallback(
    (id) => {
      const currentParams = Object.fromEntries(searchParams);

      if (selectedExperienceLevelId === id) {
        delete currentParams["experience_id"];
      } else {
        currentParams["experience_id"] = id;
      }

      setSearchParams(currentParams, { replace: true });
    },
    [selectedExperienceLevelId, searchParams, setSearchParams]
  );

  const experienceLevelListRender = useMemo(() => {
    if (loading) {
      return (
        <li className="flex items-center justify-center p-4">
          <div className="text-gray-600">Loading...</div>
        </li>
      );
    }

    if (error) {
      return (
        <li className="p-4 text-red-600 bg-red-50 rounded-lg">
          {error}
        </li>
      );
    }

    return [
      ...experienceLevels.map((item) => (
        <li key={item.id} className="mb-4">
          <label className="flex items-center space-x-3 cursor-pointer group">
            <div className="relative">
              <input
                type="checkbox"
                checked={selectedExperienceLevelId === item.id}
                onChange={() => experienceHandler(item.id)}
                className="sr-only peer"
              />
              <div className="w-12 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </div>
            <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
              {item.name}
            </span>
          </label>
        </li>
      )),
      <li key="view-more" className="mt-6">
        <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-200">
          <PlusCircle className="w-5 h-5" />
          <span className="text-sm font-medium">View More</span>
        </button>
      </li>,
    ];
  }, [experienceLevels, selectedExperienceLevelId, experienceHandler, loading, error]);

  return (
    <ul className="space-y-2 p-4">
      {experienceLevelListRender}
    </ul>
  );
};

export default React.memo(ExperienceLevel);