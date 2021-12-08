import React, { useState, useEffect } from "react";
import WithStyle from "@/components/WithStyle";
import styles from "./index.less";

const News = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    fetch("https://api.apiopen.top/getWangYiNews").then(async (response) => {
      const { code, result } = await response.clone().json();
      if (code === 200) {
        setData(result);
      }
    });
  };
  return (
    <ul className={styles.news}>
      {data.map((item, index) => (
        <li key={index.toString()}>
          <img src={item.image} />
          <div>
            <h2>{item.title}</h2>
            <span>{item.passtime}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default WithStyle(News, styles);
