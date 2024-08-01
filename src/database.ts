import { Sequelize, DataTypes, Model } from "sequelize";
// define tables

const login = {

    database: "McDo",
    username: "Mc",
    password: "McAdmin"

};

export const sequelize = new Sequelize(login.database, login.username, login.password, {
    host: 'localhost',
    dialect: 'mysql',
    logging: false //enleve les log de sequelize
});

sequelize.authenticate()
    .then(() => console.log("Connecté à la BDD : McDo"))
    .catch((error: Error) => console.log(error));


sequelize.sync({ force: true })
.then(() => {
    console.log("Les modéles et les tables sont synchronisés")
})
.catch((error: Error) => console.log(error));


    