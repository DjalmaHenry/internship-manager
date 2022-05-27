import axios from "axios";

export const api = axios.create({
  baseURL: "http://157.230.9.102/",
  headers: {
    "Content-Type": "application/json",
  },
});
