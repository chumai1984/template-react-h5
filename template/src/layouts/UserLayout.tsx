import React from 'react';
import { connect } from 'dva';
// import logo from '../assets/logo.svg';
import styles from './layout.less';


class UserLayout extends React.Component {
  state = {}

  render() {
    const { children } = this.props;
    return (
      <div className={styles.container}>
        {children}
      </div>
    );
  }
};

export default connect(({ global }: any) => ({ global }))(UserLayout);
