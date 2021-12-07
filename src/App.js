import React from "react";
import { BrowserRouter, Routes, Route, useRoutes } from "react-router-dom";
import routes from "./routes";
import Header from "./components/Header";
import { renderRoutes } from "react-router-config";
import withStyles from "isomorphic-style-loader/withStyles";
import style from "./global.less";
// import Home from "./pages/Home";
// import Detail from "./pages/Detail";
// import News from "./pages/News";
// import NotFound from "./pages/NotFound";

const App = (props) => {
  const {
    route: { routes },
  } = props;
  return (
    <>
      <Header />
      {renderRoutes(routes)}
    </>
  );
};
export default withStyles(style)(App);
