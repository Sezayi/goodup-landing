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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Explainer; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/sezayi/sites/goodup-landing/components/Explainer/index.js";


class Explainer extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3366553703" + " " + "flex-1 background flex justify-center items-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3366553703" + " " + "flex justify-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "/static/ebook.png",
      alt: "GoodUp Ebook",
      width: "50%",
      className: "jsx-3366553703",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3366553703",
      __self: this
    }, ".background.jsx-3366553703{background-image:linear-gradient(to right,#291e50,#4a3a83);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZXpheWkvc2l0ZXMvZ29vZHVwLWxhbmRpbmcvY29tcG9uZW50cy9FeHBsYWluZXIvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZW9CLEFBRzBFLDJEQUMvRCIsImZpbGUiOiIvVXNlcnMvc2V6YXlpL3NpdGVzL2dvb2R1cC1sYW5kaW5nL2NvbXBvbmVudHMvRXhwbGFpbmVyL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHBsYWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGJhY2tncm91bmQgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPVwiL3N0YXRpYy9lYm9vay5wbmdcIlxuICAgICAgICAgIGFsdD1cIkdvb2RVcCBFYm9va1wiXG4gICAgICAgICAgd2lkdGg9XCI1MCVcIlxuICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmJhY2tncm91bmQge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMjkxZTUwLCAjNGEzYTgzKTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/sezayi/sites/goodup-landing/components/Explainer/index.js */"));
  }

}

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
    className: "jsx-277638355" + " " + "flex flex-col h-screen lg:flex-row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, props.children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "277638355",
    __self: this
  }, "@font-face{font-family:\"Edmondsans\";src:url(\"/static/fonts/Edmondsans-Regular.otf\");font-display:auto;font-style:normal;}@font-face{font-family:\"Edmondsans-medium\";src:url(\"/static/fonts/Edmondsans-Medium.otf\");font-display:auto;font-style:normal;font-weight:500;}.font-edmondsans{font-family:\"Edmondsans\";}.font-edmondsans-medium{font-family:\"Edmondsans-medium\";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZXpheWkvc2l0ZXMvZ29vZHVwLWxhbmRpbmcvY29tcG9uZW50cy9MYXlvdXQvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS3lCLEFBR29DLEFBTU8sQUFPUCxBQUdPLHlCQWZnQixBQWFsRCxPQVBpRCxBQVVqRCx5Q0Fmb0IsTUFNQSxZQUxBLE1BTUEsWUFMcEIsTUFNa0IsZ0JBQ2xCIiwiZmlsZSI6Ii9Vc2Vycy9zZXpheWkvc2l0ZXMvZ29vZHVwLWxhbmRpbmcvY29tcG9uZW50cy9MYXlvdXQvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBMYXlvdXQocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaC1zY3JlZW4gbGc6ZmxleC1yb3dcIj5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiRWRtb25kc2Fuc1wiO1xuICAgICAgICAgIHNyYzogdXJsKFwiL3N0YXRpYy9mb250cy9FZG1vbmRzYW5zLVJlZ3VsYXIub3RmXCIpO1xuICAgICAgICAgIGZvbnQtZGlzcGxheTogYXV0bztcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIH1cbiAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiRWRtb25kc2Fucy1tZWRpdW1cIjtcbiAgICAgICAgICBzcmM6IHVybChcIi9zdGF0aWMvZm9udHMvRWRtb25kc2Fucy1NZWRpdW0ub3RmXCIpO1xuICAgICAgICAgIGZvbnQtZGlzcGxheTogYXV0bztcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgfVxuICAgICAgICAuZm9udC1lZG1vbmRzYW5zIHtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJFZG1vbmRzYW5zXCI7XG4gICAgICAgIH1cbiAgICAgICAgLmZvbnQtZWRtb25kc2Fucy1tZWRpdW0ge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkVkbW9uZHNhbnMtbWVkaXVtXCI7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIl19 */\n/*@ sourceURL=/Users/sezayi/sites/goodup-landing/components/Layout/index.js */"));
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
      name: this.state.name
    };
    usersRef.push(user, () => {// this.props.history.push('/thankyou');
    });
    this.setState({
      email: "",
      name: ""
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
        lineNumber: 60
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "lg:w-3/4 px-16",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "font-edmondsans text-action text-32 mt-48 lg:mt-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, "Download it for free"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      className: "font-edmondsans-medium text-descriptive text-48 mb-32",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, " ", "The SME purpose Ebook"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: this.handleSubmit,
      className: "FormFields",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: " font-edmondsans text-descriptive flex flex-col mb-24",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "mb-8 font-edmondsans-medium",
      htmlFor: "name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, "Full Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      className: "shadow-1 appearance-none border rounded w-full py-12 px-8 focus:outline-none focus:border-action",
      ref: this.inputNameRef,
      type: "text",
      id: "name",
      placeholder: "John Good",
      name: "name",
      value: this.state.name,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "font-edmondsans text-descriptive flex flex-col mb-32",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "mb-8 font-edmondsans-medium",
      htmlFor: "name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, "Your work e-mail"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      className: "shadow-1 appearance-none border rounded w-full py-12 px-8 focus:outline-none focus:border-action",
      type: "email",
      id: "email",
      placeholder: "you@yourwork.com",
      name: "email",
      value: this.state.email,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "font-edmondsans text-descriptive mb-32",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
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
        lineNumber: 101
      },
      __self: this
    }), " ", "I agree to all statements in the ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, "terms of service"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mb-32 ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "font-edmondsans-medium text-white text-center w-full lg:w-2/5 rounded bg-action py-16 px-16",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, "Download E-book")))));
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
var _jsxFileName = "/Users/sezayi/sites/goodup-landing/pages/index.js";





/* harmony default export */ __webpack_exports__["default"] = (() => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Explainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Signup__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

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