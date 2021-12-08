import React, { useState, useEffect } from "react";
import WithStyle from "@/components/WithStyle";
import styles from "./index.less";

const Detail = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    fetch("https://api.apiopen.top/getSingleJoke?sid=28654780").then(
      async (response) => {
        const { code, result } = await response.clone().json();
        if (code === 200) {
          setData(result);
        }
      }
    );
  };

  return <main className={styles.detail}>{data.text}</main>;
};

export default WithStyle(Detail, styles);
