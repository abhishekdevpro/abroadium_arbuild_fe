// import { Link, useSearchParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import toast from "react-hot-toast";
// import ApplyJobModalContent from "./ApplyJobModalContent"

// const LoginModal = ({ onClose }) => {
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
//         <h3 className="text-xl font-semibold mb-4">Please Login</h3>
//         <p className="mb-6">You need to be logged in to perform this action.</p>
//         <div className="flex justify-end space-x-4">
//           <button
//             onClick={onClose}
//             className="px-4 py-2 text-gray-600 hover:text-gray-800"
//           >
//             Cancel
//           </button>
//           <Link
//             to="/"
//             className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//           >
//             Login
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// const FilterJobsBox = () => {
//   const [searchParams] = useSearchParams();
//   const [jobs, setJobs] = useState([]);
//   const [filteredJobs, setFilteredJobs] = useState([]);
//   const [sort, setSort] = useState("");
//   const [perPage, setPerPage] = useState({ start: 0, end: 0 });
//   const [isLoading, setIsLoading] = useState(true);
//   const [showPopup, setShowPopup] = useState(false);
//   const [selectedJobId, setSelectedJobId] = useState(null);
//   const [showLoginModal, setShowLoginModal] = useState(false);

//   const token = localStorage.getItem("token");

//   const handleApplyNowClick = (jobId) => {
//     if (!token) {
//       setShowLoginModal(true);
//     } else {
//       setSelectedJobId(jobId);
//       setShowPopup(true);
//     }
//   };

//   const handleClosePopup = () => {
//     setShowPopup(false);
//     setSelectedJobId(null);
//   };

//   const handleCloseLoginModal = () => {
//     setShowLoginModal(false);
//   };

//   const savejob = async (jobId) => {
//     if (!token) {
//       setShowLoginModal(true);
//       return;
//     }

//     try {
//       const response = await axios.get(
//         `https://api.abroadium.com/api/jobseeker/mark-job-favorite/${jobId}`,
//         {
//           headers: {
//             Authorization: token,
//           },
//         }
//       );
//       if (response.status === "status" || response.code === 200) {
//         toast.success(response.message || "Your job was successfully saved!");
//       } else {
//         toast.error("Failed to save the job. Please try again.");
//       }
//     } catch (error) {
//       toast.error("An error occurred while saving the job. Please try again.");
//     }
//   };

//   useEffect(() => {
//     const fetchJobs = async () => {
//       try {
//         setIsLoading(true);
//         const urlParams = new URLSearchParams();

//         const jobTypeId = searchParams.get("job_type_id");
//         if (jobTypeId) {
//           urlParams.append("job_type_id", jobTypeId);
//         }

//         const experienceId = searchParams.get("experience_id");
//         if (experienceId) {
//           urlParams.append("experience_id", experienceId);
//         }

//         const salaryId = searchParams.get("salary_id");
//         if (salaryId) {
//           urlParams.append("offered_salary_id", salaryId);
//         }

//         const apiUrl = `https://api.abroadium.com/api/jobseeker/job-list${
//           urlParams.toString() ? `?${urlParams.toString()}` : ""
//         }`;

//         const response = await fetch(apiUrl);
//         const data = await response.json();

//         setJobs(data.data);
//         setFilteredJobs(data.data);
//       } catch (error) {
//         console.error("Error fetching jobs:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchJobs();
//   }, [searchParams]);

//   const sortHandler = (e) => {
//     const sortValue = e.target.value;
//     setSort(sortValue);

//     const sortedJobs = [...filteredJobs].sort((a, b) => {
//       if (sortValue === "asc") {
//         return a.id - b.id;
//       } else if (sortValue === "des") {
//         return b.id - a.id;
//       }
//       return 0;
//     });

//     setFilteredJobs(sortedJobs);
//   };

//   const perPageHandler = (e) => {
//     const pageData = JSON.parse(e.target.value);
//     setPerPage(pageData);
//   };

//   let content = filteredJobs
//     ?.slice(perPage.start, perPage.end !== 0 ? perPage.end : filteredJobs.length)
//     ?.map((item) => (
//       <div className="job-block col-lg-6 col-md-12 col-sm-12" key={item.id}>
//         <div className="inner-box">
//           <div className="content">
//             <span className="company-logo">
//               <img
//                 src={
//                   item.logo ||
//                   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXn84m0ldNEy4b-doui_GKkeziMRUfEl71g&s"
//                 }
//                 alt="company logo"
//               />
//             </span>
//             <h4>
//               <Link to={`/job-single-v3/${item.id}`}>{item.job_title}</Link>
//             </h4>

//             <ul className="job-info">
//               <li>
//                 <span className="icon flaticon-briefcase"></span>
//                 {item.industry || "Not specified"}
//               </li>
//               <li>
//                 <span className="icon flaticon-map-locator"></span>
//                 {item.city
//                   ? `${item.city}, ${item.country}`
//                   : "Location not specified"}
//               </li>
//               <li>
//                 <span className="icon flaticon-clock-3"></span>
//                 {item.application_deadline || "Open"}
//               </li>
//               <li>
//                 <span className="icon flaticon-money"></span>
//                 {item.offered_salary || "Salary not specified"}
//               </li>
//             </ul>

//             <ul className="job-other-info">
//               {item.job_type && <li className="time">{item.job_type}</li>}
//             </ul>

//             <div className="flex">
//               <button
//                 className="btn"
//                 onClick={() => savejob(item.id)}
//               >
//                 <span className="fas fa-heart"></span>
//               </button>
//               <button
//                 className="btn"
//                 onClick={() => handleApplyNowClick(item.id)}
//               >
//                 <span className="flaticon-bookmark"></span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     ));

//   if (isLoading) {
//     return <div className="text-center">Loading...</div>;
//   }

//   return (
//     <>
//       <div className="ls-switcher">
//         <div className="show-result">
//           <div className="show-1023">
//             <button
//               type="button"
//               className="theme-btn toggle-filters"
//               data-bs-toggle="offcanvas"
//               data-bs-target="#filter-sidebar"
//             >
//               <span className="icon icon-filter"></span> Filter
//             </button>
//           </div>

//           <div className="text">
//             Show <strong>{content?.length}</strong> jobs
//           </div>
//         </div>

//         <div className="sort-by">
//           <select
//             value={sort}
//             className="chosen-single form-select"
//             onChange={sortHandler}
//           >
//             <option value="">Sort by (default)</option>
//             <option value="asc">Newest</option>
//             <option value="des">Oldest</option>
//           </select>

//           <select
//             onChange={perPageHandler}
//             className="chosen-single form-select ms-3"
//             value={JSON.stringify(perPage)}
//           >
//             <option value={JSON.stringify({ start: 0, end: 0 })}>All</option>
//             <option value={JSON.stringify({ start: 0, end: 20 })}>
//               20 per page
//             </option>
//             <option value={JSON.stringify({ start: 0, end: 25 })}>
//               25 per page
//             </option>
//             <option value={JSON.stringify({ start: 0, end: 30 })}>
//               30 per page
//             </option>
//           </select>
//         </div>
//       </div>

//       <div className="row">{content}</div>

//       <div className="ls-show-more">
//         <p>
//           Show {content?.length} of {jobs.length} Jobs
//         </p>
//         <div className="bar">
//           <span
//             className="bar-inner"
//             style={{ width: `${(content?.length / jobs.length) * 100}%` }}
//           ></span>
//         </div>
//         <button className="show-more">Show More</button>
//       </div>

//       {showPopup && selectedJobId && (
//         <ApplyJobModalContent job={jobs} onClose={handleClosePopup} />
//       )}

//       {showLoginModal && <LoginModal onClose={handleCloseLoginModal} />}
//     </>
//   );
// };

// export default FilterJobsBox;
import { Link, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import {
  Heart,
  Bookmark,
  Filter,
  MapPin,
  Briefcase,
  Clock,
  DollarSign,
} from "lucide-react";
import ApplyJobModalContent from "./ApplyJobModalContent";

const LoginModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 shadow-xl">
        <h3 className="text-xl font-semibold mb-4">Please Login</h3>
        <p className="mb-6 text-gray-600">
          You need to be logged in to perform this action.
        </p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            Cancel
          </button>
          <Link
            to="/"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

const FilterJobsBox = () => {
  const [searchParams] = useSearchParams();
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [sort, setSort] = useState("");
  const [perPage, setPerPage] = useState({ start: 0, end: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedJobId, setSelectedJobId] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const token = localStorage.getItem("token");

  const handleApplyNowClick = (jobId) => {
    if (!token) {
      setShowLoginModal(true);
    } else {
      setSelectedJobId(jobId);
      setShowPopup(true);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedJobId(null);
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };

  const savejob = async (jobId) => {
    if (!token) {
      setShowLoginModal(true);
      return;
    }

    try {
      const response = await axios.get(
        `https://api.abroadium.com/api/jobseeker/mark-job-favorite/${jobId}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      if (response.data.status === "status" || response.data.code === 200) {
        toast.success(response.message || "Your job was successfully saved!");
      } else {
        toast.error("Failed to save the job. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred while saving the job. Please try again.");
    }
  };

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setIsLoading(true);
        const urlParams = new URLSearchParams();

        const jobTypeId = searchParams.get("job_type_id");
        if (jobTypeId) {
          urlParams.append("job_type_id", jobTypeId);
        }

        const experienceId = searchParams.get("experience_id");
        if (experienceId) {
          urlParams.append("experience_id", experienceId);
        }

        const salaryId = searchParams.get("salary_id");
        if (salaryId) {
          urlParams.append("offered_salary_id", salaryId);
        }

        const apiUrl = `https://api.abroadium.com/api/jobseeker/job-list${
          urlParams.toString() ? `?${urlParams.toString()}` : ""
        }`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        setJobs(data.data);
        setFilteredJobs(data.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, [searchParams]);

  const sortHandler = (e) => {
    const sortValue = e.target.value;
    setSort(sortValue);

    const sortedJobs = [...filteredJobs].sort((a, b) => {
      if (sortValue === "asc") {
        return a.id - b.id;
      } else if (sortValue === "des") {
        return b.id - a.id;
      }
      return 0;
    });

    setFilteredJobs(sortedJobs);
  };

  const perPageHandler = (e) => {
    const pageData = JSON.parse(e.target.value);
    setPerPage(pageData);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-lg text-gray-600">Loading jobs...</div>
      </div>
    );
  }

  const jobsList = filteredJobs
    ?.slice(
      perPage.start,
      perPage.end !== 0 ? perPage.end : filteredJobs.length
    )
    ?.map((item) => (
      <div className="w-full md:w-1/2 p-4" key={item.id}>
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex flex-col space-y-4">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 flex-shrink-0">
                <img
                  src={
                    item.logo ||
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXn84m0ldNEy4b-doui_GKkeziMRUfEl71g&s"
                  }
                  alt="company logo"
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <div className="flex-1">
                <Link
                  to={`/job-single/${item.id}`}
                  className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors"
                >
                  {item.job_title}
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Briefcase className="w-4 h-4" />
                <span>{item.industry || "Not specified"}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>
                  {item.city
                    ? `${item.city}, ${item.country}`
                    : "Location not specified"}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{item.application_deadline || "Open"}</span>
              </div>
              <div className="flex items-center space-x-2">
                <DollarSign className="w-4 h-4" />
                <span>{item.offered_salary || "Salary not specified"}</span>
              </div>
            </div>

            {item.job_type && (
              <div className="flex items-center">
                <span className="px-3 py-1 text-sm text-blue-600 bg-blue-50 rounded-full">
                  {item.job_type}
                </span>
              </div>
            )}

            <div className="flex justify-end space-x-3">
              <button
                onClick={() => savejob(item.id)}
                className="p-2 text-gray-600 hover:text-red-500 transition-colors"
              >
                <Heart className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleApplyNowClick(item.id)}
                className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Bookmark className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    ));

  return (
    <div className="w-full">
      <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <button
              type="button"
              className="md:hidden inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
              data-bs-toggle="offcanvas"
              data-bs-target="#filter-sidebar"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </button>
            <div className="text-sm text-gray-600">
              Showing <span className="font-semibold">{jobsList?.length}</span>{" "}
              jobs
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <select
              value={sort}
              onChange={sortHandler}
              className="block w-full rounded-md border-gray-300 text-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">Sort by (default)</option>
              <option value="asc">Newest</option>
              <option value="des">Oldest</option>
            </select>

            <select
              onChange={perPageHandler}
              value={JSON.stringify(perPage)}
              className="block w-full rounded-md border-gray-300 text-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value={JSON.stringify({ start: 0, end: 0 })}>All</option>
              <option value={JSON.stringify({ start: 0, end: 20 })}>
                20 per page
              </option>
              <option value={JSON.stringify({ start: 0, end: 25 })}>
                25 per page
              </option>
              <option value={JSON.stringify({ start: 0, end: 30 })}>
                30 per page
              </option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap -mx-4">{jobsList}</div>

      <div className="mt-8 text-center">
        <div className="text-sm text-gray-600 mb-4">
          Showing {jobsList?.length} of {jobs.length} Jobs
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(jobsList?.length / jobs.length) * 100}%` }}
          ></div>
        </div>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          Show More
        </button>
      </div>

      {showPopup && selectedJobId && (
        <ApplyJobModalContent job={jobs} onClose={handleClosePopup} />
      )}

      {showLoginModal && <LoginModal onClose={handleCloseLoginModal} />}
    </div>
  );
};

export default FilterJobsBox;
