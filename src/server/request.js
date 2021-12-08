import axios from "axios";

const serverAxios = axios.create({
  baseURL: `http://localhost:8899`,
});

export default serverAxios;
