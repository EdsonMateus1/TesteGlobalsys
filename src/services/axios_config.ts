import axios from "axios";
axios.defaults.baseURL = "https://run.mocky.io/v3";
axios.defaults.headers.post["Content-Type"] = "application/json";
export default axios;