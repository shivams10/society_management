const dbConfig = require("../config/dbConfig.js");

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});


const db = {};

db.Sequelize = Sequelize;
db.sequelize = Sequelize;

db.users = require("./usersModel")(sequelize, DataTypes);
db.resources = require("./resourcesModel")(sequelize, DataTypes);
db.occupancies = require("./occupanciesModel")(sequelize, DataTypes);

db.users.hasOne(db.occupancies);
db.occupancies.belongsTo(db.users);

db.resources.hasOne(db.occupancies);
db.occupancies.belongsTo(db.resources);




const authticateDb = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    await sequelize.sync({ alter: true });
    console.log("The table for the User model was just (re)created!");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = {db, authticateDb};
