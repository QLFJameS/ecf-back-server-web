import { Router } from 'express';
import { INTEGER, STRING} from 'sequelize';
import {sequelize} from '../database.js';

export const CartRoute = Router();

export const Cart = sequelize.define("Cart", {

});