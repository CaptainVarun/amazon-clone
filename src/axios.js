import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-centrall.cloudfunctions.net/api",
});

export default instance;
