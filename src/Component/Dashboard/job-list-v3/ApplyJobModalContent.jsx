import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { X } from "lucide-react";
import { toast } from "react-toastify";
const token = localStorage.getItem("token");

const ApplyJobModalContent = ({ onClose, job }) => {
  const [formData, setFormData] = useState({
    files: null,
    tenthpercentage: "",
    twelfthpercentage: "",
    graduationpercentage: "",
    postgraduationpercentage: "", // Optional
    phoneno: "",
    countrycode: "+91",
    whyyouwanttojoin: "",
    skills: "",
    projects: "",
    lastcompanyname: "", // Optional
    employmenthistory: "", // Optional
    totalworkexperience: "", // Optional
    relevantworkexperience: "", // Optional
    noticeperiodindays: "",
    currentsalary: "",
    expectedsalary: "",
    message: "",
    termsAccepted: false,
  });

  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState("No File chosen");

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      setFormData((prev) => ({
        ...prev,
        files: file,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validate required fields
    const requiredFields = [
      "tenthpercentage",
      "twelfthpercentage",
      "graduationpercentage",
      "phoneno",
      "whyyouwanttojoin",
      "skills",
      "projects",
      "noticeperiodindays",
      "currentsalary",
      "expectedsalary",
    ];

    const missingFields = requiredFields.filter((field) => !formData[field]);

    if (missingFields.length > 0) {
      toast.error("Please fill in all required fields");
      setLoading(false);
      return;
    }

    try {
      const submitData = new FormData();

      // Only append non-null and non-empty values
      Object.keys(formData).forEach((key) => {
        if (key === "files" && formData[key]) {
          submitData.append("files", formData[key]);
        } else if (
          formData[key] !== null &&
          formData[key] !== "" &&
          formData[key] !== undefined
        ) {
          submitData.append(key, formData[key]);
        }
      });

      const response = await axios.post(
        `https://api.abroadium.com/api/jobseeker/apply-for-job/${job.id}`,
        submitData,
        {
          headers: {
            Authorization: token,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success("Application submitted successfully!");

      // Close modal after showing success message
      setTimeout(() => {
        onClose?.();
      }, 1500);
    } catch (err) {
      const errorMessage =
        err.response?.data?.message ||
        "An error occurred while submitting the form";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
        <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-900">
            Apply for this job
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* File Upload */}
          <div className="border border-dashed border-gray-300 rounded-md p-4">
            <div className="flex items-center justify-between">
              <input
                type="file"
                name="files"
                id="file-upload"
                onChange={handleFileChange}
                accept=".doc,.docx,.pdf"
                className="hidden"
                required
              />
              <label
                htmlFor="file-upload"
                className="px-4 py-2 bg-blue-50 text-blue-600 rounded-md cursor-pointer hover:bg-blue-100"
              >
                Choose File
              </label>
              <span className="text-gray-500 text-sm">{fileName}</span>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Upload CV (doc, docx, pdf)
            </p>
          </div>

          {/* Education Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-700">
                10th Percentage <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="tenthpercentage"
                value={formData.tenthpercentage}
                onChange={handleInputChange}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700">
                12th Percentage <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="twelfthpercentage"
                value={formData.twelfthpercentage}
                onChange={handleInputChange}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700">
                Graduation Percentage <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="graduationpercentage"
                value={formData.graduationpercentage}
                onChange={handleInputChange}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700">
                Post Graduation Percentage (Optional)
              </label>
              <input
                type="number"
                name="postgraduationpercentage"
                value={formData.postgraduationpercentage}
                onChange={handleInputChange}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>

          {/* Contact Details */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-700">
                Country Code <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="countrycode"
                value={formData.countrycode}
                onChange={handleInputChange}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phoneno"
                value={formData.phoneno}
                onChange={handleInputChange}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>

          {/* Why join us */}
          <div>
            <label className="block text-sm text-gray-700">
              Why do you want to join us?{" "}
              <span className="text-red-500">*</span>
            </label>
            <textarea
              name="whyyouwanttojoin"
              value={formData.whyyouwanttojoin}
              onChange={handleInputChange}
              rows={3}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Skills and Projects */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-700">
                Skills <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="skills"
                value={formData.skills}
                onChange={handleInputChange}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700">
                Projects <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="projects"
                value={formData.projects}
                onChange={handleInputChange}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>

          {/* Work Experience Details */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-700">
                Last Company Name (Optional)
              </label>
              <input
                type="text"
                name="lastcompanyname"
                value={formData.lastcompanyname}
                onChange={handleInputChange}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700">
                Employment History (Optional)
              </label>
              <input
                type="text"
                name="employmenthistory"
                value={formData.employmenthistory}
                onChange={handleInputChange}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-700">
                  Total Work Experience (years) (Optional)
                </label>
                <input
                  type="number"
                  name="totalworkexperience"
                  value={formData.totalworkexperience}
                  onChange={handleInputChange}
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700">
                  Relevant Work Experience (years) (Optional)
                </label>
                <input
                  type="number"
                  name="relevantworkexperience"
                  value={formData.relevantworkexperience}
                  onChange={handleInputChange}
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>

          {/* Notice Period and Salary */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm text-gray-700">
                Notice Period (days) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="noticeperiodindays"
                value={formData.noticeperiodindays}
                onChange={handleInputChange}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700">
                Current Salary <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="currentsalary"
                value={formData.currentsalary}
                onChange={handleInputChange}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700">
                Expected Salary <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="expectedsalary"
                value={formData.expectedsalary}
                onChange={handleInputChange}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>

          <div className="flex items-center space-x-2 mt-6">
            <input
              type="checkbox"
              name="termsAccepted"
              id="terms"
              checked={formData.termsAccepted}
              onChange={handleInputChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              required
            />
            <label htmlFor="terms" className="text-sm text-gray-700">
              You accept our{" "}
              <Link to="/terms" className="text-blue-600 hover:text-blue-500">
                Terms and Conditions and Privacy Policy
              </Link>
            </label>
          </div>

          <button
            type="submit"
            disabled={loading || !formData.termsAccepted}
            className="w-full mt-6 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Submitting..." : "Apply Job"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyJobModalContent;
