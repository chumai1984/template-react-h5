# iWriter App

#umi + dva + antd

该项目主要以 [UmiJS v2.x](https://v2.umijs.org/zh/) + [DvaJS](https://dvajs.com/) 为底层框架，以[Ant Design v3.x](https://3x.ant.design/index-cn)为 UI 组件库，包含完整的前端工程化实践。


## 目录结构

    |-- mock                                  # 本地模拟数据
    |-- public                                
    |   |-- favicon.png                       # favicon
    |-- src                                   # 
    |   |-- assets                            # 本地静态资源
    |   |-- components                        # 业务通用组件
    |   |-- layout                            # 通用布局
    |   |-- models                            # 全局 dva model
    |   |-- services                          # 后台接口服务
    |   |-- pages                             # 业务页面入口和常用模板
    |   |-- global.scss                       # 全局样式
    |   |-- app.ts                            # 入口
    |-- .gitignore                            # git忽略文件
    |-- .editorconfig                         # 编辑器代码风格配置
    |-- .eslintrc                             # eslint规则
    |-- .prettierignore                       # 代码风格配置忽略文件
    |-- .prettierrc                           # 代码风格配置文件
    |-- package.json                          
    |-- README.md                              

## 快速开始

```javascript

// 安装项目
$ git clone 

$ cd app

// 安装依赖
$ yarn

// 运行
$ yarn start  

// 访问 http://localhost:8000

// 打包
$ yarn build

```

## 支持环境
IE 10+
