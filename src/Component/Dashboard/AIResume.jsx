import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Modal from "./Modal";
import toast from "react-hot-toast";

function AIResume() {
  // Resume List and Pagination States
  const [resumes, setResumes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Existing Functionality States
  const [accuracyPercentage, setAccuracyPercentage] = useState(null);
  const [isOpeen, setIsOpeen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const [isLoading, setLoading1] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [editableResumeName, setEditableResumeName] = useState("Resume1");
  const [note, setNote] = useState("");
  const [hasLink, setHasLink] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // New states for resume title editing
  const [editingResumeId, setEditingResumeId] = useState(null);
  const [editedResumeName, setEditedResumeName] = useState("");
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // Pagination Constants
  const resumesPerPage = 10;
  const token = localStorage.getItem("token");
  // Fetch Resume List
  const fetchResumeList = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        "https://api.abroadium.com/api/jobseeker/resume-list",
        {
          headers: {
            Authorization: token,
          },
        }
      );

      // Assuming the API returns an array of resumes
      setResumes(response.data.data || []);
    } catch (err) {
      console.error("Error fetching resume list:", err);
      setError("Failed to fetch resume list");
    } finally {
      setLoading(false);
    }
  };

  // Function to open edit modal
  const openEditModal = (resume) => {
    setEditingResumeId(resume.resume_id);
    setEditedResumeName(resume.name || `Resume ${resume.s_no}`);
    setIsEditModalOpen(true);
  };

  // Function to update resume title
  const updateResumeTitle = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("User not logged in");
        return;
      }

      const response = await axios.put(
        `https://api.abroadium.com/api/jobseeker/resume-details/${editingResumeId}`,
        {
          resume_title: editedResumeName,
        },
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.code === 200 || response.data.status === "success") {
        toast.success(
          response.data.message || "Resume Tilte updated successFully"
        );
        fetchResumeList();
      }
      // Refresh the resume list after successful update

      // Close the modal
      setIsEditModalOpen(false);
    } catch (error) {
      console.error("Error updating resume title:", error);
      setError("Failed to update resume title");
    }
  };

  // Pagination Logic
  const indexOfLastResume = currentPage * resumesPerPage;
  const indexOfFirstResume = indexOfLastResume - resumesPerPage;
  const currentResumes = resumes.slice(indexOfFirstResume, indexOfLastResume);

  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Fetch Resumes on Component Mount
  useEffect(() => {
    fetchResumeList();
  }, []);

  // Handle Note Change
  const handleNoteChange = (e) => {
    const value = e.target.value;
    setNote(value);

    const linkPattern = /(https?:\/\/[^\s]+)/g;
    setHasLink(linkPattern.test(value));
  };

  // Handle Suggestions Fetch
  const handleClick2 = async () => {
    setIsOpeen(!isOpeen);
    if (!isOpeen) {
      setLoading1(true);
      try {
        const token = localStorage.getItem("token");
        const requestBody = {
          keyword:
            "Rate this resume content in percentage ? and checklist of scope improvements in manner of content and informations",
          file_location:
            "/etc/ai_job_portal/jobseeker/resume_uploads/black-and-white-standard-professional-resume-1719321080.pdf",
        };

        const response = await axios.post(
          "https://api.abroadium.com/api/jobseeker/file-based-ai",
          requestBody,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: token,
            },
          }
        );

        const { improvement_suggestions } = response.data.data;
        console.log(improvement_suggestions);

        setSuggestions(improvement_suggestions);
        setIsModalOpen(true);
      } catch (error) {
        console.error("Error fetching data from API", error);
        setError("Failed to fetch suggestions. Please try again.");
      } finally {
        setLoading1(false);
      }
    }
  };

  // Handle AI Improvement
  const handleClick = async () => {
    const token = localStorage.getItem("token");
    console.log("token", token);
    if (!token) {
      setError("User not logged in");
      return;
    }

    setIsOpen(!isOpen);

    if (!isOpen) {
      setLoading1(true);
      try {
        const response = await axios.post(
          "https://api.abroadium.com/api/jobseeker/resume-improved",
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );
        setData(response.data);
        console.log("response", response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading1(false);
      }
    }
  };

  // Resume Score
  const resumeScore = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const requestBody = {
        keyword:
          "Rate this resume content in percentage ? and checklist of scope improvements in manner of content and informations",
        file_location:
          "/etc/ai_job_portal/jobseeker/resume_uploads/black-and-white-standard-professional-resume-1719321080.pdf",
      };

      const response = await axios.post(
        "https://api.abroadium.com/api/jobseeker/file-based-ai",
        requestBody,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      const { content_acuracy_percentage } = response.data.data;
      setAccuracyPercentage(content_acuracy_percentage);
    } catch (error) {
      console.error("Error fetching data from API", error);
    } finally {
      setLoading(false);
    }
  };

  // Pagination Component
  const Pagination = () => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(resumes.length / resumesPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <nav className="mt-4 flex justify-center">
        <ul className="flex space-x-2">
          {pageNumbers.map((number) => (
            <li
              key={number}
              className={`px-3 py-1 rounded ${
                currentPage === number
                  ? "bg-yellow-500 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              <button onClick={() => paginate(number)}>{number}</button>
            </li>
          ))}
        </ul>
      </nav>
    );
  };

  return (
    <>
      <div className="bg-primary w-full px-5">
        <div className="mt-20">
          <div className="flex items-center md:gap-10">
            <h1 className="font-bold text-4xl py-8 text-white">
              Resume Builder
            </h1>
            <Link
              // to={`https://abroadium-arbuild-dev-fe.vercel.app/?${localStorage.getItem(
              //   "token"
              // )}`}
              to={`https://builder.abroadium.com/?${token}`}
            >
              <div className="flex justify-center mt-2">
                <button className="px-3 py-3 font-bold rounded-xl bg-slate-300 text-black">
                  Build your Resume Now
                </button>
              </div>
            </Link>
          </div>

          {loading ? (
            <div className="text-white text-center">Loading resumes...</div>
          ) : error ? (
            <div className="text-red-500 text-center">{error}</div>
          ) : (
            <>
              <table className="border-2 border-white w-full text-white text-lg">
                <thead>
                  <tr className="border-2 border-white">
                    <th className="border-2 border-white px-2 py-1">Resume</th>
                    <th className="border-2 border-white px-2 py-1">Score</th>
                    <th className="border-2 border-white px-2 py-1">Suggest</th>
                    <th className="border-2 border-white px-2 py-1">
                      AI Improve
                    </th>
                    <th className="border-2 border-white px-2 py-1">Created</th>
                    <th className="border-2 border-white px-2 py-1">Actions</th>
                    <th className="border-2 border-white px-2 py-1">
                      Add JD Link
                    </th>
                    <th className="border-2 border-white px-2 py-1">Match %</th>
                  </tr>
                </thead>
                {console.log(currentResumes, "resume")}
                <tbody>
                  {currentResumes.map((resume, index) => (
                    <tr
                      key={resume.id || index}
                      className="border-2 border-white"
                    >
                      <td className="border-2 border-white text-center w-2">
                        <input
                          type="text"
                          value={resume.resume_title || `Resume ${resume.s_no}`}
                          onClick={() => openEditModal(resume)}
                          readOnly
                          className="bg-gray-800 text-white text-center px-1 py-1 rounded-md w-32 cursor-pointer"
                        />
                      </td>
                      <td className="border-2 border-white px-4">
                        <button
                          type="button"
                          onClick={resumeScore}
                          className="text-white hover:text-violet-950 px-1 py-1 bg-yellow-500 rounded-md text-lg font-semibold flex align-middle justify-center items-center"
                        >
                          Score
                        </button>
                      </td>
                      <td className="border-2 border-white px-4">
                        <button
                          className="text-white bg-yellow-500 px-1 py-1 items-center rounded-md text-lg font-semibold"
                          onClick={handleClick2}
                        >
                          Suggest
                        </button>
                      </td>
                      <td className="border-2 border-white px-4 text-center">
                        <div className="relative">
                          <div
                            className="text-white hover:text-black px-2 py-1 items-center rounded-md text-base font-bold bg-yellow-500 cursor-pointer"
                            onClick={handleClick}
                          >
                            AI
                          </div>
                          {isOpen && (
                            <div className="absolute top-full mt-2 w-64 bg-white shadow-lg rounded-md p-4">
                              {isLoading ? (
                                <div>Please wait for a while...</div>
                              ) : error ? (
                                <div className="text-red-500"></div>
                              ) : (
                                <ul>
                                  {Array.isArray(data) && data.length > 0 ? (
                                    data.map((item, index) => (
                                      <li key={index} className="py-1">
                                        {item.name}
                                      </li>
                                    ))
                                  ) : (
                                    <div>Please wait for a while.....</div>
                                  )}
                                </ul>
                              )}
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="border-2 border-white px-4">
                        {resume.created_at || "02/07/2024"}
                      </td>
                      <td className="border-2 border-white px-2">
                        <Link to="/uploadresume">
                          <i className="fa-solid fa-upload px-1"></i>
                        </Link>
                        <Link to="/uploadresume">
                          <i className="fa-solid fa-pen-to-square px-1"></i>
                        </Link>
                        <button className="px-2 py-1 rounded-lg font-semibold bg-yellow-500">
                          View
                        </button>
                      </td>
                      <td className="border-2 border-white px-2">
                        <textarea
                          value={note}
                          onChange={handleNoteChange}
                          className="bg-gray-800 text-white px-2 py-1 rounded-md w-full"
                          rows="2"
                        />
                        {hasLink && (
                          <button className="bg-yellow-500 text-white px-2 py-1 rounded-md mt-2">
                            Match
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Pagination */}
              <Pagination />
            </>
          )}
        </div>
      </div>

      {/* Edit Resume Title Modal */}
      <Modal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)}>
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Edit Resume Title</h2>
          <input
            type="text"
            value={editedResumeName}
            onChange={(e) => setEditedResumeName(e.target.value)}
            className="w-full px-2 py-1 border rounded-md mb-4"
            placeholder="Enter new resume title"
          />
          <div className="flex justify-end space-x-2">
            <button
              onClick={() => setIsEditModalOpen(false)}
              className="bg-gray-300 text-black px-4 py-2 rounded-md"
            >
              Cancel
            </button>
            <button
              onClick={updateResumeTitle}
              className="bg-yellow-500 text-white px-4 py-2 rounded-md"
            >
              Save
            </button>
          </div>
        </div>
      </Modal>

      {/* Improvement Suggestions Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-lg font-bold mb-4">Improvement Suggestions</h2>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          suggestions.map((suggestion, index) => (
            <div key={index} className="mb-4">
              <p>{suggestion}</p>
              <button
                className="text-white float-end text-xs px-2 py-1 bg-green-700 hover:bg-blue-600 rounded-md flex items-center gap-1"
                onClick={() => {
                  navigator.clipboard.writeText(suggestion);
                  alert("Suggestion copied to clipboard!");
                }}
              >
                <i className="fas fa-copy"></i> Copy
              </button>
            </div>
          ))
        )}
      </Modal>
    </>
  );
}

export default AIResume;
