import axios from "axios";
import {PORT} from '@/utils/config'

const serverAxios = axios.create({
  baseURL: `http://localhost:${PORT}/openapi`,
});

export default serverAxios;
