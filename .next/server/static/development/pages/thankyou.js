module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Explainer/index.js":
/*!***************************************!*\
  !*** ./components/Explainer/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/Sezayi/Workspace/goodup-landing/components/Explainer/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import { useSpring, animated } from 'react-spring';
// const calc = (x, y) => [-(y - window.innerHeight / 2) / 50, (x - window.innerWidth / 2) / 50, 1.1]
// const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

function Explainer() {
  // // const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 250, friction: 40 } }))
  // const style = {
  //   // transform: props.xys.interpolate(trans),
  //   backgroundImage: "url(/static/ebook-cover.png",
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center center',
  //   boxShadow: '0px 10px 30px -5px rgba(0, 0, 0, 0.3)',
  // }
  return __jsx("div", {
    className: "flex flex-1 bg-descriptive justify-center items-center h-screen",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("div", {
    className: "w-2/3 lgg:w2/3 xl:w-1/2 h-auto lg:h-xxxxl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("img", {
    src: "/static/ebook-cover.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Explainer);

/***/ }),

/***/ "./components/GaWrapper/index.js":
/*!***************************************!*\
  !*** ./components/GaWrapper/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GaWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _GoogleAnalytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../GoogleAnalytics */ "./components/GoogleAnalytics/index.js");
var _jsxFileName = "/Users/Sezayi/Workspace/goodup-landing/components/GaWrapper/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class GaWrapper extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      Object(_GoogleAnalytics__WEBPACK_IMPORTED_MODULE_1__["initGA"])();
      window.GA_INITIALIZED = true;
    }

    Object(_GoogleAnalytics__WEBPACK_IMPORTED_MODULE_1__["logPageView"])();
  }

  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, this.props.children);
  }

}

/***/ }),

/***/ "./components/GoogleAnalytics/index.js":
/*!*********************************************!*\
  !*** ./components/GoogleAnalytics/index.js ***!
  \*********************************************/
/*! exports provided: initGA, logPageView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initGA", function() { return initGA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logPageView", function() { return logPageView; });
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-ga */ "react-ga");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_0__);
// googleAnalytics.js

const initGA = () => {
  react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.initialize("UA-xxxxxxxxx-1");
};
const logPageView = () => {
  react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.set({
    page: window.location.pathname
  });
  react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.pageview(window.location.pathname);
};

/***/ }),

/***/ "./components/Layout/index.js":
/*!************************************!*\
  !*** ./components/Layout/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/Sezayi/Workspace/goodup-landing/components/Layout/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function Layout(props) {
  return __jsx("div", {
    className: "jsx-4293174121" + " " + "flex flex-col lg:h-full lg:flex-row height",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, props.children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4293174121",
    __self: this
  }, "@font-face{font-family:\"Edmondsans\";src:url(\"/static/fonts/Edmondsans-Regular.otf\");font-display:auto;font-style:normal;}@font-face{font-family:\"Edmondsans-medium\";src:url(\"/static/fonts/Edmondsans-Medium.otf\");font-display:auto;font-style:normal;font-weight:500;}.font-edmondsans{font-family:\"Edmondsans\";}.font-edmondsans-medium{font-family:\"Edmondsans-medium\";}.a{-webkit-text-decoration:underline;text-decoration:underline;color:#3C96DC;}::-webkit-scrollbar{width:0px;background:transparent;-ms-overflow-style:none;-webkit-scrollbar-width:none;-moz-scrollbar-width:none;-ms-scrollbar-width:none;scrollbar-width:none;}.height{height:100vh;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9TZXpheWkvV29ya3NwYWNlL2dvb2R1cC1sYW5kaW5nL2NvbXBvbmVudHMvTGF5b3V0L2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUt5QixBQUdvQyxBQU1PLEFBT1AsQUFHTyxBQUdKLEFBSWhCLEFBTUMsVUFMWSxHQU0zQixZQTdCa0QsQUFhbEQsT0FQaUQsQUFVakQsQ0FRNEIsd0JBQ0gsR0FOUCxhQWxCRSxDQW1CcEIsS0Fib0IsWUFMQSxNQU1BLFlBTHBCLE1BTWtCLGdCQUNsQiwyQkFnQkEiLCJmaWxlIjoiL1VzZXJzL1NlemF5aS9Xb3Jrc3BhY2UvZ29vZHVwLWxhbmRpbmcvY29tcG9uZW50cy9MYXlvdXQvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBMYXlvdXQocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbGc6aC1mdWxsIGxnOmZsZXgtcm93IGhlaWdodFwiPlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJFZG1vbmRzYW5zXCI7XG4gICAgICAgICAgc3JjOiB1cmwoXCIvc3RhdGljL2ZvbnRzL0VkbW9uZHNhbnMtUmVndWxhci5vdGZcIik7XG4gICAgICAgICAgZm9udC1kaXNwbGF5OiBhdXRvO1xuICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgfVxuICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJFZG1vbmRzYW5zLW1lZGl1bVwiO1xuICAgICAgICAgIHNyYzogdXJsKFwiL3N0YXRpYy9mb250cy9FZG1vbmRzYW5zLU1lZGl1bS5vdGZcIik7XG4gICAgICAgICAgZm9udC1kaXNwbGF5OiBhdXRvO1xuICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICB9XG4gICAgICAgIC5mb250LWVkbW9uZHNhbnMge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkVkbW9uZHNhbnNcIjtcbiAgICAgICAgfVxuICAgICAgICAuZm9udC1lZG1vbmRzYW5zLW1lZGl1bSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiRWRtb25kc2Fucy1tZWRpdW1cIjtcbiAgICAgICAgfVxuICAgICAgICAuYSB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgIGNvbG9yOiAjM0M5NkRDO1xuICAgICAgICB9XG4gICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICAgICAgd2lkdGg6IDBweDsgIC8qIFJlbW92ZSBzY3JvbGxiYXIgc3BhY2UgKi9cbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyAgLyogT3B0aW9uYWw6IGp1c3QgbWFrZSBzY3JvbGxiYXIgaW52aXNpYmxlICovXG4gICAgICAgICAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7IC8qIElFIDExICovXG4gICAgICAgICAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7IC8qIEZpcmVmb3ggNjQgKi9cbiAgICAgICAgfVxuICAgICAgICAuaGVpZ2h0IHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdfQ== */\n/*@ sourceURL=/Users/Sezayi/Workspace/goodup-landing/components/Layout/index.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Thankyou/index.js":
/*!**************************************!*\
  !*** ./components/Thankyou/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return thankyou; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spring */ "react-spring");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/Sezayi/Workspace/goodup-landing/components/Thankyou/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function thankyou() {
  const props = Object(react_spring__WEBPACK_IMPORTED_MODULE_1__["useSpring"])({
    from: {
      left: '0%',
      top: '50%',
      width: '50%',
      height: '100%',
      background: '#fff'
    },
    to: async next => {
      while (1) {
        await next({
          left: '0%',
          top: '50%',
          width: '100%',
          height: '100%',
          background: '#fff'
        });
      }
    }
  });
  const delay = Object(react_spring__WEBPACK_IMPORTED_MODULE_1__["useSpring"])({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    },
    delay: 300
  });
  return __jsx(react_spring__WEBPACK_IMPORTED_MODULE_1__["animated"].div, {
    className: "flex justify-center items-center",
    style: props,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("div", {
    className: "flex flex-col justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("h1", {
    className: "font-edmondsans-medium text-24 text-center lg:text-48 text-descriptive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Enjoy\xA0the\xA0read!"), "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0", __jsx("h2", {
    className: "font-edmondsans text-16 text-center lg:text-32 text-descriptive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Your\xA0ebook\xA0is\xA0being delivered\xA0to\xA0your\xA0inbox."), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_1__["animated"].div, {
    className: "self-center mt-40 sm:w-1/2",
    style: delay,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("img", {
    className: "",
    src: "../../static/beamup.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }))));
}

/***/ }),

/***/ "./pages/thankyou.js":
/*!***************************!*\
  !*** ./pages/thankyou.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/index.css */ "./styles/index.css");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Explainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Explainer */ "./components/Explainer/index.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout/index.js");
/* harmony import */ var _components_Thankyou__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Thankyou */ "./components/Thankyou/index.js");
/* harmony import */ var _components_GaWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/GaWrapper */ "./components/GaWrapper/index.js");
var _jsxFileName = "/Users/Sezayi/Workspace/goodup-landing/pages/thankyou.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





/* harmony default export */ __webpack_exports__["default"] = (() => __jsx(_components_GaWrapper__WEBPACK_IMPORTED_MODULE_5__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx(_components_Explainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}), __jsx(_components_Thankyou__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}))));

/***/ }),

/***/ "./styles/index.css":
/*!**************************!*\
  !*** ./styles/index.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!*********************************!*\
  !*** multi ./pages/thankyou.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Sezayi/Workspace/goodup-landing/pages/thankyou.js */"./pages/thankyou.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-ga":
/*!***************************!*\
  !*** external "react-ga" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),

/***/ "react-spring":
/*!*******************************!*\
  !*** external "react-spring" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-spring");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=thankyou.js.map