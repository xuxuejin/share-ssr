import express from "express";
import proxy from 'express-http-proxy'
import {PORT} from '@/utils/config'
import render from "./render";
import axios from 'axios'
const app = express();
// 静态资源ok
app.use(express.static("public"));

// 请求第三发接口
app.use("/openapi", (req, res, next) => {
  axios.get(`https://api.apiopen.top${req.path}`)
  .then(({status, data}) => {
    if(status === 200) {
      res.send(data)
    } else {
      throw new Error('第三方接口请求报错了')
    }
  }).catch((err) => {
    console.log(err)
  })
})

// 接口正确
// app.get("/api/getSchoolList", (req, res) => {
//   let schoolList = [
//     { id: 1, name: "大学1" },
//     { id: 2, name: "大学2" },
//     { id: 3, name: "大学3" },
//   ];
//   return res.json({ schoolList });
// });
// 拦截所有的请求
app.get("*", (req, res) => {
    // console.log(req.path)
    render(req, res);
});
// 服务ok
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server is running at http://localhost:${PORT}`);
  }
});
