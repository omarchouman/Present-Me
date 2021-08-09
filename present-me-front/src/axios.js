import axios from "axios";
const instance = axios.create({
  baseURL: "https://presentt-me.herokuapp.com",
});

export default instance;
