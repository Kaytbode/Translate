"use strict";

require("core-js/modules/es.array.index-of");

var _chai = require("chai");

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      _chai.assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});