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

const postService = {
  getPosts,
  createPost,
  //   updatePost,
  //   deletePost,
};

export default postService;
