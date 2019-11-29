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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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
var _jsxFileName = "/Users/sezayi/sites/goodup-landing/components/Explainer/index.js";
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
var _jsxFileName = "/Users/sezayi/sites/goodup-landing/components/GaWrapper/index.js";
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
  react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.initialize("UA-106330296-49");
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
var _jsxFileName = "/Users/sezayi/sites/goodup-landing/components/Layout/index.js";


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
  }, "@font-face{font-family:\"Edmondsans\";src:url(\"/static/fonts/Edmondsans-Regular.otf\");font-display:auto;font-style:normal;}@font-face{font-family:\"Edmondsans-medium\";src:url(\"/static/fonts/Edmondsans-Medium.otf\");font-display:auto;font-style:normal;font-weight:500;}.font-edmondsans{font-family:\"Edmondsans\";}.font-edmondsans-medium{font-family:\"Edmondsans-medium\";}.a{-webkit-text-decoration:underline;text-decoration:underline;color:#3C96DC;}::-webkit-scrollbar{width:0px;background:transparent;-ms-overflow-style:none;-webkit-scrollbar-width:none;-moz-scrollbar-width:none;-ms-scrollbar-width:none;scrollbar-width:none;}.height{height:100vh;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZXpheWkvc2l0ZXMvZ29vZHVwLWxhbmRpbmcvY29tcG9uZW50cy9MYXlvdXQvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS3lCLEFBR29DLEFBTU8sQUFPUCxBQUdPLEFBR0osQUFJaEIsQUFNQyxVQUxZLEdBTTNCLFlBN0JrRCxBQWFsRCxPQVBpRCxBQVVqRCxDQVE0Qix3QkFDSCxHQU5QLGFBbEJFLENBbUJwQixLQWJvQixZQUxBLE1BTUEsWUFMcEIsTUFNa0IsZ0JBQ2xCLDJCQWdCQSIsImZpbGUiOiIvVXNlcnMvc2V6YXlpL3NpdGVzL2dvb2R1cC1sYW5kaW5nL2NvbXBvbmVudHMvTGF5b3V0L2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gTGF5b3V0KHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGxnOmgtZnVsbCBsZzpmbGV4LXJvdyBoZWlnaHRcIj5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiRWRtb25kc2Fuc1wiO1xuICAgICAgICAgIHNyYzogdXJsKFwiL3N0YXRpYy9mb250cy9FZG1vbmRzYW5zLVJlZ3VsYXIub3RmXCIpO1xuICAgICAgICAgIGZvbnQtZGlzcGxheTogYXV0bztcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIH1cbiAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiRWRtb25kc2Fucy1tZWRpdW1cIjtcbiAgICAgICAgICBzcmM6IHVybChcIi9zdGF0aWMvZm9udHMvRWRtb25kc2Fucy1NZWRpdW0ub3RmXCIpO1xuICAgICAgICAgIGZvbnQtZGlzcGxheTogYXV0bztcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgfVxuICAgICAgICAuZm9udC1lZG1vbmRzYW5zIHtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJFZG1vbmRzYW5zXCI7XG4gICAgICAgIH1cbiAgICAgICAgLmZvbnQtZWRtb25kc2Fucy1tZWRpdW0ge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkVkbW9uZHNhbnMtbWVkaXVtXCI7XG4gICAgICAgIH1cbiAgICAgICAgLmEge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgICBjb2xvcjogIzNDOTZEQztcbiAgICAgICAgfVxuICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICAgIHdpZHRoOiAwcHg7ICAvKiBSZW1vdmUgc2Nyb2xsYmFyIHNwYWNlICovXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgIC8qIE9wdGlvbmFsOiBqdXN0IG1ha2Ugc2Nyb2xsYmFyIGludmlzaWJsZSAqL1xuICAgICAgICAgICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAvKiBJRSAxMSAqL1xuICAgICAgICAgICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAvKiBGaXJlZm94IDY0ICovXG4gICAgICAgIH1cbiAgICAgICAgLmhlaWdodCB7XG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXX0= */\n/*@ sourceURL=/Users/sezayi/sites/goodup-landing/components/Layout/index.js */"));
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
var _jsxFileName = "/Users/sezayi/sites/goodup-landing/components/Thankyou/index.js";

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
var _jsxFileName = "/Users/sezayi/sites/goodup-landing/pages/thankyou.js";

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

/***/ 5:
/*!*********************************!*\
  !*** multi ./pages/thankyou.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sezayi/sites/goodup-landing/pages/thankyou.js */"./pages/thankyou.js");


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