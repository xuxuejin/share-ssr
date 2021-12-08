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
  // 服务端需要处理的请求
  //   const promises = [];

  // 1. 解析路由
  //   const matchedRoutes = matchRoutes(routes, req.path);

  const insertCss = (...styles) => {
      console.log('styles+++++', styles)
    return styles.forEach((style) => {
        console.table(style)
    //   css.add(style._getCss());
    });
  };

  const domContent = renderToString(
    <StaticRouter location={req.path} context={context}>
      <StyleContext.Provider value={{ insertCss }}>
        {renderRoutes(routes)}
      </StyleContext.Provider>
    </StaticRouter>
  );

  let cssStr = context.csses.length ? context.csses.join('\n') : '';

  let html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <style>${cssStr}</style>
  <title>react-ssr</title>
  </head>
  <body>
  <div id="app">${domContent}</div>
  <script>
  </script>
  <script src="/client.js">
  </script>
  </body>
  </html>
    `;

  res.send(html);
};
