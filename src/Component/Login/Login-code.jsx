// import { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import logo from "../../assets/logo.png";
// import { toast } from "react-toastify";
// import Button from "../../UI/Button";

// const LoginCode = () => {
//   const navigate = useNavigate();
//   const [otp, setOtp] = useState("");
//   const [email, setEmail] = useState("");
//   const [loading, setLoading] = useState(false);
//   const BASE_URL = "https://api.abroadium.com";

//   const handleOtpChange = (e) => {
//     setOtp(e.target.value);
//   };

//   useEffect(() => {
//     const storedEmail = localStorage.getItem("userEmail");
//     if (storedEmail) {
//       setEmail(storedEmail);
//     }
//   }, []);

//   const handleSignIn = async () => {
//     if (otp.length !== 6) {
//       toast.error("Please enter a valid 6-digit OTP.");
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await axios.post(
//         `${BASE_URL}/api/jobseeker/auth/login-verify-otp`,
//         {
//           email,
//           otp,
//         }
//       );

//       const token = response.data?.data?.token;
//       localStorage.setItem("token", token);

//       window.open(`https://builder.abroadium.com/?${response.data.data.token}`);
//     } catch (error) {
//       console.error(
//         error.response?.data?.message || "Invalid OTP. Please try again."
//       );
//       navigate("/login");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//         <Link
//           to="/login"
//           className="text-blue-600 flex items-center mb-6 hover:text-blue-700"
//         >
//           <span className="mr-2">←</span> Back
//         </Link>

//         <div className="flex justify-center mb-6">
//           <img src={logo} className="h-12 md:w-64 md:h-16" alt="Logo" />
//         </div>

//         <h2 className="text-3xl font-semibold text-center mb-2">
//           Sign in with login code
//         </h2>
//         <p className="text-gray-600 text-center   mb-6   text-wrap-balanced mx-auto md:mx-0 text-[20px]">
//           We have sent your one-time passcode to <br />
//           <strong className="text-blue-700">{email}</strong>. This passcode will
//           expire after 5 minutes.
//         </p>

//         <div className="mb-6">
//           <label className="block font-medium mb-2">
//             Enter 6-digit code <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="text"
//             value={otp}
//             onChange={handleOtpChange}
//             maxLength={6}
//             className="w-full text-center text-xl py-2 px-4 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
//             placeholder="______"
//           />
//         </div>

//         <Button onClick={handleSignIn} variant="primary" className="w-full">
//           {loading ? "Loading..." : "Sign In"}
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default LoginCode;
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../../assets/logo.png";

import Button from "../../UI/Button";
import toast from "react-hot-toast";

const LoginCode = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(0); // Timer for resend button
  const BASE_URL = "https://api.abroadium.com";

  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  useEffect(() => {
    let interval;
    if (resendTimer > 0) {
      interval = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [resendTimer]);

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSignIn = async () => {
    if (otp.length !== 6) {
      toast.error("Please enter a valid 6-digit OTP.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        `${BASE_URL}/api/jobseeker/auth/login-verify-otp`,
        { email, otp }
      );

      const token = response.data?.data?.token;
      localStorage.setItem("token", token);

      // window.open(`https://builder.abroadium.com/?${token}`);
      window.location.href = `https://builder.abroadium.com/?${token}`;
      if (response.data?.success === "success" || response.data?.code === 200) {
        const token = response.data?.data?.token;
        toast.success(response.data?.message || "Login successful!");
        localStorage.setItem("jobSeekerLoginToken", token);
        localStorage.removeItem("employeeLoginToken");
        // dispatch(setJobProfileValues(response.data.data))
        console.log(response.data.data, "from logincode");
        if (
          !response.data.data.first_name ||
          !response.data.data.last_name ||
          !response.data.data.phone ||
          !response.data.data.email ||
          !response.data.data.job_title
        ) {
          navigate(`/user-profile`);
        } else window.location.href = `https://builder.abroadium.com/?${token}`;
      } else {
        navigate("/login");
        toast.error(response.data?.message || "Invalid OTP!");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Invalid OTP. Please try again."
      );
      console.error(
        error.response?.data?.message || "Invalid OTP. Please try again."
      );

      navigate("/login"); // Redirect to the login page on error
    } finally {
      setLoading(false); // Stop the loader
    }
  };

  const handleResendCode = async () => {
    try {
      const response = await axios.post(
        `${BASE_URL}/api/jobseeker/auth/login-otp`,
        { email }
      );

      if (response.data.code == 200) {
        toast.success(response.data.message || "Otp sent to your email.");
        setResendTimer(60); // Cooldown timer
      } else {
        toast.error("Unable to resend OTP. Please try again.");
      }
    } catch (err) {
      toast.error("Error resending code. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <Link
          to="/login"
          className="text-blue-600 flex items-center mb-6 hover:text-blue-700"
        >
          <span className="mr-2">←</span> Back
        </Link>

        <div className="flex justify-center mb-6">
          <img src={logo} className="h-12 md:w-64 md:h-16" alt="Logo" />
        </div>

        <h2 className="text-3xl font-semibold text-center mb-2">
          Sign in with login code
        </h2>
        <p className="text-gray-600 text-center mb-4 text-[20px]">
          We have sent your one-time passcode to <br />
          <strong className="text-blue-700">{email}</strong>. This passcode will
          expire after 5 minutes.
        </p>

        <div className="mb-6">
          <label className="block font-medium mb-2">
            Enter 6-digit code <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={otp}
            onChange={handleOtpChange}
            maxLength={6}
            className="w-full text-center text-xl py-2 px-4 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            placeholder="______"
          />
        </div>

        <Button
          onClick={handleSignIn}
          variant="primary"
          className="w-full mb-3"
        >
          {loading ? "Loading..." : "Sign In"}
        </Button>

        <div className="text-center">
          <button
            onClick={handleResendCode}
            disabled={resendTimer > 0}
            className={`text-blue-600 font-medium ${
              resendTimer > 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:underline"
            }`}
          >
            {resendTimer > 0 ? `Resend Code in ${resendTimer}s` : "Resend Code"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginCode;
