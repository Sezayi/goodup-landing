webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Explainer/index.js":
/*!***************************************!*\
  !*** ./components/Explainer/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");

var _jsxFileName = "/Users/sezayi/sites/goodup-landing/components/Explainer/index.js";




var calc = function calc(x, y) {
  return [-(y - window.innerHeight / 2) / 40, (x - window.innerWidth / 2) / 40, 1.1];
};

var trans = function trans(x, y, s) {
  return "perspective(400px) rotateX(".concat(x, "deg) rotateY(").concat(y, "deg) scale(").concat(s, ")");
};

function Explainer() {
  var _useSpring = Object(react_spring__WEBPACK_IMPORTED_MODULE_3__["useSpring"])(function () {
    return {
      xys: [0, 0, 1],
      config: {
        mass: 5,
        tension: 350,
        friction: 40
      }
    };
  }),
      _useSpring2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useSpring, 2),
      props = _useSpring2[0],
      set = _useSpring2[1];

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-3871206372" + " " + "flex-1 background flex justify-center items-center h-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_3__["animated"].div, {
    className: "w-1/2 h-xxxxl .image",
    onMouseMove: function onMouseMove(_ref) {
      var x = _ref.clientX,
          y = _ref.clientY;
      return set({
        xys: calc(x, y)
      });
    },
    onMouseLeave: function onMouseLeave() {
      return set({
        xys: [0, 0, 1]
      });
    },
    style: {
      transform: props.xys.interpolate(trans)
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3871206372",
    __self: this
  }, ".image.jsx-3871206372{background-image:url(\"../static/ebook.jpg\" };}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZXpheWkvc2l0ZXMvZ29vZHVwLWxhbmRpbmcvY29tcG9uZW50cy9FeHBsYWluZXIvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JvQixBQUtPLDZDQUFDIiwiZmlsZSI6Ii9Vc2Vycy9zZXpheWkvc2l0ZXMvZ29vZHVwLWxhbmRpbmcvY29tcG9uZW50cy9FeHBsYWluZXIvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTcHJpbmcsIGFuaW1hdGVkIH0gZnJvbSAncmVhY3Qtc3ByaW5nJ1xuXG5jb25zdCBjYWxjID0gKHgsIHkpID0+IFstKHkgLSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKSAvIDQwLCAoeCAtIHdpbmRvdy5pbm5lcldpZHRoIC8gMikgLyA0MCwgMS4xXVxuY29uc3QgdHJhbnMgPSAoeCwgeSwgcykgPT4gYHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKCR7eH1kZWcpIHJvdGF0ZVkoJHt5fWRlZykgc2NhbGUoJHtzfSlgXG5cbmZ1bmN0aW9uIEV4cGxhaW5lcigpIHtcbiAgY29uc3QgW3Byb3BzLCBzZXRdID0gdXNlU3ByaW5nKCgpID0+ICh7IHh5czogWzAsIDAsIDFdLCBjb25maWc6IHsgbWFzczogNSwgdGVuc2lvbjogMzUwLCBmcmljdGlvbjogNDAgfSB9KSlcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBiYWNrZ3JvdW5kIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGgtYXV0b1wiPlxuICAgICAgICA8YW5pbWF0ZWQuZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwidy0xLzIgaC14eHh4bCAuaW1hZ2VcIlxuICAgICAgICAgIG9uTW91c2VNb3ZlPXsoeyBjbGllbnRYOiB4LCBjbGllbnRZOiB5IH0pID0+IHNldCh7IHh5czogY2FsYyh4LCB5KSB9KX1cbiAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldCh7IHh5czogWzAsIDAsIDFdIH0pfVxuICAgICAgICAgIHN0eWxlPXt7IHRyYW5zZm9ybTogcHJvcHMueHlzLmludGVycG9sYXRlKHRyYW5zKX19XG4gICAgICAgIC8+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmltYWdlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9zdGF0aWMvZWJvb2suanBnXCJcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIFxuICAgIDwvZGl2PlxuICApXG59XG5cblxuICBcbiAgZXhwb3J0IGRlZmF1bHQgRXhwbGFpbmVyOyJdfQ== */\n/*@ sourceURL=/Users/sezayi/sites/goodup-landing/components/Explainer/index.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Explainer);

/***/ })

})
//# sourceMappingURL=index.js.8f9528aedc85a58ff96f.hot-update.js.map