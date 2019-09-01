webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/face.js":
/*!****************************!*\
  !*** ./components/face.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\ricar\\Repos\\ricardo-lopes-dev\\components\\face.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var style = __jsx("style", {
  jsx: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, "\n  .face {\n    position: fixed;\n    opacity: 0;\n    animation: move 20s infinite linear;\n    animation-delay: 10s;\n    object-fit: contain;\n    width: 100%;\n    height: 100%;\n    pointer-events: none;\n    top: 10000px;\n  }\n\n  @keyframes move {\n    0% {\n      opacity: 0;\n      top: 70%;\n      left: 70%;\n    }\n    25% {\n      opacity: 0.1;\n    }\n    50% {\n      opacity: 0;\n      top: -30%;\n      left: -30%;\n      transform: scale(2) rotate(60deg);\n    }\n    51% {\n      left: 70%;\n      transform: scale(1);\n    }\n    75% {\n      opacity: 0.1;\n    }\n    100% {\n      top: 70%;\n      left: 0;\n      opacity: 0;\n      transform: scale(2) rotate(-60deg);\n    }\n  }\n");

var Face = function Face() {
  return __jsx("picture", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, style, __jsx("source", {
    srcSet: "static/img/face.webp",
    type: "image/webp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), __jsx("source", {
    srcSet: "static/img/face.jpg",
    type: "image/jpeg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), __jsx("img", {
    className: "face",
    src: "img/face.jpg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Face);

/***/ })

})
//# sourceMappingURL=index.js.4bdec86d734893458288.hot-update.js.map