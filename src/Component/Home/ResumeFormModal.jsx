import { useState } from "react";
import axios from "axios";
import Button from "../../UI/Button";

export default function ResumeFormModal({ writer, onClose }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    resume: null,
    photo: null,
    image: null, // New field for image_upload
    notes: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "file" ? files[0] : type === "checkbox" ? checked : value,
    }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  // Get token from localStorage
  const token = localStorage.getItem("token");
  console.log("Token found:", token ? "Yes" : "No");
  console.log("Token preview:", token?.substring(0, 20) + "...");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // Create FormData for file uploads
      const formDataToSend = new FormData();
      formDataToSend.append("full_name", formData.fullName);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("remark", formData.notes);
      formDataToSend.append("resume_writer_name", writer);

      // Add files if they exist
      if (formData.resume) {
        formDataToSend.append("resume_upload", formData.resume);
      }
      if (formData.photo) {
        formDataToSend.append("photo_upload", formData.photo);
      }
      if (formData.image) {
        formDataToSend.append("image_upload", formData.image);
      }

      console.log("Submitting form data to API...");

      const response = await axios.post(
        "https://api.abroadium.com/api/jobseeker/manual-resume-form",
        formDataToSend,
        {
          headers: {
            Authorization: token,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("API Response:", response.data);

      if (response.status === 200 || response.status === 201) {
        alert("Resume form submitted successfully!");
        onClose();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError(
        error.response?.data?.message ||
          "Failed to submit form. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center px-4">
      <div className="bg-primary rounded-lg shadow-lg max-w-xl w-full p-6 relative overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-white text-xl font-bold"
        >
          ×
        </button>
        <h2 className="text-2xl text-white font-semibold mb-4 text-center">
          Resume Submission Form
        </h2>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              className="block text-lg font-medium mb-1 text-white"
              htmlFor="fullName"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="w-full p-2 border rounded text-black border-black"
              placeholder="Full Name"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label
              className="block text-lg font-medium mb-1 text-white"
              htmlFor="email"
            >
              Email ID
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border rounded text-black border-black"
              placeholder="Email Id"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label
              className="block text-lg font-medium mb-1 text-white"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full p-2 border rounded text-black border-black"
              placeholder="Phone Number"
              onChange={handleChange}
            />
          </div>

          <div>
            <label
              className="block text-lg font-medium mb-1 text-white"
              htmlFor="resume"
            >
              Upload Resume (PDF, DOC, DOCX)
            </label>
            <input
              type="file"
              id="resume"
              name="resume"
              accept=".pdf,.doc,.docx"
              className="w-full p-2 border border-white rounded text-white"
              placeholder="Upload Resume"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label
              className="block text-lg  font-medium mb-1 text-white"
              htmlFor="photo"
            >
              Upload Photo (Optional - JPG, PNG)
            </label>
            <input
              type="file"
              id="photo"
              name="photo"
              accept=".jpg,.jpeg,.png"
              className="w-full p-2 border border-white rounded text-white"
              placeholder="Upload Photo"
              onChange={handleChange}
            />
          </div>

          <div>
            <label
              className="block text-lg font-medium mb-1 text-white"
              htmlFor="image"
            >
              Upload Image (Optional - JPG, PNG, GIF)
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept=".jpg,.jpeg,.png,.gif"
              className="w-full p-2 border border-white rounded text-white"
              placeholder="Upload Image"
              onChange={handleChange}
            />
          </div>

          <div>
            <label
              className="block text-lg font-medium mb-1 text-white"
              htmlFor="notes"
            >
              Remarks / Additional Notes
            </label>
            <textarea
              id="notes"
              name="notes"
              rows="4"
              className="w-full p-2 border rounded text-black border-black"
              placeholder=" Remarks / Additional Notes"
              onChange={handleChange}
            />
          </div>

          <div>
            <label
              className="block text-lg font-medium mb-1 text-white"
              htmlFor="writer"
            >
              Selected Resume Writer
            </label>
            <input
              type="text"
              id="writer"
              name="writer"
              value={writer}
              disabled
              className="w-full p-2 border rounded text-black bg-gray-100 border-black"
              placeholder="Resume Writer"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="agree"
              name="agree"
              className="mr-2"
              onChange={handleChange}
              required
            />
            <label htmlFor="agree" className="text-lg text-white">
              You agree to our{" "}
              <a
                href="https://blog.abroadium.com/terms-conditions/"
                className="underline text-green-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms & Conditions
              </a>
            </label>
          </div>

          <Button
            variant="success"
            size="md"
            className="w-full"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </div>
    </div>
  );
}
