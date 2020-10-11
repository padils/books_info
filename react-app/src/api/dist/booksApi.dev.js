"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BooksApi = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var url = _axios["default"].create({
  baseURL: " http://localhost:3000/api/"
});

var BooksApi = {
  getBook: function getBook() {
    return url.get("/books").then(function (response) {
      return response.data;
    }, function (error) {
      return alert(error.response.data.message);
    });
  },
  deleteBook: function deleteBook(id) {
    return url["delete"]("book/".concat(id)).then(function (response) {
      return response.data;
    }, function (error) {
      return alert(error.response.data.message);
    });
  },
  createBook: function createBook(data) {
    return url.post("book", {
      data: data
    }).then(function (response) {
      return response.data;
    }, function (error) {
      return alert(error.response.data.message);
    });
  },
  updateBook: function updateBook(data) {
    return url.put("book/".concat(data._id), {
      data: data
    }).then(function (response) {
      return response.data;
    }, function (error) {
      return alert(error.response.data.message);
    });
  }
};
exports.BooksApi = BooksApi;