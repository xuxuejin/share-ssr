import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import WithStyle from "@/components/WithStyle";
import { connect } from "react-redux";
import { getHomeData } from "@/store/home/createActions";
import styles from "./index.less";
import banner from "@/assets/bg.png";

const Home = (props) => {
  let [page, setPage] = useState(1);
  const [count] = useState(5);
  const {
    propGetHomeData,
    home: { homeData },
  } = props;

  useEffect(() => {
    propGetHomeData({
      page,
      count,
    });
  }, [page]);

  const prev = () => {
    if (page === 1) {
      return;
    }
    setPage(Number(page) - 1);
  };

  const next = () => {
    setPage(Number(page) + 1);
  };

  return (
    <main>
      <div className={styles.banner}>
        <img src={banner} />
      </div>
      <div className={styles.btnWrap}>
        <button onClick={prev}>上一页</button>
        <button onClick={next}>下一页</button>
      </div>
      <ul className={styles.listWrap}>
        {homeData.length &&
          homeData.map((item) => (
            <li key={item.sid}>
              <div className={styles.avatar}>
                <span>
                  <img src={item.header} />
                </span>
                <strong>{item.name}</strong>
              </div>
              <div className={styles.info}>
                <p>
                  <Link to={`/detail/${item.sid}`}>{item.text}</Link>
                </p>
                <span>{item.passtime}</span>
              </div>
            </li>
          ))}
      </ul>
    </main>
  );
};

const mapStateToProps = ({ home }) => ({ home });

const mapDispatchToProps = (dispatch) => ({
  propGetHomeData({ page, count }) {
    dispatch(getHomeData({ page, count }));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithStyle(Home, styles));
