webpackHotUpdate_N_E("pages/signup",{

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");



var _templateObject,
    _this = undefined,
    _jsxFileName = "C:\\Users\\eunjeong\\Desktop\\Front-end\\\uC778\uD504\uB7F0\\NodeBirdSns\\pages\\signup.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var ErrorMessage = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  color: red;\n"])));
_c = ErrorMessage;

var Signup = function Signup() {
  _s();

  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_6__["default"])(""),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
      id = _useInput2[0],
      onChangeId = _useInput2[1];

  var _useInput3 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_6__["default"])(""),
      _useInput4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput3, 2),
      nickname = _useInput4[0],
      onChangeNickname = _useInput4[1];

  var _useInput5 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_6__["default"])(""),
      _useInput6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput5, 2),
      password = _useInput6[0],
      onChangePassword = _useInput6[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      passwordCheck = _useState[0],
      setPasswordCheck = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      passwordError = _useState2[0],
      setPasswordError = _useState2[1];

  var onChangePasswordCheck = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (e) {
    setPasswordCheck(e.target.value);
    setPasswordError(e.target.value !== password);
  }, [password]);

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      term = _useState3[0],
      setTerm = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      termError = _useState4[0],
      setTermError = _useState4[1];

  var onChangeTerm = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (e) {
    setTerm(e.target.value);
    setTermError(false);
  }, []);
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    if (password !== passwordCheck) {
      return setPasswordCheck(true);
    }

    if (!term) {
      return setTermError(true);
    }

    console.log(id, nickname, password);
  }, [password, passwordCheck, term]);
  return __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx("meta", {
    charSet: "utf-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }), __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, "\uD68C\uC6D0\uAC00\uC785 | NodeBird")), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Form"], {
    onFinish: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "user-id",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, "\uC544\uC774\uB514"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    name: "user-id",
    value: id,
    required: true,
    onChange: onChangeId,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "user-nick",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, "\uB2C9\uB124\uC784"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    name: "user-nick",
    value: nickname,
    required: true,
    onChange: onChangeNickname,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "user-password",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, "\uBE44\uBC00\uBC88\uD638"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    name: "user-password",
    value: password,
    type: "password",
    required: true,
    onChange: onChangePassword,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "user-password-check",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }, "\uBE44\uBC00\uBC88\uD638\uCCB4\uD06C"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    name: "user-password-check",
    type: "password",
    value: passwordCheck,
    required: true,
    onChange: onChangePasswordCheck,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  }), passwordError && __jsx(ErrorMessage, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, "\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Checkbox"], {
    name: "user-term",
    checked: term,
    onChange: onChangeTerm,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }
  }, "\uD68C\uC6D0\uAC00\uC785\uC5D0 \uB3D9\uC758\uD569\uB2C8\uB2E4."), termError && __jsx(ErrorMessage, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 25
    }
  }, "\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uC154\uC57C \uD569\uB2C8\uB2E4.")), __jsx("div", {
    style: {
      marginTop: 10
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    type: "primary",
    htmlType: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 11
    }
  }, "\uAC00\uC785\uD558\uAE30"))));
};

_s(Signup, "5B9ojWa97uHqiWwAChvO27V2M1Y=", false, function () {
  return [_hooks_useInput__WEBPACK_IMPORTED_MODULE_6__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_6__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_6__["default"]];
});

_c2 = Signup;
/* harmony default export */ __webpack_exports__["default"] = (Signup);

var _c, _c2;

$RefreshReg$(_c, "ErrorMessage");
$RefreshReg$(_c2, "Signup");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbIkVycm9yTWVzc2FnZSIsInN0eWxlZCIsImRpdiIsIlNpZ251cCIsInVzZUlucHV0IiwiaWQiLCJvbkNoYW5nZUlkIiwibmlja25hbWUiLCJvbkNoYW5nZU5pY2tuYW1lIiwicGFzc3dvcmQiLCJvbkNoYW5nZVBhc3N3b3JkIiwidXNlU3RhdGUiLCJwYXNzd29yZENoZWNrIiwic2V0UGFzc3dvcmRDaGVjayIsInBhc3N3b3JkRXJyb3IiLCJzZXRQYXNzd29yZEVycm9yIiwib25DaGFuZ2VQYXNzd29yZENoZWNrIiwidXNlQ2FsbGJhY2siLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ0ZXJtIiwic2V0VGVybSIsInRlcm1FcnJvciIsInNldFRlcm1FcnJvciIsIm9uQ2hhbmdlVGVybSIsIm9uU3VibWl0IiwiY29uc29sZSIsImxvZyIsIm1hcmdpblRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsWUFBWSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWLGdLQUFsQjtLQUFNRixZOztBQUdOLElBQU1HLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07RUFBQTs7RUFDbkIsZ0JBQXlCQywrREFBUSxDQUFDLEVBQUQsQ0FBakM7RUFBQTtFQUFBLElBQU9DLEVBQVA7RUFBQSxJQUFXQyxVQUFYOztFQUNBLGlCQUFxQ0YsK0RBQVEsQ0FBQyxFQUFELENBQTdDO0VBQUE7RUFBQSxJQUFPRyxRQUFQO0VBQUEsSUFBaUJDLGdCQUFqQjs7RUFDQSxpQkFBcUNKLCtEQUFRLENBQUMsRUFBRCxDQUE3QztFQUFBO0VBQUEsSUFBT0ssUUFBUDtFQUFBLElBQWlCQyxnQkFBakI7O0VBQ0EsZ0JBQTBDQyxzREFBUSxDQUFDLEVBQUQsQ0FBbEQ7RUFBQSxJQUFPQyxhQUFQO0VBQUEsSUFBc0JDLGdCQUF0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SyxLQUFLLEVBQUU7TUFBRU0sU0FBUyxFQUFFO0lBQWIsQ0FBWjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UsTUFBQywyQ0FBRDtJQUFRLElBQUksRUFBQyxTQUFiO0lBQXVCLFFBQVEsRUFBQyxRQUFoQztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLDhCQURGLENBL0NGLENBTEYsQ0FERjtBQTZERCxDQTVGRDs7R0FBTTFCLE07VUFDcUJDLHVELEVBQ1lBLHVELEVBQ0FBLHVEOzs7TUFIakNELE07QUE4RlNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NpZ251cC44Y2I4MjYyZjkwM2NiNDZmODViMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0FwcExheW91dFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgQ2hlY2tib3gsIEZvcm0sIElucHV0IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gXCIuLi9ob29rcy91c2VJbnB1dFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgRXJyb3JNZXNzYWdlID0gc3R5bGVkLmRpdmBcclxuICBjb2xvcjogcmVkO1xyXG5gO1xyXG5jb25zdCBTaWdudXAgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2lkLCBvbkNoYW5nZUlkXSA9IHVzZUlucHV0KFwiXCIpO1xyXG4gIGNvbnN0IFtuaWNrbmFtZSwgb25DaGFuZ2VOaWNrbmFtZV0gPSB1c2VJbnB1dChcIlwiKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIG9uQ2hhbmdlUGFzc3dvcmRdID0gdXNlSW5wdXQoXCJcIik7XHJcbiAgY29uc3QgW3Bhc3N3b3JkQ2hlY2ssIHNldFBhc3N3b3JkQ2hlY2tdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Bhc3N3b3JkRXJyb3IsIHNldFBhc3N3b3JkRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBvbkNoYW5nZVBhc3N3b3JkQ2hlY2sgPSB1c2VDYWxsYmFjayhcclxuICAgIChlKSA9PiB7XHJcbiAgICAgIHNldFBhc3N3b3JkQ2hlY2soZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICBzZXRQYXNzd29yZEVycm9yKGUudGFyZ2V0LnZhbHVlICE9PSBwYXNzd29yZCk7XHJcbiAgICB9LFxyXG4gICAgW3Bhc3N3b3JkXVxyXG4gICk7XHJcbiAgY29uc3QgW3Rlcm0sIHNldFRlcm1dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Rlcm1FcnJvciwgc2V0VGVybUVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBvbkNoYW5nZVRlcm0gPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgc2V0VGVybShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBzZXRUZXJtRXJyb3IoZmFsc2UpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBpZiAocGFzc3dvcmQgIT09IHBhc3N3b3JkQ2hlY2spIHtcclxuICAgICAgcmV0dXJuIHNldFBhc3N3b3JkQ2hlY2sodHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoIXRlcm0pIHtcclxuICAgICAgcmV0dXJuIHNldFRlcm1FcnJvcih0cnVlKTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKGlkLCBuaWNrbmFtZSwgcGFzc3dvcmQpO1xyXG4gIH0sIFtwYXNzd29yZCwgcGFzc3dvcmRDaGVjaywgdGVybV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEFwcExheW91dD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cclxuICAgICAgICA8dGl0bGU+7ZqM7JuQ6rCA7J6FIHwgTm9kZUJpcmQ8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxGb3JtIG9uRmluaXNoPXtvblN1Ym1pdH0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlci1pZFwiPuyVhOydtOuUlDwvbGFiZWw+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxJbnB1dCBuYW1lPVwidXNlci1pZFwiIHZhbHVlPXtpZH0gcmVxdWlyZWQgb25DaGFuZ2U9e29uQ2hhbmdlSWR9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlci1uaWNrXCI+64uJ64Sk7J6EPC9sYWJlbD5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIG5hbWU9XCJ1c2VyLW5pY2tcIlxyXG4gICAgICAgICAgICB2YWx1ZT17bmlja25hbWV9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZU5pY2tuYW1lfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VyLXBhc3N3b3JkXCI+67mE67CA67KI7Zi4PC9sYWJlbD5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIG5hbWU9XCJ1c2VyLXBhc3N3b3JkXCJcclxuICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlci1wYXNzd29yZC1jaGVja1wiPuu5hOuwgOuyiO2YuOyytO2BrDwvbGFiZWw+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICBuYW1lPVwidXNlci1wYXNzd29yZC1jaGVja1wiXHJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZENoZWNrfVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZENoZWNrfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHtwYXNzd29yZEVycm9yICYmIChcclxuICAgICAgICAgICAgPEVycm9yTWVzc2FnZT7ruYTrsIDrsojtmLjqsIAg7J287LmY7ZWY7KeAIOyViuyKteuLiOuLpC48L0Vycm9yTWVzc2FnZT5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxDaGVja2JveCBuYW1lPVwidXNlci10ZXJtXCIgY2hlY2tlZD17dGVybX0gb25DaGFuZ2U9e29uQ2hhbmdlVGVybX0+XHJcbiAgICAgICAgICAgIO2ajOybkOqwgOyeheyXkCDrj5nsnZjtlanri4jri6QuXHJcbiAgICAgICAgICA8L0NoZWNrYm94PlxyXG4gICAgICAgICAge3Rlcm1FcnJvciAmJiA8RXJyb3JNZXNzYWdlPuyVveq0gOyXkCDrj5nsnZjtlZjshZTslbwg7ZWp64uI64ukLjwvRXJyb3JNZXNzYWdlPn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogMTAgfX0+XHJcbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAg6rCA7J6F7ZWY6riwXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgPC9BcHBMYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ251cDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==