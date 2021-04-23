import React from 'react';
import styles from './index.less';

export default function(props) {
  return (
    <div className={styles.listWrap}>
      <h1>组件1：{props.title}</h1>
      <p>引用ant list组件，支持滚动加载</p>
    </div>
  );
}
