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


var Face = function Face() {
  return __jsx("picture", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, style, __jsx("source", {
    srcSet: "static/img/face.webp",
    type: "image/webp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), __jsx("source", {
    srcSet: "static/img/face.jpg",
    type: "image/jpeg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), __jsx("img", {
    src: "img/face.jpg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }));
};

var style = __jsx("style", {
  jsx: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, "\n  img {\n    position: fixed;\n    opacity: 0;\n    animation: move 20s infinite linear;\n    animation-delay: 10s;\n    object-fit: contain;\n    width: 100%;\n    height: 100%;\n    pointer-events: none;\n    top: 10000px;\n  }\n\n  @keyframes move {\n    0% {\n      opacity: 0;\n      top: 70%;\n      left: 70%;\n    }\n    25% {\n      opacity: 0.1;\n    }\n    50% {\n      opacity: 0;\n      top: -30%;\n      left: -30%;\n      transform: scale(2) rotate(60deg);\n    }\n    51% {\n      left: 70%;\n      transform: scale(1);\n    }\n    75% {\n      opacity: 0.1;\n    }\n    100% {\n      top: 70%;\n      left: 0;\n      opacity: 0;\n      transform: scale(2) rotate(-60deg);\n    }\n  }\n");

/* harmony default export */ __webpack_exports__["default"] = (Face);

/***/ })

})
//# sourceMappingURL=index.js.914c4ac4642945ebf8ec.hot-update.js.map