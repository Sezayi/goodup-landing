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
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spring */ "react-spring");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/sezayi/sites/goodup-landing/components/Explainer/index.js";



const calc = (x, y) => [-(y - window.innerHeight / 2) / 50, (x - window.innerWidth / 2) / 50, 1.1];

const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function Explainer() {
  const [props, set] = Object(react_spring__WEBPACK_IMPORTED_MODULE_1__["useSpring"])(() => ({
    xys: [0, 0, 1],
    config: {
      mass: 5,
      tension: 250,
      friction: 40
    }
  }));
  const style = {
    transform: props.xys.interpolate(trans),
    backgroundImage: "url(http://www.coppersunbooks.com/wp-content/uploads/2018/09/Purpose-eBook-Cover.jpg",
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    boxShadow: '0px 10px 30px -5px rgba(0, 0, 0, 0.3)'
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-1 bg-descriptive justify-center items-center h-screen",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_1__["animated"].div, {
    className: "w-1/2 h-xxxl lg:h-xxxxl bg-grey image",
    onMouseMove: ({
      clientX: x,
      clientY: y
    }) => set({
      xys: calc(x, y)
    }),
    onMouseLeave: () => set({
      xys: [0, 0, 1]
    }),
    style: style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }));
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


class GaWrapper extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      Object(_GoogleAnalytics__WEBPACK_IMPORTED_MODULE_1__["initGA"])();
      window.GA_INITIALIZED = true;
    }

    Object(_GoogleAnalytics__WEBPACK_IMPORTED_MODULE_1__["logPageView"])();
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
var _jsxFileName = "/Users/sezayi/sites/goodup-landing/components/Layout/index.js";



function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4293174121" + " " + "flex flex-col lg:h-full lg:flex-row height",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, props.children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4293174121",
    __self: this
  }, "@font-face{font-family:\"Edmondsans\";src:url(\"/static/fonts/Edmondsans-Regular.otf\");font-display:auto;font-style:normal;}@font-face{font-family:\"Edmondsans-medium\";src:url(\"/static/fonts/Edmondsans-Medium.otf\");font-display:auto;font-style:normal;font-weight:500;}.font-edmondsans{font-family:\"Edmondsans\";}.font-edmondsans-medium{font-family:\"Edmondsans-medium\";}.a{-webkit-text-decoration:underline;text-decoration:underline;color:#3C96DC;}::-webkit-scrollbar{width:0px;background:transparent;-ms-overflow-style:none;-webkit-scrollbar-width:none;-moz-scrollbar-width:none;-ms-scrollbar-width:none;scrollbar-width:none;}.height{height:100vh;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZXpheWkvc2l0ZXMvZ29vZHVwLWxhbmRpbmcvY29tcG9uZW50cy9MYXlvdXQvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS3lCLEFBR29DLEFBTU8sQUFPUCxBQUdPLEFBR0osQUFJaEIsQUFNQyxVQUxZLEdBTTNCLFlBN0JrRCxBQWFsRCxPQVBpRCxBQVVqRCxDQVE0Qix3QkFDSCxHQU5QLGFBbEJFLENBbUJwQixLQWJvQixZQUxBLE1BTUEsWUFMcEIsTUFNa0IsZ0JBQ2xCLDJCQWdCQSIsImZpbGUiOiIvVXNlcnMvc2V6YXlpL3NpdGVzL2dvb2R1cC1sYW5kaW5nL2NvbXBvbmVudHMvTGF5b3V0L2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gTGF5b3V0KHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGxnOmgtZnVsbCBsZzpmbGV4LXJvdyBoZWlnaHRcIj5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiRWRtb25kc2Fuc1wiO1xuICAgICAgICAgIHNyYzogdXJsKFwiL3N0YXRpYy9mb250cy9FZG1vbmRzYW5zLVJlZ3VsYXIub3RmXCIpO1xuICAgICAgICAgIGZvbnQtZGlzcGxheTogYXV0bztcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIH1cbiAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiRWRtb25kc2Fucy1tZWRpdW1cIjtcbiAgICAgICAgICBzcmM6IHVybChcIi9zdGF0aWMvZm9udHMvRWRtb25kc2Fucy1NZWRpdW0ub3RmXCIpO1xuICAgICAgICAgIGZvbnQtZGlzcGxheTogYXV0bztcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgfVxuICAgICAgICAuZm9udC1lZG1vbmRzYW5zIHtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJFZG1vbmRzYW5zXCI7XG4gICAgICAgIH1cbiAgICAgICAgLmZvbnQtZWRtb25kc2Fucy1tZWRpdW0ge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkVkbW9uZHNhbnMtbWVkaXVtXCI7XG4gICAgICAgIH1cbiAgICAgICAgLmEge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgICBjb2xvcjogIzNDOTZEQztcbiAgICAgICAgfVxuICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICAgIHdpZHRoOiAwcHg7ICAvKiBSZW1vdmUgc2Nyb2xsYmFyIHNwYWNlICovXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgIC8qIE9wdGlvbmFsOiBqdXN0IG1ha2Ugc2Nyb2xsYmFyIGludmlzaWJsZSAqL1xuICAgICAgICAgICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAvKiBJRSAxMSAqL1xuICAgICAgICAgICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAvKiBGaXJlZm94IDY0ICovXG4gICAgICAgIH1cbiAgICAgICAgLmhlaWdodCB7XG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXX0= */\n/*@ sourceURL=/Users/sezayi/sites/goodup-landing/components/Layout/index.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Signup/index.js":
/*!************************************!*\
  !*** ./components/Signup/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Signup; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/sezayi/sites/goodup-landing/components/Signup/index.js";



const firebase = __webpack_require__(/*! ../../node_modules/firebase */ "./node_modules/firebase/dist/index.node.cjs.js");

const firebaseConfig = __webpack_require__(/*! ../../fire */ "./fire.js");

class Signup extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor() {
    super();

    if (!firebase.apps.length) {
      try {
        firebase.initializeApp(firebaseConfig);
      } catch (err) {
        console.error("Firebase initialization error raised", err.stack);
      }
    }

    this.state = {
      email: "",
      company: "",
      name: "",
      hasAgreed: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.inputNameRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const usersRef = firebase.database().ref("users");
    const user = {
      email: this.state.email,
      company: this.state.company,
      name: this.state.name
    };
    this.setState({
      email: "",
      company: "",
      name: ""
    });
    usersRef.push(user, () => {
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push({
        pathname: '/thankyou'
      });
    });
  }

  componentDidMount() {
    this.inputNameRef.current.focus();
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "flex-1 flex justify-center lg:items-center flex-col",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "lg:w-3/4 px-16 lg:mt-64 overflow-x-hidden ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "font-edmondsans text-action text-24 mt-48 mb-8 lg:mt-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, "Download it for free"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      className: "font-edmondsans-medium text-descriptive text-40 mb-32",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, " ", "The complete guide to become a purpose driven company"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: this.handleSubmit,
      className: "FormFields",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: " font-edmondsans text-descriptive flex flex-col mb-24",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "mb-8 font-edmondsans-medium",
      htmlFor: "name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, "Full Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      className: "shadow-1 border border-grey rounded w-full py-12 px-8 focus:outline-none focus:border-action focus:shadow-3",
      ref: this.inputNameRef,
      type: "text",
      id: "name",
      placeholder: "First Lastname",
      name: "name",
      required: true,
      value: this.state.name,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: " font-edmondsans text-descriptive flex flex-col mb-24",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "mb-8 font-edmondsans-medium",
      htmlFor: "company",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, "Your company name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      className: "shadow-1 border border-grey rounded w-full py-12 px-8 focus:outline-none focus:border-action focus:shadow-3",
      type: "text",
      id: "company",
      required: true,
      placeholder: "i.e. The Good Company",
      name: "company",
      value: this.state.company,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "font-edmondsans text-descriptive flex flex-col mb-32",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "mb-8 font-edmondsans-medium",
      htmlFor: "name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, "Work e-mail"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      className: "shadow-1 appearance-none border border-grey rounded w-full py-12 px-8 focus:outline-none focus:border-action focus:shadow-3",
      type: "email",
      id: "email",
      required: true,
      placeholder: "you@yourwork.com",
      name: "email",
      value: this.state.email,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "font-edmondsans text-descriptive mb-32",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "checkbox",
      name: "hasAgreed",
      required: true,
      value: this.state.hasAgreed,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }), " ", "I agree to all statements in the ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "underline",
      href: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, "terms of service"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mb-32",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "font-edmondsans-medium text-white text-center w-full lg:w-2/5 rounded bg-action py-16 px-16 hover:bg-action-shade40",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }, "Download E-book")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "font-edmondsans text-descriptive",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    }, "Learn more about purpose on  ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "text-action hover:underline",
      href: "https://www.goodup.com",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    }, "www.goodup.com")))));
  }

}

/***/ }),

/***/ "./fire.js":
/*!*****************!*\
  !*** ./fire.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Your web app's Firebase configuration
module.exports = {
  apiKey: "AIzaSyDQlA5o4mFhGxG90gFJrZYADDlSI6QO_Wk",
  authDomain: "conversion-landingpage.firebaseapp.com",
  databaseURL: "https://conversion-landingpage.firebaseio.com",
  projectId: "conversion-landingpage",
  storageBucket: "",
  messagingSenderId: "587238548039",
  appId: "1:587238548039:web:8d7fb89f075322bf"
};

/***/ }),

/***/ "./node_modules/firebase/dist/index.node.cjs.js":
/*!******************************************************!*\
  !*** ./node_modules/firebase/dist/index.node.cjs.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var firebase = _interopDefault(__webpack_require__(/*! @firebase/app */ "@firebase/app"));
__webpack_require__(/*! @firebase/auth */ "@firebase/auth");
__webpack_require__(/*! @firebase/database */ "@firebase/database");
__webpack_require__(/*! @firebase/firestore */ "@firebase/firestore");
__webpack_require__(/*! @firebase/functions */ "@firebase/functions");

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = firebase;
//# sourceMappingURL=index.node.cjs.js.map


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/index.css */ "./styles/index.css");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Signup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Signup */ "./components/Signup/index.js");
/* harmony import */ var _components_Explainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Explainer */ "./components/Explainer/index.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout/index.js");
/* harmony import */ var _components_GaWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/GaWrapper */ "./components/GaWrapper/index.js");
var _jsxFileName = "/Users/sezayi/sites/goodup-landing/pages/index.js";






/* harmony default export */ __webpack_exports__["default"] = (() => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_GaWrapper__WEBPACK_IMPORTED_MODULE_5__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Explainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Signup__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
})))));

/***/ }),

/***/ "./styles/index.css":
/*!**************************!*\
  !*** ./styles/index.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sezayi/sites/goodup-landing/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@firebase/app":
/*!********************************!*\
  !*** external "@firebase/app" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@firebase/app");

/***/ }),

/***/ "@firebase/auth":
/*!*********************************!*\
  !*** external "@firebase/auth" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@firebase/auth");

/***/ }),

/***/ "@firebase/database":
/*!*************************************!*\
  !*** external "@firebase/database" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@firebase/database");

/***/ }),

/***/ "@firebase/firestore":
/*!**************************************!*\
  !*** external "@firebase/firestore" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@firebase/firestore");

/***/ }),

/***/ "@firebase/functions":
/*!**************************************!*\
  !*** external "@firebase/functions" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@firebase/functions");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

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
//# sourceMappingURL=index.js.map