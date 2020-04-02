import axois from "axios";

const host = "http://localhost:5000/api"

export const setToken = token => {
  if (token) {
    axois.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axois.defaults.headers.common["Authorization"];
  }
};

export const call = async (method, path, data) => {
  const response = await axois[method](`${host}/${path}`, data);
  return response.data;
};

export default { call, setToken };
