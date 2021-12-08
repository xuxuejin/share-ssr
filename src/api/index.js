import axios from "axios";
export const getHomeData = () => {
  return axios.get("https://api.apiopen.top/getJoke?page=1&count=5&type=video");
};

export const getDetailData = () => {};
export const getNewsData = () => {};
