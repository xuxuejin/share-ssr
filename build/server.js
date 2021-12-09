/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Header */ \"./src/components/Header/index.js\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_WithStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/WithStyle */ \"./src/components/WithStyle/index.js\");\n/* harmony import */ var _global_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./global.less */ \"./src/global.less\");\n/* harmony import */ var _global_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_global_less__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nvar App = function App(props) {\n  var routes = props.route.routes;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], props), (0,react_router_config__WEBPACK_IMPORTED_MODULE_2__.renderRoutes)(routes));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_components_WithStyle__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(App, (_global_less__WEBPACK_IMPORTED_MODULE_4___default())));\n\n//# sourceURL=webpack://react-demo/./src/App.js?");

/***/ }),

/***/ "./src/client/request.js":
/*!*******************************!*\
  !*** ./src/client/request.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n  baseURL: \"https://api.apiopen.top\"\n})); // 列表接口\n// https://api.apiopen.top/getJoke?page=1&count=2&type=video\n// news 接口\n// https://api.apiopen.top/getWangYiNews\n// detail 接口\n// https://api.apiopen.top/getSingleJoke?sid=28654780\n\n//# sourceURL=webpack://react-demo/./src/client/request.js?");

/***/ }),

/***/ "./src/components/Header/index.js":
/*!****************************************!*\
  !*** ./src/components/Header/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_WithStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/WithStyle */ \"./src/components/WithStyle/index.js\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.less */ \"./src/components/Header/index.less\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nvar Header = function Header() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: (_index_less__WEBPACK_IMPORTED_MODULE_3___default().header)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/\"\n  }, \"home\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/news\"\n  }, \"news\")));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_components_WithStyle__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Header, (_index_less__WEBPACK_IMPORTED_MODULE_3___default())));\n\n//# sourceURL=webpack://react-demo/./src/components/Header/index.js?");

/***/ }),

/***/ "./src/components/WithStyle/index.js":
/*!*******************************************!*\
  !*** ./src/components/WithStyle/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar WithStyle = function WithStyle(OldComponent, styles) {\n  // 处理样式\n  return function (props) {\n    if (props.staticContext) {\n      props.staticContext.csses.push(styles._getCss());\n    }\n\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(OldComponent, props);\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WithStyle);\n\n//# sourceURL=webpack://react-demo/./src/components/WithStyle/index.js?");

/***/ }),

/***/ "./src/pages/Detail/index.js":
/*!***********************************!*\
  !*** ./src/pages/Detail/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es6_regexp_match_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.match.js */ \"core-js/modules/es6.regexp.match.js\");\n/* harmony import */ var core_js_modules_es6_regexp_match_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_match_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_WithStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/WithStyle */ \"./src/components/WithStyle/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store_detail_createActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store/detail/createActions */ \"./src/store/detail/createActions.js\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.less */ \"./src/pages/Detail/index.less\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nvar Detail = function Detail(props) {\n  var propGetDetailData = props.propGetDetailData,\n      detailData = props.detail.detailData,\n      params = props.match.params;\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    propGetDetailData(params.id);\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"main\", {\n    className: (_index_less__WEBPACK_IMPORTED_MODULE_5___default().detail)\n  }, detailData.text);\n};\n\nvar mapStateToProps = function mapStateToProps(_ref) {\n  var detail = _ref.detail;\n  return {\n    detail: detail\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    propGetDetailData: function propGetDetailData(id) {\n      dispatch((0,_store_detail_createActions__WEBPACK_IMPORTED_MODULE_4__.getDetailData)(id));\n    }\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, mapDispatchToProps)((0,_components_WithStyle__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Detail, (_index_less__WEBPACK_IMPORTED_MODULE_5___default()))));\n\n//# sourceURL=webpack://react-demo/./src/pages/Detail/index.js?");

/***/ }),

/***/ "./src/pages/Home/index.js":
/*!*********************************!*\
  !*** ./src/pages/Home/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.number.constructor.js */ \"core-js/modules/es6.number.constructor.js\");\n/* harmony import */ var core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.map.js */ \"core-js/modules/es6.array.map.js\");\n/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.function.name.js */ \"core-js/modules/es6.function.name.js\");\n/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es6_array_is_array_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.array.is-array.js */ \"core-js/modules/es6.array.is-array.js\");\n/* harmony import */ var core_js_modules_es6_array_is_array_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_is_array_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.symbol.js */ \"core-js/modules/es6.symbol.js\");\n/* harmony import */ var core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es6_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.string.iterator.js */ \"core-js/modules/es6.string.iterator.js\");\n/* harmony import */ var core_js_modules_es6_string_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.object.to-string.js */ \"core-js/modules/es6.object.to-string.js\");\n/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es6.array.iterator.js */ \"core-js/modules/es6.array.iterator.js\");\n/* harmony import */ var core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom.iterable.js */ \"core-js/modules/web.dom.iterable.js\");\n/* harmony import */ var core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var core_js_modules_es6_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es6.array.slice.js */ \"core-js/modules/es6.array.slice.js\");\n/* harmony import */ var core_js_modules_es6_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var core_js_modules_es6_array_from_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es6.array.from.js */ \"core-js/modules/es6.array.from.js\");\n/* harmony import */ var core_js_modules_es6_array_from_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_from_js__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _components_WithStyle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/components/WithStyle */ \"./src/components/WithStyle/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _store_home_createActions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/store/home/createActions */ \"./src/store/home/createActions.js\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./index.less */ \"./src/pages/Home/index.less\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var _assets_bg_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/assets/bg.png */ \"./src/assets/bg.png\");\n\n\n\n\n\n\n\n\n\n\n\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\n\nvar HomeRaw = function HomeRaw(props) {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(1),\n      _useState2 = _slicedToArray(_useState, 2),\n      page = _useState2[0],\n      setPage = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(5),\n      _useState4 = _slicedToArray(_useState3, 1),\n      count = _useState4[0];\n\n  var propGetHomeData = props.propGetHomeData,\n      homeData = props.home.homeData;\n  (0,react__WEBPACK_IMPORTED_MODULE_11__.useEffect)(function () {\n    propGetHomeData({\n      page: page,\n      count: count\n    });\n  }, [page]);\n\n  var prev = function prev() {\n    if (page === 1) {\n      return;\n    }\n\n    setPage(Number(page) - 1);\n  };\n\n  var next = function next() {\n    setPage(Number(page) + 1);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default().createElement((react__WEBPACK_IMPORTED_MODULE_11___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_15__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default().createElement(\"title\", null, \"homes\\u6807\\u9898\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default().createElement(\"div\", {\n    className: (_index_less__WEBPACK_IMPORTED_MODULE_17___default().banner)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default().createElement(\"img\", {\n    src: _assets_bg_png__WEBPACK_IMPORTED_MODULE_18__[\"default\"]\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default().createElement(\"div\", {\n    className: (_index_less__WEBPACK_IMPORTED_MODULE_17___default().btnWrap)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default().createElement(\"button\", {\n    onClick: prev\n  }, \"\\u4E0A\\u4E00\\u9875\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default().createElement(\"span\", null, \" \\u7B2C\", page, \"\\u9875 \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default().createElement(\"button\", {\n    onClick: next\n  }, \"\\u4E0B\\u4E00\\u9875\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default().createElement(\"ul\", {\n    className: (_index_less__WEBPACK_IMPORTED_MODULE_17___default().listWrap)\n  }, homeData.length && homeData.map(function (item) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default().createElement(\"li\", {\n      key: item.sid\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default().createElement(\"div\", {\n      className: (_index_less__WEBPACK_IMPORTED_MODULE_17___default().avatar)\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default().createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default().createElement(\"img\", {\n      src: item.header\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default().createElement(\"strong\", null, item.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default().createElement(\"div\", {\n      className: (_index_less__WEBPACK_IMPORTED_MODULE_17___default().info)\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default().createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Link, {\n      to: \"/detail/\".concat(item.sid)\n    }, item.text)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default().createElement(\"span\", null, item.passtime)));\n  })));\n};\n\nvar mapStateToProps = function mapStateToProps(_ref) {\n  var home = _ref.home;\n  return {\n    home: home\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    propGetHomeData: function propGetHomeData(_ref2) {\n      var page = _ref2.page,\n          count = _ref2.count;\n      dispatch((0,_store_home_createActions__WEBPACK_IMPORTED_MODULE_16__.getHomeData)({\n        page: page,\n        count: count\n      }));\n    }\n  };\n};\n\nvar Home = (0,react_redux__WEBPACK_IMPORTED_MODULE_14__.connect)(mapStateToProps, mapDispatchToProps)((0,_components_WithStyle__WEBPACK_IMPORTED_MODULE_13__[\"default\"])(HomeRaw, (_index_less__WEBPACK_IMPORTED_MODULE_17___default()))); // 解决获取不到路由挂载方法\n\nHome.getInitialState = function (store) {\n  return store.dispatch((0,_store_home_createActions__WEBPACK_IMPORTED_MODULE_16__.getHomeData)({\n    page: 1,\n    count: 5\n  }));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n//# sourceURL=webpack://react-demo/./src/pages/Home/index.js?");

/***/ }),

/***/ "./src/pages/News/index.js":
/*!*********************************!*\
  !*** ./src/pages/News/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.map.js */ \"core-js/modules/es6.array.map.js\");\n/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.object.to-string.js */ \"core-js/modules/es6.object.to-string.js\");\n/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es6_date_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.date.to-string.js */ \"core-js/modules/es6.date.to-string.js\");\n/* harmony import */ var core_js_modules_es6_date_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_date_to_string_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es6_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string.js */ \"core-js/modules/es6.regexp.to-string.js\");\n/* harmony import */ var core_js_modules_es6_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_WithStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/WithStyle */ \"./src/components/WithStyle/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _store_news_createActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/store/news/createActions */ \"./src/store/news/createActions.js\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index.less */ \"./src/pages/News/index.less\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\n\nvar NewsRaw = function NewsRaw(props) {\n  var propGetNewsData = props.propGetNewsData,\n      newsData = props.news.newsData;\n  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {\n    // \n    propGetNewsData();\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(\"ul\", {\n    className: (_index_less__WEBPACK_IMPORTED_MODULE_8___default().news)\n  }, newsData.length && newsData.map(function (item, index) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(\"li\", {\n      key: index.toString()\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(\"img\", {\n      src: item.image\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(\"h2\", null, item.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(\"span\", null, item.passtime)));\n  }));\n};\n\nvar mapStateToProps = function mapStateToProps(_ref) {\n  var news = _ref.news;\n  return {\n    news: news\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    propGetNewsData: function propGetNewsData() {\n      dispatch((0,_store_news_createActions__WEBPACK_IMPORTED_MODULE_7__.getNewsData)());\n    }\n  };\n};\n\nvar News = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.connect)(mapStateToProps, mapDispatchToProps)((0,_components_WithStyle__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(NewsRaw, (_index_less__WEBPACK_IMPORTED_MODULE_8___default())));\n\nNews.getInitialState = function (store) {\n  return store.dispatch((0,_store_news_createActions__WEBPACK_IMPORTED_MODULE_7__.getNewsData)());\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (News);\n\n//# sourceURL=webpack://react-demo/./src/pages/News/index.js?");

/***/ }),

/***/ "./src/pages/NotFound/index.js":
/*!*************************************!*\
  !*** ./src/pages/NotFound/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_WithStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/WithStyle */ \"./src/components/WithStyle/index.js\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.less */ \"./src/pages/NotFound/index.less\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar NotFound = function NotFound(props) {\n  var staticContext = props.staticContext;\n\n  if (staticContext) {\n    staticContext.NotFound = true;\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"strong\", {\n    className: (_index_less__WEBPACK_IMPORTED_MODULE_2___default().txt)\n  }, \"404\");\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_components_WithStyle__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(NotFound, (_index_less__WEBPACK_IMPORTED_MODULE_2___default())));\n\n//# sourceURL=webpack://react-demo/./src/pages/NotFound/index.js?");

/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ \"./src/App.js\");\n/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/Home */ \"./src/pages/Home/index.js\");\n/* harmony import */ var _pages_Detail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/Detail */ \"./src/pages/Detail/index.js\");\n/* harmony import */ var _pages_News__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/News */ \"./src/pages/News/index.js\");\n/* harmony import */ var _pages_NotFound__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/NotFound */ \"./src/pages/NotFound/index.js\");\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{\n  path: \"/\",\n  component: _App__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  routes: [{\n    exact: true,\n    path: \"/\",\n    component: _pages_Home__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    // 路由挂载的方法获取不到\n    loadData: _pages_Home__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getInitialState\n  }, {\n    path: \"/detail/:id\",\n    component: _pages_Detail__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    loadData: _pages_Detail__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getInitialState\n  }, {\n    path: \"/news\",\n    component: _pages_News__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    loadData: _pages_News__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getInitialState\n  }, {\n    path: \"*\",\n    component: _pages_NotFound__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  }]\n}]);\n\n//# sourceURL=webpack://react-demo/./src/routes.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express_http_proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express-http-proxy */ \"express-http-proxy\");\n/* harmony import */ var express_http_proxy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express_http_proxy__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/config */ \"./src/utils/config.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render */ \"./src/server/render.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()(); // 静态资源ok\n\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default()[\"static\"](\"public\")); // 请求第三发接口\n\napp.use(\"/openapi\", function (req, res, next) {\n  axios__WEBPACK_IMPORTED_MODULE_4___default().get(\"https://api.apiopen.top\".concat(req.path)).then(function (_ref) {\n    var status = _ref.status,\n        data = _ref.data;\n\n    if (status === 200) {\n      res.send(data);\n    } else {\n      throw new Error('第三方接口请求报错了');\n    }\n  })[\"catch\"](function (err) {\n    console.log(err);\n  });\n}); // 接口正确\n// app.get(\"/api/getSchoolList\", (req, res) => {\n//   let schoolList = [\n//     { id: 1, name: \"大学1\" },\n//     { id: 2, name: \"大学2\" },\n//     { id: 3, name: \"大学3\" },\n//   ];\n//   return res.json({ schoolList });\n// });\n// 拦截所有的请求\n\napp.get(\"*\", function (req, res) {\n  // console.log(req.path)\n  (0,_render__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(req, res);\n}); // 服务ok\n\napp.listen(_utils_config__WEBPACK_IMPORTED_MODULE_2__.PORT, function (err) {\n  if (err) {\n    console.log(err);\n  } else {\n    console.log(\"Server is running at http://localhost:\".concat(_utils_config__WEBPACK_IMPORTED_MODULE_2__.PORT));\n  }\n});\n\n//# sourceURL=webpack://react-demo/./src/server/index.js?");

/***/ }),

/***/ "./src/server/render.js":
/*!******************************!*\
  !*** ./src/server/render.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es6_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.for-each.js */ \"core-js/modules/es6.array.for-each.js\");\n/* harmony import */ var core_js_modules_es6_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_string_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.string.iterator.js */ \"core-js/modules/es6.string.iterator.js\");\n/* harmony import */ var core_js_modules_es6_string_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.to-string.js */ \"core-js/modules/es6.object.to-string.js\");\n/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.array.iterator.js */ \"core-js/modules/es6.array.iterator.js\");\n/* harmony import */ var core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom.iterable.js */ \"core-js/modules/web.dom.iterable.js\");\n/* harmony import */ var core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es6_promise_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.promise.js */ \"core-js/modules/es6.promise.js\");\n/* harmony import */ var core_js_modules_es6_promise_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_es6_date_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.date.to-string.js */ \"core-js/modules/es6.date.to-string.js\");\n/* harmony import */ var core_js_modules_es6_date_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_date_to_string_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var core_js_modules_es6_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string.js */ \"core-js/modules/es6.regexp.to-string.js\");\n/* harmony import */ var core_js_modules_es6_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/store */ \"./src/store/index.js\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! isomorphic-style-loader/StyleContext */ \"isomorphic-style-loader/StyleContext\");\n/* harmony import */ var isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../routes */ \"./src/routes.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n // 1. 处理样式\n// 2. 获取数据\n// 3. 细节优化\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (req, res) {\n  // 1. 样式处理\n  var context = {\n    csses: []\n  };\n  var promises = []; // 2. 解析路由\n\n  var matchedRoutes = (0,react_router_config__WEBPACK_IMPORTED_MODULE_14__.matchRoutes)(_routes__WEBPACK_IMPORTED_MODULE_16__[\"default\"], req.path); // console.log(matchedRoutes)\n\n  var store = (0,_store__WEBPACK_IMPORTED_MODULE_10__.getServerStore)(req); // 3. 服务端获取数据\n\n  matchedRoutes.forEach(function (item) {\n    var loadData = item.route.loadData;\n\n    if (loadData) {\n      promises.push(loadData(store));\n    }\n  });\n  Promise.all(promises).then(function () {\n    var state = store.getState();\n    console.log(state); // 3. 获取数据\n\n    var domContent = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_11__.renderToString)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_9__.Provider, {\n      store: store\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.StaticRouter, {\n      location: req.path,\n      context: context\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement((isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_15___default().Provider), null, (0,react_router_config__WEBPACK_IMPORTED_MODULE_14__.renderRoutes)(_routes__WEBPACK_IMPORTED_MODULE_16__[\"default\"])))));\n    var cssStr = context.csses.length ? context.csses.join(\"\\n\") : \"\";\n    var helmet = react_helmet__WEBPACK_IMPORTED_MODULE_13__.Helmet.renderStatic();\n    var html = \"\\n    <!DOCTYPE html>\\n    <html lang=\\\"en\\\">\\n    <head>\\n    <meta charset=\\\"UTF-8\\\">\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1, shrink-to-fit=no\\\" />\\n    <link rel=\\\"shortcut icon\\\" type=\\\"image/x-icon\\\" href=\\\"/favicon.png\\\"/>\\n    \".concat(helmet.title.toString(), \"\\n    \").concat(helmet.meta.toString(), \"\\n    <style>\").concat(cssStr, \"</style>\\n    <title>react-ssr</title>\\n    </head>\\n    <body>\\n    <div id=\\\"app\\\">\").concat(domContent, \"</div>\\n    <script>\\n    window.context = {\\n      state: \").concat(JSON.stringify(state), \"\\n    }\\n    </script>\\n    <script src=\\\"/client.js\\\">\\n    </script>\\n    </body>\\n    </html>\\n      \"); // 404 返回状态码\n\n    if (context.NotFound) {\n      res.status(404);\n    } // 4. 输出页面\n\n\n    res.send(html);\n  });\n});\n\n//# sourceURL=webpack://react-demo/./src/server/render.js?");

/***/ }),

/***/ "./src/server/request.js":
/*!*******************************!*\
  !*** ./src/server/request.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/config */ \"./src/utils/config.js\");\n\n\nvar serverAxios = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n  baseURL: \"http://localhost:\".concat(_utils_config__WEBPACK_IMPORTED_MODULE_1__.PORT, \"/openapi\")\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (serverAxios);\n\n//# sourceURL=webpack://react-demo/./src/server/request.js?");

/***/ }),

/***/ "./src/store/detail/actionTypes.js":
/*!*****************************************!*\
  !*** ./src/store/detail/actionTypes.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GET_DETAIL_DATA\": () => (/* binding */ GET_DETAIL_DATA)\n/* harmony export */ });\nvar GET_DETAIL_DATA = \"GET_DETAIL_DATA\";\n\n//# sourceURL=webpack://react-demo/./src/store/detail/actionTypes.js?");

/***/ }),

/***/ "./src/store/detail/createActions.js":
/*!*******************************************!*\
  !*** ./src/store/detail/createActions.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getDetailData\": () => (/* binding */ getDetailData)\n/* harmony export */ });\n/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ \"./src/store/detail/actionTypes.js\");\n\nvar getDetailData = function getDetailData(id) {\n  return function (dispatch, getState, axiosInstance) {\n    return axiosInstance.get(\"/getSingleJoke?sid=\".concat(id)).then(function (res) {\n      if (res.status === 200) {\n        var resData = res.data.result;\n        dispatch({\n          type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__.GET_DETAIL_DATA,\n          payload: resData\n        });\n      }\n    });\n  };\n};\n\n//# sourceURL=webpack://react-demo/./src/store/detail/createActions.js?");

/***/ }),

/***/ "./src/store/detail/reducer.js":
/*!*************************************!*\
  !*** ./src/store/detail/reducer.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es6_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.define-property.js */ \"core-js/modules/es6.object.define-property.js\");\n/* harmony import */ var core_js_modules_es6_object_define_property_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.object.keys.js */ \"core-js/modules/es6.object.keys.js\");\n/* harmony import */ var core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.symbol.js */ \"core-js/modules/es6.symbol.js\");\n/* harmony import */ var core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es6_array_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.array.filter.js */ \"core-js/modules/es6.array.filter.js\");\n/* harmony import */ var core_js_modules_es6_array_filter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_filter_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es6_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.object.get-own-property-descriptor.js */ \"core-js/modules/es6.object.get-own-property-descriptor.js\");\n/* harmony import */ var core_js_modules_es6_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es6_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.array.for-each.js */ \"core-js/modules/es6.array.for-each.js\");\n/* harmony import */ var core_js_modules_es6_array_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_es7_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es7.object.get-own-property-descriptors.js */ \"core-js/modules/es7.object.get-own-property-descriptors.js\");\n/* harmony import */ var core_js_modules_es7_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var core_js_modules_es6_object_define_properties_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es6.object.define-properties.js */ \"core-js/modules/es6.object.define-properties.js\");\n/* harmony import */ var core_js_modules_es6_object_define_properties_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_define_properties_js__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./actionTypes */ \"./src/store/detail/actionTypes.js\");\n\n\n\n\n\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar initState = {\n  detailData: []\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actionTypes__WEBPACK_IMPORTED_MODULE_8__.GET_DETAIL_DATA:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        detailData: action.payload\n      });\n\n    default:\n      return _objectSpread({}, state);\n  }\n});\n\n//# sourceURL=webpack://react-demo/./src/store/detail/reducer.js?");

/***/ }),

/***/ "./src/store/home/actionTypes.js":
/*!***************************************!*\
  !*** ./src/store/home/actionTypes.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GET_HOME_DATA\": () => (/* binding */ GET_HOME_DATA)\n/* harmony export */ });\nvar GET_HOME_DATA = \"GET_HOME_DATA\";\n\n//# sourceURL=webpack://react-demo/./src/store/home/actionTypes.js?");

/***/ }),

/***/ "./src/store/home/createActions.js":
/*!*****************************************!*\
  !*** ./src/store/home/createActions.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getHomeData\": () => (/* binding */ getHomeData)\n/* harmony export */ });\n/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ \"./src/store/home/actionTypes.js\");\n\nvar getHomeData = function getHomeData(_ref) {\n  var _ref$page = _ref.page,\n      page = _ref$page === void 0 ? 1 : _ref$page,\n      _ref$count = _ref.count,\n      count = _ref$count === void 0 ? 5 : _ref$count;\n  return function (dispatch, getState, axiosInstance) {\n    // console.log(dispatch);\n    // console.log(getState());\n    // console.log(axiosInstance);\n    return axiosInstance.get(\"/getJoke?page=\".concat(page, \"&count=\").concat(count, \"&type=video\")).then(function (res) {\n      if (res.status === 200) {\n        var resData = res.data.result;\n        dispatch({\n          type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__.GET_HOME_DATA,\n          payload: resData\n        });\n      }\n    });\n  };\n};\n\n//# sourceURL=webpack://react-demo/./src/store/home/createActions.js?");

/***/ }),

/***/ "./src/store/home/reducer.js":
/*!***********************************!*\
  !*** ./src/store/home/reducer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es6_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.define-property.js */ \"core-js/modules/es6.object.define-property.js\");\n/* harmony import */ var core_js_modules_es6_object_define_property_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.object.keys.js */ \"core-js/modules/es6.object.keys.js\");\n/* harmony import */ var core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.symbol.js */ \"core-js/modules/es6.symbol.js\");\n/* harmony import */ var core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es6_array_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.array.filter.js */ \"core-js/modules/es6.array.filter.js\");\n/* harmony import */ var core_js_modules_es6_array_filter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_filter_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es6_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.object.get-own-property-descriptor.js */ \"core-js/modules/es6.object.get-own-property-descriptor.js\");\n/* harmony import */ var core_js_modules_es6_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es6_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.array.for-each.js */ \"core-js/modules/es6.array.for-each.js\");\n/* harmony import */ var core_js_modules_es6_array_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_es7_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es7.object.get-own-property-descriptors.js */ \"core-js/modules/es7.object.get-own-property-descriptors.js\");\n/* harmony import */ var core_js_modules_es7_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var core_js_modules_es6_object_define_properties_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es6.object.define-properties.js */ \"core-js/modules/es6.object.define-properties.js\");\n/* harmony import */ var core_js_modules_es6_object_define_properties_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_define_properties_js__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./actionTypes */ \"./src/store/home/actionTypes.js\");\n\n\n\n\n\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar initState = {\n  homeData: []\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actionTypes__WEBPACK_IMPORTED_MODULE_8__.GET_HOME_DATA:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        homeData: action.payload\n      });\n\n    default:\n      return _objectSpread({}, state);\n  }\n});\n\n//# sourceURL=webpack://react-demo/./src/store/home/reducer.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerStore\": () => (/* binding */ getServerStore),\n/* harmony export */   \"getClientStore\": () => (/* binding */ getClientStore)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _resucers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resucers */ \"./src/store/resucers.js\");\n/* harmony import */ var _client_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/client/request */ \"./src/client/request.js\");\n/* harmony import */ var _server_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/server/request */ \"./src/server/request.js\");\n\n\n\n\n\nvar getServerStore = function getServerStore() {\n  return (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_resucers__WEBPACK_IMPORTED_MODULE_2__[\"default\"], (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default().withExtraArgument(_server_request__WEBPACK_IMPORTED_MODULE_4__[\"default\"])));\n};\nvar getClientStore = function getClientStore() {\n  var initState = window.context.state;\n  return (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_resucers__WEBPACK_IMPORTED_MODULE_2__[\"default\"], initState, (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default().withExtraArgument(_client_request__WEBPACK_IMPORTED_MODULE_3__[\"default\"])));\n};\n\n//# sourceURL=webpack://react-demo/./src/store/index.js?");

/***/ }),

/***/ "./src/store/news/actionTypes.js":
/*!***************************************!*\
  !*** ./src/store/news/actionTypes.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GET_NEWS_DATA\": () => (/* binding */ GET_NEWS_DATA)\n/* harmony export */ });\nvar GET_NEWS_DATA = \"GET_NEWS_DATA\";\n\n//# sourceURL=webpack://react-demo/./src/store/news/actionTypes.js?");

/***/ }),

/***/ "./src/store/news/createActions.js":
/*!*****************************************!*\
  !*** ./src/store/news/createActions.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getNewsData\": () => (/* binding */ getNewsData)\n/* harmony export */ });\n/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ \"./src/store/news/actionTypes.js\");\n\nvar getNewsData = function getNewsData() {\n  return function (dispatch, getState, axiosInstance) {\n    return axiosInstance.get(\"/getWangYiNews\").then(function (res) {\n      if (res.status === 200) {\n        var resData = res.data.result;\n        dispatch({\n          type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__.GET_NEWS_DATA,\n          payload: resData\n        });\n      }\n    });\n  };\n};\n\n//# sourceURL=webpack://react-demo/./src/store/news/createActions.js?");

/***/ }),

/***/ "./src/store/news/reducer.js":
/*!***********************************!*\
  !*** ./src/store/news/reducer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es6_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.define-property.js */ \"core-js/modules/es6.object.define-property.js\");\n/* harmony import */ var core_js_modules_es6_object_define_property_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.object.keys.js */ \"core-js/modules/es6.object.keys.js\");\n/* harmony import */ var core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.symbol.js */ \"core-js/modules/es6.symbol.js\");\n/* harmony import */ var core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es6_array_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.array.filter.js */ \"core-js/modules/es6.array.filter.js\");\n/* harmony import */ var core_js_modules_es6_array_filter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_filter_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es6_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.object.get-own-property-descriptor.js */ \"core-js/modules/es6.object.get-own-property-descriptor.js\");\n/* harmony import */ var core_js_modules_es6_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es6_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.array.for-each.js */ \"core-js/modules/es6.array.for-each.js\");\n/* harmony import */ var core_js_modules_es6_array_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_es7_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es7.object.get-own-property-descriptors.js */ \"core-js/modules/es7.object.get-own-property-descriptors.js\");\n/* harmony import */ var core_js_modules_es7_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var core_js_modules_es6_object_define_properties_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es6.object.define-properties.js */ \"core-js/modules/es6.object.define-properties.js\");\n/* harmony import */ var core_js_modules_es6_object_define_properties_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_define_properties_js__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./actionTypes */ \"./src/store/news/actionTypes.js\");\n\n\n\n\n\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar initState = {\n  newsData: []\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actionTypes__WEBPACK_IMPORTED_MODULE_8__.GET_NEWS_DATA:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        newsData: action.payload\n      });\n\n    default:\n      return _objectSpread({}, state);\n  }\n});\n\n//# sourceURL=webpack://react-demo/./src/store/news/reducer.js?");

/***/ }),

/***/ "./src/store/resucers.js":
/*!*******************************!*\
  !*** ./src/store/resucers.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_reducer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/reducer.js */ \"./src/store/home/reducer.js\");\n/* harmony import */ var _detail_reducer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail/reducer.js */ \"./src/store/detail/reducer.js\");\n/* harmony import */ var _news_reducer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news/reducer.js */ \"./src/store/news/reducer.js\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n  home: _home_reducer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  news: _news_reducer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  detail: _detail_reducer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n}));\n\n//# sourceURL=webpack://react-demo/./src/store/resucers.js?");

/***/ }),

/***/ "./src/utils/config.js":
/*!*****************************!*\
  !*** ./src/utils/config.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PORT\": () => (/* binding */ PORT)\n/* harmony export */ });\nvar PORT = 8899;\n\n//# sourceURL=webpack://react-demo/./src/utils/config.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/less-loader/dist/cjs.js!./src/components/Header/index.less":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/less-loader/dist/cjs.js!./src/components/Header/index.less ***!
  \***************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../../assets/eye.png */ \"./src/assets/eye.png\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".index-header-Sl8M\\\\+ {\\n  position: relative;\\n  width: 100%;\\n  height: 40px;\\n  line-height: 40px;\\n  color: #000;\\n  border-bottom: 1px solid orange;\\n  display: flex;\\n  justify-content: center;\\n}\\n.index-header-Sl8M\\\\+ h1 {\\n  position: absolute;\\n  top: 4px;\\n  left: 4px;\\n  width: 32px;\\n  height: 32px;\\n  background: skyblue url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") no-repeat center center / contain;\\n}\\n.index-header-Sl8M\\\\+ a {\\n  margin-right: 20px;\\n}\\n\", \"\"]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"header\": \"index-header-Sl8M+\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n\n\n//# sourceURL=webpack://react-demo/./src/components/Header/index.less?./node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B2%5D.use%5B1%5D!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/less-loader/dist/cjs.js!./src/global.less":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/less-loader/dist/cjs.js!./src/global.less ***!
  \**********************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  padding: 0;\\n  margin: 0;\\n  list-style: none;\\n  border: none;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = ___CSS_LOADER_EXPORT___;\n\n\n//# sourceURL=webpack://react-demo/./src/global.less?./node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B2%5D.use%5B1%5D!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/less-loader/dist/cjs.js!./src/pages/Detail/index.less":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/less-loader/dist/cjs.js!./src/pages/Detail/index.less ***!
  \**********************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".index-detail-wpsLX {\\n  margin: 200px auto;\\n  width: 400px;\\n  word-break: break-all;\\n  background-color: palegreen;\\n}\\n\", \"\"]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"detail\": \"index-detail-wpsLX\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n\n\n//# sourceURL=webpack://react-demo/./src/pages/Detail/index.less?./node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B2%5D.use%5B1%5D!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/less-loader/dist/cjs.js!./src/pages/Home/index.less":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/less-loader/dist/cjs.js!./src/pages/Home/index.less ***!
  \********************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".index-banner-83-8C {\\n  width: 100%;\\n  height: 280px;\\n  overflow: hidden;\\n}\\n.index-banner-83-8C img {\\n  width: 100%;\\n}\\n.index-btnWrap-TsL5i {\\n  width: 400px;\\n  height: 42px;\\n  margin: 50px auto;\\n  display: flex;\\n  justify-content: space-around;\\n  align-items: center;\\n}\\n.index-btnWrap-TsL5i button {\\n  padding: 5px;\\n  background-color: ghostwhite;\\n  color: pink;\\n  font-size: 22px;\\n  border: 1px solid springgreen;\\n  border-radius: 5px;\\n  cursor: pointer;\\n}\\n.index-listWrap-9JLZW {\\n  padding: 0 10px;\\n}\\n.index-listWrap-9JLZW li {\\n  display: flex;\\n  flex-direction: column;\\n  padding: 10px;\\n  border-bottom: 1px solid springgreen;\\n}\\n.index-listWrap-9JLZW .index-avatar-pRXkk {\\n  display: flex;\\n}\\n.index-listWrap-9JLZW .index-avatar-pRXkk span {\\n  width: 40px;\\n  height: 40px;\\n  border: 1px solid orchid;\\n}\\n.index-listWrap-9JLZW .index-avatar-pRXkk span img {\\n  width: 100%;\\n  height: 100%;\\n}\\n.index-listWrap-9JLZW .index-avatar-pRXkk strong {\\n  margin-left: 10px;\\n}\\n.index-listWrap-9JLZW .index-info-5HraP {\\n  text-align: left;\\n}\\n.index-listWrap-9JLZW p {\\n  flex: 0;\\n  width: 400px;\\n  margin: 10px 0;\\n  color: darkblue;\\n  font-size: 20px;\\n}\\n.index-listWrap-9JLZW span {\\n  font-size: 18px;\\n}\\n\", \"\"]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"banner\": \"index-banner-83-8C\",\n\t\"btnWrap\": \"index-btnWrap-TsL5i\",\n\t\"listWrap\": \"index-listWrap-9JLZW\",\n\t\"avatar\": \"index-avatar-pRXkk\",\n\t\"info\": \"index-info-5HraP\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n\n\n//# sourceURL=webpack://react-demo/./src/pages/Home/index.less?./node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B2%5D.use%5B1%5D!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/less-loader/dist/cjs.js!./src/pages/News/index.less":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/less-loader/dist/cjs.js!./src/pages/News/index.less ***!
  \********************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".index-news-\\\\+EQyp {\\n  margin: 0 10px;\\n}\\n.index-news-\\\\+EQyp li {\\n  display: flex;\\n  padding: 10px 0;\\n}\\n.index-news-\\\\+EQyp li img {\\n  margin-right: 10px;\\n  width: 60px;\\n  height: 60px;\\n}\\n.index-news-\\\\+EQyp li div h2 {\\n  font-weight: normal;\\n}\\n.index-news-\\\\+EQyp li div span {\\n  font-size: 14px;\\n}\\n\", \"\"]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"news\": \"index-news-+EQyp\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n\n\n//# sourceURL=webpack://react-demo/./src/pages/News/index.less?./node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B2%5D.use%5B1%5D!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/less-loader/dist/cjs.js!./src/pages/NotFound/index.less":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/less-loader/dist/cjs.js!./src/pages/NotFound/index.less ***!
  \************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".index-txt-yGdQZ {\\n  padding: 100px 0;\\n  text-align: center;\\n  color: yellowgreen;\\n  font-size: 20px;\\n}\\n\", \"\"]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"txt\": \"index-txt-yGdQZ\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n\n\n//# sourceURL=webpack://react-demo/./src/pages/NotFound/index.less?./node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B2%5D.use%5B1%5D!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://react-demo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://react-demo/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/components/Header/index.less":
/*!******************************************!*\
  !*** ./src/components/Header/index.less ***!
  \******************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/less-loader/dist/cjs.js!./index.less */ \"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/less-loader/dist/cjs.js!./src/components/Header/index.less\");\n    var insertCss = __webpack_require__(/*! !../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.id, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack://react-demo/./src/components/Header/index.less?");

/***/ }),

/***/ "./src/global.less":
/*!*************************!*\
  !*** ./src/global.less ***!
  \*************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../node_modules/less-loader/dist/cjs.js!./global.less */ \"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/less-loader/dist/cjs.js!./src/global.less\");\n    var insertCss = __webpack_require__(/*! !../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.id, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack://react-demo/./src/global.less?");

/***/ }),

/***/ "./src/pages/Detail/index.less":
/*!*************************************!*\
  !*** ./src/pages/Detail/index.less ***!
  \*************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/less-loader/dist/cjs.js!./index.less */ \"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/less-loader/dist/cjs.js!./src/pages/Detail/index.less\");\n    var insertCss = __webpack_require__(/*! !../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.id, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack://react-demo/./src/pages/Detail/index.less?");

/***/ }),

/***/ "./src/pages/Home/index.less":
/*!***********************************!*\
  !*** ./src/pages/Home/index.less ***!
  \***********************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/less-loader/dist/cjs.js!./index.less */ \"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/less-loader/dist/cjs.js!./src/pages/Home/index.less\");\n    var insertCss = __webpack_require__(/*! !../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.id, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack://react-demo/./src/pages/Home/index.less?");

/***/ }),

/***/ "./src/pages/News/index.less":
/*!***********************************!*\
  !*** ./src/pages/News/index.less ***!
  \***********************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/less-loader/dist/cjs.js!./index.less */ \"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/less-loader/dist/cjs.js!./src/pages/News/index.less\");\n    var insertCss = __webpack_require__(/*! !../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.id, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack://react-demo/./src/pages/News/index.less?");

/***/ }),

/***/ "./src/pages/NotFound/index.less":
/*!***************************************!*\
  !*** ./src/pages/NotFound/index.less ***!
  \***************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/less-loader/dist/cjs.js!./index.less */ \"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/less-loader/dist/cjs.js!./src/pages/NotFound/index.less\");\n    var insertCss = __webpack_require__(/*! !../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.id, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack://react-demo/./src/pages/NotFound/index.less?");

/***/ }),

/***/ "./node_modules/isomorphic-style-loader/insertCss.js":
/*!***********************************************************!*\
  !*** ./node_modules/isomorphic-style-loader/insertCss.js ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
eval("/*! Isomorphic Style Loader | MIT License | https://github.com/kriasoft/isomorphic-style-loader */\n\n\n\nvar inserted = {};\n\nfunction b64EncodeUnicode(str) {\n  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {\n    return String.fromCharCode(\"0x\" + p1);\n  }));\n}\n\nfunction removeCss(ids) {\n  ids.forEach(function (id) {\n    if (--inserted[id] <= 0) {\n      var elem = document.getElementById(id);\n\n      if (elem) {\n        elem.parentNode.removeChild(elem);\n      }\n    }\n  });\n}\n\nfunction insertCss(styles, _temp) {\n  var _ref = _temp === void 0 ? {} : _temp,\n      _ref$replace = _ref.replace,\n      replace = _ref$replace === void 0 ? false : _ref$replace,\n      _ref$prepend = _ref.prepend,\n      prepend = _ref$prepend === void 0 ? false : _ref$prepend,\n      _ref$prefix = _ref.prefix,\n      prefix = _ref$prefix === void 0 ? 's' : _ref$prefix;\n\n  var ids = [];\n\n  for (var i = 0; i < styles.length; i++) {\n    var _styles$i = styles[i],\n        moduleId = _styles$i[0],\n        css = _styles$i[1],\n        media = _styles$i[2],\n        sourceMap = _styles$i[3];\n    var id = \"\" + prefix + moduleId + \"-\" + i;\n    ids.push(id);\n\n    if (inserted[id]) {\n      if (!replace) {\n        inserted[id]++;\n        continue;\n      }\n    }\n\n    inserted[id] = 1;\n    var elem = document.getElementById(id);\n    var create = false;\n\n    if (!elem) {\n      create = true;\n      elem = document.createElement('style');\n      elem.setAttribute('type', 'text/css');\n      elem.id = id;\n\n      if (media) {\n        elem.setAttribute('media', media);\n      }\n    }\n\n    var cssText = css;\n\n    if (sourceMap && typeof btoa === 'function') {\n      cssText += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + b64EncodeUnicode(JSON.stringify(sourceMap)) + \"*/\";\n      cssText += \"\\n/*# sourceURL=\" + sourceMap.file + \"?\" + id + \"*/\";\n    }\n\n    if ('textContent' in elem) {\n      elem.textContent = cssText;\n    } else {\n      elem.styleSheet.cssText = cssText;\n    }\n\n    if (create) {\n      if (prepend) {\n        document.head.insertBefore(elem, document.head.childNodes[0]);\n      } else {\n        document.head.appendChild(elem);\n      }\n    }\n  }\n\n  return removeCss.bind(null, ids);\n}\n\nmodule.exports = insertCss;\n//# sourceMappingURL=insertCss.js.map\n\n\n//# sourceURL=webpack://react-demo/./node_modules/isomorphic-style-loader/insertCss.js?");

/***/ }),

/***/ "./src/assets/bg.png":
/*!***************************!*\
  !*** ./src/assets/bg.png ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"http://localhost:8899/068f099c396a1590ede1e705394a74ee.png\");\n\n//# sourceURL=webpack://react-demo/./src/assets/bg.png?");

/***/ }),

/***/ "./src/assets/eye.png":
/*!****************************!*\
  !*** ./src/assets/eye.png ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"data:image/png;base64,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\");\n\n//# sourceURL=webpack://react-demo/./src/assets/eye.png?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "core-js/modules/es6.array.filter.js":
/*!******************************************************!*\
  !*** external "core-js/modules/es6.array.filter.js" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es6.array.filter.js");

/***/ }),

/***/ "core-js/modules/es6.array.for-each.js":
/*!********************************************************!*\
  !*** external "core-js/modules/es6.array.for-each.js" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es6.array.for-each.js");

/***/ }),

/***/ "core-js/modules/es6.array.from.js":
/*!****************************************************!*\
  !*** external "core-js/modules/es6.array.from.js" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es6.array.from.js");

/***/ }),

/***/ "core-js/modules/es6.array.is-array.js":
/*!********************************************************!*\
  !*** external "core-js/modules/es6.array.is-array.js" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es6.array.is-array.js");

/***/ }),

/***/ "core-js/modules/es6.array.iterator.js":
/*!********************************************************!*\
  !*** external "core-js/modules/es6.array.iterator.js" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es6.array.iterator.js");

/***/ }),

/***/ "core-js/modules/es6.array.map.js":
/*!***************************************************!*\
  !*** external "core-js/modules/es6.array.map.js" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es6.array.map.js");

/***/ }),

/***/ "core-js/modules/es6.array.slice.js":
/*!*****************************************************!*\
  !*** external "core-js/modules/es6.array.slice.js" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es6.array.slice.js");

/***/ }),

/***/ "core-js/modules/es6.date.to-string.js":
/*!********************************************************!*\
  !*** external "core-js/modules/es6.date.to-string.js" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es6.date.to-string.js");

/***/ }),

/***/ "core-js/modules/es6.function.name.js":
/*!*******************************************************!*\
  !*** external "core-js/modules/es6.function.name.js" ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es6.function.name.js");

/***/ }),

/***/ "core-js/modules/es6.number.constructor.js":
/*!************************************************************!*\
  !*** external "core-js/modules/es6.number.constructor.js" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es6.number.constructor.js");

/***/ }),

/***/ "core-js/modules/es6.object.define-properties.js":
/*!******************************************************************!*\
  !*** external "core-js/modules/es6.object.define-properties.js" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es6.object.define-properties.js");

/***/ }),

/***/ "core-js/modules/es6.object.define-property.js":
/*!****************************************************************!*\
  !*** external "core-js/modules/es6.object.define-property.js" ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es6.object.define-property.js");

/***/ }),

/***/ "core-js/modules/es6.object.get-own-property-descriptor.js":
/*!****************************************************************************!*\
  !*** external "core-js/modules/es6.object.get-own-property-descriptor.js" ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es6.object.get-own-property-descriptor.js");

/***/ }),

/***/ "core-js/modules/es6.object.keys.js":
/*!*****************************************************!*\
  !*** external "core-js/modules/es6.object.keys.js" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es6.object.keys.js");

/***/ }),

/***/ "core-js/modules/es6.object.to-string.js":
/*!**********************************************************!*\
  !*** external "core-js/modules/es6.object.to-string.js" ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es6.object.to-string.js");

/***/ }),

/***/ "core-js/modules/es6.promise.js":
/*!*************************************************!*\
  !*** external "core-js/modules/es6.promise.js" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es6.promise.js");

/***/ }),

/***/ "core-js/modules/es6.regexp.match.js":
/*!******************************************************!*\
  !*** external "core-js/modules/es6.regexp.match.js" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es6.regexp.match.js");

/***/ }),

/***/ "core-js/modules/es6.regexp.to-string.js":
/*!**********************************************************!*\
  !*** external "core-js/modules/es6.regexp.to-string.js" ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es6.regexp.to-string.js");

/***/ }),

/***/ "core-js/modules/es6.string.iterator.js":
/*!*********************************************************!*\
  !*** external "core-js/modules/es6.string.iterator.js" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es6.string.iterator.js");

/***/ }),

/***/ "core-js/modules/es6.symbol.js":
/*!************************************************!*\
  !*** external "core-js/modules/es6.symbol.js" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es6.symbol.js");

/***/ }),

/***/ "core-js/modules/es7.object.get-own-property-descriptors.js":
/*!*****************************************************************************!*\
  !*** external "core-js/modules/es7.object.get-own-property-descriptors.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es7.object.get-own-property-descriptors.js");

/***/ }),

/***/ "core-js/modules/web.dom.iterable.js":
/*!******************************************************!*\
  !*** external "core-js/modules/web.dom.iterable.js" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/web.dom.iterable.js");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "express-http-proxy":
/*!*************************************!*\
  !*** external "express-http-proxy" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("express-http-proxy");

/***/ }),

/***/ "isomorphic-style-loader/StyleContext":
/*!*******************************************************!*\
  !*** external "isomorphic-style-loader/StyleContext" ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("isomorphic-style-loader/StyleContext");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-helmet");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-config");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-thunk");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/index.js");
/******/ 	
/******/ })()
;