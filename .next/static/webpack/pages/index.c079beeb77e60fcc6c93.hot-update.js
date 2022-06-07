webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CommentForm.js":
/*!***********************************!*\
  !*** ./components/CommentForm.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\eunjeong\\Desktop\\Front-end\\\uC778\uD504\uB7F0\\NodeBirdSns\\components\\CommentForm.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var CommentForm = function CommentForm(_ref) {
  _s();

  var post = _ref.post;
  var id = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    var _state$user$me;

    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  });

  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__["default"])(""),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
      commentText = _useInput2[0],
      onChangeCommentText = _useInput2[1];

  var onSubmitComment = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    console.log(post.id, commentText);
  }, [commentText]);
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    onFinish: onSubmitComment,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
    style: {
      position: "relative",
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"].TextArea, {
    value: commentText,
    onChange: onChangeCommentText,
    rows: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    style: {
      position: "absolute",
      right: 0,
      bottom: -40
    },
    type: "primary",
    htmlType: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, "\uC090\uC57D")));
};

_s(CommentForm, "PptqMkMnW7reCXQEE7qotaIWwp0=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_3__["default"]];
});

_c = CommentForm;
CommentForm.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CommentForm);

var _c;

$RefreshReg$(_c, "CommentForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50Rm9ybS5qcyJdLCJuYW1lcyI6WyJDb21tZW50Rm9ybSIsInBvc3QiLCJpZCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJ1c2VJbnB1dCIsImNvbW1lbnRUZXh0Iiwib25DaGFuZ2VDb21tZW50VGV4dCIsIm9uU3VibWl0Q29tbWVudCIsInVzZUNhbGxiYWNrIiwiY29uc29sZSIsImxvZyIsInBvc2l0aW9uIiwibWFyZ2luIiwicmlnaHQiLCJib3R0b20iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBYztFQUFBOztFQUFBLElBQVhDLElBQVcsUUFBWEEsSUFBVztFQUNoQyxJQUFNQyxFQUFFLEdBQUdDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtJQUFBOztJQUFBLHlCQUFXQSxLQUFLLENBQUNDLElBQU4sQ0FBV0MsRUFBdEIsbURBQVcsZUFBZUosRUFBMUI7RUFBQSxDQUFELENBQXRCOztFQUNBLGdCQUEyQ0ssK0RBQVEsQ0FBQyxFQUFELENBQW5EO0VBQUE7RUFBQSxJQUFPQyxXQUFQO0VBQUEsSUFBb0JDLG1CQUFwQjs7RUFDQSxJQUFNQyxlQUFlLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtJQUN4Q0MsT0FBTyxDQUFDQyxHQUFSLENBQVlaLElBQUksQ0FBQ0MsRUFBakIsRUFBcUJNLFdBQXJCO0VBQ0QsQ0FGa0MsRUFFaEMsQ0FBQ0EsV0FBRCxDQUZnQyxDQUFuQztFQUdBLE9BQ0UsTUFBQyx5Q0FBRDtJQUFNLFFBQVEsRUFBRUUsZUFBaEI7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNFLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0lBQVcsS0FBSyxFQUFFO01BQUVJLFFBQVEsRUFBRSxVQUFaO01BQXdCQyxNQUFNLEVBQUU7SUFBaEMsQ0FBbEI7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNFLE1BQUMsMENBQUQsQ0FBTyxRQUFQO0lBQ0UsS0FBSyxFQUFFUCxXQURUO0lBRUUsUUFBUSxFQUFFQyxtQkFGWjtJQUdFLElBQUksRUFBRSxDQUhSO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFERixFQU1FLE1BQUMsMkNBQUQ7SUFDRSxLQUFLLEVBQUU7TUFBRUssUUFBUSxFQUFFLFVBQVo7TUFBd0JFLEtBQUssRUFBRSxDQUEvQjtNQUFrQ0MsTUFBTSxFQUFFLENBQUM7SUFBM0MsQ0FEVDtJQUVFLElBQUksRUFBQyxTQUZQO0lBR0UsUUFBUSxFQUFDLFFBSFg7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxrQkFORixDQURGLENBREY7QUFrQkQsQ0F4QkQ7O0dBQU1qQixXO1VBQ09HLHVELEVBQ2dDSSx1RDs7O0tBRnZDUCxXO0FBMEJOQSxXQUFXLENBQUNrQixTQUFaLEdBQXdCO0VBQ3RCakIsSUFBSSxFQUFFa0IsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkM7QUFERCxDQUF4QjtBQUllckIsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzA3OWJlZWI3N2U2MGZjYzZjOTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCdXR0b24sIEZvcm0sIElucHV0IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gXCIuLi9ob29rcy91c2VJbnB1dFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5jb25zdCBDb21tZW50Rm9ybSA9ICh7IHBvc3QgfSkgPT4ge1xyXG4gIGNvbnN0IGlkID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLm1lPy5pZCk7XHJcbiAgY29uc3QgW2NvbW1lbnRUZXh0LCBvbkNoYW5nZUNvbW1lbnRUZXh0XSA9IHVzZUlucHV0KFwiXCIpO1xyXG4gIGNvbnN0IG9uU3VibWl0Q29tbWVudCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHBvc3QuaWQsIGNvbW1lbnRUZXh0KTtcclxuICB9LCBbY29tbWVudFRleHRdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm0gb25GaW5pc2g9e29uU3VibWl0Q29tbWVudH0+XHJcbiAgICAgIDxGb3JtLkl0ZW0gc3R5bGU9e3sgcG9zaXRpb246IFwicmVsYXRpdmVcIiwgbWFyZ2luOiAwIH19PlxyXG4gICAgICAgIDxJbnB1dC5UZXh0QXJlYVxyXG4gICAgICAgICAgdmFsdWU9e2NvbW1lbnRUZXh0fVxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlQ29tbWVudFRleHR9XHJcbiAgICAgICAgICByb3dzPXs0fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgc3R5bGU9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgcmlnaHQ6IDAsIGJvdHRvbTogLTQwIH19XHJcbiAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICBodG1sVHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAg7IKQ7JW9XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgPC9Gb3JtPlxyXG4gICk7XHJcbn07XHJcblxyXG5Db21tZW50Rm9ybS5wcm9wVHlwZXMgPSB7XHJcbiAgcG9zdDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudEZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=