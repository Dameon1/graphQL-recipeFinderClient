import React, { Fragment } from 'react';
//import styled from 'react-emotion';

//import { unit, colors } from '../styles';

export default function PageContainer(props) {
  return (
    <Fragment>      
      <div>{props.children}</div>
    </Fragment>
  );
}

/**
 * STYLED COMPONENTS USED IN THIS FILE ARE BELOW HERE
 */

// const Bar = styled('div')({
//   flexShrink: 0,
//   height: 12,
//   //backgroundColor: colors.primary,
// });