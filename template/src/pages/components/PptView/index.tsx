import React from 'react';
import styles from './index.scss';

export default function(props) {
  return (
    <div className={styles.detailWrap}>
      <h1>组件2：{props.title}</h1>
    </div>
  );
}
