import React, { useEffect } from "react";
import WithStyle from "@/components/WithStyle";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { getNewsData } from "@/store/news/createActions";
import styles from "./index.less";

const NewsRaw = (props) => {
  const {
    propGetNewsData,
    news: { newsData },
  } = props;

  useEffect(() => {
    //
    propGetNewsData();
  }, []);

  return (
    <>
      <Helmet>
        <title>news标题</title>
        <meta name="keywords" content="news关键词1，news关键词2" />
        <meta name="decsription" content="news描述" />
      </Helmet>
      <ul className={styles.news}>
        {newsData.length &&
          newsData.map((item, index) => (
            <li key={index.toString()}>
              <img src={item.image} />
              <div>
                <h2>{item.title}</h2>
                <span>{item.passtime}</span>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
};

const mapStateToProps = ({ news }) => ({ news });

const mapDispatchToProps = (dispatch) => ({
  propGetNewsData() {
    dispatch(getNewsData());
  },
});

const News = connect(
  mapStateToProps,
  mapDispatchToProps
)(WithStyle(NewsRaw, styles));

News.getInitState = ({ store }) => store.dispatch(getNewsData());

export default News;
