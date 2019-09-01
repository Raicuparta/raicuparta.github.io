webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\ricar\\Repos\\ricardo-lopes-dev\\components\\header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Header = function Header(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle;
  return __jsx("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Ricardo Lopes"), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Front-end Developer"));
};

var style = __jsx("style", {
  jsx: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, "\n  h1 {\n    font-size: 3.5em;\n    margin-bottom: 10px;\n  }\n\n  h2 {\n    font-size: 2em;\n    color: var(--accent);\n    margin-bottom: 1.2em;\n  }\n");

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/icon */ "./components/icon.js");
/* harmony import */ var _components_face__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/face */ "./components/face.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/header */ "./components/header.js");

var _jsxFileName = "C:\\Users\\ricar\\Repos\\ricardo-lopes-dev\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var links = [{
  name: "twitter",
  title: "Twitter @Raicuparta",
  url: "https://twitter.com/raicuparta"
}, {
  name: "linkedin",
  title: "LinkedIn Ricardo Lopes",
  url: "https://www.linkedin.com/in/ricardo-lopes-3a071643/"
}, {
  name: "envelope",
  title: "E-mail raicuparta@gmail.com",
  url: "mailto:raicuparta@gmail.com"
}, {
  name: "stackOverflow",
  title: "Stack Overflow @Raicuparta",
  url: "https://stackoverflow.com/users/3962104/ricardo-lopes?tab=profile"
}, {
  name: "dev",
  title: "DEV @Raicuparta",
  url: "https://dev.to/raicuparta"
}, {
  name: "medium",
  title: "Medium @Raicuparta",
  url: "https://medium.com/@Raicuparta"
}, {
  name: "github",
  title: "Github @Raicuparta",
  url: "https://github.com/Raicuparta"
}];

var Home = function Home() {
  return __jsx("div", {
    className: "jsx-2979273850",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx(_components_face__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), __jsx("header", {
    className: "jsx-2979273850",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2979273850" + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Ricardo Lopes"), __jsx("div", {
    className: "jsx-2979273850" + " " + "subtitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Front-end Developer")), __jsx("main", {
    className: "jsx-2979273850",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("nav", {
    className: "jsx-2979273850" + " " + "links",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, links.map(function (link) {
    return __jsx(_components_icon__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: link.name
    }, link, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2979273850",
    __self: this
  }, "body{--background:#222;--text:white;--accent:#8ee478;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:100vh;width:100vw;margin:0;overflow:hidden;font-family:'Courier New',Courier;font-weight:100;color:var(--text);background:var(--background);text-align:center;}.title{font-size:3.5em;margin-bottom:10px;}.subtitle{font-size:2em;color:var(--accent);margin-bottom:1.2em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccmljYXJcXFJlcG9zXFxyaWNhcmRvLWxvcGVzLWRldlxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJEdUIsQUFHMkIsQUFtQkYsQUFLRixjQUNNLEVBTEQsRUFuQk4sYUFDSSxHQXdCRyxDQUx0QixhQWpCZSxNQXVCZixvRUF0QndCLDhFQUNDLG1HQUNWLGFBQ0QsWUFDSCxTQUNPLGdCQUNtQixrQ0FDbkIsZ0JBQ0Usa0JBQ1csNkJBQ1gsa0JBQ3BCIiwiZmlsZSI6IkM6XFxVc2Vyc1xccmljYXJcXFJlcG9zXFxyaWNhcmRvLWxvcGVzLWRldlxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IEljb24gZnJvbSAnLi4vY29tcG9uZW50cy9pY29uJ1xyXG5pbXBvcnQgRmFjZSBmcm9tICcuLi9jb21wb25lbnRzL2ZhY2UnXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInXHJcblxyXG5jb25zdCBsaW5rcyA9IFtcclxuICB7XHJcbiAgICBuYW1lOiBcInR3aXR0ZXJcIixcclxuICAgIHRpdGxlOiBcIlR3aXR0ZXIgQFJhaWN1cGFydGFcIixcclxuICAgIHVybDogXCJodHRwczovL3R3aXR0ZXIuY29tL3JhaWN1cGFydGFcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwibGlua2VkaW5cIixcclxuICAgIHRpdGxlOiBcIkxpbmtlZEluIFJpY2FyZG8gTG9wZXNcIixcclxuICAgIHVybDogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vcmljYXJkby1sb3Blcy0zYTA3MTY0My9cIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiZW52ZWxvcGVcIixcclxuICAgIHRpdGxlOiBcIkUtbWFpbCByYWljdXBhcnRhQGdtYWlsLmNvbVwiLFxyXG4gICAgdXJsOiBcIm1haWx0bzpyYWljdXBhcnRhQGdtYWlsLmNvbVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJzdGFja092ZXJmbG93XCIsXHJcbiAgICB0aXRsZTogXCJTdGFjayBPdmVyZmxvdyBAUmFpY3VwYXJ0YVwiLFxyXG4gICAgdXJsOiBcImh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vdXNlcnMvMzk2MjEwNC9yaWNhcmRvLWxvcGVzP3RhYj1wcm9maWxlXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcImRldlwiLFxyXG4gICAgdGl0bGU6IFwiREVWIEBSYWljdXBhcnRhXCIsXHJcbiAgICB1cmw6IFwiaHR0cHM6Ly9kZXYudG8vcmFpY3VwYXJ0YVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJtZWRpdW1cIixcclxuICAgIHRpdGxlOiBcIk1lZGl1bSBAUmFpY3VwYXJ0YVwiLFxyXG4gICAgdXJsOiBcImh0dHBzOi8vbWVkaXVtLmNvbS9AUmFpY3VwYXJ0YVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJnaXRodWJcIixcclxuICAgIHRpdGxlOiBcIkdpdGh1YiBAUmFpY3VwYXJ0YVwiLFxyXG4gICAgdXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9SYWljdXBhcnRhXCIsXHJcbiAgfSxcclxuXVxyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IChcclxuICA8ZGl2PlxyXG4gICAgPEZhY2UgLz5cclxuICAgIDxoZWFkZXI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5SaWNhcmRvIExvcGVzPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VidGl0bGVcIj5Gcm9udC1lbmQgRGV2ZWxvcGVyPC9kaXY+XHJcbiAgICA8L2hlYWRlcj5cclxuICAgIDxtYWluPlxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT1cImxpbmtzXCI+XHJcbiAgICAgICAge2xpbmtzLm1hcChsaW5rID0+KFxyXG4gICAgICAgICAgPEljb24ga2V5PXtsaW5rLm5hbWV9IHsuLi5saW5rfSAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L25hdj5cclxuICAgIDwvbWFpbj5cclxuXHJcbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICBib2R5IHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6ICMyMjI7XHJcbiAgICAgICAgLS10ZXh0OiB3aGl0ZTtcclxuICAgICAgICAtLWFjY2VudDogIzhlZTQ3ODtcclxuXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDMuNWVtO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zdWJ0aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudCk7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS4yZW07XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVxyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\ricar\\Repos\\ricardo-lopes-dev\\pages\\index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.550224bfa05ba3448e33.hot-update.js.map