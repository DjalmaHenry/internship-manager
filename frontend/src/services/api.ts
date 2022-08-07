import axios from "axios";

export const api = axios.create({
  baseURL: "http://64.227.9.156/",
  headers: {
    "Content-Type": "application/json",
  },
});
