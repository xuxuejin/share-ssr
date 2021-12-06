import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.less";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    fetch("https://api.apiopen.top/getJoke?page=1&count=10&type=video").then(
      async (response) => {
        const { code, result } = await response.clone().json();
        if (code === 200) {
          setData(result);
        }
      }
    );
  };

  return (
    <main>
      <ul className="list-wrap">
        {data.map((item) => (
          <li key={item.sid}>
            <div className="avatar">
              <span>
                <img src={item.header} />
              </span>
              <strong>{item.name}</strong>
            </div>
            <p>
              <Link to={`/detail/${item.sid}`}>{item.text}</Link>
            </p>
            <span>{item.passtime}</span>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
