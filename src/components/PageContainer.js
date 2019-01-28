import React, { Fragment } from "react";

export function PageContainer(props) {
  return (
    <Fragment>
      <div>{props.children}</div>
    </Fragment>
  );
}

export default PageContainer;
