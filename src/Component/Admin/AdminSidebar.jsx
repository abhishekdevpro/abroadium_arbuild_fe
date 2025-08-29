import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const AdminSidebar = ({
  activeTab,
  setActiveTab,
  onLogout,
  onAdminDataChange,
}) => {
  const [adminData, setAdminData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const fetchAdminProfile = async () => {
    try {
      let token = localStorage.getItem("adminToken");
      if (!token) {
        console.log("No admin token found");
        setLoading(false);
        return;
      }

      // Clean the token
      token = token.trim();
      if (token.startsWith("Bearer ")) {
        token = token.substring(7); // Remove "Bearer " prefix
      }

      console.log("Cleaned token:", token.substring(0, 20) + "...");
      console.log("Token found:", token.substring(0, 20) + "...");
      console.log("Token length:", token.length);
      console.log("Full token:", token);
      console.log("Token type:", typeof token);
      console.log("Token includes 'Bearer':", token.includes("Bearer"));

      // Try to decode JWT token to check if it's valid
      try {
        const tokenParts = token.split(".");
        if (tokenParts.length === 3) {
          const payload = JSON.parse(atob(tokenParts[1]));
          console.log("Token payload:", payload);
          console.log("Token expiration:", new Date(payload.exp * 1000));
          console.log("Current time:", new Date());
          console.log("Token expired:", payload.exp * 1000 < Date.now());

          // Check if this is an admin token
          console.log("User type ID:", payload.user_type_id);
          console.log("Is admin token:", payload.user_type_id === 2);
          console.log(
            "Token signature:",
            tokenParts[2].substring(0, 10) + "..."
          );
        }
      } catch (e) {
        console.log("Could not decode token:", e);
      }

      // Try to get admin data from localStorage first
      const storedAdminData = localStorage.getItem("adminData");
      if (storedAdminData) {
        try {
          const parsedData = JSON.parse(storedAdminData);
          console.log("Using stored admin data:", parsedData);
          setAdminData(parsedData);
          if (onAdminDataChange) {
            onAdminDataChange(parsedData);
          }
          setLoading(false); // Set loading to false since we have data
          return; // Don't make API call if we have stored data
        } catch (e) {
          console.log("Failed to parse stored admin data");
        }
      }

      // Only make API call if we don't have stored data
      console.log(
        "Making profile API call with token:",
        token.substring(0, 20) + "..."
      );
      const response = await axios.get(
        "https://api.abroadium.com/api/admin/profile",
        {
          headers: {
            Authorization: token, // Changed from `Bearer ${token}`
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Profile API response:", response.data);
      const data = response.data.data || response.data;
      setAdminData(data);
      if (onAdminDataChange) {
        onAdminDataChange(data);
      }

      // Check if a new token was returned in the response
      if (response.data.token) {
        console.log(
          "New token received from profile API:",
          response.data.token
        );
        localStorage.setItem("adminToken", response.data.token);
      }

      setLoading(false);
    } catch (error) {
      console.error("Error fetching admin profile:", error);
      console.log("Error response:", error.response);
      console.log("Error status:", error.response?.status);
      console.log("Error data:", error.response?.data);

      // Don't call onLogout on 401 errors to prevent token removal
      if (error.response?.status === 401) {
        console.log("401 error - token might be invalid");
        // Try to use stored admin data as fallback
        const storedAdminData = localStorage.getItem("adminData");
        if (storedAdminData) {
          try {
            const parsedData = JSON.parse(storedAdminData);
            console.log("Using stored admin data as fallback:", parsedData);
            setAdminData(parsedData);
            if (onAdminDataChange) {
              onAdminDataChange(parsedData);
            }
          } catch (e) {
            console.log("Failed to parse stored admin data as fallback");
          }
        }
      }

      setLoading(false);
    }
  };

  useEffect(() => {
    // Add a small delay to ensure token is stored
    const timer = setTimeout(() => {
      fetchAdminProfile();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const navigationItems = [
    {
      name: "Dashboard",
      icon: "📊",
      tab: "dashboard",
    },
    {
      name: "Community",
      icon: "👥",
      tab: "community",
    },
    {
      name: "Users",
      icon: "👤",
      tab: "users",
    },
    {
      name: "Reports",
      icon: "📈",
      tab: "reports",
    },
    {
      name: "Settings",
      icon: "⚙️",
      tab: "settings",
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminData");
    onLogout();
    navigate("/admin/login");
  };

  if (loading) {
    return (
      <div className="w-64 bg-gray-900 min-h-screen p-4">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-700 rounded mb-6"></div>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-10 bg-gray-700 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-64 bg-gray-900 min-h-screen p-4">
      {/* Logo */}
      <div className="flex items-center mb-8">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
          <span className="text-white font-bold text-sm">A</span>
        </div>
        <h1 className="text-white font-bold text-xl">Admin Panel</h1>
      </div>

      {/* Admin Profile */}
      <div className="bg-gray-800 rounded-lg p-4 mb-6">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">
              {adminData?.first_name?.charAt(0) || "A"}
            </span>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-white">
              {adminData?.name || "User Name"}
            </p>
            <p className="text-xs text-gray-100">
              {adminData?.email || "xyz@email.com"}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        {navigationItems.map((item) => (
          <button
            key={item.tab}
            onClick={() => setActiveTab(item.tab)}
            className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
              activeTab === item.tab
                ? "bg-blue-600 text-white"
                : "text-gray-300 hover:bg-gray-700 hover:text-white"
            }`}
          >
            <span className="mr-3">{item.icon}</span>
            {item.name}
          </button>
        ))}
      </nav>

      {/* Logout Button */}
      <div className="mt-auto pt-6">
        <button
          onClick={handleLogout}
          className="w-full flex items-center px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white rounded-md transition-colors"
        >
          <span className="mr-3">🚪</span>
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;
