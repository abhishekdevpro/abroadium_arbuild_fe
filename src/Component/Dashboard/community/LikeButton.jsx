import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const LikeButton = ({ post }) => {
  const [localLiked, setLocalLiked] = useState(
    post.feed_likes && post.feed_likes.id > 0
  );
  const [localLikesCount, setLocalLikesCount] = useState(
    post.feed_likes_count || 0
  );
  const token = localStorage.getItem("token");

  // Sync local state with props
  useEffect(() => {
    setLocalLiked(post.feed_likes && post.feed_likes.id > 0);
    setLocalLikesCount(post.feed_likes_count || 0);
  }, [post]);

  const toggleLike = async (postId) => {
    if (!token) {
      toast.error("Please log in first to like this post.");
      return;
    }

    try {
      // Optimistic UI update
      const newLikedState = !localLiked;
      const newLikesCount = newLikedState
        ? localLikesCount + 1
        : Math.max(0, localLikesCount - 1);

      setLocalLiked(newLikedState);
      setLocalLikesCount(newLikesCount);

      // Call API based on the new state
      let response;
      if (newLikedState) {
        // Like the post
        response = await axios.post(
          `https://api.abroadium.com/api/feed/feed/like/${postId}`,
          {},
          {
            headers: { Authorization: `${token}` },
          }
        );
        if (response.data.status === "success") {
          toast.success("Post liked successfully!");
        } else {
          throw new Error(response.message || "Failed to like the post.");
        }
      } else {
        // Unlike the post
        response = await axios.delete(
          `https://api.abroadium.com/api/feed/feed/like/${postId}`,
          {
            headers: { Authorization: `${token}` },
          }
        );
        if (response.data.status === "success") {
          toast.success("Post unliked successfully!");
        } else {
          throw new Error(response.message || "Failed to unlike the post.");
        }
      }
    } catch (error) {
      // Rollback UI state on failure
      setLocalLiked(!localLiked);
      setLocalLikesCount(localLikesCount);
      console.error("Error toggling like:", error);
      toast.error(error.message || "An error occurred while toggling like.");
    }
  };

  return (
    <button
      className={`flex items-center ${
        localLiked ? "text-red-600" : "text-black"
      } hover:opacity-75`}
      onClick={() => toggleLike(post.id)}
    >
      <i
        className={`fas fa-heart mr-2 transition-colors ${
          localLiked ? "text-red-600" : "text-black"
        }`}
      ></i>
      <span>Likes</span>
    </button>
  );
};

export default LikeButton;
