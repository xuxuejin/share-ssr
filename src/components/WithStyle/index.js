import React, { useEffect } from "react";
// import withStyles from "isomorphic-style-loader/withStyles";

const WithStyle = (OldComponent, styles) => {
  console.log(this.props);
  console.log(styles._getCss());
  //   useEffect(() => {
  //     if (this.props.staticContext) {
  //       this.props.staticContext.css.push(styles._getCss());
  //     }
  //   }, [styles]);

  return <OldComponent />;
};

export default WithStyle;
