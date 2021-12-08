import React from "react";
import ReactDom, { hydrate } from "react-dom";
import { Provider } from "react-redux";
import { getClientStore } from "@/store";
import routes from "@/routes";
import { renderRoutes } from "react-router-config";
import { BrowserRouter } from "react-router-dom";

// 客户端入口文件
// ReactDom.render(
//   <Provider store={getClientStore()}>
//     <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
//   </Provider>,
//   document.getElementById("app")
// );

// hydrate 控制台会有个警告
hydrate(
  <Provider store={getClientStore()}>
    <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
  </Provider>,
  document.getElementById("app")
);
