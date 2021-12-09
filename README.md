react 三件套：

react react-dom react-router-dom

redux 三件套：

redux react-redux redux-thunk （redux-logger）react-hot-loader

服务器三件套：

express express-http-proxy axios

devDependencies

babel 三件套：

@babel/core @babel/preset-env @babel/preset-react

webpack 全家桶：

webpack webpack-cli webpack-dev-server webpack-merge webpack-node-externals webpack-dev-middleware webpack-hot-middleware

babel-loader less less-loader css-loader style-loader file-loader isomorphic-style-loader

mock 数据接口：

<!-- https://api.apiopen.top/api.html#cd202f2d79344e2a8a88b1a5efd6f91a -->

<!-- home 接口 -->

https://api.apiopen.top/getJoke?page=1&count=2&type=video

<!-- news 接口 -->

https://api.apiopen.top/getWangYiNews

<!-- detail 接口 -->

https://api.apiopen.top/getSingleJoke?sid=28654780

注水：把服务端渲染的数据放到 window.content
脱水：客户端渲染的时候把数据拿出来直接使用

1. 事件的添加

服务端使用 react-dom/server 的 renderToString 方法的时候，只能够处理 HTML，而不能处理事件，服务端没有客户端的 click，mouseout 等事件，
所以需要把事件注册到 DOM 上

同构：同构渲染简单来说就是一份代码，服务端先通过服务端渲染，生成 html 以及初始化数据，客户端拿到代码和初始化数据后，通过对 html 的 dom 进行 patch 和事件绑定对 dom 进行客户端激活

直接这样使用，我们就可以在页面上看到对应的 css 样式

- 但是这样有两个问题
  - 第一个问题是，浏览器必须要开启 js，如果不开启 js，那么样式是不生效的
  - 第二个问题是，当我们的页面刷新频率过快，并且不使用缓存，那么页面有非常明显的抖动

store 为什么要分两种：
store 的创建分为两种，一种是客户端，另外一种是服务端，而且每一个端的 store 都要分开，作为一个方法调用，这样做的目的是客户端的话，每一个用户都有一个客户端，使用的是自己的 store 里的数据，但是服务端不一样，无论有多少个客户端，服务端只有一个，所以，为了避免每个用户的 store 数据混乱，所以我们把服务端的 store 作为一个方法调用，这样，每个用户调用服务端 store 的时候，就有一个自己的方法，调用的是自己的数据，这样，数据就不会混乱


  // a. 服务端怎么知道它要获取数据
  // b. 客户端怎么告诉服务端它需要数据

  // 普通 csr 在 componentDidMount 生命周期函数进行异步数据的获取

  //   当浏览器发送请求时，服务器接受到请求，这时候服务器和客户端的 store 都是空的，紧接着客户端执行 componentDidMount 生命周期中的函数，获取到数据并渲染到页面，然而服务器端始终不会执行 componentDidMount，因此不会拿到数据，这也导致服务器端的 store 始终是空的。换而言之，关于异步数据的操作始终只是客户端渲染。
  //   让服务端获得数据的操作执行一遍，以达到真正的服务端渲染的效果

