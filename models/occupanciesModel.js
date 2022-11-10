import { users } from "./usersModel";
import { resources } from "./resourcesModel";

module.exports = (sequelize, DataTypes) => {
    const occupancies = sequelize.define("occupancies",{
        id: {
            type : DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        resource_id: {
            type : DataTypes.INTEGER,
        },
        is_available: {
            type: DataTypes.BOOLEAN, 
            allowNull: false, 
            defaultValue: true
        },
        occupancy_date: {
            type: DataTypes.DATE,
            allowNull: false,
        }
    });
    occupancies.belongsTo(users, {
        foreignKey: {
          name: "user_id",
        },
      });
    occupancies.belongsTo(resources, {
       foreignKey: {
          name: "resource_id",
        },
      });

    return occupancies;
}