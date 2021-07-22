import axios from "axios";

const client = axios.create({
  baseURL: "http://api.weatherapi.com/v1/",
  headers: {
    "content-type": "application/json",
  },
});

export default client;
