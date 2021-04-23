import { resolve } from 'path';
import routes from './routes'

export const proxyURL = 'http://172.16.0.118:31000';

const config = {
  routes,
  antd:{},
  dva: {
    immer: true, // 开启dva-immer
    hmr: true, // 开启模块热加载(热更新)
  },
  dynamicImport: false,
  targets: {
    ie: 9,
    chrome: 49,
    firefox: 45,
    safari: 10,
    edge: 13,
    ios: 10
  },
  cssLoader: {
    localsConvention: 'camelCase'
  },
  alias: {
    components: resolve(__dirname, './src/components'),
    utils: resolve(__dirname, './src/utils'),
    config: resolve(__dirname, './src/utils/config'),
  },
  proxy: {
    '/api': {
      target: proxyURL,
      changeOrigin: true,
    },
    '/WebCore': {
      target: proxyURL,
      changeOrigin: true,
    },
  },
  publicPath: '/',
  history: {
    type: 'hash'
  },
  ignoreMomentLocale: true, // 忽略 moment 的 locale 文件，用于减少尺寸
};
export default config;
