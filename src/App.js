import React from "react";
import Header from "./components/Header";
import { renderRoutes } from "react-router-config";
import WithStyle from "@/components/WithStyle";
import style from "./global.less";

const App = (props) => {
  const {
    route: { routes },
  } = props;
  return (
    <>
      <Header {...props} />
      {renderRoutes(routes)}
    </>
  );
};
export default WithStyle(App, style);
