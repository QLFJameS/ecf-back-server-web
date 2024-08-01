"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = exports.CartRoute = void 0;
const express_1 = require("express");
const database_js_1 = require("../database.js");
exports.CartRoute = (0, express_1.Router)();
exports.Cart = database_js_1.sequelize.define("Cart", {});
