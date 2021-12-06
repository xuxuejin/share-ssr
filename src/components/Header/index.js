import React from "react";
import { Link } from "react-router-dom";
import "./index.less";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">home</Link>
        <Link to="/news">news</Link>
      </nav>
    </header>
  );
};

export default Header;
