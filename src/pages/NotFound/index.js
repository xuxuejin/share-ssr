import React from "react";
import WithStyle from "@/components/WithStyle";
import styles from "./index.less";
const NotFound = (props) => {
  const {staticContext} = props;
  if(staticContext) {
    staticContext.NotFound = true
  }
  return <strong className={styles.txt}>404</strong>;
};

export default WithStyle(NotFound, styles);
