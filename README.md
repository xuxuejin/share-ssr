# React-SSR 从 0 到 1

> Created By 许学进， based on react, redux, axios and less

## SSR 解决的问题

1. 首屏渲染

- 传统：客户端请求 -> 服务端返回 jsp,php,asp 页面
- CSR：客户端请求 -> 服务端返回 html 模板，加载 js，js 请求数据渲染 dom
- SSR：客户端请求 -> 服务端返回 html 页面，不依赖 js

2. 更好的 SEO

## 目录

- `public`: 静态资源文件夹，其中存放的文件作为静态资源直接获取
- `src`
  - `assets`: 资源文件夹，一般存放图片
  - `client`: 客户端入口文件及其它客户端代码
  - `components`: 公用组件，一般存放公共组件
  - `pages`: 路由组件，一个目录代表一个页面
  - `server`: 服务端入口文件及其它服务端代码
  - `store`: redux 数据治理
  - `utils`: 工具函数
  - `APP.js`: 布局组件
  - `global.less`: 全局样式
  - `routes.js`: 路由表，所有页面的路由文件由此统一管理
- `.babelrc`: `babel`配置文件，一般不需要编辑
- `document.ejs`: html 模板文件
- `webpack.base.conf.js`: `webpack` 基础配置文件
- `webpack.client.conf.js`: `webpack` 客户端打包配置文件
- `webpack.dev.conf.js`: `webpack` 本地开发环境配置文件
- `webpack.server.conf.js`: `webpack` 服务端打包配置文件

## pm2 启动项目

> pm2 start build/server.js --name ssr

## mock 数据接口

1. home 列表

> https://api.apiopen.top/getJoke?page=1&count=2&type=video

2. 新闻列表

> https://api.apiopen.top/getWangYiNews

3. detail 详情

> https://api.apiopen.top/getSingleJoke?sid=28654780

## SSR 改造

1. 样式处理

- Q1：不开启 js，样式无效
- Q2：页面闪烁

2. 数据处理

- Q1：服务端怎么知道它要获取数据
- Q2：客户端和服务端数据怎么同步
- Q3：注水和脱水的流程

3. 优化

- Q1：4xx 5xx 返回正确的状态码
- Q2：重定向处理
- Q3：客户端渲染补偿和性能优化
- Q4：SEO
- Q5：其它
  - 缓存策略
  - 降级渲染：监控`cpu`、内存占用过多，就切换`spa`

[参考](https://ssr.vuejs.org/zh/guide/data.html#%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%AB%AF%E6%95%B0%E6%8D%AE%E9%A2%84%E5%8F%96-server-data-fetching)

## SSR 缺点

1. 开发复杂度高

2. 服务器性能开销大
