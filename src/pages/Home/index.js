import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import WithStyle from "@/components/WithStyle";
import styles from "./index.less";

// console.log('stylesstyles', styles._getContent())

const Home = (props) => {
  const [data, setData] = useState([]);
  let [times, setTimes] = useState(0);

  // console.log(props.staticContext)

  if(props.staticContext) {
    props.staticContext.csses.push(styles._getCss())
  }

  useEffect(() => {
    getList();
  }, [props]);

  const getList = () => {
    fetch("https://api.apiopen.top/getJoke?page=1&count=5&type=video").then(
      async (response) => {
        const { code, result } = await response.clone().json();
        if (code === 200) {
          setData(result);
        }
      }
    );
  };

  const btnClick = () => {
    setTimes(times+1)
  }

  return (
    <main>
      <button className={styles.btn} onClick={btnClick}>测试按钮，点击了{times}次</button>
      <ul className={styles.listWrap}>
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

export default WithStyle(Home, styles);
