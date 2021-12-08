import axios from "axios";

export default axios.create({
  baseURL: `https://api.apiopen.top`,
});

// 列表接口

// https://api.apiopen.top/getJoke?page=1&count=2&type=video

// news 接口

// https://api.apiopen.top/getWangYiNews

// detail 接口

// https://api.apiopen.top/getSingleJoke?sid=28654780
