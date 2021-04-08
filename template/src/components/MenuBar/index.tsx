import React, { PureComponent } from 'react';
import { TabBar } from 'antd-mobile';
import Router from 'umi/router';
import {WIcon} from '../../utils/tool';
import config from '../../utils/config';
const {PRIMARY_COLOR} = config 

const tabBarData = [
  {
    title: '首页',
    icon: 'iconbianji',
    selectedIcon: 'iconbianji',
    link: '/default',
  },
  {
    title: '分类',
    icon: 'iconsearch',
    selectedIcon: 'iconsearch',
    link: '/category',
  },
  {
    title: '购物车',
    icon: 'iconbianji',
    selectedIcon: 'iconbianji',
    link: '/shop',
  },
  {
    title: '我的',
    icon: 'iconyidakaiwenjian',
    selectedIcon: 'iconyidakaiwenjian',
    link: '/my',
  },
];

class MenuBar extends PureComponent {
  render() {
    const { isMenubar, children, pathname } = this.props;
    return (
      <TabBar hidden={isMenubar} tintColor={PRIMARY_COLOR}>
        {tabBarData.map(({ title, icon, selectedIcon, link }) => (
          <TabBar.Item
            key={link}
            title={title}
            icon={<WIcon type={icon} />}
            selectedIcon={<WIcon type={selectedIcon} />}
            selected={pathname == link}
            onPress={() => Router.push(`${link}`)}
          >
            {/* 匹配到的children路由进行渲染 */}
            {children.props.location.pathname === link && children}
          </TabBar.Item>
        ))}
      </TabBar>
    );
  }
}

export default MenuBar;
