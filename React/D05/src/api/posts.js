import axios from "axios";

const BASE_URL = "http://localhost:4000/news";

export const getPostsApi = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const getPostByIdApi = async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}`);
  return response.data;
};

export const addPostApi = async (newPost) => {
  const response = await axios.post(BASE_URL, newPost);
  return response.data;
};
