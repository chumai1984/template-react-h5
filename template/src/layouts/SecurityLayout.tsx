import React from 'react';
import { connect } from 'dva';
import PageLoading from '@/components/PageLoading';
import Cookies from 'js-cookie';
import { NODE_ENV } from '@/utils/config'
import { history } from 'umi';
import {getSearchString} from '@/utils/tool'


class SecurityLayout extends React.Component<any> {
  state = {
    isReady: false,
    isLogin: false,
  };

  componentDidMount() {
    setTimeout(_=>{
      this.setState({
        isReady: true,
        isLogin: true,
      });
    }, 500)

    // @@没有token的处理
    let urlToken = getSearchString('token');
    if (urlToken) Cookies.set('token', urlToken);
    let token = urlToken || Cookies.get('token')
    if (!token) {
      // 不同环境不同的处理策略
      this.envJump();
      return;
    }

    const { dispatch } = this.props;
    if (dispatch) {
      // 获取全局变量，环境变量、用户信息等
      // dispatch({
      //   type: 'global/getUser',
      //   payload: {token}
      // }).then(res => {
      //   this.setState({
      //     isLogin: true
      //   })
      // })
    }
  }

  // 未登录/过期 开发环境与生产环境业务逻辑
  envJump = () => {
    if (NODE_ENV == 'development') {
      return history.push({
        pathname: '/user/login',
        query: {redirect: window.location.href}
      })
    } else { // 生产环境
      let returnUrl = window.location.href;
      window.location.href = `${window.location.origin}/api/auth/login?returnUrl=${returnUrl}`
    }
  }

  render() {
    const { isReady, isLogin } = this.state;
    const { children, loading } = this.props;

    if ((!isLogin && loading) || !isReady) {
      return <PageLoading />;
    }

    return children;
  }
}

export default connect(({user, loading}:any) => ({user, loading}))(SecurityLayout);
