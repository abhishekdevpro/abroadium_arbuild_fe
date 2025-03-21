import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./Logo1.png";
import axios from "axios";
import { toast } from "react-toastify";

function ForgotPassword() {
  const [formData, setFormData] = useState({
    email: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    if (!formData.email) {
      toast.error("Email is required");
      return;
    }

    // Create FormData object and append email
    const formDataToSend = new FormData();
    formDataToSend.append("email", formData.email);

    try {
      const response = await axios.post(
        "https://api.abroadium.com/api/jobseeker/forgot-password",
        formDataToSend,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        toast.success("Password reset link sent to your email");
        navigate("/login"); // Use navigate instead of Router.push
      } else {
        toast.error("Failed to send email");
      }
    } catch (error) {
      console.error(
        error.response?.data || error.message || "An error occurred"
      );
      toast.error(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="p-8 rounded-xl shadow-lg shadow-slate-700 w-full max-w-lg bg-white">
        <div className="flex justify-center mb-6">
          <img src={logo} className="w-20 h-10" alt="Logo" />
        </div>
        <div className="text-2xl text-black text-center font-bold mb-4">
          Forgot Password
        </div>
        <p className="text-black text-base text-center mb-6">
          People across the globe are joining us to upgrade their career with
          our Robust AI.
        </p>
        <form onSubmit={handleForgotPassword}>
          <div className="m-4">
            <label className="block text-black mb-2">Email ID</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter your email ID"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors duration-300"
          >
            Send Email
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
