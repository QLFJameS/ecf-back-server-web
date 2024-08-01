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

  ProductRoute.delete("/:title", async (req, res) => {
    try {
        const title = req.params.title;

        const nbDeletedProducts = await Product.destroy({
            where: {

                id: isNaN(Number(title)) ? 0 : title,//operateur ternaire => const r == conditions? valretour1 : valretour2
            }
        });

        if (nbDeletedProducts == 0) {
            res.status(404).json("Aucun produit trouvé");
        } else {
            res.status(200).json("Tous les produits contenant le mot ou l'id suivant ont été supprimés : " + title);
        }

    } catch (error) {
        console.log(error);
    }
});