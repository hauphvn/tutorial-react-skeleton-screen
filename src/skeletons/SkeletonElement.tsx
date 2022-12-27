import React from 'react';
import './SkeletonElement.scss';
const SkeletonElement = (props: any) => {
  const {type} = props;
  const classes = `skeleton ${type}`
  return (
    <div className={classes}>

    </div>
  );
};

export default SkeletonElement;
