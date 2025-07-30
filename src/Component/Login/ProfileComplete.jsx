import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ProfileComplete = () => {
  const [jobProfileValues, setJobProfileValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    job_title: "",
    resume: null,
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [loginCount, setLoginCount] = useState(0);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          "https://api.abroadium.com/api/jobseeker/user-profile",
          {
            headers: { Authorization: token },
          }
        );

        const res = response.data;

        if (
          res.code === 200 &&
          res.status === "success" &&
          res?.data.personal_details
        ) {
          toast.success("Profile data loaded successfully!");

          // Optional: set state with personal_details
          const { first_name, last_name, email, phone, job_title } =
            res.data.personal_details;

          setJobProfileValues((prev) => ({
            ...prev,
            first_name: first_name || "",
            last_name: last_name || "",
            email: email || "",
            phone: phone || "",
            job_title: job_title || "",
          }));
        } else {
          toast.error("Something went wrong while fetching profile");
        }
      } catch (error) {
        console.error("Fetch error:", error);
        toast.error("Failed to load profile info");
      }
    };

    if (token) fetchProfile();
  }, [token]);

  const validate = () => {
    const temp = {};
    if (!jobProfileValues.first_name.trim())
      temp.first_name = "First name is required";
    if (!jobProfileValues.last_name.trim())
      temp.last_name = "Last name is required";
    if (!jobProfileValues.email.trim()) temp.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(jobProfileValues.email))
      temp.email = "Invalid email address";
    if (!jobProfileValues.phone.trim()) temp.phone = "Phone is required";
    else if (!/^[0-9]{10}$/.test(jobProfileValues.phone))
      temp.phone = "Enter valid 10-digit phone number";
    if (!jobProfileValues.job_title.trim())
      temp.job_title = "Job Title is required";

    if (
      loginCount > 1 && // ← Only validate resume if loginCount > 1
      !jobProfileValues.resume &&
      !jobProfileValues.uploadedResume
    ) {
      temp.resume = "Resume is required";
    }

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setJobProfileValues({ ...jobProfileValues, resume: files[0] });
    } else {
      setJobProfileValues({ ...jobProfileValues, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    try {
      // Step 1: Upload resume only if a new file is selected
      if (jobProfileValues.resume) {
        const resumeForm = new FormData();
        resumeForm.append("files", jobProfileValues.resume);

        const Resumeresponse = await axios.post(
          "https://api.abroadium.com/api/user/resume-upload",
          resumeForm,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `${token}`,
            },
          }
        );

        if (
          Resumeresponse.data.status !== "success" &&
          Resumeresponse.data.code !== 200
        ) {
          throw new Error("Resume upload failed");
        }
      }

      // Step 2: Update profile (always)
      const profileForm = new FormData();
      profileForm.append("first_name", jobProfileValues.first_name);
      profileForm.append("last_name", jobProfileValues.last_name);
      profileForm.append("email", jobProfileValues.email);
      profileForm.append("phone", jobProfileValues.phone);
      profileForm.append("job_title", jobProfileValues.job_title);

      const response = await axios.put(
        "https://api.abroadium.com/api/jobseeker/user-profile",
        profileForm,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `${token}`,
          },
        }
      );

      if (response.data.status === "success" || response.data.code === 200) {
        toast.success(response.data.message || "Profile updated successfully!");
        // navigate("/dashboard");
        window.location.href = `https://builder.abroadium.com/?${token}`;
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(
        error?.response?.data?.message ||
          "Error while submitting. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-xl px-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h5 className="text-lg font-semibold uppercase">
              Complete Your Profile
            </h5>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* First Name */}
            <div>
              <label
                htmlFor="first_name"
                className="block text-sm font-medium mb-1"
              >
                First Name:
              </label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                maxLength={20}
                onChange={handleChange}
                value={jobProfileValues.first_name}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
              />
              {errors.first_name && (
                <p className="text-red-500 text-sm mt-1">{errors.first_name}</p>
              )}
            </div>

            {/* Last Name */}
            <div>
              <label
                htmlFor="last_name"
                className="block text-sm font-medium mb-1"
              >
                Last Name:
              </label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                maxLength={20}
                onChange={handleChange}
                value={jobProfileValues.last_name}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
              />
              {errors.last_name && (
                <p className="text-red-500 text-sm mt-1">{errors.last_name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                value={jobProfileValues.email}
                readOnly
                className="w-full bg-gray-100 border border-gray-300 rounded px-3 py-2 cursor-not-allowed"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                Phone:
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                maxLength={10}
                onChange={handleChange}
                value={jobProfileValues.phone}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="job_title"
                className="block text-sm font-medium mb-1"
              >
                Job Title:{" "}
              </label>
              <input
                type="text"
                id="job_title"
                name="job_title"
                maxLength={50}
                onChange={handleChange}
                value={jobProfileValues.job_title}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
              />
              {errors.job_title && (
                <p className="text-red-500 text-sm mt-1">{errors.job_title}</p>
              )}
            </div>
            {/* Resume Upload */}
            {/* <div>
              {loginCount <= 1 && (
                <p className="text-blue-600 text-sm mb-2">
                  Resume is optional for first-time login. You can upload it
                  later.
                </p>
              )}

              <label
                htmlFor="resume"
                className="block text-sm font-medium mb-1"
              >
                Resume (PDF/DOC):
              </label>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                id="resume"
                name="resume"
                onChange={(e) =>
                  setJobProfileValues({
                    ...jobProfileValues,
                    resume: e.target.files[0],
                  })
                }
                className="w-full border border-gray-300 rounded px-3 py-2 bg-white file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
              {jobProfileValues.uploadedResume && (
                <p className="text-sm text-gray-600 mt-2">
                  Uploaded:{" "}
                  <a
                    href={`https://airesume.abroadium.com/${jobProfileValues.uploadedResume}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 underline"
                  >
                    {jobProfileValues.uploadedResume.split("/").pop()}
                  </a>
                </p>
              )}
              {errors.resume && (
                <p className="text-red-500 text-sm mt-1">{errors.resume}</p>
              )}
            </div> */}

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Submit Profile"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileComplete;
