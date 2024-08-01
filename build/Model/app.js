"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Product_js_1 = require("./Product.js");
const sentance = "Good Good";
console.log(sentance);
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.listen(9090, () => {
    console.log("Server on port 9090");
});
app.use('/product', Product_js_1.ProductRoute);
