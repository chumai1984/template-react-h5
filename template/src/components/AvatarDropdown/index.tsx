import { Avatar, Menu, Spin, Dropdown } from 'antd';
import {LogoutOutlined} from '@ant-design/icons';
import React from 'react';
import { connect } from 'dva';
import { history } from 'umi';
import { PROXY_URL } from '@/utils/config'
import styles from './index.less';


class AvatarDropdown extends React.Component<any> {
  onMenuClick = (event: any) => {
    const { key } = event;

    if (key === 'logout') {
      const { dispatch } = this.props;
      dispatch({
        type: 'global/logout',
      });
    }
    else {
      history.push(key)
    }
  };

  render(): React.ReactNode {
    const { userInfo } = this.props;

    const menuHeaderDropdown = (
      <Menu selectedKeys={[]} onClick={this.onMenuClick}>
        <Menu.Item key="logout">
          <LogoutOutlined />
          退出登录
        </Menu.Item>
      </Menu>
    );
    return userInfo && userInfo.Name ? (
      <Dropdown className={styles.menu} overlay={menuHeaderDropdown}>
        <span>
          <Avatar size="small" src={`${PROXY_URL}${userInfo.Avatar}`} alt="avatar" />
          <span>{userInfo.Name}</span>
        </span>
      </Dropdown>
    ) : (
      <Spin
        size="small"
        style={{
          marginLeft: 8,
          marginRight: 8,
        }}
      />
    );
  }
}

export default connect(({global}: any) => ({userInfo: global.userInfo}))(AvatarDropdown);
