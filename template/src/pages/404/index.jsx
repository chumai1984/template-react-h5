import React from 'react';
import styles from './index.less';

function Body(props) {
  return <div className={styles.container}>404~</div>;
}

Body.propTypes = {};
Body.defaultProps = {};

const Page = React.memo(Body);
Page.title = 'page.404.title';

export default Page;
