"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utilisateur = exports.UserRoute = void 0;
const express_1 = require("express");
const sequelize_1 = require("sequelize");
const database_js_1 = require("../database.js");
exports.UserRoute = (0, express_1.Router)();
exports.Utilisateur = database_js_1.sequelize.define("Utilisateur", {
    name: {
        type: sequelize_1.INTEGER,
        validate: {
            notNull: false
        }
    },
    email: {
        type: sequelize_1.STRING,
        validate: {
            isEmail: true,
            notNull: false
        }
    },
    password: {
        type: sequelize_1.STRING,
        validate: {
            min: 8,
        }
    }
});
