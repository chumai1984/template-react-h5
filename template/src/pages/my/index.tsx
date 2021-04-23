import React from 'react';
import { connect } from "dva";
import styles from './index.less';

class myView extends React.Component<any>{
  state = {
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className={styles.myWrap}>my html~</div>
    );
  }
}

export default connect(({ loading }: any) => ({ loading }))(myView)
