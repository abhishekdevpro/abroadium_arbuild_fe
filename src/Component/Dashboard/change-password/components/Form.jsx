import { useState } from "react";
import axios from "axios";
import "../../Home.css";

const Form = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setMessage("New password and confirm password do not match.");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "https://api.abroadium.com/api/jobseeker/change-password",
        {
          old_password: oldPassword,
          new_password: newPassword,
          confirm_password: confirmPassword,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      if (response.status === 200) {
        setMessage("Password changed successfully.");
      }
    } catch (error) {
      setMessage("Error changing password. Please try again.");
    }
  };

  return (
    <form
      className=" p-6 rounded-lg shadow-md max-w-md mx-auto"
      onSubmit={handleSubmit}
    >
      {/* <h2 className="text-2xl font-bold mb-4 text-center text-white">Change Password</h2> */}

      <div className="mb-4">
        <label className="block text-white font-medium mb-2">
          Old Password
        </label>
        <div className="relative">
          <input
            type={showOldPassword ? "text" : "password"}
            name="oldPassword"
            required
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            className="absolute inset-y-0 right-3 flex items-center text-gray-600"
            onClick={() => setShowOldPassword((prev) => !prev)}
          >
            <i
              className={`fas ${showOldPassword ? "fa-eye-slash" : "fa-eye"}`}
            ></i>
          </button>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-white font-medium mb-2">
          New Password
        </label>
        <div className="relative">
          <input
            type={showNewPassword ? "text" : "password"}
            name="newPassword"
            required
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            className="absolute inset-y-0 right-3 flex items-center text-gray-600"
            onClick={() => setShowNewPassword((prev) => !prev)}
          >
            <i
              className={`fas ${showNewPassword ? "fa-eye-slash" : "fa-eye"}`}
            ></i>
          </button>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-white font-medium mb-2">
          Confirm Password
        </label>
        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            className="absolute inset-y-0 right-3 flex items-center text-gray-600"
            onClick={() => setShowConfirmPassword((prev) => !prev)}
          >
            <i
              className={`fas ${
                showConfirmPassword ? "fa-eye-slash" : "fa-eye"
              }`}
            ></i>
          </button>
        </div>
      </div>

      {message && (
        <p className="text-center text-red-600 font-medium mb-4">{message}</p>
      )}

      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-blue-600 transition duration-200"
      >
        Update
      </button>
    </form>
  );
};

export default Form;
