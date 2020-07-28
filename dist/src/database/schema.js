"use strict";

require("core-js/modules/es.array.concat");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var user = process.env.USER_NAME;
var pw = process.env.PW;
var db = process.env.DB;
var URI = "mongodb+srv://".concat(user, ":").concat(pw, "@sandbox-azhmt.mongodb.net/").concat(db, "?retryWrites=true&w=majority");

_mongoose["default"].connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var Schema = _mongoose["default"].Schema;
var User = new Schema({
  name: {
    first: String,
    last: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    index: {
      unique: true,
      sparse: true
    }
  },
  password: {
    type: String,
    required: true
  }
});
exports.User = User;