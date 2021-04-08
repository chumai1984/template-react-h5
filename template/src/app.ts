import createLoading from 'dva-loading';
import { message } from 'antd';

// 全局组件配置
message.config({
  duration: 2,
});

export const dva = {
  config: {
    onError(err: ErrorEvent) {
      err.preventDefault();
      console.error(err.message);
    },
  },
  plugins: [
    createLoading(),
  ],
};
