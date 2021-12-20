import React from "react";
import ReactDom, { hydrate } from "react-dom";
import { Provider } from "react-redux";
import { getClientStore } from "@/store";
import routes from "@/routes";
import { renderRoutes } from "react-router-config";
import { BrowserRouter } from "react-router-dom";

const store = getClientStore();

// 客户端入口文件
// ReactDom.render(
//   <Provider store={getClientStore()}>
//     <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
//   </Provider>,
//   document.getElementById("app")
// );

// hydrate 已经具有此服务器渲染标记的节点，React 将保留它并仅附加事件处理程序
// render 如果初始 DOM 与当前 DOM 之间存在差异，则可能会更改您的节点。hydrate 将仅附加事件处理程序
hydrate(
  <Provider store={store}>
    <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
  </Provider>,
  document.getElementById("app")
);
