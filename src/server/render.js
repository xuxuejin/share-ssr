import React from "react";
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
  const context = {
    csses: [],
  };
  const css = new Set();
  // 服务端需要处理的请求
  //   const promises = [];

  // 1. 解析路由
  //   const matchedRoutes = matchRoutes(routes, req.path);

  const insertCss = (...styles) => {
    console.log(styles);
    return styles.forEach((style) => {
      console.log("-------", style._getCss());
      css.add(style._getCss());
    });
  };

  let domContent = renderToString(
    <StaticRouter location={req.path}>
      <StyleContext.Provider value={{ insertCss }}>
        {renderRoutes(routes)}
      </StyleContext.Provider>
    </StaticRouter>
  );

  let html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <style>${[...css].join("")}</style>
  <title>react-ssr</title>
  </head>
  <body>
  <div id="app">${domContent}</div>
  <script>
  </script>
  </body>
  </html>
    `;

  res.send(html);
};
