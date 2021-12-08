import React, { useState, useEffect } from "react";
import WithStyle from "@/components/WithStyle";
import { connect } from "react-redux";
import { getNewsData } from "@/store/news/createActions";
import styles from "./index.less";

const News = (props) => {
  const {
    propGetNewsData,
    news: { newsData },
  } = props;

  useEffect(() => {
    propGetNewsData();
  }, []);

  return (
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
  );
};

const mapStateToProps = ({ news }) => ({ news });

const mapDispatchToProps = (dispatch) => ({
  propGetNewsData() {
    dispatch(getNewsData());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithStyle(News, styles));
