"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = exports.ProductRoute = void 0;
const express_1 = require("express");
const sequelize_1 = require("sequelize");
const database_js_1 = require("../database.js");
exports.ProductRoute = (0, express_1.Router)();
exports.Product = database_js_1.sequelize.define("Product", {
    name: {
        type: sequelize_1.STRING,
        validate: {
            notNull: false
        }
    },
    price: {
        type: sequelize_1.INTEGER,
        validate: {
            max: 50
        }
    },
    description: (0, sequelize_1.STRING)(255)
});
exports.ProductRoute.get('/AllProducts', async (req, res) => {
    try {
        const Products = await exports.Product.findAll();
        res.status(200).json(Products);
    }
    catch (error) {
        console.log(error);
    }
});
exports.ProductRoute.post('/new', async (req, res) => {
    try {
        const newProduct = req.body;
        const product = await exports.Product.create({
            name: newProduct.name,
            price: newProduct.price,
            description: newProduct.description
        }).catch((error) => console.log(error));
        res.json(product);
    }
    catch (error) {
        console.log(error);
    }
});
