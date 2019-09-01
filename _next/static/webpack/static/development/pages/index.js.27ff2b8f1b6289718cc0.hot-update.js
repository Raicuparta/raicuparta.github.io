webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/icon.js":
/*!****************************!*\
  !*** ./components/icon.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets */ "./assets/index.js");
var _jsxFileName = "C:\\Users\\ricar\\Repos\\ricardo-lopes-dev\\components\\icon.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Icon = function Icon(_ref) {
  var name = _ref.name,
      title = _ref.title,
      url = _ref.url;
  var SvgIcon = _assets__WEBPACK_IMPORTED_MODULE_1__["default"][name];
  return __jsx("a", {
    href: url,
    title: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx(SvgIcon, {
    alt: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), style);
};

var style = __jsx("style", {
  jsx: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, "\n  a {\n    width: 50px;\n    height: 50px;\n    margin: 15px;\n    display: inline-block;\n    opacity: 0.5;\n    transition: 150ms;\n    fill: var(--text);\n  \n    :hover,\n    :active,\n    :focus {\n      transform: scale(1.1);\n      opacity: 1;\n      fill: var(--accent);\n    }\n  }\n\n");

/* harmony default export */ __webpack_exports__["default"] = (Icon);

/***/ })

})
//# sourceMappingURL=index.js.27ff2b8f1b6289718cc0.hot-update.js.map