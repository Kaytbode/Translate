"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.user = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _schema = require("schema");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var user = _mongoose["default"].model('User', _schema.User);

exports.user = user;