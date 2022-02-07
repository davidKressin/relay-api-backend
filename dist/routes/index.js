"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _index = require("../controllers/index.js");

var router = (0, _express.Router)();
router.get('/', _index.getIndex);
router.post('/ON', _index.relayOn);
router.post('/OFF', _index.relayOff);
var _default = router;
exports["default"] = _default;