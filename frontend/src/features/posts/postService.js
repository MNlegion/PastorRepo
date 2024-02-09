import axios from "axios";

const API_URL = "/api/posts/";

// Create a new post
const createPost = async (postData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, postData, config);

  return response.data;
};

// Get User Posts
const getPosts = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

// Delete User Post
const deletePost = async (postId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + postId, config);

  return response.data;
};

// Handle Upvote
const handleUpvote = async (postId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(API_URL + "upvote/" + postId, {}, config);

  return response.data;
};

// Handle Downvote
const handleDownvote = async (postId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(API_URL + "downvote/" + postId, {}, config);

  return response.data;
};

const postService = {
  getPosts,
  createPost,
  deletePost,
  handleUpvote,
  handleDownvote,
};

export default postService;
