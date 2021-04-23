import React from 'react';
import { connect } from "dva";
import styles from './index.less';

class shopView extends React.Component<any>{
  state = {
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className={styles.shopWrap}>shop html~</div>
    );
  }
}

export default connect(({ loading }: any) => ({ loading }))(shopView)
