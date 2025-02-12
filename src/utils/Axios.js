import axios from "Axios";
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3", // Corrected key name
});
export default instance; // Corrected: Export the instance
