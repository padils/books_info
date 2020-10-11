"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthApi = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var url = _axios["default"].create({
  baseURL: " http://localhost:3000/api/"
});

var AuthApi = {
  login: function login(data) {
    return url.post("login", {
      data: data
    }).then(function (response) {
      return response.data;
    }, function (error) {
      return alert(error.response.data.message);
    });
  },
  logout: function logout(data) {
    return url.post("logout", {
      data: data
    }).then(function (response) {
      return response.data;
    }, function (error) {
      return alert(error.response.data.message);
    });
  },
  register: function register(data) {
    return url.post("register", {
      data: data
    }).then(function (response) {
      return response.data;
    }, function (error) {
      return alert(error.response.data.message);
    });
  },
  userIsAuth: function userIsAuth(data) {
    return url.post("isAuth", {
      data: data
    }).then(function (response) {
      return response.data;
    }, function (error) {
      return alert(error.response.data.message);
    });
  }
};
exports.AuthApi = AuthApi;