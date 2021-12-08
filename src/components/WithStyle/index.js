import React from "react";

const WithStyle = (OldComponent, styles) => {
  // 处理样式
  return (props) => {
    if (props.staticContext) {
      props.staticContext.csses.push(styles._getCss());
    }
    return <OldComponent {...props} />;
  };
};

export default WithStyle;
