import "./Home.css";

import axios from "axios";
import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ProfileEditPage = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    job_title: "",
    languages: "",

    current_salary: "",
    expected_salary: "",
    description: "",

    photo: "",
    uploadPhoto: null,
    phone: "",
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");

        // Fetch user profile
        const userProfileResponse = await axios.get(
          `https://api.abroadium.com/api/jobseeker/user-profile`,
          {
            headers: {
              Authorization: token,
            },
          }
        );

        if (userProfileResponse.data.status === "success") {
          const userData = userProfileResponse.data.data?.personal_details;
          setFormData((prevData) => ({
            ...prevData,
            first_name: userData.first_name || "",
            last_name: userData.last_name || "",
            job_title: userData.job_title || "",
            languages: userData.languages || "",

            current_salary: userData.current_salary || "",
            expected_salary: userData.expected_salary || "",
            phone: userData.phone || "",
            email: userData.email || "",
            description: userData.description || "",

            photo: userData.photo || "",
          }));
        }
      } catch (error) {
        console.error("An error occurred while fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData((prevData) => ({
        ...prevData,
        uploadPhoto: file,
        photo: imageUrl, // Show preview before submission
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("token is missing");
      return;
    }

    // Field validations
    if (
      !formData.first_name ||
      !formData.last_name ||
      !formData.job_title ||
      // !formData.languages ||
      // !formData.current_salary ||
      // !formData.expected_salary ||
      // !formData.description ||
      !formData.phone
    ) {
      toast.error("All fields are required");
      return;
    }

    // if (!/^\d+$/.test(formData.current_salary) || formData.current_salary < 0) {
    //   toast.error("Current salary must be a positive number");
    //   return;
    // }
    // if (
    //   !/^\d+$/.test(formData.expected_salary) ||
    //   formData.expected_salary < 0
    // ) {
    //   toast.error("Expected salary must be a positive number");
    //   return;
    // }

    // Phone number validation (8 to 15 digits)
    const phoneRegex = /^[0-9]{8,15}$/;
    if (!phoneRegex.test(formData.phone)) {
      toast.error("Phone number must be 8-15 digits");
      return;
    }

    // File validation (Only images allowed)
    if (formData.uploadPhoto) {
      const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
      if (!allowedTypes.includes(formData.uploadPhoto.type)) {
        toast.error("Only JPEG, JPG, and PNG images are allowed");
        return;
      }
    }

    const formDataToSend = new FormData();
    formDataToSend.append("first_name", formData.first_name);
    formDataToSend.append("last_name", formData.last_name);
    formDataToSend.append("job_title", formData.job_title);
    formDataToSend.append("languages", formData.languages);

    formDataToSend.append("current_salary", formData.current_salary);
    formDataToSend.append("expected_salary", formData.expected_salary);
    formDataToSend.append("description", formData.description);

    formDataToSend.append("phone", formData.phone);

    if (formData.uploadPhoto) {
      formDataToSend.append("upload_photo", formData.uploadPhoto);
    }

    try {
      const response = await axios.put(
        `https://api.abroadium.com/api/jobseeker/user-profile`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: token,
          },
        }
      );

      console.log(response.status, ">>>>response");
      if (response.status === 200) {
        toast.success("Profile updated successfully");
      } else {
        toast.error("Failed to update profile", response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(
        error.response?.data?.message ||
          "An error occurred while updating the profile"
      );
    }
  };

  if (isLoading) {
    return (
      <div className="p-2 md:p-6">
        <div className="text-center text-lg">Loading...</div>
      </div>
    );
  }
  const handleRemovePhoto = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `https://api.abroadium.com/api/jobseeker/remove-profile-photo`,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      if (response.data.status === "success") {
        toast.success("Profile photo removed successfully");
        setFormData((prev) => ({
          ...prev,
          photo: "", // Remove image preview
          uploadPhoto: null, // Reset selected file
        }));
      } else {
        toast.error("Failed to remove profile photo");
      }
    } catch (error) {
      console.error("Error removing profile photo:", error);
      toast.error("An error occurred while removing the profile photo");
    }
  };

  return (
    <>
      <div className=" min-h-screen w-screen md:w-11/12 bg-primary/10  py-12 text-black">
        <main className=" p-4 md:px-10">
          <section>
            <div className="p-2 md:p-6">
              <div className="w-full mx-auto rounded-lg shadow-lg px-4 py-2 md:p-6">
                <h1 className="text-2xl font-bold mb-6 text-center md:text-left">
                  BASIC INFORMATION
                </h1>

                <form onSubmit={handleSubmit}>
                  {/* <div className="flex flex-col md:flex-row items-start md:items-center gap-4 relative">
                    {formData.photo && (
                      <div className="relative">
                        <img
                          src={
                            formData.uploadPhoto
                              ? URL.createObjectURL(formData.uploadPhoto)
                              : `https://airesume.abroadium.com${formData.photo}`
                          }
                          alt="Profile"
                          className="w-20 h-20 rounded-full border object-cover"
                        />
                        <button
                          type="button"
                          onClick={handleRemovePhoto}
                          className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    )}

                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                        id="fileInput"
                      />
                      <label
                        htmlFor="fileInput"
                        className="border p-2 cursor-pointer bg-gray-100 rounded-md text-center"
                      >
                        Choose File
                      </label>
                      <span className="text-gray-700 text-sm sm:ml-2 break-all">
                        {formData.uploadPhoto
                          ? formData.uploadPhoto.name
                          : formData.photo
                          ? "Image uploaded"
                          : "No file chosen"}
                      </span>
                    </div>
                  </div> */}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block mb-2">First Name*</label>
                      <input
                        type="text"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleChange}
                        className="w-full border p-2"
                        maxLength={20}
                      />
                    </div>
                    <div>
                      <label className="block mb-2">Last Name*</label>
                      <input
                        type="text"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleChange}
                        className="w-full border p-2"
                        maxLength={20}
                      />
                    </div>

                    {/* <div>
                      <label className="block mb-2">Languages*</label>
                      <input
                        type="text"
                        name="languages"
                        value={formData.languages}
                        onChange={handleChange}
                        className="w-full border p-2"
                        maxLength={50}
                      />
                    </div> */}

                    {/* <div>
                      <label className="block mb-2">Current Salary:</label>
                      <input
                        type="number"
                        name="current_salary"
                        value={formData.current_salary}
                        onChange={handleChange}
                        className="w-full border p-2"
                        min="0"
                        maxLength={20}
                      />
                    </div> */}
                    {/* <div>
                      <label className="block mb-2">Expected Salary:</label>
                      <input
                        type="number"
                        name="expected_salary"
                        value={formData.expected_salary}
                        onChange={handleChange}
                        className="w-full border p-2"
                        min="0"
                        maxLength={20}
                      />
                    </div> */}
                    {/* <div className="md:col-span-2">
                      <label className="block mb-2">Description</label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full border p-2"
                        rows="4"
                        maxLength={1000}
                      />
                    </div> */}

                    <div>
                      <label className="block mb-2">Phone Number</label>
                      <input
                        type="number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border p-2"
                        maxLength={20}
                      />
                    </div>
                    <div>
                      <label className="block mb-2">Email</label>
                      <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border p-2"
                        readOnly
                        maxLength={30}
                      />
                    </div>
                    <div>
                      <label className="block mb-2">Job Title*</label>
                      <input
                        type="text"
                        name="job_title"
                        value={formData.job_title}
                        onChange={handleChange}
                        className="w-full border p-2"
                        maxLength={100}
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-white p-2 rounded"
                  >
                    Update Profile
                  </button>
                </form>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default ProfileEditPage;
