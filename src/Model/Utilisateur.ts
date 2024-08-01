import { Router } from 'express';
import { INTEGER, STRING } from 'sequelize';
import { sequelize } from '../database.js';

export const UserRoute = Router();

export const Utilisateur = sequelize.define("Utilisateur", {

    name: {
        type: INTEGER,
        validate: {
            notNull: false
        }
    },
    email: {
        type: STRING,
        validate: {
            isEmail: true,
            notNull: false
        }
    },
    password: {
        type: STRING,
        validate: {
            min: 8,
        }
    }
});

