import React from "react";
import { Link } from "react-router-dom";
import WithStyle from "@/components/WithStyle";
import styles from "./index.less";

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>
        <Link to="/" />
      </h1>
      <div>
        <Link to="/">home</Link>
        <Link to="/news">news</Link>
      </div>
    </div>
  );
};

export default WithStyle(Header, styles);
