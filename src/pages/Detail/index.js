import React, { useState, useEffect } from "react";
import WithStyle from "@/components/WithStyle";
import { connect } from "react-redux";
import { getDetailData } from "@/store/detail/createActions";
import styles from "./index.less";

const DetailRaw = (props) => {
  const {
    propGetDetailData,
    detail: { detailData },
    match: { params },
  } = props;

  useEffect(() => {
    if (!Object.keys(detailData).length) {
      propGetDetailData(params.id);
    } else {
      propGetDetailData(params.id);
    }
  }, []);

  return <main className={styles.detail}>{detailData.text}</main>;
};

const mapStateToProps = ({ detail }) => ({ detail });

const mapDispatchToProps = (dispatch) => ({
  propGetDetailData(id) {
    dispatch(getDetailData(id));
  },
});

const Detail = connect(
  mapStateToProps,
  mapDispatchToProps
)(WithStyle(DetailRaw, styles));

Detail.getInitState = ({ store, req }) =>
  store.dispatch(getDetailData(req.params.id));

export default Detail;
