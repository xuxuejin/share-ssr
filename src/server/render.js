import React from "react";
import { Provider } from "react-redux";
import { getServerStore } from "@/store";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { matchRoutes, renderRoutes } from "react-router-config";
import StyleContext from "isomorphic-style-loader/StyleContext";
import routes from "../routes";
// 1. 解析路由
// 2. 处理样式
// 3. 获取数据
// 4. 输出页面

export default (req, res) => {
  // 1. 样式处理
  const context = {
    csses: [],
  };
  // 3. 服务端获取数据
  // a. 服务端怎么知道它要获取数据
  // b. 客户端怎么告诉服务端它需要数据
  const promises = [];
  // 普通 csr 在 componentDidMount 生命周期函数进行异步数据的获取

  //   当浏览器发送请求时，服务器接受到请求，这时候服务器和客户端的 store 都是空的，紧接着客户端执行 componentDidMount 生命周期中的函数，获取到数据并渲染到页面，然而服务器端始终不会执行 componentDidMount，因此不会拿到数据，这也导致服务器端的 store 始终是空的。换而言之，关于异步数据的操作始终只是客户端渲染。
  //   让服务端获得数据的操作执行一遍，以达到真正的服务端渲染的效果

  // 2. 解析路由
  const matchedRoutes = matchRoutes(routes, req.path);

  const data = {};
  matchedRoutes.forEach((item) => {
    const loadData = item.route.loadData;
    if (loadData) {
      promises.push(loadData());
    }
  });

  Promise.all(promises).then((res) => {
    // console.log(res);
    // const { code, result } = await res.clone().json();
    // if (code === 200) {
    //   console.log(result);
    // }
  });

  // 3. 获取数据
  const domContent = renderToString(
    <Provider store={getServerStore()}>
      <StaticRouter location={req.path} context={context}>
        <StyleContext.Provider>{renderRoutes(routes)}</StyleContext.Provider>
      </StaticRouter>
    </Provider>
  );

  let cssStr = context.csses.length ? context.csses.join("\n") : "";

  let html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <link rel="shortcut icon" type="image/x-icon" href="/favicon.png"/>
  <style>${cssStr}</style>
  <title>react-ssr</title>
  </head>
  <body>
  <div id="app">${domContent}</div>
  <script>
  window.context = {
    state: ${JSON.stringify({})}
  }
  </script>
  <script src="/client.js">
  </script>
  </body>
  </html>
    `;
  // 4. 输出页面
  res.send(html);
};
