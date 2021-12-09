import React from "react";
import { Provider } from "react-redux";
import { getServerStore } from "@/store";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
import { matchRoutes, renderRoutes } from "react-router-config";
import StyleContext from "isomorphic-style-loader/StyleContext";
import routes from "../routes";

export default (req, res) => {
  const context = {
    csses: [],
  };
  const promises = [];

  const matchedRoutes = matchRoutes(routes, req.path);

  const store = getServerStore(req);
  // 服务端获取数据的核心
  matchedRoutes.forEach((item) => {
    const loadData = item.route.loadData;
    if (loadData) {
      promises.push(loadData({ store, req }));
    }
  });

  Promise.all(promises).then(() => {
    const state = store.getState();

    const domContent = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.path} context={context}>
          <StyleContext.Provider>{renderRoutes(routes)}</StyleContext.Provider>
        </StaticRouter>
      </Provider>
    );

    // 服务端渲染 css 的核心
    let cssStr = context.csses.length ? context.csses.join("\n") : "";

    const helmet = Helmet.renderStatic();

    let html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <link rel="shortcut icon" type="image/x-icon" href="/favicon.png"/>
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
    <style>${cssStr}</style>
    <title>react-ssr</title>
    </head>
    <body>
    <div id="app">${domContent}</div>
    <script>
    window.context = {
      state: ${JSON.stringify(state)}
    }
    </script>
    <script src="/client.js">
    </script>
    </body>
    </html>
      `;
    // 404 返回状态码
    if (context.NotFound) {
      res.status(404);
    }
    // 4. 输出页面
    res.send(html);
  });
};
