import express from "express";
// import proxy from "express-http-proxy";
import { PORT } from "@/utils/config";
import render from "./render";
import morgan from 'morgan';
// import { createStream } from 'rotating-file-stream';
import fs from 'fs'
import path from 'path'
import axios from "axios";
const app = express();
const OPENAPI = "https://api.apiopen.top";
// 静态资源ok
app.use(express.static("public"));

// 日志收集
const rfs = require("rotating-file-stream");
const pad = num => (num > 9 ? "" : "0") + num;
const generator = (time, index) => {
  if (!time) return "file.log";

  var month = time.getFullYear() + "" + pad(time.getMonth() + 1);
  var day = pad(time.getDate());
  var hour = pad(time.getHours());
  var minute = pad(time.getMinutes());

  return `${month}/${month}${day}-${hour}${minute}-${index}-file.log`;
};

const stream = rfs.createStream(generator, {
  size: "10M",
  interval: "3s"
});

app.use(morgan('combined', { stream }));

// node 中间层处理数据
app.use("/api/getAsyncData", (req, res) => {
  let AsyncDataList = [
    { id: 1, data: "express-data-1" },
    { id: 2, data: "express-data-2" },
    { id: 3, data: "express-data-3" },
  ];

  return res.send({ code: 200, message: "成功!", result: AsyncDataList });
});

// 请求第三方接口
app.use("/openapi", (req, res, next) => {
  axios
    .get(`${OPENAPI}${req.url}`)
    .then(({ status, data }) => {
      if (status === 200) {
        res.send(data);
      } else {
        throw new Error("第三方接口请求报错了");
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

// 坑 处理路径参数
app.get(`/detail/:id`, (req, res) => {
  render(req, res);
});

app.get("*", (req, res) => {
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
