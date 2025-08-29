import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function AdminCommunity() {
  const [feeds, setFeeds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingFeed, setEditingFeed] = useState(null);
  const [newComment, setNewComment] = useState({});
  const [announcement, setAnnouncement] = useState({
    title: "",
    body: "",
    image: null, // Add image field
  });

  useEffect(() => {
    fetchFeeds();
  }, []);

  const fetchFeeds = async () => {
    try {
      const token = localStorage.getItem("adminToken");
      console.log("=== FETCHING FEEDS ===");
      console.log("Token:", token ? "Present" : "Missing");
      console.log("Token preview:", token?.substring(0, 20) + "...");

      if (!token) {
        console.log("No token found, using mock data");
        throw new Error("No token available");
      }

      console.log(
        "Making API call to:",
        "https://api.abroadium.com/api/admin/feeds"
      );

      // Test the API endpoint first
      try {
        const testResponse = await axios.get(
          "https://api.abroadium.com/api/admin/feeds",
          {
            headers: {
              Authorization: token,
              "Content-Type": "application/json",
            },
          }
        );
        console.log("Test API call successful:", testResponse.status);
      } catch (testError) {
        console.log(
          "Test API call failed:",
          testError.response?.status,
          testError.response?.data
        );
      }

      const response = await axios.get(
        "https://api.abroadium.com/api/admin/feeds",
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("=== API RESPONSE ===");
      console.log("Status:", response.status);
      console.log("Full response:", response);
      console.log("Response data:", response.data);
      console.log("Response data type:", typeof response.data);
      console.log("Response data.data:", response.data.data);
      console.log("Response data.data type:", typeof response.data.data);
      console.log(
        "Is response.data.data array:",
        Array.isArray(response.data.data)
      );
      console.log("Response data.data length:", response.data.data?.length);

      // Try different possible data structures
      let feedsData = [];
      if (Array.isArray(response.data.data.feed_data)) {
        feedsData = response.data.data.feed_data;
        console.log("Using response.data.data.feed_data (array)");
      } else if (Array.isArray(response.data.data)) {
        feedsData = response.data.data;
        console.log("Using response.data.data (array)");
      } else if (Array.isArray(response.data)) {
        feedsData = response.data;
        console.log("Using response.data (array)");
      } else if (response.data.data && typeof response.data.data === "object") {
        feedsData = Object.values(response.data.data);
        console.log("Using Object.values(response.data.data)");
      } else {
        console.log("No valid data structure found, using empty array");
        feedsData = [];
      }

      console.log("Final feeds data:", feedsData);
      console.log("Final feeds data length:", feedsData.length);

      // Transform the API data to match the expected format
      const transformedFeeds = feedsData.map((feed) => {
        console.log(
          "Processing feed:",
          feed.id,
          "feed_image:",
          feed.feed_image
        );

        return {
          id: feed.id,
          title: feed.title || "No Title",
          content: feed.content || "",
          author:
            feed.user_first_name && feed.user_last_name
              ? `${feed.user_first_name} ${feed.user_last_name}`.trim()
              : feed.user_first_name || feed.user_last_name || "Anonymous",
          authorEmail: "", // API doesn't provide email
          createdAt: feed.created_at,
          status: "active", // API doesn't provide status, default to active
          likes: 0, // API doesn't provide likes count
          comments: feed.feed_comments || [], // API provides feed_comments
          user_id: feed.user_id,
          user_type_id: feed.user_type_id,
          is_edit: feed.is_edit,
          feed_image: feed.feed_image,
          user_photo: feed.user_photo || "", // Add user photo
          updated_at: feed.updated_at,
        };
      });

      console.log("Transformed feeds:", transformedFeeds);
      setFeeds(transformedFeeds);
    } catch (error) {
      console.log("=== ERROR FETCHING FEEDS ===");
      console.error("Error:", error);
      console.log("Error message:", error.message);
      console.log("Error response:", error.response);
      console.log("Error status:", error.response?.status);
      console.log("Error data:", error.response?.data);
      console.log("Error config:", error.config);

      // For demo purposes, using mock data
      setFeeds([
        {
          id: 1,
          title: "Looking for job",
          content: "Hi, I am looking for a frontend role.",
          author: "BK Dadhich",
          authorEmail: "bk@example.com",
          createdAt: "2025-08-15T10:30:00Z",
          status: "active",
          likes: 2,
          comments: [
            {
              id: 1,
              content: "Good luck!",
              author: "User1",
              likes: 1,
            },
            {
              id: 2,
              content: "Please check our job board.",
              author: "Admin",
              likes: 0,
            },
          ],
        },
        {
          id: 2,
          title: "Job Opportunity",
          content: "We are hiring GoLang developers.",
          author: "Recruiter",
          authorEmail: "recruiter@example.com",
          createdAt: "2025-08-20T14:20:00Z",
          status: "flagged",
          likes: 5,
          comments: [
            {
              id: 3,
              content: "Shared with my network.",
              author: "User2",
              likes: 2,
            },
          ],
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateAnnouncement = async (e) => {
    e.preventDefault();
    if (!announcement.title || !announcement.body) {
      toast.error("Title and body are required");
      return;
    }

    try {
      const token = localStorage.getItem("adminToken");

      // Log the data being sent
      console.log("Creating announcement with data:", announcement);
      console.log("Token being used:", token?.substring(0, 20) + "...");

      let response;

      // Check if image is selected
      if (announcement.image) {
        // Use FormData for image upload
        const formData = new FormData();
        formData.append("title", announcement.title);
        formData.append("content", announcement.body);
        formData.append("user_type_id", "2");
        formData.append("user_id", "0");
        formData.append("user_first_name", "Admin");
        formData.append("user_last_name", "");
        formData.append("feed_image", "");
        formData.append("is_edit", "true");
        formData.append("image_upload", announcement.image);

        console.log("Using FormData with image upload");

        response = await axios.post(
          "https://api.abroadium.com/api/admin/feed/create",
          formData,
          {
            headers: {
              Authorization: token,
              "Content-Type": "multipart/form-data",
            },
          }
        );
      } else {
        // Use JSON for text-only posts
        const requestData = {
          title: announcement.title,
          content: announcement.body,
          user_type_id: 2, // Admin user type
          user_id: 0, // Admin user ID
          user_first_name: "Admin",
          user_last_name: "",
          feed_image: "",
          is_edit: true,
        };

        console.log("Request data being sent:", requestData);

        response = await axios.post(
          "https://api.abroadium.com/api/admin/feed/create",
          requestData,
          {
            headers: {
              Authorization: token,
              "Content-Type": "application/json",
            },
          }
        );
      }

      if (response.status === 200) {
        toast.success("Announcement created successfully!");
        setAnnouncement({ title: "", body: "", image: null });
        fetchFeeds(); // Refresh the feeds
      }
    } catch (error) {
      console.error("Error creating announcement:", error);
      console.log("Error response:", error.response);
      console.log("Error status:", error.response?.status);
      console.log("Error data:", error.response?.data);
      console.log("Error message:", error.response?.data?.message);
      console.log("Error details:", error.response?.data?.errors);
      toast.error("Failed to create announcement");
    }
  };

  const handleEditFeed = async (feedId, updatedData) => {
    try {
      const token = localStorage.getItem("adminToken");
      console.log("Editing feed:", feedId, "with data:", updatedData);

      let response;

      // Check if image is selected for edit or if image should be removed
      if (updatedData.image || updatedData.removeImage) {
        // Use FormData for image upload or removal
        const formData = new FormData();
        formData.append("title", updatedData.title);
        formData.append("content", updatedData.content);
        formData.append("user_type_id", "2");
        formData.append("user_id", "0");
        formData.append("user_first_name", "Admin");
        formData.append("user_last_name", "");
        formData.append("feed_image", "");
        formData.append("is_edit", "true");

        if (updatedData.image) {
          formData.append("image_upload", updatedData.image);
          console.log("Using FormData for edit with new image upload");
        } else if (updatedData.removeImage) {
          // Send empty image_upload to remove the image
          formData.append("image_upload", "");
          console.log("Using FormData for edit to remove image");
        }

        response = await axios.put(
          `https://api.abroadium.com/api/admin/feed/edit/${feedId}`,
          formData,
          {
            headers: {
              Authorization: token,
              "Content-Type": "multipart/form-data",
            },
          }
        );
      } else {
        // Use JSON for text-only edit (keep existing image)
        response = await axios.put(
          `https://api.abroadium.com/api/admin/feed/edit/${feedId}`,
          {
            title: updatedData.title,
            content: updatedData.content,
            user_type_id: 2,
            user_id: 0,
            user_first_name: "Admin",
            user_last_name: "",
            feed_image: "",
            is_edit: true,
          },
          {
            headers: {
              Authorization: token,
              "Content-Type": "application/json",
            },
          }
        );
      }

      if (response.status === 200) {
        toast.success("Feed updated successfully!");
        setEditingFeed(null);
        fetchFeeds();
      }
    } catch (error) {
      console.error("Error updating feed:", error);
      toast.error("Failed to update feed");
    }
  };

  const handleAddComment = async (feedId) => {
    const comment = newComment[feedId];
    if (!comment || !comment.trim()) {
      toast.error("Comment cannot be empty");
      return;
    }

    try {
      const token = localStorage.getItem("adminToken");
      const response = await axios.post(
        "https://api.abroadium.com/api/admin/feed/comment",
        {
          feed_id: feedId,
          content: comment,
        },
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        toast.success("Comment added successfully!");
        setNewComment({ ...newComment, [feedId]: "" });
        fetchFeeds();
      }
    } catch (error) {
      console.error("Error adding comment:", error);
      toast.error("Failed to add comment");
    }
  };

  const handleDeleteFeed = async (feedId) => {
    if (!window.confirm("Are you sure you want to delete this post?")) {
      return;
    }

    try {
      const token = localStorage.getItem("adminToken");
      const response = await axios.delete(
        `https://api.abroadium.com/api/admin/feed/${feedId}`,
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        toast.success("Post deleted successfully!");
        setFeeds(feeds.filter((feed) => feed.id !== feedId));
      }
    } catch (error) {
      console.error("Error deleting feed:", error);
      toast.error("Failed to delete post");
    }
  };

  const handleDeleteComment = async (feedId, commentId) => {
    if (!window.confirm("Are you sure you want to delete this comment?")) {
      return;
    }

    try {
      const token = localStorage.getItem("adminToken");
      const response = await axios.delete(
        `https://api.abroadium.com/api/admin/feed/comment/${feedId}/${commentId}`,
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        toast.success("Comment deleted successfully!");
        fetchFeeds();
      }
    } catch (error) {
      console.error("Error deleting comment:", error);
      toast.error("Failed to delete comment");
    }
  };

  const handleStatusChange = async (feedId, newStatus) => {
    try {
      const token = localStorage.getItem("adminToken");
      console.log(
        "Status change - using token:",
        token?.substring(0, 20) + "..."
      );
      console.log("Status change - feedId:", feedId, "newStatus:", newStatus);

      // Convert string status to numeric values: 1 = deactive, 2 = active
      const statusValue = newStatus === "active" ? 2 : 1;
      console.log("Sending status_id value:", statusValue);

      // Use only Authorization header, no query parameter
      const response = await axios.patch(
        `https://api.abroadium.com/api/admin/feed/status/${feedId}`,
        { status_id: statusValue },
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Status change response:", response);
      console.log("Status change response status:", response.status);
      console.log("Status change response data:", response.data);

      if (response.status === 200) {
        const statusText = statusValue === 2 ? "activated" : "deactivated";
        toast.success(`Post ${statusText} successfully`);
        setFeeds(
          feeds.map((feed) =>
            feed.id === feedId ? { ...feed, status: newStatus } : feed
          )
        );
      }
    } catch (error) {
      console.error("Error updating feed status:", error);
      toast.error("Failed to update post status");
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };

  // Helper function to construct correct image URL
  const getImageUrl = (imagePath) => {
    if (!imagePath || imagePath === "") return "";

    console.log("Processing image path:", imagePath);

    // If path already starts with /abroadium, use as is
    if (imagePath.startsWith("/abroadium")) {
      const url = `https://api.abroadium.com${imagePath}`;
      console.log("Constructed URL (abroadium):", url);
      return url;
    }

    // If path starts with /feed, it's a feed image
    if (imagePath.startsWith("/feed")) {
      const url = `https://api.abroadium.com/abroadium${imagePath}`;
      console.log("Constructed URL (feed):", url);
      return url;
    }

    // For other paths, add /abroadium prefix
    const url = `https://api.abroadium.com/abroadium${imagePath}`;
    console.log("Constructed URL (default):", url);
    return url;
  };

  // Debug logging
  console.log("=== COMPONENT RENDER ===");
  console.log("Loading:", loading);
  console.log("Feeds state:", feeds);
  console.log("Feeds type:", typeof feeds);
  console.log("Feeds is array:", Array.isArray(feeds));
  console.log("Feeds length:", feeds?.length);

  const flaggedFeeds = Array.isArray(feeds)
    ? feeds.filter((feed) => feed.status === "flagged")
    : [];

  if (loading) {
    return (
      <div className="p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-200 h-24 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">
          Abroadium — Admin Community Panel
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-6">
          {/* Announcement Composer */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Create / Edit Announcement
            </h2>
            <form onSubmit={handleCreateAnnouncement} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  value={announcement.title}
                  onChange={(e) =>
                    setAnnouncement({ ...announcement, title: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter announcement title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Body
                </label>
                <textarea
                  value={announcement.body}
                  onChange={(e) =>
                    setAnnouncement({ ...announcement, body: e.target.value })
                  }
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter announcement content"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Image (Optional)
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    setAnnouncement({
                      ...announcement,
                      image: e.target.files[0],
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors"
                >
                  Create
                </button>
              </div>
            </form>
          </div>

          {/* All Posts */}
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">
                All Posts ({Array.isArray(feeds) ? feeds.length : 0} posts)
              </h2>
            </div>
            <div className="p-6 space-y-6 overflow-y-auto max-h-[80vh]">
              {Array.isArray(feeds) ? (
                feeds.map((feed) => (
                  <div
                    key={feed.id}
                    className="border border-gray-200 rounded-lg p-4"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-start space-x-3">
                        {/* User Photo */}
                        <div className="flex-shrink-0">
                          {feed.user_photo ? (
                            <img
                              src={getImageUrl(feed.user_photo)}
                              alt={feed.author}
                              className="w-10 h-10 rounded-full object-cover border-2 border-gray-200"
                              onError={(e) => {
                                console.log(
                                  "User photo failed to load:",
                                  feed.user_photo
                                );
                                e.target.style.display = "none";
                                e.target.nextSibling.style.display = "flex";
                              }}
                              onLoad={() => {
                                console.log(
                                  "User photo loaded successfully:",
                                  feed.user_photo
                                );
                              }}
                            />
                          ) : null}
                          {(!feed.user_photo || feed.user_photo === "") && (
                            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                              {feed.author.charAt(0).toUpperCase()}
                            </div>
                          )}
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">
                            {feed.title}
                            {feed.status === "flagged" && (
                              <span className="ml-2 bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                                Flagged
                              </span>
                            )}
                          </h3>
                          <p className="text-sm text-gray-500">
                            by {feed.author} • {formatDate(feed.createdAt)}
                          </p>
                          {feed.user_type_id === 2 && (
                            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mt-1">
                              Admin Post
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => setEditingFeed(feed)}
                          className="text-blue-600 hover:text-blue-800 text-sm"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteFeed(feed.id)}
                          className="text-red-600 hover:text-red-800 text-sm"
                        >
                          Delete
                        </button>
                        <button
                          onClick={() => handleStatusChange(feed.id, "active")}
                          className="text-green-600 hover:text-green-800 text-sm"
                        >
                          Activate
                        </button>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-3">{feed.content}</p>

                    {/* Display Feed Image */}
                    {feed.feed_image && feed.feed_image !== "" && (
                      <div className="mb-4">
                        <img
                          src={getImageUrl(feed.feed_image)}
                          alt="Feed content"
                          className="max-w-full h-auto rounded-lg shadow-sm"
                          onError={(e) => {
                            console.log(
                              "Feed image failed to load:",
                              feed.feed_image
                            );
                            e.target.style.display = "none";
                          }}
                          onLoad={() => {
                            console.log(
                              "Feed image loaded successfully:",
                              feed.feed_image
                            );
                          }}
                        />
                      </div>
                    )}

                    <div className="flex items-center space-x-4 mb-4">
                      <span className="text-sm text-gray-600">
                        Like ({feed.likes})
                      </span>
                    </div>

                    {/* Comments Section */}
                    <div className="border-t border-gray-200 pt-4">
                      <h4 className="text-sm font-medium text-gray-900 mb-3">
                        Comments
                      </h4>
                      <div className="space-y-3 mb-4">
                        {feed.comments?.map((comment) => (
                          <div
                            key={comment.id}
                            className="bg-gray-50 p-3 rounded"
                          >
                            <div className="flex justify-between items-start">
                              <div>
                                <p className="text-sm font-medium text-gray-900">
                                  {comment.author}:
                                </p>
                                <p className="text-sm text-gray-700">
                                  {comment.content}
                                </p>
                              </div>
                              <div className="flex items-center space-x-2">
                                <span className="text-xs text-gray-500">
                                  Like ({comment.likes})
                                </span>
                                <button
                                  onClick={() =>
                                    handleDeleteComment(feed.id, comment.id)
                                  }
                                  className="text-red-600 hover:text-red-800 text-xs"
                                >
                                  Delete
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="flex space-x-2">
                        <input
                          type="text"
                          value={newComment[feed.id] || ""}
                          onChange={(e) =>
                            setNewComment({
                              ...newComment,
                              [feed.id]: e.target.value,
                            })
                          }
                          placeholder="Add comment"
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                          onClick={() => handleAddComment(feed.id)}
                          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                        >
                          Comment
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No feeds available</p>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Flagged Queue */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Flagged Queue
            </h3>
            <div className="space-y-3">
              {Array.isArray(flaggedFeeds) ? (
                flaggedFeeds.map((feed) => (
                  <div
                    key={feed.id}
                    className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg"
                  >
                    {/* User Photo */}
                    <div className="flex-shrink-0">
                      {feed.user_photo ? (
                        <img
                          src={getImageUrl(feed.user_photo)}
                          alt={feed.author}
                          className="w-8 h-8 rounded-full object-cover border border-gray-200"
                          onError={(e) => {
                            e.target.style.display = "none";
                            e.target.nextSibling.style.display = "flex";
                          }}
                        />
                      ) : null}
                      {(!feed.user_photo || feed.user_photo === "") && (
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
                          {feed.author.charAt(0).toUpperCase()}
                        </div>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {feed.title}
                      </p>
                      <p className="text-xs text-gray-500">by {feed.author}</p>
                    </div>

                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleStatusChange(feed.id, "active")}
                        className="bg-green-600 text-white px-3 py-1 rounded text-xs hover:bg-green-700"
                      >
                        Activate
                      </button>
                      <button
                        onClick={() => handleStatusChange(feed.id, "removed")}
                        className="bg-red-600 text-white px-3 py-1 rounded text-xs hover:bg-red-700"
                      >
                        Deactivate
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No flagged feeds available</p>
              )}
              {Array.isArray(flaggedFeeds) && flaggedFeeds.length === 0 && (
                <p className="text-sm text-gray-500">No flagged posts</p>
              )}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Quick Stats
            </h3>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">
                Total posts: {Array.isArray(feeds) ? feeds.length : 0}
              </p>
              <p className="text-sm text-gray-600">
                Flagged: {Array.isArray(flaggedFeeds) ? flaggedFeeds.length : 0}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Feed Modal */}
      {editingFeed && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-900">Edit Post</h3>
                <button
                  onClick={() => setEditingFeed(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleEditFeed(editingFeed.id, {
                    title: editingFeed.title,
                    content: editingFeed.content,
                    image: editingFeed.image,
                    removeImage: editingFeed.removeImage || false,
                  });
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    value={editingFeed.title}
                    onChange={(e) =>
                      setEditingFeed({
                        ...editingFeed,
                        title: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Content
                  </label>
                  <textarea
                    value={editingFeed.content}
                    onChange={(e) =>
                      setEditingFeed({
                        ...editingFeed,
                        content: e.target.value,
                      })
                    }
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Image
                  </label>
                  {editingFeed.feed_image && editingFeed.feed_image !== "" ? (
                    <div className="mb-4">
                      <img
                        src={getImageUrl(editingFeed.feed_image)}
                        alt="Current feed image"
                        className="max-w-full h-48 object-cover rounded-lg border border-gray-300"
                        onError={(e) => {
                          console.log(
                            "Current image failed to load:",
                            editingFeed.feed_image
                          );
                          e.target.style.display = "none";
                        }}
                      />
                      <div className="mt-2 flex space-x-2">
                        <button
                          type="button"
                          onClick={() =>
                            setEditingFeed({
                              ...editingFeed,
                              feed_image: "",
                              removeImage: true,
                            })
                          }
                          className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700"
                        >
                          Remove Image
                        </button>
                        <span className="text-sm text-gray-500 self-center">
                          Upload new image below to replace
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="mb-4 p-4 border-2 border-dashed border-gray-300 rounded-lg text-center text-gray-500">
                      No image currently uploaded
                    </div>
                  )}

                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload New Image (Optional)
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                      setEditingFeed({
                        ...editingFeed,
                        image: e.target.files[0],
                        removeImage: false,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setEditingFeed(null)}
                    className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminCommunity;
