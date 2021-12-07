import React from "react";
import ReactDom from "react-dom";
import routes from "./routes";
import { renderRoutes } from "react-router-config";
import { BrowserRouter } from "react-router-dom";
// 客户端入口文件
ReactDom.render(
  <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>,
  document.getElementById("app")
);
