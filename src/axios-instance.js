import { polyfill } from "es6-promise";
import axios from "axios";

polyfill();

const instance = axios.create({
  baseURL: "https://my-json-server.typicode.com/typicode/demo/"
});

instance.defaults.headers.common["Authorization"] = "AUTH TOKEN FROM INSTANCE";

// instance.interceptors.request...

export default instance;
