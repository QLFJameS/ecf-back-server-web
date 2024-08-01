import { Router } from 'express';
import { INTEGER, STRING} from 'sequelize';
import {sequelize} from '../database.js';

export const ProductRoute = Router();

export const Product = sequelize.define("Product", {
    name: {
        type: STRING,
        validate: {
            notNull: false
        }
    },
    price: {
        type: INTEGER,
        validate: {
            max:50
        }
    },
    description: STRING(255)
});


ProductRoute.get('/AllProducts', async (req, res) => {
    try {
        const Products = await Product.findAll()
    res.status(200).json(Products);
    } catch (error) {
        console.log(error);
    }
})

ProductRoute.post('/new', async (req, res) => {
    try {
      const newProduct = req.body;
      const product = await Product.create({
  
          name: newProduct.name,
          price: newProduct.price,
          description: newProduct.description
  
      }).catch((error: Error) => console.log(error))
      res.json(product);
    } catch (error) {
      console.log(error);
    }
  });