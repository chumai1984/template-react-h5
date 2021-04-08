import React from 'react';
import { connect } from "dva";

class searchView extends React.Component<any>{
  state = {
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>pageB html~</div>
    );
  }
}

export default connect(({ loading }: any) => ({ loading }))(searchView)
