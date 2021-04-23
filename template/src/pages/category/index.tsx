import React from 'react';
import { connect } from "dva";
import styles from './index.less';

class categoryView extends React.Component<any>{
  state = {
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className={styles.categoryWrap}>category html~</div>
    );
  }
}

export default connect(({ loading }: any) => ({ loading }))(categoryView)
