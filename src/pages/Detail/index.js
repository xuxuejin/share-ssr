import React, { useState, useEffect } from "react";
import "./index.less";

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

  return <main className="detail-wrap">{data.text}</main>;
};

export default Detail;
