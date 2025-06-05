import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc"; // Importing Google icon
import "./Login.css";
import logo from "./Logo1.png";
import Modal from "./Modal";
import Signup from "./Signup";
import toast from "react-hot-toast";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";

function Login() {
  const [isThirdstepOpen, setThirdstepOpen] = useState(false);
  // const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const togglePasswordVisibility = () => {
  //   setShowPassword(!showPassword);
  // };

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   const url = "https://api.abroadium.com/api/jobseeker/auth/login";

  //   if (!formData.email || !formData.password) {
  //     toast.error("Email and Password are required");
  //   } else {
  //     try {
  //       const response = await axios.post(url, formData, {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       });

  //       if (response.status === 200) {
  //         toast.success("Logged-in successfully!");
  //         localStorage.setItem("token", response.data.data.token);
  //         console.log("token: ", response.data.data.token);
  //         //  window.open(`http://localhost:3000/?${response.data.data.token}`)
  // window.open(
  //   `https://builder.abroadium.com/?${response.data.data.token}`
  // );
  //       } else {
  //         toast.error("Failed to log in.");
  //       }
  //     } catch (err) {
  //       console.log(err);
  //       toast.error(`${err.response?.data?.message || "Login failed"}`);
  //     }
  //   }
  // };
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!formData.email) {
      toast.error("Email is required");
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post(
        `https://api.abroadium.com/api/jobseeker/auth/login-otp`,

        formData
      );

      if (response.data.code == 200) {
        console.log(response);
        toast.success(response.data.message || "Otp sent to your email.");
        localStorage.setItem("userEmail", formData.email);
        // router.push("/login/login-code");
      } else {
        toast.error("Failed to sent otp");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };
  const handleGoogleSignin = async () => {
    const url = "https://api.abroadium.com/api/jobseeker/auth/google";

    try {
      const response = await axios.get(
        url,
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        console.log("Google sign-in token: ", response.data.data);
        window.open(response.data.data);
      } else {
        toast.error("Google sign-in failed.");
      }
    } catch (err) {
      console.log(err);
      toast.error(`${err.response?.data?.message || "Google sign-in failed"}`);
    }
  };

  return (
    <>
      <div className="p-8 rounded-xl shadow-lg shadow-slate-700 w-full max-w-lg mx-auto">
        <div className="flex justify-center items-center">
          <img src={logo} className="w-20 h-10" alt="Logo" />
        </div>
        <div className="text-2xl text-black text-center font-bold align-middle">
          Welcome Back
        </div>
        <p className="text-black text-base mb-6 text-center">
          People across the globe are joining us to upgrade their career with
          our Robust AI.
        </p>
        <div className="flex flex-col gap-6">
          <button
            onClick={handleGoogleSignin}
            type="button"
            className="w-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md mt-4 shadow-sm hover:bg-gray-100 focus:outline-none"
          >
            <FcGoogle className="h-6 w-6 mr-2" />
            Continue with Google
          </button>

          <div className="flex items-center justify-center space-x-6">
            <div className="h-px bg-gray-300 w-24"></div>
            <span className="text-gray-500 font-medium">OR</span>
            <div className="h-px bg-gray-300 w-24"></div>
          </div>
        </div>
        <form onSubmit={handleLogin}>
          <div className="mb-4 mt-4">
            <label className="block text-black">Email ID</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter your email ID"
            />
          </div>
          {/* <div className="mb-4">
            <label className="block text-black">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md pr-10 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div> */}
          {/* <button
            type="button"
            className="text-blue-500 hover:text-yellow-500 text-center py-2 block mb-4"
            onClick={() => setThirdstepOpen(true)}
          >
            New User? Create Account
          </button> */}
          {/* <div className="text-center py-2">
            <Link to="/forgotpassword">
              <label className="text-black cursor-pointer hover:underline">
                Forgot Password?
              </label>
            </Link>
          </div> */}
          <div className="mb-4 flex items-center space-x-2">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              required
              // checked={isChecked} // Controlled checkbox
              // onChange={handleCheckboxChange} // Handle checkbox state change
              className="w-4 h-4 text-yellow-500 border-gray-300 rounded focus:ring-yellow-500"
            />
            <label htmlFor="terms" className="text-gray-700 text-sm">
              I agree to the{" "}
              <Link
                href="/terms&conditions"
                className="text-blue-500 underline"
              >
                Terms & Conditions
              </Link>
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-600 focus:outline-none"
          >
            {isLoading ? "Loading..." : "Send OTP"}
          </button>
        </form>
      </div>
      <Modal isOpen={isThirdstepOpen} onClose={() => setThirdstepOpen(false)}>
        <Signup />
      </Modal>
    </>
  );
}

export default Login;
