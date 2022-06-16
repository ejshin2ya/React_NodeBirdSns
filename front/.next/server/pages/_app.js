module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");
var _jsxFileName = "C:\\Users\\eunjeong\\Desktop\\Front-end\\\uC778\uD504\uB7F0\\NodeBirdSns\\front\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const NodeBird = ({
  Component
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("meta", {
    charSet: "utf-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }), __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, "NodeBird")), __jsx(Component, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }));
};

NodeBird.prototype = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_4__["default"].withRedux(NodeBird));

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ "./reducers/post.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 //(이전상태, 액션) =>다음상태

const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
  index: (state = {}, action) => {
    switch (action.type) {
      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
        console.log("HYDRATE", action);
        return _objectSpread(_objectSpread({}, state), action.payload);

      default:
        return state;
    }
  },
  user: _user__WEBPACK_IMPORTED_MODULE_2__["default"],
  post: _post__WEBPACK_IMPORTED_MODULE_3__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, RETWEET_REQUEST, RETWEET_SUCCESS, RETWEET_FAILURE, REMOVE_IMAGE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_REQUEST", function() { return UPLOAD_IMAGES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_SUCCESS", function() { return UPLOAD_IMAGES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_FAILURE", function() { return UPLOAD_IMAGES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_REQUEST", function() { return LIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_SUCCESS", function() { return LIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_FAILURE", function() { return LIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_REQUEST", function() { return UNLIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_SUCCESS", function() { return UNLIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_FAILURE", function() { return UNLIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_REQUEST", function() { return LOAD_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_SUCCESS", function() { return LOAD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_FAILURE", function() { return LOAD_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_REQUEST", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_SUCCESS", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_FAILURE", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_REQUEST", function() { return RETWEET_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_SUCCESS", function() { return RETWEET_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_FAILURE", function() { return RETWEET_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_IMAGE", function() { return REMOVE_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  mainPosts: [],
  imagePaths: [],
  hasMorePost: true,
  likePostLoading: false,
  likePostDone: false,
  likePostError: null,
  unlikePostLoading: false,
  unlikePostDone: false,
  unlikePostError: null,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
  uploadImagesLoading: false,
  uploadImagesDone: false,
  uploadImagesError: null,
  retweetLoading: false,
  retweetDone: false,
  retweetError: null
};
const UPLOAD_IMAGES_REQUEST = "UPLOAD_IMAGES_REQUEST";
const UPLOAD_IMAGES_SUCCESS = "UPLOAD_IMAGES_SUCCESS";
const UPLOAD_IMAGES_FAILURE = "UPLOAD_IMAGES_FAILURE";
const LIKE_POST_REQUEST = "LIKE_POST_REQUEST";
const LIKE_POST_SUCCESS = "LIKE_POST_SUCCESS";
const LIKE_POST_FAILURE = "LIKE_POST_FAILURE";
const UNLIKE_POST_REQUEST = "UNLIKE_POST_REQUEST";
const UNLIKE_POST_SUCCESS = "UNLIKE_POST_SUCCESS";
const UNLIKE_POST_FAILURE = "UNLIKE_POST_FAILURE";
const LOAD_POSTS_REQUEST = "LOAD_POSTS_REQUEST";
const LOAD_POSTS_SUCCESS = "LOAD_POSTS_SUCCESS";
const LOAD_POSTS_FAILURE = "LOAD_POSTS_FAILURE";
const ADD_POST_REQUEST = "ADD_POST_REQUEST";
const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
const ADD_POST_FAILURE = "ADD_POST_FAILURE";
const REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
const REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
const REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE";
const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";
const RETWEET_REQUEST = "RETWEET_REQUEST";
const RETWEET_SUCCESS = "RETWEET_SUCCESS";
const RETWEET_FAILURE = "RETWEET_FAILURE";
const REMOVE_IMAGE = "REMOVE_IMAGE";
const addPost = data => ({
  type: ADD_POST_REQUEST,
  data
});
const addComment = data => ({
  type: ADD_COMMENT_REQUEST,
  data
}); //reducer는 이전 상태를 액션을 통해 다음 상태로 만들어내는 함수(불변성은 ㅣ키면서)

const reducer = (state = initialState, action) => immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
  switch (action.type) {
    case RETWEET_REQUEST:
      draft.retweetLoading = true;
      draft.retweetDone = false;
      draft.retweetError = null;
      break;

    case RETWEET_SUCCESS:
      {
        draft.retweetLoading = false;
        draft.retweetDone = true;
        draft.mainPosts.unshift(action.data);
        break;
      }

    case RETWEET_FAILURE:
      draft.retweetLoading = false;
      draft.retweetError = action.error;
      break;

    case REMOVE_IMAGE:
      draft.imagePaths = draft.imagePaths.filter((v, i) => i !== action.data);
      break;

    case UPLOAD_IMAGES_REQUEST:
      draft.uploadImagesLoading = true;
      draft.uploadImagesDone = false;
      draft.uploadImagesError = null;
      break;

    case UPLOAD_IMAGES_SUCCESS:
      {
        draft.imagePaths = action.data;
        draft.uploadImagesLoading = false;
        draft.uploadImagesDone = true;
        break;
      }

    case UPLOAD_IMAGES_FAILURE:
      draft.uploadImagesLoading = false;
      draft.uploadImagesError = action.error;
      break;

    case LIKE_POST_REQUEST:
      draft.likePostLoading = true;
      draft.likePostDone = false;
      draft.likePostError = null;
      break;

    case LIKE_POST_SUCCESS:
      {
        const post = draft.mainPosts.find(v => v.id === action.data.PostId);
        post.Likers.push({
          id: action.data.UserId
        });
        draft.likePostLoading = false;
        draft.likePostDone = true;
        break;
      }

    case LIKE_POST_FAILURE:
      draft.likePostLoading = false;
      draft.likePostError = action.error;
      break;

    case UNLIKE_POST_REQUEST:
      draft.unlikePostLoading = true;
      draft.unlikePostDone = false;
      draft.unlikePostError = null;
      break;

    case UNLIKE_POST_SUCCESS:
      {
        const post = draft.mainPosts.find(v => v.id === action.data.PostId);
        post.Likers = post.Likers.filter(v => v.id !== action.data.UserId);
        draft.unlikePostLoading = false;
        draft.unlikePostDone = true;
        break;
      }

    case UNLIKE_POST_FAILURE:
      draft.unlikePostLoading = false;
      draft.unlikePostError = action.error;
      break;

    case LOAD_POSTS_REQUEST:
      draft.loadPostsLoading = true;
      draft.loadPostsDone = false;
      draft.loadPostsError = null;
      break;

    case LOAD_POSTS_SUCCESS:
      draft.loadPostsLoading = false;
      draft.loadPostsDone = true;
      draft.mainPosts = draft.mainPosts.concat(action.data);
      draft.hasMorePost = action.data.length === 10;
      break;

    case LOAD_POSTS_FAILURE:
      draft.loadPostsLoading = false;
      draft.loadPostsError = action.error;
      break;

    case ADD_POST_REQUEST:
      draft.addPostLoading = true;
      draft.addPostDone = false;
      draft.addPostError = null;
      break;

    case ADD_POST_SUCCESS:
      draft.addPostLoading = false;
      draft.addPostDone = true;
      draft.mainPosts.unshift(action.data);
      draft.imagePaths = [];
      break;

    case ADD_POST_FAILURE:
      draft.addPostLoading = false;
      draft.addPostError = action.error;
      break;

    case REMOVE_POST_REQUEST:
      draft.removePostLoading = true;
      draft.removePostDone = false;
      draft.removePostError = null;
      break;

    case REMOVE_POST_SUCCESS:
      draft.removePostLoading = false;
      draft.removePostDone = true;
      draft.mainPosts = draft.mainPosts.filter(v => v.id !== action.data.PostId);
      break;

    case REMOVE_POST_FAILURE:
      draft.removePostLoading = false;
      draft.removePostError = action.error;
      break;

    case ADD_COMMENT_REQUEST:
      draft.addCommentLoading = true;
      draft.addCommentDone = false;
      draft.addCommentError = null;
      break;

    case ADD_COMMENT_SUCCESS:
      {
        const post = draft.mainPosts.find(v => v.id === action.data.PostId);
        post.Comments.unshift(action.data);
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        break; // const postIndex = state.mainPosts.findIndex(
        //   (v) => v.id === action.data.postId
        // );
        // const post = { ...state.mainPosts[postIndex] };
        // post.Comments = [dummyComment(action.data.content), ...post.Comments];
        // const mainPosts = [...state.mainPosts];
        // mainPosts[postIndex] = post;
        // return {
        //   ...state,
        //   mainPosts,
        //   addCommentLoading: false,
        //   addCommentDone: true,
        // };
      }

    case ADD_COMMENT_FAILURE:
      draft.addCommentLoading = false;
      draft.addCommentError = action.error;
      break;

    default:
      break;
  }
});

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS, LOAD_MY_INFO_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, REMOVE_FOLLOWER_REQUEST, REMOVE_FOLLOWER_SUCCESS, REMOVE_FOLLOWER_FAILURE, LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWERS_SUCCESS, LOAD_FOLLOWERS_FAILURE, LOAD_FOLLOWINGS_REQUEST, LOAD_FOLLOWINGS_SUCCESS, LOAD_FOLLOWINGS_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_REQUEST", function() { return LOAD_MY_INFO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_SUCCESS", function() { return LOAD_MY_INFO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_FAILURE", function() { return LOAD_MY_INFO_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_REQUEST", function() { return CHANGE_NICKNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_SUCCESS", function() { return CHANGE_NICKNAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_FAILURE", function() { return CHANGE_NICKNAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_REQUEST", function() { return FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_SUCCESS", function() { return FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_FAILURE", function() { return FOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_REQUEST", function() { return UNFOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_SUCCESS", function() { return UNFOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_FAILURE", function() { return UNFOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_REQUEST", function() { return REMOVE_FOLLOWER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_SUCCESS", function() { return REMOVE_FOLLOWER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_FAILURE", function() { return REMOVE_FOLLOWER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_REQUEST", function() { return LOAD_FOLLOWERS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_SUCCESS", function() { return LOAD_FOLLOWERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_FAILURE", function() { return LOAD_FOLLOWERS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_REQUEST", function() { return LOAD_FOLLOWINGS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_SUCCESS", function() { return LOAD_FOLLOWINGS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_FAILURE", function() { return LOAD_FOLLOWINGS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_OF_ME", function() { return REMOVE_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  loadMyInfoLoading: false,
  //유저 정보 가져오기 시도중
  loadMyInfoDone: false,
  loadMyInfoError: null,
  followLoading: false,
  //팔로우 시도중
  followDone: false,
  followError: null,
  unfollowLoading: false,
  //언팔로우 시도중
  unfollowDone: false,
  unfollowError: null,
  logInLoading: false,
  //로그인 시도중
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  //로그아웃 시도중
  logOutDone: false,
  logOutError: null,
  signUpLoading: false,
  // 회원가입 시도중
  signUpDone: false,
  signUpError: null,
  changeNicknameLoading: false,
  // 닉네임 변경 시도중
  changeNicknameDone: false,
  changeNicknameError: null,
  loadFollowersLoading: false,
  // 팔로워 가져오기 시도중
  loadFollowersDone: false,
  loadFollowersError: null,
  loadFollowingsLoading: false,
  // 팔로우 가져오기 시도중
  loadFollowingsDone: false,
  loadFollowingsError: null,
  removeFollowerLoading: false,
  // 팔로우 가져오기 시도중
  removeFollowerDone: false,
  removeFollowerError: null,
  me: null,
  signUpData: {},
  loginData: {}
};
const LOAD_MY_INFO_REQUEST = "LOAD_MY_INFO_REQUEST";
const LOAD_MY_INFO_SUCCESS = "LOAD_MY_INFO_SUCCESS";
const LOAD_MY_INFO_FAILURE = "LOAD_MY_INFO_FAILURE";
const LOG_IN_REQUEST = "LOG_IN_REQUEST";
const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
const LOG_IN_FAILURE = "LOG_IN_FAILURE";
const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";
const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";
const CHANGE_NICKNAME_REQUEST = "CHANGE_NICKNAME_REQUEST";
const CHANGE_NICKNAME_SUCCESS = "CHANGE_NICKNAME_SUCCESS";
const CHANGE_NICKNAME_FAILURE = "CHANGE_NICKNAME_FAILURE";
const FOLLOW_REQUEST = "FOLLOW_REQUEST";
const FOLLOW_SUCCESS = "FOLLOW_SUCCESS";
const FOLLOW_FAILURE = "FOLLOW_FAILURE";
const UNFOLLOW_REQUEST = "UNFOLLOW_REQUEST";
const UNFOLLOW_SUCCESS = "UNFOLLOW_SUCCESS";
const UNFOLLOW_FAILURE = "UNFOLLOW_FAILURE";
const REMOVE_FOLLOWER_REQUEST = "REMOVE_FOLLOWER_REQUEST";
const REMOVE_FOLLOWER_SUCCESS = "REMOVE_FOLLOWER_SUCCESS";
const REMOVE_FOLLOWER_FAILURE = "REMOVE_FOLLOWER_FAILLOAD_URE";
const LOAD_FOLLOWERS_REQUEST = "LOAD_FOLLOW_REQUEST";
const LOAD_FOLLOWERS_SUCCESS = "LOAD_FOLLOW_SUCCESS";
const LOAD_FOLLOWERS_FAILURE = "LOAD_FOLLOW_FAILURE";
const LOAD_FOLLOWINGS_REQUEST = "LOAD_UNFOLLOW_REQUEST";
const LOAD_FOLLOWINGS_SUCCESS = "LOAD_UNFOLLOW_SUCCESS";
const LOAD_FOLLOWINGS_FAILURE = "LOAD_UNFOLLOW_FAILURE";
const ADD_POST_TO_ME = "ADD_POST_TO_ME";
const REMOVE_POST_OF_ME = "REMOVE_POST_OF_ME";
const loginRequestAction = data => {
  return {
    type: LOG_IN_REQUEST,
    data
  };
};
const logoutRequestAction = () => {
  return {
    type: LOG_OUT_REQUEST
  };
};

const reducer = (state = initialState, action) => {
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
    switch (action.type) {
      case REMOVE_FOLLOWER_REQUEST:
        draft.removeFollowerLoading = true;
        draft.removeFollowerError = null;
        draft.removeFollowerDone = false;
        break;

      case REMOVE_FOLLOWER_SUCCESS:
        draft.removeFollowerLoading = false;
        draft.removeFollowerDone = true;
        draft.me.Followers = draft.me.Followers.filter(v => v.id !== action.data.UserId);
        break;

      case REMOVE_FOLLOWER_FAILURE:
        draft.removeFollowerLoading = false;
        draft.removeFollowerError = action.error;
        break;

      case LOAD_FOLLOWERS_REQUEST:
        draft.loadFollowersLoading = true;
        draft.loadFollowersError = null;
        draft.loadFollowersDone = false;
        break;

      case LOAD_FOLLOWERS_SUCCESS:
        draft.loadFollowersLoading = false;
        draft.loadFollowersDone = true;
        draft.me.Followers = action.data;
        break;

      case LOAD_FOLLOWERS_FAILURE:
        draft.loadFollowersLoading = false;
        draft.loadFollowersError = action.error;
        break;

      case LOAD_FOLLOWINGS_REQUEST:
        draft.loadFollowingsLoading = true;
        draft.loadFollowingsError = null;
        draft.loadFollowingsDone = false;
        break;

      case LOAD_FOLLOWINGS_SUCCESS:
        draft.loadFollowingsLoading = false;
        draft.loadFollowingsDone = true;
        draft.me.Followings = action.data;
        break;

      case LOAD_FOLLOWINGS_FAILURE:
        draft.loadFollowingsLoading = false;
        draft.loadFollowingsError = action.error;
        break;

      case LOAD_MY_INFO_REQUEST:
        draft.loadMyInfoLoading = true;
        draft.loadMyInfoError = null;
        draft.loadMyInfoDone = false;
        break;

      case LOAD_MY_INFO_SUCCESS:
        draft.loadMyInfoLoading = false;
        draft.loadMyInfoDone = true;
        draft.me = action.data;
        break;

      case LOAD_MY_INFO_FAILURE:
        draft.loadMyInfoLoading = false;
        draft.loadMyInfoError = action.error;
        break;

      case FOLLOW_REQUEST:
        draft.followLoading = true;
        draft.followError = null;
        draft.followDone = false;
        break;

      case FOLLOW_SUCCESS:
        draft.followLoading = false;
        draft.followDone = true;
        draft.me.Followings.push({
          id: action.data.UserId
        });
        break;

      case FOLLOW_FAILURE:
        draft.followLoading = false;
        draft.followError = action.error;
        break;

      case UNFOLLOW_REQUEST:
        draft.unfollowLoading = true;
        draft.unfollowError = null;
        draft.unfollowDone = false;
        break;

      case UNFOLLOW_SUCCESS:
        draft.unfollowLoading = false;
        draft.unfollowDone = true;
        draft.me.Followings = draft.me.Followings.filter(v => v.id !== action.data.UserId);
        break;

      case UNFOLLOW_FAILURE:
        draft.unfollowLoading = false;
        draft.unfollowError = action.error;
        break;

      case LOG_IN_REQUEST:
        draft.logInLoading = true;
        draft.logInError = null;
        draft.logInDone = false;
        break;

      case LOG_IN_SUCCESS:
        draft.logInLoading = false;
        draft.logInDone = true;
        draft.me = action.data;
        break;

      case LOG_IN_FAILURE:
        draft.logInLoading = false;
        draft.logInError = action.error;
        break;

      case LOG_OUT_REQUEST:
        draft.logOutLoading = true;
        draft.logOutDone = false;
        draft.logOutError = null;
        break;

      case LOG_OUT_SUCCESS:
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.me = null;
        break;

      case LOG_OUT_FAILURE:
        draft.logOutLoading = false;
        draft.logOutError = action.error;
        break;

      case SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpDone = false;
        draft.signUpError = null;
        break;

      case SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpDone = true;
        break;

      case SIGN_UP_FAILURE:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;

      case CHANGE_NICKNAME_REQUEST:
        draft.changeNicknameLoading = true;
        draft.changeNicknameDone = false;
        draft.changeNicknameError = null;
        break;

      case CHANGE_NICKNAME_SUCCESS:
        draft.me.nickname = action.data.nickname;
        draft.changeNicknameLoading = false;
        draft.changeNicknameDone = true;
        break;

      case CHANGE_NICKNAME_FAILURE:
        draft.changeNicknameLoading = false;
        draft.changeNicknameError = action.error;
        break;

      case ADD_POST_TO_ME:
        draft.me.Posts.unshift({
          id: action.data
        });
        break;
      // return {
      //   ...state,
      //   me: {
      //     ...state.me,
      //     Posts: [{ id: action.data }, ...state.me.Posts],
      //   },
      // };

      case REMOVE_POST_OF_ME:
        draft.me.Posts = draft.me.Posts.filter(v => v.id !== action.data);
        break;
      // return {
      //     ...state,
      //     me: {
      //       ...state.me,
      //       Posts: state.me.Posts.filter((v) => v.id !== action.data),
      //     },
      //   };

      default:
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ "./sagas/post.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./sagas/user.js");




axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.baseURL = "http://localhost:3065";
axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.withCredentials = true; //쿠키 전달을 위해

function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_post__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_user__WEBPACK_IMPORTED_MODULE_3__["default"])]);
}

/***/ }),

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");





function retweetAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/post/${data}/retweet`, data);
}

function* retweet(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(retweetAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["RETWEET_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["RETWEET_FAILURE"],
      error: err.response.data
    });
  }
}

function uploadImagesAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/post/images", data); //form 데이터는 json 형식이 아닌 그대로의 data로 넣어준다.
}

function* uploadImages(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(uploadImagesAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_FAILURE"],
      error: err.response.data
    });
  }
}

function addPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/post", data);
}

function* addPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(addPostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_SUCCESS"],
      data: result.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_TO_ME"],
      data: result.data.id
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function likePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch(`/post/${data}/like`);
}

function* likePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(likePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function unlikePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`/post/${data}/like`);
}

function* unlikePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(unlikePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function loadPostsAPI(lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/posts?lastId=${lastId || 0}`);
}

function* loadPosts(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadPostsAPI, action.lastId);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_FAILURE"],
      error: err.response.data
    });
  }
}

function removePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`/post/${data}`);
}

function* removePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(removePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_SUCCESS"],
      data: result.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_OF_ME"],
      data: action.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function addCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/post/${data.postId}/comment`, data); //Post /post/1/comment
}

function* addComment(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(addCommentAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_FAILURE"],
      error: err.response.data
    });
  }
}

function* watchRetweet() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["RETWEET_REQUEST"], retweet);
}

function* watchUploadImages() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_REQUEST"], uploadImages);
}

function* watchLikePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_REQUEST"], likePost);
}

function* watchUnlikePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_REQUEST"], unlikePost);
}

function* watchAddPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_REQUEST"], addPost);
}

function* watchLoadPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["throttle"])(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_REQUEST"], loadPosts);
}

function* watchRemovePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_REQUEST"], removePost);
}

function* watchAddComment() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_REQUEST"], addComment);
}

function* postSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRetweet), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUploadImages), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUnlikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddComment)]);
}

/***/ }),

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");




function removeFollowerAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`/user/follower/${data}`, data);
}

function* removeFollower(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(removeFollowerAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWER_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWER_FAILURE"],
      error: err.response.data
    });
  }
}

function loadFollowersAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/user/followers", data);
}

function* loadFollowers(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadFollowersAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWERS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWERS_FAILURE"],
      error: err.response.data
    });
  }
}

function loadFollowingsAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/user/followings", data);
}

function* loadFollowings(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadFollowingsAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWINGS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWINGS_FAILURE"],
      error: err.response.data
    });
  }
}

function changeNicknameAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch("/user/nickname", {
    nickname: data
  });
}

function* changeNickname(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(changeNicknameAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_FAILURE"],
      error: err.response.data
    });
  }
}

function loadMyInfoAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/user");
}

function* loadMyInfo(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadMyInfoAPI, action.data);
    console.log(result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_FAILURE"],
      error: err.response.data
    });
  }
}

function logInAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/user/login", data);
}

function* logIn(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(logInAPI, action.data);
    console.log(result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILURE"],
      error: err.response.data
    });
  }
}

function logOutAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/user/logout");
}

function* logOut() {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(logOutAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_SUCCESS"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_FAILURE"],
      error: err.response.data
    });
  }
}

function signUpAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/user", data);
}

function* signUp(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(signUpAPI, action.data);
    console.log(result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_SUCCESS"]
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAILURE"],
      error: err.response.data
    });
  }
}

function followAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch(`/user/${data}/follow`);
}

function* follow(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(followAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_FAILURE"],
      error: err.response.data
    });
  }
}

function unfollowAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`/user/${data}/follow`);
}

function* unfollow(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(unfollowAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_FAILURE"],
      error: err.response.data
    });
  }
}

function* watchRemoveFollower() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWER_REQUEST"], removeFollower);
}

function* watchLoadFollowers() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWERS_REQUEST"], loadFollowers);
}

function* watchLoadFollowings() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWINGS_REQUEST"], loadFollowings);
}

function* watchChangeNickname() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_REQUEST"], changeNickname);
}

function* watchLoadMyInfo() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_REQUEST"], loadMyInfo);
}

function* watchFollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_REQUEST"], follow);
}

function* watchUnfollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_REQUEST"], unfollow);
}

function* watchLogIn() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"], logIn);
}

function* watchLogOut() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_REQUEST"], logOut);
}

function* watchSignUp() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_REQUEST"], signUp);
}

function* userSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRemoveFollower), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadFollowers), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadFollowings), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchChangeNickname), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadMyInfo), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUnfollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchSignUp)]);
}

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_5__);







const loggerMiddleware = ({
  dispatch,
  getState
}) => next => action => {
  console.log(action);
  return next(action);
};

const configureStore = () => {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_5___default()();
  const middlewares = [sagaMiddleware, loggerMiddleware];
  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(...middlewares));
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_3__["default"], enhancer);
  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_4__["default"]);
  return store;
};

const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["createWrapper"])(configureStore, {
  debug: true
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy91c2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW1tZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiJdLCJuYW1lcyI6WyJOb2RlQmlyZCIsIkNvbXBvbmVudCIsInByb3RvdHlwZSIsInByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiLCJyb290UmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsImluZGV4Iiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiSFlEUkFURSIsImNvbnNvbGUiLCJsb2ciLCJwYXlsb2FkIiwidXNlciIsInBvc3QiLCJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpbWFnZVBhdGhzIiwiaGFzTW9yZVBvc3QiLCJsaWtlUG9zdExvYWRpbmciLCJsaWtlUG9zdERvbmUiLCJsaWtlUG9zdEVycm9yIiwidW5saWtlUG9zdExvYWRpbmciLCJ1bmxpa2VQb3N0RG9uZSIsInVubGlrZVBvc3RFcnJvciIsImxvYWRQb3N0c0xvYWRpbmciLCJsb2FkUG9zdHNEb25lIiwibG9hZFBvc3RzRXJyb3IiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwicmVtb3ZlUG9zdExvYWRpbmciLCJyZW1vdmVQb3N0RG9uZSIsInJlbW92ZVBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJ1cGxvYWRJbWFnZXNMb2FkaW5nIiwidXBsb2FkSW1hZ2VzRG9uZSIsInVwbG9hZEltYWdlc0Vycm9yIiwicmV0d2VldExvYWRpbmciLCJyZXR3ZWV0RG9uZSIsInJldHdlZXRFcnJvciIsIlVQTE9BRF9JTUFHRVNfUkVRVUVTVCIsIlVQTE9BRF9JTUFHRVNfU1VDQ0VTUyIsIlVQTE9BRF9JTUFHRVNfRkFJTFVSRSIsIkxJS0VfUE9TVF9SRVFVRVNUIiwiTElLRV9QT1NUX1NVQ0NFU1MiLCJMSUtFX1BPU1RfRkFJTFVSRSIsIlVOTElLRV9QT1NUX1JFUVVFU1QiLCJVTkxJS0VfUE9TVF9TVUNDRVNTIiwiVU5MSUtFX1BPU1RfRkFJTFVSRSIsIkxPQURfUE9TVFNfUkVRVUVTVCIsIkxPQURfUE9TVFNfU1VDQ0VTUyIsIkxPQURfUE9TVFNfRkFJTFVSRSIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsIlJFVFdFRVRfUkVRVUVTVCIsIlJFVFdFRVRfU1VDQ0VTUyIsIlJFVFdFRVRfRkFJTFVSRSIsIlJFTU9WRV9JTUFHRSIsImFkZFBvc3QiLCJkYXRhIiwiYWRkQ29tbWVudCIsInJlZHVjZXIiLCJwcm9kdWNlIiwiZHJhZnQiLCJ1bnNoaWZ0IiwiZXJyb3IiLCJmaWx0ZXIiLCJ2IiwiaSIsImZpbmQiLCJpZCIsIlBvc3RJZCIsIkxpa2VycyIsInB1c2giLCJVc2VySWQiLCJjb25jYXQiLCJsZW5ndGgiLCJDb21tZW50cyIsImxvYWRNeUluZm9Mb2FkaW5nIiwibG9hZE15SW5mb0RvbmUiLCJsb2FkTXlJbmZvRXJyb3IiLCJmb2xsb3dMb2FkaW5nIiwiZm9sbG93RG9uZSIsImZvbGxvd0Vycm9yIiwidW5mb2xsb3dMb2FkaW5nIiwidW5mb2xsb3dEb25lIiwidW5mb2xsb3dFcnJvciIsImxvZ0luTG9hZGluZyIsImxvZ0luRG9uZSIsImxvZ0luRXJyb3IiLCJsb2dPdXRMb2FkaW5nIiwibG9nT3V0RG9uZSIsImxvZ091dEVycm9yIiwic2lnblVwTG9hZGluZyIsInNpZ25VcERvbmUiLCJzaWduVXBFcnJvciIsImNoYW5nZU5pY2tuYW1lTG9hZGluZyIsImNoYW5nZU5pY2tuYW1lRG9uZSIsImNoYW5nZU5pY2tuYW1lRXJyb3IiLCJsb2FkRm9sbG93ZXJzTG9hZGluZyIsImxvYWRGb2xsb3dlcnNEb25lIiwibG9hZEZvbGxvd2Vyc0Vycm9yIiwibG9hZEZvbGxvd2luZ3NMb2FkaW5nIiwibG9hZEZvbGxvd2luZ3NEb25lIiwibG9hZEZvbGxvd2luZ3NFcnJvciIsInJlbW92ZUZvbGxvd2VyTG9hZGluZyIsInJlbW92ZUZvbGxvd2VyRG9uZSIsInJlbW92ZUZvbGxvd2VyRXJyb3IiLCJtZSIsInNpZ25VcERhdGEiLCJsb2dpbkRhdGEiLCJMT0FEX01ZX0lORk9fUkVRVUVTVCIsIkxPQURfTVlfSU5GT19TVUNDRVNTIiwiTE9BRF9NWV9JTkZPX0ZBSUxVUkUiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVCIsIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTIiwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUiLCJGT0xMT1dfUkVRVUVTVCIsIkZPTExPV19TVUNDRVNTIiwiRk9MTE9XX0ZBSUxVUkUiLCJVTkZPTExPV19SRVFVRVNUIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCIsIlJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTIiwiUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUiLCJMT0FEX0ZPTExPV0VSU19SRVFVRVNUIiwiTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyIsIkxPQURfRk9MTE9XRVJTX0ZBSUxVUkUiLCJMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCIsIkxPQURfRk9MTE9XSU5HU19TVUNDRVNTIiwiTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUiLCJBRERfUE9TVF9UT19NRSIsIlJFTU9WRV9QT1NUX09GX01FIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsIkZvbGxvd2VycyIsIkZvbGxvd2luZ3MiLCJuaWNrbmFtZSIsIlBvc3RzIiwiYXhpb3MiLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJ3aXRoQ3JlZGVudGlhbHMiLCJyb290U2FnYSIsImFsbCIsImZvcmsiLCJwb3N0U2FnYSIsInVzZXJTYWdhIiwicmV0d2VldEFQSSIsInJldHdlZXQiLCJyZXN1bHQiLCJjYWxsIiwicHV0IiwiZXJyIiwicmVzcG9uc2UiLCJ1cGxvYWRJbWFnZXNBUEkiLCJ1cGxvYWRJbWFnZXMiLCJhZGRQb3N0QVBJIiwibGlrZVBvc3RBUEkiLCJwYXRjaCIsImxpa2VQb3N0IiwidW5saWtlUG9zdEFQSSIsImRlbGV0ZSIsInVubGlrZVBvc3QiLCJsb2FkUG9zdHNBUEkiLCJsYXN0SWQiLCJnZXQiLCJsb2FkUG9zdHMiLCJyZW1vdmVQb3N0QVBJIiwicmVtb3ZlUG9zdCIsImFkZENvbW1lbnRBUEkiLCJwb3N0SWQiLCJ3YXRjaFJldHdlZXQiLCJ0YWtlTGF0ZXN0Iiwid2F0Y2hVcGxvYWRJbWFnZXMiLCJ3YXRjaExpa2VQb3N0Iiwid2F0Y2hVbmxpa2VQb3N0Iiwid2F0Y2hBZGRQb3N0Iiwid2F0Y2hMb2FkUG9zdHMiLCJ0aHJvdHRsZSIsIndhdGNoUmVtb3ZlUG9zdCIsIndhdGNoQWRkQ29tbWVudCIsInJlbW92ZUZvbGxvd2VyQVBJIiwicmVtb3ZlRm9sbG93ZXIiLCJsb2FkRm9sbG93ZXJzQVBJIiwibG9hZEZvbGxvd2VycyIsImxvYWRGb2xsb3dpbmdzQVBJIiwibG9hZEZvbGxvd2luZ3MiLCJjaGFuZ2VOaWNrbmFtZUFQSSIsImNoYW5nZU5pY2tuYW1lIiwibG9hZE15SW5mb0FQSSIsImxvYWRNeUluZm8iLCJsb2dJbkFQSSIsImxvZ0luIiwibG9nT3V0QVBJIiwibG9nT3V0Iiwic2lnblVwQVBJIiwic2lnblVwIiwiZm9sbG93QVBJIiwiZm9sbG93IiwidW5mb2xsb3dBUEkiLCJ1bmZvbGxvdyIsIndhdGNoUmVtb3ZlRm9sbG93ZXIiLCJ3YXRjaExvYWRGb2xsb3dlcnMiLCJ3YXRjaExvYWRGb2xsb3dpbmdzIiwid2F0Y2hDaGFuZ2VOaWNrbmFtZSIsIndhdGNoTG9hZE15SW5mbyIsIndhdGNoRm9sbG93Iiwid2F0Y2hVbmZvbGxvdyIsIndhdGNoTG9nSW4iLCJ3YXRjaExvZ091dCIsIndhdGNoU2lnblVwIiwibG9nZ2VyTWlkZGxld2FyZSIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJuZXh0IiwiY29uZmlndXJlU3RvcmUiLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwibWlkZGxld2FyZXMiLCJlbmhhbmNlciIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInNhZ2FUYXNrIiwicnVuIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxRQUFRLEdBQUcsQ0FBQztFQUFFQztBQUFGLENBQUQsS0FBbUI7RUFDbEMsT0FDRSxtRUFDRSxNQUFDLGdEQUFEO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDRTtJQUFNLE9BQU8sRUFBQyxPQUFkO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFERixF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UixDQUFZSixNQUFaO0VBQ0EsT0FBT29PLElBQUksQ0FBQ3BPLE1BQUQsQ0FBWDtBQUNELENBTkg7O0FBUUEsTUFBTXFPLGNBQWMsR0FBRyxNQUFNO0VBQzNCLE1BQU1DLGNBQWMsR0FBR0MsaURBQW9CLEVBQTNDO0VBQ0EsTUFBTUMsV0FBVyxHQUFHLENBQUNGLGNBQUQsRUFBaUJMLGdCQUFqQixDQUFwQjtFQUNBLE1BQU1RLFFBQVEsR0FDWixRQUNJQyxTQURKLEdBRUlDLG9GQUFtQixDQUFDQyw2REFBZSxDQUFDLEdBQUdKLFdBQUosQ0FBaEIsQ0FIekI7RUFJQSxNQUFNSyxLQUFLLEdBQUdDLHlEQUFXLENBQUM5SyxpREFBRCxFQUFVeUssUUFBVixDQUF6QjtFQUNBSSxLQUFLLENBQUNFLFFBQU4sR0FBaUJULGNBQWMsQ0FBQ1UsR0FBZixDQUFtQnBGLDhDQUFuQixDQUFqQjtFQUNBLE9BQU9pRixLQUFQO0FBQ0QsQ0FWRDs7QUFZQSxNQUFNblAsT0FBTyxHQUFHdVAsd0VBQWEsQ0FBQ1osY0FBRCxFQUFpQjtFQUM1Q2EsS0FBSztBQUR1QyxDQUFqQixDQUE3QjtBQUlleFAsc0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQkEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBcImFudGQvZGlzdC9hbnRkLmNzc1wiO1xyXG5pbXBvcnQgd3JhcHBlciBmcm9tIFwiLi4vc3RvcmUvY29uZmlndXJlU3RvcmVcIjtcclxuXHJcbmNvbnN0IE5vZGVCaXJkID0gKHsgQ29tcG9uZW50IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cclxuICAgICAgICA8dGl0bGU+Tm9kZUJpcmQ8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxDb21wb25lbnQgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5Ob2RlQmlyZC5wcm90b3R5cGUgPSB7XHJcbiAgQ29tcG9uZW50OiBwcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KE5vZGVCaXJkKTtcclxuIiwiaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB1c2VyIGZyb20gXCIuL3VzZXJcIjtcclxuaW1wb3J0IHBvc3QgZnJvbSBcIi4vcG9zdFwiO1xyXG5cclxuLy8o7J207KCE7IOB7YOcLCDslaHshZgpID0+64uk7J2M7IOB7YOcXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICBpbmRleDogKHN0YXRlID0ge30sIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICBjYXNlIEhZRFJBVEU6XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJIWURSQVRFXCIsIGFjdGlvbik7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkIH07XHJcblxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuICB9LFxyXG4gIHVzZXIsXHJcbiAgcG9zdCxcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xyXG4iLCJpbXBvcnQgcHJvZHVjZSBmcm9tIFwiaW1tZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbWFpblBvc3RzOiBbXSxcclxuICBpbWFnZVBhdGhzOiBbXSxcclxuICBoYXNNb3JlUG9zdDogdHJ1ZSxcclxuICBsaWtlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIGxpa2VQb3N0RG9uZTogZmFsc2UsXHJcbiAgbGlrZVBvc3RFcnJvcjogbnVsbCxcclxuICB1bmxpa2VQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgdW5saWtlUG9zdERvbmU6IGZhbHNlLFxyXG4gIHVubGlrZVBvc3RFcnJvcjogbnVsbCxcclxuICBsb2FkUG9zdHNMb2FkaW5nOiBmYWxzZSxcclxuICBsb2FkUG9zdHNEb25lOiBmYWxzZSxcclxuICBsb2FkUG9zdHNFcnJvcjogbnVsbCxcclxuICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gIGFkZFBvc3RFcnJvcjogbnVsbCxcclxuICByZW1vdmVQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgcmVtb3ZlUG9zdERvbmU6IGZhbHNlLFxyXG4gIHJlbW92ZVBvc3RFcnJvcjogbnVsbCxcclxuICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gIGFkZENvbW1lbnRFcnJvcjogbnVsbCxcclxuICB1cGxvYWRJbWFnZXNMb2FkaW5nOiBmYWxzZSxcclxuICB1cGxvYWRJbWFnZXNEb25lOiBmYWxzZSxcclxuICB1cGxvYWRJbWFnZXNFcnJvcjogbnVsbCxcclxuICByZXR3ZWV0TG9hZGluZzogZmFsc2UsXHJcbiAgcmV0d2VldERvbmU6IGZhbHNlLFxyXG4gIHJldHdlZXRFcnJvcjogbnVsbCxcclxufTtcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfUkVRVUVTVCA9IFwiVVBMT0FEX0lNQUdFU19SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX1NVQ0NFU1MgPSBcIlVQTE9BRF9JTUFHRVNfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19GQUlMVVJFID0gXCJVUExPQURfSU1BR0VTX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfUkVRVUVTVCA9IFwiTElLRV9QT1NUX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9TVUNDRVNTID0gXCJMSUtFX1BPU1RfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX0ZBSUxVUkUgPSBcIkxJS0VfUE9TVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfUkVRVUVTVCA9IFwiVU5MSUtFX1BPU1RfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfU1VDQ0VTUyA9IFwiVU5MSUtFX1BPU1RfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfRkFJTFVSRSA9IFwiVU5MSUtFX1BPU1RfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfUkVRVUVTVCA9IFwiTE9BRF9QT1NUU19SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1NVQ0NFU1MgPSBcIkxPQURfUE9TVFNfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19GQUlMVVJFID0gXCJMT0FEX1BPU1RTX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gXCJBRERfUE9TVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gXCJBRERfUE9TVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gXCJBRERfUE9TVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9IFwiUkVNT1ZFX1BPU1RfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9IFwiUkVNT1ZFX1BPU1RfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRSA9IFwiUkVNT1ZFX1BPU1RfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSBcIkFERF9DT01NRU5UX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSBcIkFERF9DT01NRU5UX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSBcIkFERF9DT01NRU5UX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBSRVRXRUVUX1JFUVVFU1QgPSBcIlJFVFdFRVRfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgUkVUV0VFVF9TVUNDRVNTID0gXCJSRVRXRUVUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IFJFVFdFRVRfRkFJTFVSRSA9IFwiUkVUV0VFVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0lNQUdFID0gXCJSRU1PVkVfSU1BR0VcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0ID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50ID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KTtcclxuXHJcbi8vcmVkdWNlcuuKlCDsnbTsoIQg7IOB7YOc66W8IOyVoeyFmOydhCDthrXtlbQg64uk7J2MIOyDge2DnOuhnCDrp4zrk6TslrTrgrTripQg7ZWo7IiYKOu2iOuzgOyEseydgCDjhaPtgqTrqbTshJwpXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT5cclxuICBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgY2FzZSBSRVRXRUVUX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQucmV0d2VldExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnJldHdlZXREb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmV0d2VldEVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRVRXRUVUX1NVQ0NFU1M6IHtcclxuICAgICAgICBkcmFmdC5yZXR3ZWV0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJldHdlZXREb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBSRVRXRUVUX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQucmV0d2VldExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZXR3ZWV0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIFJFTU9WRV9JTUFHRTpcclxuICAgICAgICBkcmFmdC5pbWFnZVBhdGhzID0gZHJhZnQuaW1hZ2VQYXRocy5maWx0ZXIoKHYsIGkpID0+IGkgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBVUExPQURfSU1BR0VTX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0Vycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBVUExPQURfSU1BR0VTX1NVQ0NFU1M6IHtcclxuICAgICAgICBkcmFmdC5pbWFnZVBhdGhzID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0RvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgVVBMT0FEX0lNQUdFU19GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgTElLRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5saWtlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5saWtlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMSUtFX1BPU1RfU1VDQ0VTUzoge1xyXG4gICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgICBwb3N0Lkxpa2Vycy5wdXNoKHsgaWQ6IGFjdGlvbi5kYXRhLlVzZXJJZCB9KTtcclxuICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5saWtlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTElLRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubGlrZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgVU5MSUtFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQudW5saWtlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51bmxpa2VQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFVOTElLRV9QT1NUX1NVQ0NFU1M6IHtcclxuICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgICAgcG9zdC5MaWtlcnMgPSBwb3N0Lkxpa2Vycy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlVzZXJJZCk7XHJcbiAgICAgICAgZHJhZnQudW5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51bmxpa2VQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBVTkxJS0VfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudW5saWtlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBMT0FEX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5jb25jYXQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGRyYWZ0Lmhhc01vcmVQb3N0ID0gYWN0aW9uLmRhdGEubGVuZ3RoID09PSAxMDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IFtdO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5maWx0ZXIoXHJcbiAgICAgICAgICAodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuUG9zdElkXHJcbiAgICAgICAgKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzoge1xyXG4gICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgICBwb3N0LkNvbW1lbnRzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vIGNvbnN0IHBvc3RJbmRleCA9IHN0YXRlLm1haW5Qb3N0cy5maW5kSW5kZXgoXHJcbiAgICAgICAgLy8gICAodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkXHJcbiAgICAgICAgLy8gKTtcclxuICAgICAgICAvLyBjb25zdCBwb3N0ID0geyAuLi5zdGF0ZS5tYWluUG9zdHNbcG9zdEluZGV4XSB9O1xyXG4gICAgICAgIC8vIHBvc3QuQ29tbWVudHMgPSBbZHVtbXlDb21tZW50KGFjdGlvbi5kYXRhLmNvbnRlbnQpLCAuLi5wb3N0LkNvbW1lbnRzXTtcclxuICAgICAgICAvLyBjb25zdCBtYWluUG9zdHMgPSBbLi4uc3RhdGUubWFpblBvc3RzXTtcclxuICAgICAgICAvLyBtYWluUG9zdHNbcG9zdEluZGV4XSA9IHBvc3Q7XHJcbiAgICAgICAgLy8gcmV0dXJuIHtcclxuICAgICAgICAvLyAgIC4uLnN0YXRlLFxyXG4gICAgICAgIC8vICAgbWFpblBvc3RzLFxyXG4gICAgICAgIC8vICAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIC8vICAgYWRkQ29tbWVudERvbmU6IHRydWUsXHJcbiAgICAgICAgLy8gfTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIiwiaW1wb3J0IHByb2R1Y2UgZnJvbSBcImltbWVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGxvYWRNeUluZm9Mb2FkaW5nOiBmYWxzZSwgLy/snKDsoIAg7KCV67O0IOqwgOyguOyYpOq4sCDsi5zrj4TspJFcclxuICBsb2FkTXlJbmZvRG9uZTogZmFsc2UsXHJcbiAgbG9hZE15SW5mb0Vycm9yOiBudWxsLFxyXG4gIGZvbGxvd0xvYWRpbmc6IGZhbHNlLCAvL+2MlOuhnOyasCDsi5zrj4TspJFcclxuICBmb2xsb3dEb25lOiBmYWxzZSxcclxuICBmb2xsb3dFcnJvcjogbnVsbCxcclxuICB1bmZvbGxvd0xvYWRpbmc6IGZhbHNlLCAvL+yWuO2MlOuhnOyasCDsi5zrj4TspJFcclxuICB1bmZvbGxvd0RvbmU6IGZhbHNlLFxyXG4gIHVuZm9sbG93RXJyb3I6IG51bGwsXHJcbiAgbG9nSW5Mb2FkaW5nOiBmYWxzZSwgLy/roZzqt7jsnbgg7Iuc64+E7KSRXHJcbiAgbG9nSW5Eb25lOiBmYWxzZSxcclxuICBsb2dJbkVycm9yOiBudWxsLFxyXG4gIGxvZ091dExvYWRpbmc6IGZhbHNlLCAvL+uhnOq3uOyVhOybgyDsi5zrj4TspJFcclxuICBsb2dPdXREb25lOiBmYWxzZSxcclxuICBsb2dPdXRFcnJvcjogbnVsbCxcclxuICBzaWduVXBMb2FkaW5nOiBmYWxzZSwgLy8g7ZqM7JuQ6rCA7J6FIOyLnOuPhOykkVxyXG4gIHNpZ25VcERvbmU6IGZhbHNlLFxyXG4gIHNpZ25VcEVycm9yOiBudWxsLFxyXG4gIGNoYW5nZU5pY2tuYW1lTG9hZGluZzogZmFsc2UsIC8vIOuLieuEpOyehCDrs4Dqsr0g7Iuc64+E7KSRXHJcbiAgY2hhbmdlTmlja25hbWVEb25lOiBmYWxzZSxcclxuICBjaGFuZ2VOaWNrbmFtZUVycm9yOiBudWxsLFxyXG4gIGxvYWRGb2xsb3dlcnNMb2FkaW5nOiBmYWxzZSwgLy8g7YyU66Gc7JuMIOqwgOyguOyYpOq4sCDsi5zrj4TspJFcclxuICBsb2FkRm9sbG93ZXJzRG9uZTogZmFsc2UsXHJcbiAgbG9hZEZvbGxvd2Vyc0Vycm9yOiBudWxsLFxyXG4gIGxvYWRGb2xsb3dpbmdzTG9hZGluZzogZmFsc2UsIC8vIO2MlOuhnOyasCDqsIDsoLjsmKTquLAg7Iuc64+E7KSRXHJcbiAgbG9hZEZvbGxvd2luZ3NEb25lOiBmYWxzZSxcclxuICBsb2FkRm9sbG93aW5nc0Vycm9yOiBudWxsLFxyXG4gIHJlbW92ZUZvbGxvd2VyTG9hZGluZzogZmFsc2UsIC8vIO2MlOuhnOyasCDqsIDsoLjsmKTquLAg7Iuc64+E7KSRXHJcbiAgcmVtb3ZlRm9sbG93ZXJEb25lOiBmYWxzZSxcclxuICByZW1vdmVGb2xsb3dlckVycm9yOiBudWxsLFxyXG4gIG1lOiBudWxsLFxyXG4gIHNpZ25VcERhdGE6IHt9LFxyXG4gIGxvZ2luRGF0YToge30sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9NWV9JTkZPX1JFUVVFU1QgPSBcIkxPQURfTVlfSU5GT19SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fU1VDQ0VTUyA9IFwiTE9BRF9NWV9JTkZPX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19GQUlMVVJFID0gXCJMT0FEX01ZX0lORk9fRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gXCJMT0dfSU5fUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSBcIkxPR19JTl9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9IFwiTE9HX0lOX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSBcIkxPR19PVVRfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gXCJMT0dfT1VUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9IFwiTE9HX09VVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gXCJTSUdOX1VQX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9IFwiU0lHTl9VUF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkUgPSBcIlNJR05fVVBfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUID0gXCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MgPSBcIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSA9IFwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfUkVRVUVTVCA9IFwiRk9MTE9XX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IEZPTExPV19TVUNDRVNTID0gXCJGT0xMT1dfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX0ZBSUxVUkUgPSBcIkZPTExPV19GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfUkVRVUVTVCA9IFwiVU5GT0xMT1dfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfU1VDQ0VTUyA9IFwiVU5GT0xMT1dfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfRkFJTFVSRSA9IFwiVU5GT0xMT1dfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUID0gXCJSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MgPSBcIlJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSA9IFwiUkVNT1ZFX0ZPTExPV0VSX0ZBSUxMT0FEX1VSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX1JFUVVFU1QgPSBcIkxPQURfRk9MTE9XX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX1NVQ0NFU1MgPSBcIkxPQURfRk9MTE9XX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX0ZBSUxVUkUgPSBcIkxPQURfRk9MTE9XX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCA9IFwiTE9BRF9VTkZPTExPV19SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyA9IFwiTE9BRF9VTkZPTExPV19TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSA9IFwiTE9BRF9VTkZPTExPV19GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfVE9fTUUgPSBcIkFERF9QT1NUX1RPX01FXCI7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9PRl9NRSA9IFwiUkVNT1ZFX1BPU1RfT0ZfTUVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBMT0dfSU5fUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBMT0dfT1VUX1JFUVVFU1QsXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHJldHVybiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgY2FzZSBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubWUuRm9sbG93ZXJzID0gZHJhZnQubWUuRm9sbG93ZXJzLmZpbHRlcihcclxuICAgICAgICAgICh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWRcclxuICAgICAgICApO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIExPQURfRk9MTE9XRVJTX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNFcnJvciA9IG51bGw7XHJcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0RvbmUgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX0ZPTExPV0VSU19TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0RvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2VycyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfRk9MTE9XRVJTX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0Vycm9yID0gbnVsbDtcclxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0RvbmUgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0RvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBMT0FEX01ZX0lORk9fUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0Vycm9yID0gbnVsbDtcclxuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfTVlfSU5GT19TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0RvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9NWV9JTkZPX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIEZPTExPV19SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yID0gbnVsbDtcclxuICAgICAgICBkcmFmdC5mb2xsb3dEb25lID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgRk9MTE9XX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmZvbGxvd0RvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MucHVzaCh7IGlkOiBhY3Rpb24uZGF0YS5Vc2VySWQgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgRk9MTE9XX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFVORk9MTE9XX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC51bmZvbGxvd0Vycm9yID0gbnVsbDtcclxuICAgICAgICBkcmFmdC51bmZvbGxvd0RvbmUgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBVTkZPTExPV19TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVuZm9sbG93RG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncyA9IGRyYWZ0Lm1lLkZvbGxvd2luZ3MuZmlsdGVyKFxyXG4gICAgICAgICAgKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlVzZXJJZFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVU5GT0xMT1dfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51bmZvbGxvd0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBMT0dfSU5fUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPR19JTl9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubWUgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0dfSU5fRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2dJbkVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPR19PVVRfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubWUgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPR19PVVRfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5zaWduVXBFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBTSUdOX1VQX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubWUubmlja25hbWUgPSBhY3Rpb24uZGF0YS5uaWNrbmFtZTtcclxuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX1BPU1RfVE9fTUU6XHJcbiAgICAgICAgZHJhZnQubWUuUG9zdHMudW5zaGlmdCh7IGlkOiBhY3Rpb24uZGF0YSB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgLy8gcmV0dXJuIHtcclxuICAgICAgLy8gICAuLi5zdGF0ZSxcclxuICAgICAgLy8gICBtZToge1xyXG4gICAgICAvLyAgICAgLi4uc3RhdGUubWUsXHJcbiAgICAgIC8vICAgICBQb3N0czogW3sgaWQ6IGFjdGlvbi5kYXRhIH0sIC4uLnN0YXRlLm1lLlBvc3RzXSxcclxuICAgICAgLy8gICB9LFxyXG4gICAgICAvLyB9O1xyXG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX09GX01FOlxyXG4gICAgICAgIGRyYWZ0Lm1lLlBvc3RzID0gZHJhZnQubWUuUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIC8vIHJldHVybiB7XHJcbiAgICAgIC8vICAgICAuLi5zdGF0ZSxcclxuICAgICAgLy8gICAgIG1lOiB7XHJcbiAgICAgIC8vICAgICAgIC4uLnN0YXRlLm1lLFxyXG4gICAgICAvLyAgICAgICBQb3N0czogc3RhdGUubWUuUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSksXHJcbiAgICAgIC8vICAgICB9LFxyXG4gICAgICAvLyAgIH07XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iLCJpbXBvcnQgeyBhbGwsIGZvcmsgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmltcG9ydCBwb3N0U2FnYSBmcm9tIFwiLi9wb3N0XCI7XHJcbmltcG9ydCB1c2VyU2FnYSBmcm9tIFwiLi91c2VyXCI7XHJcblxyXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gXCJodHRwOi8vbG9jYWxob3N0OjMwNjVcIjtcclxuYXhpb3MuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTsgLy/sv6DtgqQg7KCE64us7J2EIOychO2VtFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbZm9yayhwb3N0U2FnYSksIGZvcmsodXNlclNhZ2EpXSk7XHJcbn1cclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBwdXQsIHRha2VMYXRlc3QsIGFsbCwgZm9yaywgdGhyb3R0bGUsIGNhbGwgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gIEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgQUREX1BPU1RfUkVRVUVTVCxcclxuICBBRERfUE9TVF9TVUNDRVNTLFxyXG4gIExJS0VfUE9TVF9GQUlMVVJFLFxyXG4gIExJS0VfUE9TVF9SRVFVRVNULFxyXG4gIExJS0VfUE9TVF9TVUNDRVNTLFxyXG4gIExPQURfUE9TVFNfRkFJTFVSRSxcclxuICBMT0FEX1BPU1RTX1JFUVVFU1QsXHJcbiAgTE9BRF9QT1NUU19TVUNDRVNTLFxyXG4gIFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcbiAgUkVNT1ZFX1BPU1RfUkVRVUVTVCxcclxuICBSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG4gIFJFVFdFRVRfRkFJTFVSRSxcclxuICBSRVRXRUVUX1JFUVVFU1QsXHJcbiAgUkVUV0VFVF9TVUNDRVNTLFxyXG4gIFVOTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgVU5MSUtFX1BPU1RfUkVRVUVTVCxcclxuICBVTkxJS0VfUE9TVF9TVUNDRVNTLFxyXG4gIFVQTE9BRF9JTUFHRVNfRkFJTFVSRSxcclxuICBVUExPQURfSU1BR0VTX1JFUVVFU1QsXHJcbiAgVVBMT0FEX0lNQUdFU19TVUNDRVNTLFxyXG59IGZyb20gXCIuLi9yZWR1Y2Vycy9wb3N0XCI7XHJcbmltcG9ydCB7IEFERF9QT1NUX1RPX01FLCBSRU1PVkVfUE9TVF9PRl9NRSB9IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7XHJcblxyXG5mdW5jdGlvbiByZXR3ZWV0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChgL3Bvc3QvJHtkYXRhfS9yZXR3ZWV0YCwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiByZXR3ZWV0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJldHdlZXRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFVFdFRVRfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFVFdFRVRfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGxvYWRJbWFnZXNBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KFwiL3Bvc3QvaW1hZ2VzXCIsIGRhdGEpOyAvL2Zvcm0g642w7J207YSw64qUIGpzb24g7ZiV7Iud7J20IOyVhOuLjCDqt7jrjIDroZzsnZggZGF0YeuhnCDrhKPslrTspIDri6QuXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1cGxvYWRJbWFnZXMoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodXBsb2FkSW1hZ2VzQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVUExPQURfSU1BR0VTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVUExPQURfSU1BR0VTX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkUG9zdEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvcG9zdFwiLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX1RPX01FLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YS5pZCxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsaWtlUG9zdEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBhdGNoKGAvcG9zdC8ke2RhdGF9L2xpa2VgKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxpa2VQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxpa2VQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMSUtFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExJS0VfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVubGlrZVBvc3RBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5kZWxldGUoYC9wb3N0LyR7ZGF0YX0vbGlrZWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogdW5saWtlUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1bmxpa2VQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVTkxJS0VfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVU5MSUtFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkUG9zdHNBUEkobGFzdElkKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgL3Bvc3RzP2xhc3RJZD0ke2xhc3RJZCB8fCAwfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZFBvc3RzKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQb3N0c0FQSSwgYWN0aW9uLmxhc3RJZCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlUG9zdEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3Bvc3QvJHtkYXRhfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogcmVtb3ZlUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZW1vdmVQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfT0ZfTUUsXHJcbiAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZENvbW1lbnRBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KGAvcG9zdC8ke2RhdGEucG9zdElkfS9jb21tZW50YCwgZGF0YSk7IC8vUG9zdCAvcG9zdC8xL2NvbW1lbnRcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZENvbW1lbnQoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkQ29tbWVudEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoUmV0d2VldCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFJFVFdFRVRfUkVRVUVTVCwgcmV0d2VldCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFVwbG9hZEltYWdlcygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFVQTE9BRF9JTUFHRVNfUkVRVUVTVCwgdXBsb2FkSW1hZ2VzKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTGlrZVBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMSUtFX1BPU1RfUkVRVUVTVCwgbGlrZVBvc3QpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaFVubGlrZVBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChVTkxJS0VfUE9TVF9SRVFVRVNULCB1bmxpa2VQb3N0KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hBZGRQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX1BPU1RfUkVRVUVTVCwgYWRkUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRQb3N0cygpIHtcclxuICB5aWVsZCB0aHJvdHRsZSg1MDAwLCBMT0FEX1BPU1RTX1JFUVVFU1QsIGxvYWRQb3N0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZVBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChSRU1PVkVfUE9TVF9SRVFVRVNULCByZW1vdmVQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkQ29tbWVudCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9DT01NRU5UX1JFUVVFU1QsIGFkZENvbW1lbnQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9zdFNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtcclxuICAgIGZvcmsod2F0Y2hSZXR3ZWV0KSxcclxuICAgIGZvcmsod2F0Y2hVcGxvYWRJbWFnZXMpLFxyXG4gICAgZm9yayh3YXRjaExpa2VQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hVbmxpa2VQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hBZGRQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hMb2FkUG9zdHMpLFxyXG4gICAgZm9yayh3YXRjaFJlbW92ZVBvc3QpLFxyXG4gICAgZm9yayh3YXRjaEFkZENvbW1lbnQpLFxyXG4gIF0pO1xyXG59XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgZGVsYXksIHB1dCwgdGFrZUxhdGVzdCwgYWxsLCBmb3JrLCBjYWxsIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQge1xyXG4gIExPR19JTl9GQUlMVVJFLFxyXG4gIExPR19JTl9SRVFVRVNULFxyXG4gIExPR19JTl9TVUNDRVNTLFxyXG4gIExPR19PVVRfRkFJTFVSRSxcclxuICBMT0dfT1VUX1JFUVVFU1QsXHJcbiAgTE9HX09VVF9TVUNDRVNTLFxyXG4gIFNJR05fVVBfRkFJTFVSRSxcclxuICBTSUdOX1VQX1NVQ0NFU1MsXHJcbiAgU0lHTl9VUF9SRVFVRVNULFxyXG4gIEZPTExPV19SRVFVRVNULFxyXG4gIEZPTExPV19TVUNDRVNTLFxyXG4gIEZPTExPV19GQUlMVVJFLFxyXG4gIFVORk9MTE9XX1JFUVVFU1QsXHJcbiAgVU5GT0xMT1dfU1VDQ0VTUyxcclxuICBVTkZPTExPV19GQUlMVVJFLFxyXG4gIExPQURfTVlfSU5GT19SRVFVRVNULFxyXG4gIExPQURfTVlfSU5GT19TVUNDRVNTLFxyXG4gIExPQURfTVlfSU5GT19GQUlMVVJFLFxyXG4gIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNULFxyXG4gIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTLFxyXG4gIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFLFxyXG4gIExPQURfRk9MTE9XRVJTX1JFUVVFU1QsXHJcbiAgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QsXHJcbiAgTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyxcclxuICBMT0FEX0ZPTExPV0VSU19GQUlMVVJFLFxyXG4gIExPQURfRk9MTE9XSU5HU19TVUNDRVNTLFxyXG4gIExPQURfRk9MTE9XSU5HU19GQUlMVVJFLFxyXG4gIFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNULFxyXG4gIFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTLFxyXG4gIFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFLFxyXG59IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7XHJcblxyXG5mdW5jdGlvbiByZW1vdmVGb2xsb3dlckFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3VzZXIvZm9sbG93ZXIvJHtkYXRhfWAsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogcmVtb3ZlRm9sbG93ZXIoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmVtb3ZlRm9sbG93ZXJBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZEZvbGxvd2Vyc0FQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChcIi91c2VyL2ZvbGxvd2Vyc1wiLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRGb2xsb3dlcnMoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZEZvbGxvd2Vyc0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfRk9MTE9XRVJTX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZEZvbGxvd2luZ3NBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoXCIvdXNlci9mb2xsb3dpbmdzXCIsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZEZvbGxvd2luZ3MoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZEZvbGxvd2luZ3NBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfRk9MTE9XSU5HU19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlTmlja25hbWVBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wYXRjaChcIi91c2VyL25pY2tuYW1lXCIsIHsgbmlja25hbWU6IGRhdGEgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBjaGFuZ2VOaWNrbmFtZShhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChjaGFuZ2VOaWNrbmFtZUFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkTXlJbmZvQVBJKCkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoXCIvdXNlclwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRNeUluZm8oYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZE15SW5mb0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfTVlfSU5GT19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9nSW5BUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KFwiL3VzZXIvbG9naW5cIiwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dJbihhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dJbkFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19JTl9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX0lOX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9nT3V0QVBJKCkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KFwiL3VzZXIvbG9nb3V0XCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9nT3V0KCkge1xyXG4gIHRyeSB7XHJcbiAgICB5aWVsZCBjYWxsKGxvZ091dEFQSSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfT1VUX1NVQ0NFU1MsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19PVVRfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaWduVXBBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KFwiL3VzZXJcIiwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzaWduVXAoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoc2lnblVwQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogU0lHTl9VUF9TVUNDRVNTLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBTSUdOX1VQX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9sbG93QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucGF0Y2goYC91c2VyLyR7ZGF0YX0vZm9sbG93YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBmb2xsb3coYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoZm9sbG93QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBGT0xMT1dfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEZPTExPV19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVuZm9sbG93QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvdXNlci8ke2RhdGF9L2ZvbGxvd2ApO1xyXG59XHJcbmZ1bmN0aW9uKiB1bmZvbGxvdyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1bmZvbGxvd0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVU5GT0xMT1dfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVORk9MTE9XX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlRm9sbG93ZXIoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCwgcmVtb3ZlRm9sbG93ZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkRm9sbG93ZXJzKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCwgbG9hZEZvbGxvd2Vycyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRGb2xsb3dpbmdzKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QsIGxvYWRGb2xsb3dpbmdzKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQ2hhbmdlTmlja25hbWUoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChDSEFOR0VfTklDS05BTUVfUkVRVUVTVCwgY2hhbmdlTmlja25hbWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkTXlJbmZvKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9NWV9JTkZPX1JFUVVFU1QsIGxvYWRNeUluZm8pO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaEZvbGxvdygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEZPTExPV19SRVFVRVNULCBmb2xsb3cpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaFVuZm9sbG93KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoVU5GT0xMT1dfUkVRVUVTVCwgdW5mb2xsb3cpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dJbigpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPR19JTl9SRVFVRVNULCBsb2dJbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ091dCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPR19PVVRfUkVRVUVTVCwgbG9nT3V0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoU2lnblVwKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoU0lHTl9VUF9SRVFVRVNULCBzaWduVXApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogdXNlclNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtcclxuICAgIGZvcmsod2F0Y2hSZW1vdmVGb2xsb3dlciksXHJcbiAgICBmb3JrKHdhdGNoTG9hZEZvbGxvd2VycyksXHJcbiAgICBmb3JrKHdhdGNoTG9hZEZvbGxvd2luZ3MpLFxyXG4gICAgZm9yayh3YXRjaENoYW5nZU5pY2tuYW1lKSxcclxuICAgIGZvcmsod2F0Y2hMb2FkTXlJbmZvKSxcclxuICAgIGZvcmsod2F0Y2hGb2xsb3cpLFxyXG4gICAgZm9yayh3YXRjaFVuZm9sbG93KSxcclxuICAgIGZvcmsod2F0Y2hMb2dJbiksXHJcbiAgICBmb3JrKHdhdGNoTG9nT3V0KSxcclxuICAgIGZvcmsod2F0Y2hTaWduVXApLFxyXG4gIF0pO1xyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSwgY3JlYXRlU3RvcmUgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIjtcclxuaW1wb3J0IHJlZHVjZXIgZnJvbSBcIi4uL3JlZHVjZXJzXCI7XHJcbmltcG9ydCByb290U2FnYSBmcm9tIFwiLi4vc2FnYXNcIjtcclxuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gXCJyZWR1eC1zYWdhXCI7XHJcblxyXG5jb25zdCBsb2dnZXJNaWRkbGV3YXJlID1cclxuICAoeyBkaXNwYXRjaCwgZ2V0U3RhdGUgfSkgPT5cclxuICAobmV4dCkgPT5cclxuICAoYWN0aW9uKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhhY3Rpb24pO1xyXG4gICAgcmV0dXJuIG5leHQoYWN0aW9uKTtcclxuICB9O1xyXG5cclxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xyXG4gIGNvbnN0IG1pZGRsZXdhcmVzID0gW3NhZ2FNaWRkbGV3YXJlLCBsb2dnZXJNaWRkbGV3YXJlXTtcclxuICBjb25zdCBlbmhhbmNlciA9XHJcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCJcclxuICAgICAgPyBjb21wb3NlKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXHJcbiAgICAgIDogY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKTtcclxuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGVuaGFuY2VyKTtcclxuICBzdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XHJcbiAgcmV0dXJuIHN0b3JlO1xyXG59O1xyXG5cclxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoY29uZmlndXJlU3RvcmUsIHtcclxuICBkZWJ1ZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIixcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbW1lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2FcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYS9lZmZlY3RzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=