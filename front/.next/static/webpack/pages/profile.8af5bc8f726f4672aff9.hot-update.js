webpackHotUpdate_N_E("pages/profile",{

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-saga */ "./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swr */ "./node_modules/swr/dist/index.esm.js");
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var _components_NicknameEditForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/NicknameEditForm */ "./components/NicknameEditForm.js");
/* harmony import */ var _components_FollowList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/FollowList */ "./components/FollowList.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\eunjeong\\Desktop\\Front-end\\\uC778\uD504\uB7F0\\NodeBirdSns\\front\\pages\\profile.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













var fetcher = function fetcher(url) {
  return axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(url, {
    withCredentials: true
  }).then(function (result) {
    return result.data;
  });
};

var Profile = function Profile() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(3),
      followersLimit = _useState[0],
      setFollowersLimit = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(3),
      followingsLimit = _useState2[0],
      setFollowingsLimit = _useState2[1];

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_6__["default"])("http://localhost:3065/user/followers?limit=".concat(followersLimit), fetcher),
      followersData = _useSWR.data,
      followerError = _useSWR.error;

  var _useSWR2 = Object(swr__WEBPACK_IMPORTED_MODULE_6__["default"])("http://localhost:3065/user/followings?limit=".concat(followingsLimit), fetcher),
      followingsData = _useSWR2.data,
      followingError = _useSWR2.error;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!(me && me.id)) {
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/");
    }
  }, [me && me.id]);
  var loadMoreFollowings = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setFollowingsLimit(function (prev) {
      return prev + 3;
    });
  }, []);
  var loadMoreFollowers = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setFollowersLimit(function (prev) {
      return prev + 3;
    });
  }, []);

  if (!me) {
    return null;
  }

  if (followerError || followingError) {
    console.error(followerError || followingError);
    return "팔로잉/팔로워 로딩 중 에러가 발생합니다.";
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, __jsx("meta", {
    charSet: "utf-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }), __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, "\uB0B4 \uD504\uB85C\uD544 | NodeBird")), __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }, __jsx(_components_NicknameEditForm__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }), __jsx(_components_FollowList__WEBPACK_IMPORTED_MODULE_9__["default"], {
    header: "\uD314\uB85C\uC789 \uBAA9\uB85D",
    data: followingsData,
    onClickMore: loadMoreFollowings,
    loading: !followingsData && !followingError,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }), __jsx(_components_FollowList__WEBPACK_IMPORTED_MODULE_9__["default"], {
    header: "\uD314\uB85C\uC6CC \uBAA9\uB85D",
    data: followersData,
    onClickMore: loadMoreFollowers,
    loading: !followersData && !followerError,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  })));
};

_s(Profile, "DXwWW3BS2rXCndWZ/FtgHcWPpgE=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], swr__WEBPACK_IMPORTED_MODULE_6__["default"], swr__WEBPACK_IMPORTED_MODULE_6__["default"]];
});

_c = Profile;
/* harmony default export */ __webpack_exports__["default"] = (Profile);

var _c;

$RefreshReg$(_c, "Profile");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJmZXRjaGVyIiwidXJsIiwiYXhpb3MiLCJnZXQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzdWx0IiwiZGF0YSIsIlByb2ZpbGUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJtZSIsInVzZVN0YXRlIiwiZm9sbG93ZXJzTGltaXQiLCJzZXRGb2xsb3dlcnNMaW1pdCIsImZvbGxvd2luZ3NMaW1pdCIsInNldEZvbGxvd2luZ3NMaW1pdCIsInVzZVNXUiIsImZvbGxvd2Vyc0RhdGEiLCJmb2xsb3dlckVycm9yIiwiZXJyb3IiLCJmb2xsb3dpbmdzRGF0YSIsImZvbGxvd2luZ0Vycm9yIiwidXNlRWZmZWN0IiwiaWQiLCJSb3V0ZXIiLCJwdXNoIiwibG9hZE1vcmVGb2xsb3dpbmdzIiwidXNlQ2FsbGJhY2siLCJwcmV2IiwibG9hZE1vcmVGb2xsb3dlcnMiLCJjb25zb2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxHQUFEO0VBQUEsT0FDZEMsNENBQUssQ0FBQ0MsR0FBTixDQUFVRixHQUFWLEVBQWU7SUFBRUcsZUFBZSxFQUFFO0VBQW5CLENBQWYsRUFBMENDLElBQTFDLENBQStDLFVBQUNDLE1BQUQ7SUFBQSxPQUFZQSxNQUFNLENBQUNDLElBQW5CO0VBQUEsQ0FBL0MsQ0FEYztBQUFBLENBQWhCOztBQUdBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07RUFBQTs7RUFDcEIsSUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7RUFDQSxtQkFBZUMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0lBQUEsT0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtFQUFBLENBQUQsQ0FBMUI7RUFBQSxJQUFRQyxFQUFSLGdCQUFRQSxFQUFSOztFQUVBLGdCQUE0Q0Msc0RBQVEsQ0FBQyxDQUFELENBQXBEO0VBQUEsSUFBT0MsY0FBUDtFQUFBLElBQXVCQyxpQkFBdkI7O0VBQ0EsaUJBQThDRixzREFBUSxDQUFDLENBQUQsQ0FBdEQ7RUFBQSxJQUFPRyxlQUFQO0VBQUEsSUFBd0JDLGtCQUF4Qjs7RUFFQSxjQUFzREMsbURBQU0sc0RBQ1pKLGNBRFksR0FFMURoQixPQUYwRCxDQUE1RDtFQUFBLElBQWNxQixhQUFkLFdBQVFkLElBQVI7RUFBQSxJQUFvQ2UsYUFBcEMsV0FBNkJDLEtBQTdCOztFQUlBLGVBQXdESCxtREFBTSx1REFDYkYsZUFEYSxHQUU1RGxCLE9BRjRELENBQTlEO0VBQUEsSUFBY3dCLGNBQWQsWUFBUWpCLElBQVI7RUFBQSxJQUFxQ2tCLGNBQXJDLFlBQThCRixLQUE5Qjs7RUFLQUcsdURBQVMsQ0FBQyxZQUFNO0lBQ2QsSUFBSSxFQUFFWixFQUFFLElBQUlBLEVBQUUsQ0FBQ2EsRUFBWCxDQUFKLEVBQW9CO01BQ2xCQyxrREFBTSxDQUFDQyxJQUFQLENBQVksR0FBWjtJQUNEO0VBQ0YsQ0FKUSxFQUlOLENBQUNmLEVBQUUsSUFBSUEsRUFBRSxDQUFDYSxFQUFWLENBSk0sQ0FBVDtFQU1BLElBQU1HLGtCQUFrQixHQUFHQyx5REFBVyxDQUFDLFlBQU07SUFDM0NaLGtCQUFrQixDQUFDLFVBQUNhLElBQUQ7TUFBQSxPQUFVQSxJQUFJLEdBQUcsQ0FBakI7SUFBQSxDQUFELENBQWxCO0VBQ0QsQ0FGcUMsRUFFbkMsRUFGbUMsQ0FBdEM7RUFJQSxJQUFNQyxpQkFBaUIsR0FBR0YseURBQVcsQ0FBQyxZQUFNO0lBQzFDZCxpQkFBaUIsQ0FBQyxVQUFDZSxJQUFEO01BQUEsT0FBVUEsSUFBSSxHQUFHLENBQWpCO0lBQUEsQ0FBRCxDQUFqQjtFQUNELENBRm9DLEVBRWxDLEVBRmtDLENBQXJDOztFQUlBLElBQUksQ0FBQ2xCLEVBQUwsRUFBUztJQUNQLE9BQU8sSUFBUDtFQUNEOztFQUNELElBQUlRLGFBQWEsSUFBSUcsY0FBckIsRUFBcUM7SUFDbkNTLE9BQU8sQ0FBQ1gsS0FBUixDQUFjRCxhQUFhLElBQUlHLGNBQS9CO0lBQ0EsT0FBTyx5QkFBUDtFQUNEOztFQUVELE9BQ0UsbUVBQ0UsTUFBQyxnREFBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0U7SUFBTSxPQUFPLEVBQUMsT0FBZDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBREYsRUFFRTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLDBDQUZGLENBREYsRUFLRSxNQUFDLDZEQUFEO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDRSxNQUFDLG9FQUFEO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFERixFQUVFLE1BQUMsOERBQUQ7SUFDRSxNQUFNLEVBQUMsaUNBRFQ7SUFFRSxJQUFJLEVBQUVELGNBRlI7SUFHRSxXQUFXLEVBQUVNLGtCQUhmO0lBSUUsT0FBTyxFQUFFLENBQUNOLGNBQUQsSUFBbUIsQ0FBQ0MsY0FKL0I7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUZGLEVBUUUsTUFBQyw4REFBRDtJQUNFLE1BQU0sRUFBQyxpQ0FEVDtJQUVFLElBQUksRUFBRUosYUFGUjtJQUdFLFdBQVcsRUFBRVksaUJBSGY7SUFJRSxPQUFPLEVBQUUsQ0FBQ1osYUFBRCxJQUFrQixDQUFDQyxhQUo5QjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBUkYsQ0FMRixDQURGO0FBdUJELENBN0REOztHQUFNZCxPO1VBQ2FFLHVELEVBQ0ZDLHVELEVBS3VDUywyQyxFQUlFQSwyQzs7O0tBWHBEWixPO0FBK0RTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLjhhZjViYzhmNzI2ZjQ2NzJhZmY5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRU5EIH0gZnJvbSBcInJlZHV4LXNhZ2FcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcclxuXHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBwTGF5b3V0XCI7XHJcbmltcG9ydCBOaWNrbmFtZUVkaXRGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL05pY2tuYW1lRWRpdEZvcm1cIjtcclxuaW1wb3J0IEZvbGxvd0xpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9sbG93TGlzdFwiO1xyXG5pbXBvcnQge1xyXG4gIExPQURfRk9MTE9XRVJTX1JFUVVFU1QsXHJcbiAgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QsXHJcbn0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcclxuaW1wb3J0IHdyYXBwZXIgZnJvbSBcIi4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlXCI7XHJcblxyXG5jb25zdCBmZXRjaGVyID0gKHVybCkgPT5cclxuICBheGlvcy5nZXQodXJsLCB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9KS50aGVuKChyZXN1bHQpID0+IHJlc3VsdC5kYXRhKTtcclxuXHJcbmNvbnN0IFByb2ZpbGUgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcblxyXG4gIGNvbnN0IFtmb2xsb3dlcnNMaW1pdCwgc2V0Rm9sbG93ZXJzTGltaXRdID0gdXNlU3RhdGUoMyk7XHJcbiAgY29uc3QgW2ZvbGxvd2luZ3NMaW1pdCwgc2V0Rm9sbG93aW5nc0xpbWl0XSA9IHVzZVN0YXRlKDMpO1xyXG5cclxuICBjb25zdCB7IGRhdGE6IGZvbGxvd2Vyc0RhdGEsIGVycm9yOiBmb2xsb3dlckVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICBgaHR0cDovL2xvY2FsaG9zdDozMDY1L3VzZXIvZm9sbG93ZXJzP2xpbWl0PSR7Zm9sbG93ZXJzTGltaXR9YCxcclxuICAgIGZldGNoZXJcclxuICApO1xyXG4gIGNvbnN0IHsgZGF0YTogZm9sbG93aW5nc0RhdGEsIGVycm9yOiBmb2xsb3dpbmdFcnJvciB9ID0gdXNlU1dSKFxyXG4gICAgYGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS91c2VyL2ZvbGxvd2luZ3M/bGltaXQ9JHtmb2xsb3dpbmdzTGltaXR9YCxcclxuICAgIGZldGNoZXJcclxuICApO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCEobWUgJiYgbWUuaWQpKSB7XHJcbiAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgIH1cclxuICB9LCBbbWUgJiYgbWUuaWRdKTtcclxuXHJcbiAgY29uc3QgbG9hZE1vcmVGb2xsb3dpbmdzID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0Rm9sbG93aW5nc0xpbWl0KChwcmV2KSA9PiBwcmV2ICsgMyk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBsb2FkTW9yZUZvbGxvd2VycyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldEZvbGxvd2Vyc0xpbWl0KChwcmV2KSA9PiBwcmV2ICsgMyk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBpZiAoIW1lKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbiAgaWYgKGZvbGxvd2VyRXJyb3IgfHwgZm9sbG93aW5nRXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZm9sbG93ZXJFcnJvciB8fCBmb2xsb3dpbmdFcnJvcik7XHJcbiAgICByZXR1cm4gXCLtjJTroZzsnokv7YyU66Gc7JuMIOuhnOuUqSDspJEg7JeQ65+s6rCAIOuwnOyDne2VqeuLiOuLpC5cIjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxyXG4gICAgICAgIDx0aXRsZT7rgrQg7ZSE66Gc7ZWEIHwgTm9kZUJpcmQ8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxBcHBMYXlvdXQ+XHJcbiAgICAgICAgPE5pY2tuYW1lRWRpdEZvcm0gLz5cclxuICAgICAgICA8Rm9sbG93TGlzdFxyXG4gICAgICAgICAgaGVhZGVyPVwi7YyU66Gc7J6JIOuqqeuhnVwiXHJcbiAgICAgICAgICBkYXRhPXtmb2xsb3dpbmdzRGF0YX1cclxuICAgICAgICAgIG9uQ2xpY2tNb3JlPXtsb2FkTW9yZUZvbGxvd2luZ3N9XHJcbiAgICAgICAgICBsb2FkaW5nPXshZm9sbG93aW5nc0RhdGEgJiYgIWZvbGxvd2luZ0Vycm9yfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEZvbGxvd0xpc3RcclxuICAgICAgICAgIGhlYWRlcj1cIu2MlOuhnOybjCDrqqnroZ1cIlxyXG4gICAgICAgICAgZGF0YT17Zm9sbG93ZXJzRGF0YX1cclxuICAgICAgICAgIG9uQ2xpY2tNb3JlPXtsb2FkTW9yZUZvbGxvd2Vyc31cclxuICAgICAgICAgIGxvYWRpbmc9eyFmb2xsb3dlcnNEYXRhICYmICFmb2xsb3dlckVycm9yfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvQXBwTGF5b3V0PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=