import axios from "axios";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const googleOneTapLogin = async ({ token }) => {
  const path = `https://api.abroadium.com/api/jobseeker/google-one-tap-login`;
  const res = await axios.post(path, {
    token,
  });
  return res;
};

const GoogleOneTapLogin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("token")) return;
    // will show popup after two secs
    const timeout = setTimeout(() => oneTap(), 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const oneTap = () => {
    const { google } = window;
    if (google) {
      google.accounts.id.initialize({
        client_id:
          "976140565294-ouen8r344q4iaeq0ubrbq1e5tmcpkadb.apps.googleusercontent.com",
        callback: async (response) => {
          // Here we call our Provider with the token provided by google
          call(response.credential);
        },
      });

      google.accounts.id.prompt((notification) => {
        if (notification.isNotDisplayed()) {
          console.log(
            "ABC getNotDisplayedReason ::",
            notification.getNotDisplayedReason()
          );
        } else if (notification.isSkippedMoment()) {
          console.log(
            "ABC getSkippedReason  ::",
            notification.getSkippedReason()
          );
        } else if (notification.isDismissedMoment()) {
          console.log(
            "ABC getDismissedReason ::",
            notification.getDismissedReason()
          );
        }
      });
    }
  };

  const call = async (token) => {
    try {
      const res = await googleOneTapLogin({
        token,
      });
      localStorage.setItem("token", res?.data?.data?.token);
      window.open(`https://builder.abroadium.com/?${res.data.data.token}`);
    } catch (error) {
      navigate("/login");
    }
  };
  return <div />;
};

export default GoogleOneTapLogin;
