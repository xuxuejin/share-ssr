import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import WithStyle from "@/components/WithStyle";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { getHomeData, getAsyncData } from "@/store/home/createActions";
import styles from "./index.less";
import banner from "@/assets/bg.png";

const HomeRaw = (props) => {
  let [page, setPage] = useState(1);
  const [count] = useState(3);
  const {
    propGetHomeData,
    staticContext,
    home: { homeData, localData },
  } = props;

  useEffect(() => {
    if (!staticContext) {
      propGetHomeData({
        page,
        count,
      });
    }
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
    <>
      <Helmet>
        <title>homes标题</title>
        <meta name="keywords" content="home关键词1，home关键词2" />
        <meta name="decsription" content="home描述" />
      </Helmet>
      <div className={styles.banner}>
        <img src={banner} />
      </div>
      <div className={styles.btnWrap}>
        <button onClick={prev}>上一页</button>
        <span> 第{page}页 </span>
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
    </>
  );
};

const mapStateToProps = ({ home }) => ({ home });

const mapDispatchToProps = (dispatch) => ({
  propGetHomeData({ page, count }) {
    dispatch(getHomeData({ page, count }));
  },
  // propGetAsyncData() {
  //   dispatch(getAsyncData());
  // },
});

const Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(WithStyle(HomeRaw, styles));

// 解决获取不到路由挂载方法
Home.getInitState = ({ store }) => [
  store.dispatch(getHomeData({ page: 1, count: 3 })),
];

export default Home;
