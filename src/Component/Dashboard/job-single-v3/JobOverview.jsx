import React from 'react';
import PropTypes from 'prop-types';

const JobOverview = ({ jobData }) => {
  // Basic validation to check if jobData has the required fields
  if (!jobData || !jobData.job_title || !jobData.city) {
    return <div className="text-red-500">Invalid job data provided.</div>;
  }

  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Date Posted */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 flex items-center justify-center bg-blue-50 rounded-lg">
            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Date Posted:</p>
            <p className="text-gray-900 font-medium">{new Date(jobData.created_at).toLocaleString()}</p>
          </div>
        </div>

        {/* Expiration Date */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 flex items-center justify-center bg-blue-50 rounded-lg">
            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Expiration date:</p>
            <p className="text-gray-900 font-medium">{jobData.application_deadline || "Not specified"}</p>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 flex items-center justify-center bg-blue-50 rounded-lg">
            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Location:</p>
            <p className="text-gray-900 font-medium">{jobData.city || "Not specified"}, {jobData.country || "Not specified"}</p>
          </div>
        </div>

        {/* Job Title */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 flex items-center justify-center bg-blue-50 rounded-lg">
            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Job Title:</p>
            <p className="text-gray-900 font-medium">{jobData.job_title}</p>
          </div>
        </div>

        {/* Hours */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 flex items-center justify-center bg-blue-50 rounded-lg">
            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Hours:</p>
            <p className="text-gray-900 font-medium">{jobData.experience || "Not specified"}</p>
          </div>
        </div>

        {/* Rate */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 flex items-center justify-center bg-blue-50 rounded-lg">
            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Rate:</p>
            <p className="text-gray-900 font-medium">{jobData.offered_salary || "Not specified"}</p>
          </div>
        </div>

        {/* Salary */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 flex items-center justify-center bg-blue-50 rounded-lg">
            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Salary:</p>
            <p className="text-gray-900 font-medium">{jobData.salary || "Not specified"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Adding PropTypes for validation
JobOverview.propTypes = {
  jobData: PropTypes.shape({
    created_at: PropTypes.string.isRequired,
    application_deadline: PropTypes.string,
    city: PropTypes.string.isRequired,
    country: PropTypes.string,
    job_title: PropTypes.string.isRequired,
    experience: PropTypes.string,
    offered_salary: PropTypes.string,
    salary: PropTypes.string,
  }).isRequired,
};

export default JobOverview;
