import React from 'react';
import {connect} from "dva";
import { Form, Input, Button } from 'antd';
import config from '@/utils/config'
import Cookies from 'js-cookie';
import styles from './index.scss';

class loginView extends React.Component {
  state = {}
  componentDidMount() {
  }

  // 登录
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        Cookies.set('token', values.token)
        location.href = '/'
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div className={styles.loginWrap}>
        <h1 className='align-center'>inbiz - 开发者登录</h1>
        <div style={{width: '90%',margin: '20px auto'}}>
          <Form className="login-form">
            <Form.Item>
              {getFieldDecorator('token')(
                <Input placeholder="请输入token进行登录" />,
              )}
            </Form.Item>
            <Form.Item className='align-center'>
              <div className={'text-center pointer'}>进入站点：<a target={'_blank'} href={config && config.PROXY_URL}>{config && config.PROXY_URL}</a></div>
            </Form.Item>
            <Form.Item className='align-center'>
              <Button onClick={this.handleSubmit} type='primary'>登录</Button>
            </Form.Item>
          </Form>


        </div>
      </div>
    );
  }
}

const WarpForm = Form.create<any>()(loginView)
export default connect(({login}: any)=>({login}))(WarpForm)
