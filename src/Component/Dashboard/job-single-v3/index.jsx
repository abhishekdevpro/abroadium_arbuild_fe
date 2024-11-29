import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import ApplyJobModalContent from "../job-list-v3/ApplyJobModalContent";
import JobOverView2 from "./JobOverview";
import JobDetailsDescriptions from './JobDescription';
import SocialTwo from "./Social";
import Contact from "./Contact";
import CompanyInfo from "./CompanyInfo";

// Modal Components
const ApplyModal = ({ isOpen, onClose, jobData }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto animate-fade-in">
        <div className="text-center relative border-b pb-4 mb-6">
          <h3 className="text-2xl font-bold text-gray-800">Apply for this job</h3>
          <button
            onClick={onClose}
            className="absolute right-0 top-0 text-gray-500 hover:text-gray-700 transition-colors duration-200 text-2xl font-semibold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
          >
            ×
          </button>
        </div>
        <ApplyJobModalContent job={jobData} onClose={onClose} />
      </div>
    </div>
  );
};

const LoginModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full mx-4 animate-fade-in">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Please Login</h3>
        <p className="text-gray-600 mb-8">You need to be logged in to perform this action.</p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-6 py-2.5 text-gray-700 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
          >
            Cancel
          </button>
          <Link
            to="/"
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

const JobSingleDynamicV3 = () => {
  const [jobData, setJobData] = useState(null);
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showApplyModal, setShowApplyModal] = useState(false);
  
  const { id } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleApplyClick = (e) => {
    e.preventDefault();
    if (!token) {
      setShowLoginModal(true);
      return;
    }
    setShowApplyModal(true);
  };

  const handleBookmarkClick = (e) => {
    e.preventDefault();
    if (!token) {
      setShowLoginModal(true);
      return;
    }
    // Add your bookmark logic here
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };

  const handleCloseApplyModal = () => {
    setShowApplyModal(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const headers = token ? { Authorization: token } : {};
        const jobResponse = await axios.get(
          `https://api.sentryspot.co.uk/api/jobseeker/job-list/${id}`,
          { headers }
        );

        const fetchedJobData = jobResponse.data.data;
        setJobData(fetchedJobData);

        if (fetchedJobData.company_id) {
          const companyResponse = await axios.get(
            `https://api.sentryspot.co.uk/api/jobseeker/companies/${fetchedJobData.company_id}`
          );
          setCompany(companyResponse.data.data);
        }

        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [token]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500 text-center">
          <svg className="w-16 h-16 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-xl font-semibold mb-2">Error Loading Job</h3>
          <p>{error}</p>
        </div>
      </div>
    );
  }
  // console.log(jobData,company,"aree ree");
  return (
    <>
      <span className="header-span"></span>

      <section className="py-12 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-wrap -mx-4">
            {/* Main Content */}
            <div className="w-full lg:w-2/3 px-4">
              {/* Job Header */}
              <div className="bg-white shadow-lg rounded-2xl p-8 mb-8 transition-shadow duration-300 hover:shadow-xl">
                <h4 className="text-2xl font-bold text-gray-800 mb-6">{jobData?.job_title || "Job Title Not Available"}</h4>
                <ul className="grid gap-4">
                  <li className="flex items-center text-gray-600">
                    <span className="mr-3 text-xl">🏢</span>
                    <span className="font-medium">{company?.company_name || "Company Name Not Available"}</span>
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="mr-3 text-xl">📍</span>
                    <span>{jobData?.city && jobData?.country 
                      ? `${jobData.city}, ${jobData.country}` 
                      : "Location Not Specified"}</span>
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="mr-3 text-xl">🗓️</span>
                    <span>{jobData?.created_at || "Date Not Available"}</span>
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="mr-3 text-xl">💰</span>
                    <span className="font-medium">{jobData?.offered_salary || "Salary Not Defined"}</span>
                  </li>
                </ul>

                {jobData?.jobType && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {jobData.jobType.map((val, i) => (
                      <span key={i} className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                        {val.type}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Job Description */}
              <div className="bg-white shadow-lg rounded-2xl p-8 mb-8 transition-shadow duration-300 hover:shadow-xl">
                <h4 className="text-2xl font-bold text-gray-800 mb-6">Job Details</h4>
                <div className="prose max-w-none">
                  <JobOverView2 jobData={jobData}/>
                </div>
              </div>

              <div className="bg-white shadow-lg rounded-2xl p-8 mb-8 transition-shadow duration-300 hover:shadow-xl">
                <JobDetailsDescriptions company={company} />
              </div>

              {/* Social Share */}
              <div className="bg-white shadow-lg rounded-2xl p-8 mb-8 transition-shadow duration-300 hover:shadow-xl">
                <div className="flex justify-between items-center">
                  <h5 className="text-xl font-bold text-gray-800">Share this job</h5>
                  <SocialTwo />
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-1/3 px-4">
              <aside className="sticky top-8">
                <div className="bg-white shadow-lg rounded-2xl p-8 mb-8 transition-shadow duration-300 hover:shadow-xl">
                  {/* Action Buttons */}
                  <div className="space-y-4">
                    <button
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
                      onClick={handleApplyClick}
                    >
                      <span>Apply For Job</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                    <button 
                      className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-6 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2" 
                      onClick={handleBookmarkClick}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                      </svg>
                      <span>Bookmark</span>
                    </button>
                  </div>

                  {/* Company Info */}
                  <div className="mt-8">
                    <h4 className="text-xl font-bold text-gray-800 mb-4">Company Info</h4>
                    <div className="prose max-w-none">
                      <CompanyInfo company={company} />
                    </div>
                    <a
                      href={jobData?.link || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block mt-6 bg-blue-600 hover:bg-blue-700 text-white text-center py-3 px-6 rounded-lg font-medium transition-colors duration-200"
                    >
                      Visit Company Website
                    </a>
                  </div>

                  {/* Contact Info */}
                  <div className="mt-8">
                    <h4 className="text-xl font-bold text-gray-800 mb-4">Contact Us</h4>
                    <div className="prose max-w-none">
                      <Contact />
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>

          {/* Related Jobs */}
          
        </div>
      </section>

      {showLoginModal && <LoginModal onClose={handleCloseLoginModal} />}
      <ApplyModal 
        isOpen={showApplyModal} 
        onClose={handleCloseApplyModal} 
        jobData={jobData}
      />
    </>
  );
};

export default JobSingleDynamicV3;