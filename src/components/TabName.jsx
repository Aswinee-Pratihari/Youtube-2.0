import React from "react";

const TabName = (props) => {
  document.title = props.title || "Youtube 2.0";
  return <div>{props.children}</div>;
};

export default TabName;
