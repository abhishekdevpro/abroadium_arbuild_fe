
// import { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// import "./Login.css";
// import logo from './Logo1.png';
// import Modal from "./Modal";
// import Signup from "./Signup";
// import toast from 'react-hot-toast';
// import axios from "axios";
// import { Eye, EyeOff } from "lucide-react";
// import { Link } from 'react-router-dom';
// function Login() {
//   const [isThirdstepOpen, setThirdstepOpen] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     email: "",
//     password: ""
//   });
//   // const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     const url = 'https://api.sentryspot.co.uk/api/jobseeker/auth/login';

//     if (!formData.email || !formData.password) {
//       toast.error("Email and Password are required");
//     } else {
//       try {
//         const response = await axios.post(url, formData, {
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         });

//         if (response.status === 200) {
//           toast.success("Logged-in successfully!");
//           localStorage.setItem("token", response.data.data.token);
//           console.log("token: ", response.data.data.token);
//           // navigate('/dashboard');
        
//           window.open(`https://abroadium-arbuild-dev-fe.vercel.app/?${response.data.data.token}`)
//         } else {
//           toast.error("Failed to log in.");
//         }

//         console.log("login Response", response);
//       } catch (err) {
//         console.log(err);
//         toast.error(`${err.response.data.message}`);
//       }
//     }
//   };

//   return (
//     <>
//       <div className="p-8 rounded-xl shadow-lg shadow-slate-700 w-full max-w-lg">
//         <div className="flex justify-center items-center">
//           <img src={logo} className="w-20 h-10" alt="Logo" />
//         </div>
//         <div className="text-2xl text-black text-center font-bold align-middle">Welcome Back</div>
//         <p className="text-black text-base mb-6">
//           People across the globe are joining us to upgrade their career with our Robust AI.
//         </p>
//         <form onSubmit={handleLogin}>
//           <div className="mb-4">
//             <label className="block text-black">Email ID</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               className="w-full px-3 py-2 border rounded-md"
//               placeholder="Enter your email ID"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-black">Password</label>
//             <div className="relative">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 value={formData.password}
//                 onChange={handleInputChange}
//                 className="w-full px-3 py-2 border rounded-md pr-10"
//                 placeholder="Enter your password"
//               />
//               <button
//                 type="button"
//                 onClick={togglePasswordVisibility}
//                 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
//               >
//                 {showPassword ? (
//                   <EyeOff className="h-5 w-5" />
//                 ) : (
//                   <Eye className="h-5 w-5" />
//                 )}
//               </button>
//             </div>
//           </div>
//           <button
//             type="button"
//             className="text-blue-300 hover:text-yellow-300 text-center py-2"
//             onClick={() => setThirdstepOpen(true)}
//           >
//             New User? Create Account
//           </button>
//           <div className="text-center py-2">
//           <Link to="/forgotpassword">
//             <label className="text-black cursor-pointer">Forgot Password?</label>
//             </Link>
//           </div>
//           <button type="submit" className="w-full bg-yellow-500 text-black px-4 py-2 rounded-md">
//             Login
//           </button>
//           <button
//            onClick={handleGoogleSignin}
//            type="submit" className="w-full bg-yellow-500 text-black px-4 py-2 rounded-md">
//             sign in with the Google
//           </button>
//         </form>
//       </div>
//       <Modal isOpen={isThirdstepOpen} onClose={() => setThirdstepOpen(false)}>
//         <Signup />
//       </Modal>
      
//     </>
//   );
// }

// export default Login;

// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./Login.css";
// import logo from './Logo1.png';
// import Modal from "./Modal";
// import Signup from "./Signup";
// import toast from 'react-hot-toast';
// import axios from "axios";
// import { Eye, EyeOff } from "lucide-react";

// function Login() {
//   const [isThirdstepOpen, setThirdstepOpen] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     email: "",
//     password: ""
//   });
//   const navigate = useNavigate()
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     const url = 'https://api.sentryspot.co.uk/api/jobseeker/auth/login';

//     if (!formData.email || !formData.password) {
//       toast.error("Email and Password are required");
//     } else {
//       try {
//         const response = await axios.post(url, formData, {
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         });

//         if (response.status === 200) {
//           toast.success("Logged-in successfully!");
//           localStorage.setItem("token", response.data.data.token);
//           console.log("token: ", response.data.data.token);

//           window.open(`https://abroadium-arbuild-dev-fe.vercel.app/?${response.data.data.token}`);
//         } else {
//           toast.error("Failed to log in.");
//         }
//       } catch (err) {
//         console.log(err);
//         toast.error(`${err.response?.data?.message || "Login failed"}`);
//       }
//     }
//   };

//   const handleGoogleSignin = async () => {
//     const url = 'https://api.sentryspot.co.uk/api/jobseeker/auth/google';

//     try {
//       const response = await axios.get(url, {}, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       if (response.status === 200) {
//         // toast.success("Signed in with Google successfully!");
//         // localStorage.setItem("token", response.data.data.token);
//         console.log("Google sign-in token: ", response.data.data);
//          window.open(response.data.data)
//         // window.open(`https://abroadium-arbuild-dev-fe.vercel.app/?${response.data.data.token}`);
//       } else {
//         toast.error("Google sign-in failed.");
//       }
//     } catch (err) {
//       console.log(err);
//       toast.error(`${err.response?.data?.message || "Google sign-in failed"}`);
//     }
//   };
// //  const handleGoogleSignin = () => {
// //     const googleAuthUrl = 'https://api.sentryspot.co.uk/api/jobseeker/auth/google';
// //     window.location.href = googleAuthUrl;
// //   };
//   return (
//     <>
//       <div className="p-8 rounded-xl shadow-lg shadow-slate-700 w-full max-w-lg">
//         <div className="flex justify-center items-center">
//           <img src={logo} className="w-20 h-10" alt="Logo" />
//         </div>
//         <div className="text-2xl text-black text-center font-bold align-middle">Welcome Back</div>
//         <p className="text-black text-base mb-6">
//           People across the globe are joining us to upgrade their career with our Robust AI.
//         </p>
//         <form onSubmit={handleLogin}>
//           <div className="mb-4">
//             <label className="block text-black">Email ID</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               className="w-full px-3 py-2 border rounded-md"
//               placeholder="Enter your email ID"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-black">Password</label>
//             <div className="relative">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 value={formData.password}
//                 onChange={handleInputChange}
//                 className="w-full px-3 py-2 border rounded-md pr-10"
//                 placeholder="Enter your password"
//               />
//               <button
//                 type="button"
//                 onClick={togglePasswordVisibility}
//                 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
//               >
//                 {showPassword ? (
//                   <EyeOff className="h-5 w-5" />
//                 ) : (
//                   <Eye className="h-5 w-5" />
//                 )}
//               </button>
//             </div>
//           </div>
//           <button
//             type="button"
//             className="text-blue-300 hover:text-yellow-300 text-center py-2"
//             onClick={() => setThirdstepOpen(true)}
//           >
//             New User? Create Account
//           </button>
//           <div className="text-center py-2">
//             <Link to="/forgotpassword">
//               <label className="text-black cursor-pointer">Forgot Password?</label>
//             </Link>
//           </div>
//           <button type="submit" className="w-full bg-yellow-500 text-black px-4 py-2 rounded-md">
//             Login
//           </button>
//           <button
//             onClick={handleGoogleSignin}
//             type="button"
//             className="w-full bg-white text-black px-4 py-2 rounded-md mt-4"
//           >
//             Continue with Google
//           </button>
//         </form>
//       </div>
//       <Modal isOpen={isThirdstepOpen} onClose={() => setThirdstepOpen(false)}>
//         <Signup />
//       </Modal>
//     </>
//   );
// }

// export default Login;
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc"; // Importing Google icon
import "./Login.css";
import logo from './Logo1.png';
import Modal from "./Modal";
import Signup from "./Signup";
import toast from 'react-hot-toast';
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";

function Login() {
  const [isThirdstepOpen, setThirdstepOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();

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

          window.open(`https://abroadium-arbuild-dev-fe.vercel.app/?${response.data.data.token}`);
        } else {
          toast.error("Failed to log in.");
        }
      } catch (err) {
        console.log(err);
        toast.error(`${err.response?.data?.message || "Login failed"}`);
      }
    }
  };

  const handleGoogleSignin = async () => {
    const url = 'https://api.sentryspot.co.uk/api/jobseeker/auth/google';

    try {
      const response = await axios.get(url, {}, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

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
        <div className="text-2xl text-black text-center font-bold align-middle">Welcome Back</div>
        <p className="text-black text-base mb-6 text-center">
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
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
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
          </div>
          <button
            type="button"
            className="text-blue-500 hover:text-yellow-500 text-center py-2 block mb-4"
            onClick={() => setThirdstepOpen(true)}
          >
            New User? Create Account
          </button>
          <div className="text-center py-2">
            <Link to="/forgotpassword">
              <label className="text-black cursor-pointer hover:underline">Forgot Password?</label>
            </Link>
          </div>
          <button type="submit" className="w-full bg-yellow-500 text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-600 focus:outline-none">
            Login
          </button>
          <button
            onClick={handleGoogleSignin}
            type="button"
            className="w-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md mt-4 shadow-sm hover:bg-gray-100 focus:outline-none"
          >
            <FcGoogle className="h-6 w-6 mr-2" />
            Continue with Google
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
