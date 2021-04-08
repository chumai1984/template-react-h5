import React from 'react';
import styles from './index.scss';
import { connect } from 'dva';

class contentView extends React.Component<any> {
  state = {};

  componentDidMount() {
  }

  render() {
    return (
      <div className={styles.contentWrap}>
        default html page~
      </div>
    );
  }
}

export default connect(({ content, loading }: any) => ({ content, loading }))(contentView);
