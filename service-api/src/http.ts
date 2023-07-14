import axios from "axios";

export const HTTP = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});
