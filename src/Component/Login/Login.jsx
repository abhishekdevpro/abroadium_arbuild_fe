
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "./Login.css";
import logo from './Logo1.png';
import Modal from "./Modal";
import Signup from "./Signup";
import toast from 'react-hot-toast';
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";
import { Link } from 'react-router-dom';
function Login() {
  const [isThirdstepOpen, setThirdstepOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  // const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const url = 'https://api.sentryspot.co.uk/api/jobseeker/auth/login';

    if (!formData.email || !formData.password) {
      toast.error("Email and Password are required");
    } else {
      try {
        const response = await axios.post(url, formData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.status === 200) {
          toast.success("Logged-in successfully!");
          localStorage.setItem("token", response.data.data.token);
          console.log("token: ", response.data.data.token);
          // navigate('/dashboard');
        
          window.open(`https://abroadium-arbuild-dev-fe.vercel.app/?${response.data.data.token}`)
        } else {
          toast.error("Failed to log in.");
        }

        console.log("login Response", response);
      } catch (err) {
        console.log(err);
        toast.error(`${err.response.data.message}`);
      }
    }
  };

  return (
    <>
      <div className="p-8 rounded-xl shadow-lg shadow-slate-700 w-full max-w-lg">
        <div className="flex justify-center items-center">
          <img src={logo} className="w-20 h-10" alt="Logo" />
        </div>
        <div className="text-2xl text-black text-center font-bold align-middle">Welcome Back</div>
        <p className="text-black text-base mb-6">
          People across the globe are joining us to upgrade their career with our Robust AI.
        </p>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-black">Email ID</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter your email ID"
            />
          </div>
          <div className="mb-4">
            <label className="block text-black">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md pr-10"
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
          </div>
          <button
            type="button"
            className="text-blue-300 hover:text-yellow-300 text-center py-2"
            onClick={() => setThirdstepOpen(true)}
          >
            New User? Create Account
          </button>
          <div className="text-center py-2">
          <Link to="/forgotpassword">
            <label className="text-black cursor-pointer">Forgot Password?</label>
            </Link>
          </div>
          <button type="submit" className="w-full bg-yellow-500 text-black px-4 py-2 rounded-md">
            Login
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