// // import React, { useCallback, useMemo } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import { useSearchParams } from "react-router-dom";
// // import { addJobType } from "../../../features/filter/filterSlice";
// // import { jobTypeCheck } from "../../../features/job/jobSlice";

// // const JobType = () => {
// //   const [searchParams, setSearchParams] = useSearchParams();
// //   const { jobTypeList } = useSelector(
// //     (state) => state.job,
// //     (prev, next) =>
// //       JSON.stringify(prev.jobTypeList) === JSON.stringify(next.jobTypeList)
// //   ) || [];

// //   const dispatch = useDispatch();

// //   // Get selected job type ID from URL
// //   const selectedJobTypeId = useMemo(() => {
// //     const id = searchParams.get("job_type_id");
// //     return id ? Number(id) : null;
// //   }, [searchParams]);

// //   // Handler to toggle job type selection
// //   const jobTypeHandler = useCallback((id) => {
// //     const currentParams = Object.fromEntries(searchParams);

// //     if (selectedJobTypeId === id) {
// //       // If clicking the same job type, deactivate it
// //       delete currentParams["job_type_id"];
// //       dispatch(jobTypeCheck(null));
// //       dispatch(addJobType([]));
// //     } else {
// //       // If clicking a different job type, activate it
// //       currentParams["job_type_id"] = id;
// //       dispatch(jobTypeCheck(id));
// //       dispatch(addJobType([id]));
// //     }

// //     // Update search params, removing the parameter entirely if deactivating
// //     setSearchParams(
// //       Object.keys(currentParams).length > 0 ? currentParams : {},
// //       { replace: true }
// //     );
// //   }, [dispatch, searchParams, setSearchParams, selectedJobTypeId]);

// //   // Render job type list
// //   const jobTypeListRender = useMemo(() => {
// //     return jobTypeList.map((item) => (
// //       <li key={item.id}>
// //         <label className="switch">
// //           <input
// //             type="checkbox" // Changed to checkbox to allow deselection
// //             name="job_type"
// //             value={item.id}
// //             checked={selectedJobTypeId === item.id}
// //             onChange={() => jobTypeHandler(item.id)}
// //           />
// //           <span className="slider round"></span>
// //           <span className="title">{item.value}</span>
// //         </label>
// //       </li>
// //     ));
// //   }, [jobTypeList, selectedJobTypeId, jobTypeHandler]);

// //   return (
// //     <ul className="switchbox">
// //       {jobTypeListRender}
// //     </ul>
// //   );
// // };

// // export default React.memo(JobType);

// import React, { useEffect, useState, useCallback, useMemo } from "react";
// import { useSearchParams } from "react-router-dom";

// const JobType = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [jobTypeList, setJobTypeList] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // Fetch job types from API
//   useEffect(() => {
//     const fetchJobTypes = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch("https://api.abroadium.com/api/employeer/job-types");
//         const result = await response.json();
//         if (result.status === "success" && result.data) {
//           setJobTypeList(result.data);
//         } else {
//           setError("Failed to fetch job types.");
//         }
//       } catch (err) {
//         setError("An error occurred while fetching job types.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchJobTypes();
//   }, []);

//   // Get selected job type ID from URL
//   const selectedJobTypeId = useMemo(() => {
//     const id = searchParams.get("job_type_id");
//     return id ? Number(id) : null;
//   }, [searchParams]);

//   // Handler to toggle job type selection
//   const jobTypeHandler = useCallback(
//     (id) => {
//       const currentParams = Object.fromEntries(searchParams);

//       if (selectedJobTypeId === id) {
//         // Deselect current job type
//         delete currentParams["job_type_id"];
//       } else {
//         // Select new job type
//         currentParams["job_type_id"] = id;
//       }

//       // Update search params
//       setSearchParams(
//         Object.keys(currentParams).length > 0 ? currentParams : {},
//         { replace: true }
//       );
//     },
//     [searchParams, setSearchParams, selectedJobTypeId]
//   );

//   // Render job type list
//   const jobTypeListRender = useMemo(() => {
//     return jobTypeList.map((item) => (
//       <li key={item.id}>
//         <label className="switch">
//           <input
//             type="checkbox" // Allow deselection
//             name="job_type"
//             value={item.id}
//             checked={selectedJobTypeId === item.id}
//             onChange={() => jobTypeHandler(item.id)}
//           />
//           <span className="slider round"></span>
//           <span className="title">{item.name}</span>
//         </label>
//       </li>
//     ));
//   }, [jobTypeList, selectedJobTypeId, jobTypeHandler]);

//   // Display loading or error states
//   if (loading) {
//     return <div>Loading job types...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <ul className="switchbox">
//       {jobTypeListRender}
//     </ul>
//   );
// };

// export default React.memo(JobType);
import React, { useEffect, useState, useCallback, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

const JobType = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [jobTypeList, setJobTypeList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobTypes = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://api.abroadium.com/api/employeer/job-types"
        );
        const result = await response.json();
        if (result.status === "success" && result.data) {
          setJobTypeList(result.data);
        } else {
          setError("Failed to fetch job types.");
        }
      } catch (err) {
        setError("An error occurred while fetching job types.");
      } finally {
        setLoading(false);
      }
    };

    fetchJobTypes();
  }, []);

  const selectedJobTypeId = useMemo(() => {
    const id = searchParams.get("job_type_id");
    return id ? Number(id) : null;
  }, [searchParams]);

  const jobTypeHandler = useCallback(
    (id) => {
      const currentParams = Object.fromEntries(searchParams);

      if (selectedJobTypeId === id) {
        delete currentParams["job_type_id"];
      } else {
        currentParams["job_type_id"] = id;
      }

      setSearchParams(
        Object.keys(currentParams).length > 0 ? currentParams : {},
        { replace: true }
      );
    },
    [searchParams, setSearchParams, selectedJobTypeId]
  );

  const jobTypeListRender = useMemo(() => {
    return jobTypeList.map((item) => (
      <li key={item.id} className="mb-4">
        <label className="flex items-center space-x-3 cursor-pointer group">
          <div className="relative">
            <input
              type="checkbox"
              name="job_type"
              value={item.id}
              checked={selectedJobTypeId === item.id}
              onChange={() => jobTypeHandler(item.id)}
              className="sr-only peer"
            />
            <div className="w-12 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </div>
          <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
            {item.name}
          </span>
        </label>
      </li>
    ));
  }, [jobTypeList, selectedJobTypeId, jobTypeHandler]);

  if (loading) {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="text-gray-600">Loading job types...</div>
      </div>
    );
  }

  if (error) {
    return <div className="p-4 text-red-600 bg-red-50 rounded-lg">{error}</div>;
  }

  return <ul className="space-y-2 p-4">{jobTypeListRender}</ul>;
};

export default React.memo(JobType);
