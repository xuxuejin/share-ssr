import React, { useEffect } from "react";
import WithStyle from "@/components/WithStyle";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
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

  return (
    <>
      <Helmet>
        <title>detail标题</title>
        <meta name="keywords" content="detail关键词1，detail关键词2" />
        <meta name="decsription" content="detail描述" />
      </Helmet>
      <main className={styles.detail}>{detailData.text}</main>
    </>
  );
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
