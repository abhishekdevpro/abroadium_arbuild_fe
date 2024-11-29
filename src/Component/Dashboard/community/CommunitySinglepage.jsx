import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const SinglePostPage = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const { postId } = useParams();

  useEffect(() => {
    const fetchSinglePost = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `https://api.sentryspot.co.uk/api/feed/pro/feed/${postId}`,
          {
            headers: {
              Authorization: token || '',
            },
          }
        );
        if (response.data && response.data.status === 'success') {
          setPost(response.data.data);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching single post:', error);
        setLoading(false);
      }
    };
    fetchSinglePost();
  }, [postId]);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (!post) {
    return <div className="flex justify-center items-center h-screen">Post not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <div className="flex items-center mb-6">
        <img
          src={post.user_photo || '/default-profile.jpg'}
          alt={`${post.user_first_name} ${post.user_last_name}`}
          className="w-16 h-16 rounded-full mr-4"
        />
        <div>
          <h1 className="text-xl font-semibold">{`${post.user_first_name} ${post.user_last_name}`}</h1>
          <p className="text-gray-500 text-sm">{new Date(post.created_at).toLocaleDateString()}</p>
        </div>
      </div>
      <p className="text-gray-800 leading-6 mb-6">{post.content}</p>
      {post.feed_image && (
        <div className="rounded-lg overflow-hidden">
          <img
            src={`https://api.sentryspot.co.uk${post.feed_image}`}
            alt="Post content"
            className="w-full object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default SinglePostPage;
