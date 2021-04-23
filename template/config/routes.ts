const routes = [
    {
      path: '/user',
      component: '../layouts/UserLayout',
      routes: [
        {
          path: '/user/login',
          component: './user/login/index',
        },
      ],
    },
    {
      path: '/',
      component: '../layouts/SecurityLayout',
      routes: [
        {
          path: '/',
          component: '../layouts/BasicLayout',
          routes: [
            {
              path: '/',
              redirect: '/default',
            },
            {
              path: '/default',
              name: '首页',
              key: 'default',
              component: './default/'
            },
            {
              path: '/category',
              key: 'category',
              name: '分类',
              component: './category/'
            },
            {
              path: '/shop',
              key: 'shop',
              name: '购物车',
              component: './shop/'
            },
            {
              path: '/my',
              key: 'my',
              name: '我的',
              component: './my/'
            },
            {
              path: '/componentModel', // 全局组件Models，可加入路由提前渲染
              routes: []
            },
            {
              component: './404',
            }
          ]
        },
      ],
    },
]

export default routes;