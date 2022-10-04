import axios from "axios";

export const api = axios.create({
  baseURL: "http://159.223.101.135:8080/",
  headers: {
    "Content-Type": "application/json",
  },
});
