"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var routes = (0, _express.Router)();
routes.get('/', function (req, res) {
  return res.status(200).send('Welcome home');
});
var _default = routes;
exports["default"] = _default;