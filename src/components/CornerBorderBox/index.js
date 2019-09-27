/**
 * Created by lenovo on 2019/9/27.
 */
import React from 'react';
import styles from './index.less';

function CornerBorderBox(props) {
  const {className, borderColor, bgColor, children, width, height} = props;
  return (
    <div style={{borderColor: borderColor}} className={`${styles.box} ${className}`}>
      <div style={{background: bgColor}} className={styles.topBaffle}></div>
      <div style={{background: bgColor}} className={styles.bottomBaffle}></div>
      <div style={{background: bgColor}} className={styles.leftBaffle}></div>
      <div style={{background: bgColor}} className={styles.rightBaffle}></div>
      {children}
    </div>
  );
}

export default CornerBorderBox;