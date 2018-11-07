/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Routes.js":
/*!***********************!*\
  !*** ./src/Routes.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _Home = __webpack_require__(/*! ./containers/Home */ "./src/containers/Home/index.js");

var _Home2 = _interopRequireDefault(_Home);

var _Login = __webpack_require__(/*! ./containers/Login */ "./src/containers/Login/index.js");

var _Login2 = _interopRequireDefault(_Login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [{
    path: "/",
    component: _Home2.default,
    exact: true,
    loadData: _Home2.default.loadData,
    key: "home"
}, {
    path: "/login",
    component: _Login2.default,
    exact: true,
    key: "login"
}];

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header() {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h3',
            null,
            'Header'
        ),
        _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/' },
            'Home'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/login' },
            'Login'
        )
    );
};

exports.default = Header;

/***/ }),

/***/ "./src/containers/Home/index.js":
/*!**************************************!*\
  !*** ./src/containers/Home/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(/*! ../../components/Header */ "./src/components/Header.js");

var _Header2 = _interopRequireDefault(_Header);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _store = __webpack_require__(/*! ./store */ "./src/containers/Home/store/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
    _inherits(Home, _Component);

    function Home() {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
    }

    _createClass(Home, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.getHomeList();
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_Header2.default, null),
                _react2.default.createElement(
                    'span',
                    null,
                    'This is home component. name: ',
                    this.props.name
                ),
                _react2.default.createElement('br', null),
                this.props.list,
                _react2.default.createElement(
                    'button',
                    { onClick: function onClick() {
                            return alert('home');
                        } },
                    ' button'
                )
            );
        }
    }]);

    return Home;
}(_react.Component);

Home.loadData = function (store) {
    return store.dispatch((0, _store.getHomeList)());
};

var mapStateToProps = function mapStateToProps(state) {
    return {
        list: state.home.newsList,
        name: state.home.name
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        getHomeList: function getHomeList() {
            console.log('test');
            dispatch((0, _store.getHomeList)());
        }
    };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Home);

/***/ }),

/***/ "./src/containers/Home/store/action.js":
/*!*********************************************!*\
  !*** ./src/containers/Home/store/action.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getHomeList = undefined;

var _axios = __webpack_require__(/*! axios */ "axios");

var _axios2 = _interopRequireDefault(_axios);

var _contants = __webpack_require__(/*! ./contants */ "./src/containers/Home/store/contants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var changeList = function changeList(list) {
	return {
		type: _contants.CHANGE_LIST,
		list: list
	};
};

var getHomeList = exports.getHomeList = function getHomeList() {
	return function (dispatch) {
		return _axios2.default.get('http://47.95.113.63/ssr/api/new.json?secret=abcd').then(function (res) {
			console.log(res.data);
			dispatch(changeList(res.data));
		});
	};
};

/***/ }),

/***/ "./src/containers/Home/store/contants.js":
/*!***********************************************!*\
  !*** ./src/containers/Home/store/contants.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var CHANGE_LIST = exports.CHANGE_LIST = 'change_home_list';

/***/ }),

/***/ "./src/containers/Home/store/index.js":
/*!********************************************!*\
  !*** ./src/containers/Home/store/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getHomeList = exports.reducer = undefined;

var _reducer = __webpack_require__(/*! ./reducer */ "./src/containers/Home/store/reducer.js");

var _reducer2 = _interopRequireDefault(_reducer);

var _action = __webpack_require__(/*! ./action */ "./src/containers/Home/store/action.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.reducer = _reducer2.default;
exports.getHomeList = _action.getHomeList;

/***/ }),

/***/ "./src/containers/Home/store/reducer.js":
/*!**********************************************!*\
  !*** ./src/containers/Home/store/reducer.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _contants = __webpack_require__(/*! ./contants */ "./src/containers/Home/store/contants.js");

var defaultState = {
	name: 'zll an hj .',
	newsList: []
};

exports.default = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
	var action = arguments[1];

	switch (action.type) {
		case _contants.CHANGE_LIST:
			return _extends({}, state, {
				newsList: action.list
			});
		default:
			return state;
	}
};

/***/ }),

/***/ "./src/containers/Login/index.js":
/*!***************************************!*\
  !*** ./src/containers/Login/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(/*! ../../components/Header */ "./src/components/Header.js");

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Login = function Login() {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
            'span',
            null,
            'This is Login Pages .'
        ),
        _react2.default.createElement('br', null)
    );
};

exports.default = Login;

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(/*! express */ "express");

var _express2 = _interopRequireDefault(_express);

var _reactRouterConfig = __webpack_require__(/*! react-router-config */ "react-router-config");

var _store = __webpack_require__(/*! ../store */ "./src/store/index.js");

var _store2 = _interopRequireDefault(_store);

var _Routes = __webpack_require__(/*! ../Routes */ "./src/Routes.js");

var _Routes2 = _interopRequireDefault(_Routes);

var _utils = __webpack_require__(/*! ./utils */ "./src/server/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.use(_express2.default.static('public'));

app.get('*', function (req, res) {
	var store = (0, _store2.default)();
	// 根据路由填充store
	var matchedRoutes = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path);

	var promises = [];
	matchedRoutes.forEach(function (item) {
		if (item.route.loadData) {
			promises.push(item.route.loadData(store));
		}
	});
	Promise.all(promises).then(function () {
		res.send((0, _utils.render)(store, _Routes2.default, req));
	});
});

app.listen(3000, function () {
	return console.log('server is running at port 3000');
});

/***/ }),

/***/ "./src/server/utils.js":
/*!*****************************!*\
  !*** ./src/server/utils.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.render = undefined;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _server = __webpack_require__(/*! react-dom/server */ "react-dom/server");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var render = exports.render = function render(store, routes, req) {
	var content = (0, _server.renderToString)(_react2.default.createElement(
		_reactRedux.Provider,
		{ store: store },
		_react2.default.createElement(
			_reactRouterDom.StaticRouter,
			{ location: req.path, context: {} },
			_react2.default.createElement(
				'div',
				null,
				routes.map(function (route) {
					return _react2.default.createElement(_reactRouterDom.Route, route);
				})
			)
		)
	));
	return '\n\t\t<html>\n\t\t\t<head>\n\t\t\t\t<title>ssr</title>\n\t\t\t</head>\n\t\t\t<body>\n\t\t\t\t<div id="root">' + content + '</div>\n\t\t\t\t<script src="/index.js"></script>\n\t\t\t</body>\n\t\t</html>\n\t\t';
};

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(/*! redux */ "redux");

var _reduxThunk = __webpack_require__(/*! redux-thunk */ "redux-thunk");

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _store = __webpack_require__(/*! ../containers/Home/store */ "./src/containers/Home/store/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = (0, _redux.combineReducers)({
    home: _store.reducer
});
var getStore = function getStore() {
    return (0, _redux.createStore)(reducer, (0, _redux.applyMiddleware)(_reduxThunk2.default));
};

exports.default = getStore;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map