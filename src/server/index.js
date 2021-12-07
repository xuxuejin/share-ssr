import express from "express";
import render from "./render";
const PORT = 8899;
const app = express();
// 静态资源ok
app.use(express.static("public"));
// 接口正确
app.get("/api/getSchoolList", (req, res) => {
  let schoolList = [
    { id: 1, name: "大学1" },
    { id: 2, name: "大学2" },
    { id: 3, name: "大学3" },
  ];
  return res.json({ schoolList });
});
// 拦截所有的请求
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
