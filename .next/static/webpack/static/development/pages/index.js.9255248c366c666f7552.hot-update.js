webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Signup/index.js":
/*!************************************!*\
  !*** ./components/Signup/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Signup; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);







var _jsxFileName = "/Users/Sezayi/Workspace/goodup-landing/components/Signup/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;


var firebase = __webpack_require__(/*! ../../node_modules/firebase */ "./node_modules/firebase/dist/index.cjs.js");

var firebaseConfig = __webpack_require__(/*! ../../fire */ "./fire.js");

var Signup =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Signup, _React$Component);

  function Signup() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Signup);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Signup).call(this));

    if (!firebase.apps.length) {
      try {
        firebase.initializeApp(firebaseConfig);
      } catch (err) {
        console.error("Firebase initialization error raised", err.stack);
      }
    }

    _this.state = {
      email: "",
      company: "",
      name: "",
      hasAgreed: false
    };
    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.inputNameRef = react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef();
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Signup, [{
    key: "handleChange",
    value: function handleChange(e) {
      var target = e.target;
      var value = target.type === "checkbox" ? target.checked : target.value;
      var name = target.name;
      this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, value));
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var usersRef = firebase.database().ref("users");
      var user = {
        email: this.state.email,
        company: this.state.company,
        name: this.state.name,
        timestamp: firebase.database.ServerValue.TIMESTAMP
      };
      this.setState({
        email: "",
        company: "",
        name: ""
      });
      usersRef.push(user).then(function () {
        next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push({
          pathname: '/thankyou'
        });
      })["catch"](function (err) {
        window.alert('Oops, something went wrong' + err);
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.inputNameRef.current.focus();
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "flex-1 flex justify-center lg:items-center flex-col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, __jsx("div", {
        className: "lg:w-3/4 px-16 lg:mt-64 overflow-x-hidden ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, __jsx("h2", {
        className: "font-edmondsans text-action text-24 mt-48 mb-8 lg:mt-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "Download this ebook for free"), __jsx("h1", {
        className: "font-edmondsans-medium text-descriptive text-32 mb-24",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, " ", "The complete guide to activate employees and embed purpose in your organisation"), __jsx("form", {
        onSubmit: this.handleSubmit,
        className: "FormFields",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, __jsx("div", {
        className: " font-edmondsans text-descriptive flex flex-col mb-24",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, __jsx("label", {
        className: "mb-8 font-edmondsans-medium",
        htmlFor: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "Full Name"), __jsx("input", {
        className: "shadow-1 border border-grey rounded w-full py-12 px-8 focus:outline-none focus:border-action focus:shadow-3",
        ref: this.inputNameRef,
        type: "text",
        id: "name",
        placeholder: "Anna Green",
        name: "name",
        required: true,
        value: this.state.name,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      })), __jsx("div", {
        className: " font-edmondsans text-descriptive flex flex-col mb-24",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, __jsx("label", {
        className: "mb-8 font-edmondsans-medium",
        htmlFor: "company",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, "Your company name"), __jsx("input", {
        className: "shadow-1 border border-grey rounded w-full py-12 px-8 focus:outline-none focus:border-action focus:shadow-3",
        type: "text",
        id: "company",
        required: true,
        placeholder: "GoodUp",
        name: "company",
        value: this.state.company,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      })), __jsx("div", {
        className: "font-edmondsans text-descriptive flex flex-col mb-24",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, __jsx("label", {
        className: "mb-8 font-edmondsans-medium",
        htmlFor: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, "Work e-mail"), __jsx("input", {
        className: "shadow-1 appearance-none border border-grey rounded w-full py-12 px-8 focus:outline-none focus:border-action focus:shadow-3",
        type: "email",
        id: "email",
        required: true,
        placeholder: "anna@goodup.com",
        name: "email",
        value: this.state.email,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      })), __jsx("div", {
        className: "font-edmondsans text-descriptive mb-24",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, __jsx("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, __jsx("input", {
        type: "checkbox",
        name: "hasAgreed",
        required: true,
        value: this.state.hasAgreed,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }), " ", "I agree to all statements in the ", __jsx("a", {
        className: "underline",
        href: "https://goodup.com/terms-and-policy/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, "terms and policy"))), __jsx("div", {
        className: "mb-32",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, __jsx("button", {
        className: "font-edmondsans-medium text-white text-center w-full lg:w-2/5 rounded bg-action py-16 px-16 hover:bg-action-shade40",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, "Download E-book")), __jsx("p", {
        className: "font-edmondsans text-descriptive",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, "Learn more about purpose on  ", __jsx("a", {
        className: "text-action hover:underline",
        href: "https://www.goodup.com",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, "www.goodup.com")))));
    }
  }]);

  return Signup;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.9255248c366c666f7552.hot-update.js.map