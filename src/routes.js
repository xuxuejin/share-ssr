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
      },
      {
        path: "/detail/:id",
        component: Detail,
      },
      {
        path: "/news",
        component: News,
      },
      {
        path: "*",
        component: NotFound,
      },
    ],
  },
];
