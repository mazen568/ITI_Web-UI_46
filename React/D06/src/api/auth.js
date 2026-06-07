import axios from "axios";

const BASE_URL = "http://localhost:4000/users";

export const loginApi = async (credentials) => {
  const response = await axios.get(BASE_URL);
  const foundUser = response.data.find(
    (user) => user.email === credentials.email && user.password === credentials.password
  );
  return foundUser;
};

export const signupApi = async (userData) => {
  const response = await axios.post(BASE_URL, userData);
  return response.data;
};
