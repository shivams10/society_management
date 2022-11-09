const dbConfig = require("../config/dbConfig.js ");

const {Sequelize, DataTypes} = require("sequelize");  

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,{
         host: dbConfig.HOST,
         dialect: dbConfig.dialect,
         operatorsAliases: false,

         pool:{
            max:dbConfig.pool.max,
            min:dbConfig.pool.min,
            acquire:dbConfig.pool.acquire,
            idle:dbConfig.pool.idle
         }
    }
)
sequelize.authenticate()
.then(() => {
    console.log("connected...")
})
.catch(err => {
    console.log("Error" + err);
})

const db = { }

db.Sequelize = Sequelize;
db.sequelize = Sequelize;

db.users = require("./usersModel")(sequelize, DataTypes);
db.resources = require("")(sequelize, DataTypes);
db.occupancies = require("")(sequelize, DataTypes);

db.sequelize.sync({force: false})
.then(()=> {
    console.log("yes resync done");
})

module.exports = db;