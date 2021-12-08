import App from "./App";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import News from "./pages/News";
import NotFound from "./pages/NotFound";
import { getHomeData } from "@/api";

export default [
  {
    path: "/",
    component: App,
    routes: [
      {
        exact: true,
        path: "/",
        component: Home,
        loadData: getHomeData,
      },
      {
        path: "/detail/:id",
        component: Detail,
        loadData: () => {
          console.log("获取详情数据");
        },
      },
      {
        path: "/news",
        component: News,
        loadData: News.getInitialState,
        loadData: () => {
          console.log("获取新闻数据");
        },
      },
      {
        path: "*",
        component: NotFound,
      },
    ],
  },
];
