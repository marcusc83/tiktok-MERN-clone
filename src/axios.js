import axios from "axios";

export default axios.create({
  baseURL: "https://marcus-tiktok-backend.herokuapp.com",
  responseType: "json"
});