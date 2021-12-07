import React from "react";
import { BrowserRouter, Routes, Route, useRoutes } from "react-router-dom";
import routes from './routes.js'
import Header from "./components/Header";
// import Home from "./pages/Home";
// import Detail from "./pages/Detail";
// import News from "./pages/News";
// import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      {/* <BrowserRouter> */}
        <Header />
        {/* <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/news" element={<News />} />
          <Route path="*" element={<NotFound />} />
        </Routes>  */}
      {useRoutes(routes)}
      {/* </BrowserRouter> */}
    </>
  );
}
export default App;
