import React, { useState, useEffect } from "react";
import WithStyle from "@/components/WithStyle";
import { connect } from "react-redux";
import { getDetailData } from "@/store/detail/createActions";
import styles from "./index.less";

const Detail = (props) => {
  const {
    propGetDetailData,
    detail: { detailData },
    match: { params },
  } = props;

  useEffect(() => {
    propGetDetailData(params.id);
  }, []);

  return <main className={styles.detail}>{detailData.text}</main>;
};

const mapStateToProps = ({ detail }) => ({ detail });

const mapDispatchToProps = (dispatch) => ({
  propGetDetailData(id) {
    dispatch(getDetailData(id));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithStyle(Detail, styles));
