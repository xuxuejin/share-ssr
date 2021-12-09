import App from "./App";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import News from "./pages/News";
import NotFound from "./pages/NotFound";

export default [
  {
    path: "/",
    component: App,
    routes: [
      {
        exact: true,
        path: "/",
        component: Home,
        // 路由挂载的方法获取不到
        loadData: Home.getInitState,
      },
      {
        path: "/detail/:id",
        component: Detail,
        loadData: Detail.getInitState,
      },
      {
        path: "/news",
        component: News,
        loadData: News.getInitState,
      },
      {
        path: "*",
        component: NotFound,
      },
    ],
  },
];
