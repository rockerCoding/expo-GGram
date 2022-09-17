import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.1.2:3000",
  //baseURL: "http://10.50.3.97:3000",

  
});

export default api;