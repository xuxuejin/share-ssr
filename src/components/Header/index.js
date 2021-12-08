import React from "react";
import { Link } from "react-router-dom";
import WithStyle from "@/components/WithStyle";
import styles from "./index.less";

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

export default WithStyle(Header, styles);
