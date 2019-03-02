import { polyfill } from "es6-promise";
import axios from "axios";

polyfill();

const instance = axios.create({
  baseURL: "http://localhost:4000/",
  headers: {
    "Content-Type": "application/json; charset=utf-8"
  }
});

export default instance;
