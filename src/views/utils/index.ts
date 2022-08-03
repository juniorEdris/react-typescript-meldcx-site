import axios from "axios";

const url: string = "http://35.201.2.209:8000";

const BaseApi = axios.create({
  baseURL: url,
});

const API = (): any => {
  const accessToken = localStorage.getItem("accessToken");

  if (accessToken) {
    BaseApi.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  }

  return BaseApi;
};

export default API;
